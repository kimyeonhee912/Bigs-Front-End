import React from "react";

export const HomeMain = () => {
  return (
    <>
      <main>
        <h2>Posts</h2>
        <div>
          <button className="button">Add New Post</button>
          <div className="post-box">
            <h3>Post Title</h3>
            <p>This is a sample post description.</p>
            <div>
              <button className="button">Edit</button>
              <button className="button">Delete</button>
            </div>
          </div>

          <div className="pagination">
            <button className="button">&lt; Prev</button>
            <span>Page 1 of 10</span>
            <button className="button">Next &gt;</button>
          </div>
        </div>

        <h2>User Information</h2>
        <div className="info-box">
          <p>
            <strong>ID:</strong> user123
          </p>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <button className="button">Log Out</button>
        </div>
      </main>
    </>
  );
};
