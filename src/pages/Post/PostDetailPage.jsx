import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../config/token";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const token = getToken();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://front-mission.bigs.or.kr/boards/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPost(response.data);
      } catch (error) {
        console.error("게시글 조회에 실패했습니다.", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>카테고리: {post.category}</p>
    </div>
  );
};

export default PostDetailPage;
