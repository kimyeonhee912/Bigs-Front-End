import React, { useState } from "react";
import "./Post.css";

/*
{
  "id": 18,
  "title": "공지8",
  "content": "공지입니다요",
  "boardCategory": "NOTICE",
  "imageUrl": "/media/images/519617e7-9742-4693-ab05-cd8c88c31dcf.png",
  "createdAt": "2024-11-13T10:46:29.278927"
}
*/
export const Post = ({ id, title, content, category, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
  const [editedTitle, setEditedTitle] = useState(title); // 수정된 제목
  const [editedContent, setEditedContent] = useState(content); // 수정된 내용

  const toggleEditMode = () => setIsEditing(!isEditing); // 수정 모드 전환

  // Save 버튼 클릭 시 수정 처리
  const handleEditSubmit = () => {
    // Mock 데이터 업데이트 (서버 없이 로컬 상태에서 바로 반영)
    setIsEditing(false); // 수정 모드 종료
    console.log("수정 완료:", {
      id,
      title: editedTitle,
      content: editedContent,
    });
  };

  const handleDelete = () => {
    console.log("삭제 완료:", id);
    onDelete(id); // 삭제 후 부모 컴포넌트에 알림
  };

  return (
    <div className="post-box">
      <div className="post-title-btn-container">
        <div className="post-title-user-container">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            </>
          ) : (
            <>
              <h3>{title}</h3>
              <p>{content}</p>
            </>
          )}
          <span className="user-name">{category}</span>
        </div>
        <div className="post-actions">
          {isEditing ? (
            <button className="button" onClick={handleEditSubmit}>
              Save
            </button>
          ) : (
            <button className="button" onClick={toggleEditMode}>
              Edit
            </button>
          )}
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
