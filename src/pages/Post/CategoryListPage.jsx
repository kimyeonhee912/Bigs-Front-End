import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../config/token";
import { Post } from "./Post";

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://front-mission.bigs.or.kr/boards/categories`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        setCategories(response.data);
      } catch (error) {
        console.error("카테고리를 가져오는데 실패했습니다.", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPostsByCategory = async () => {
      if (!selectedCategory) return;

      try {
        const response = await axios.get(
          `https://front-mission.bigs.or.kr/boards?category=${selectedCategory}`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        setPosts(response.data.content);
      } catch (error) {
        console.error("카테고리별 게시글 조회 실패:", error);
      }
    };

    fetchPostsByCategory();
  }, [selectedCategory]);

  return (
    <div>
      <h1>게시판 카테고리</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              cursor: "pointer",
              textDecoration:
                selectedCategory === category ? "underline" : "none",
            }}
          >
            {category}
          </li>
        ))}
      </ul>

      <h2>게시글 목록</h2>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            category={post.boardCategory}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryListPage;
