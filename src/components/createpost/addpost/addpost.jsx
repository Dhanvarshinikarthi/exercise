import React, { useState } from "react";
import "./addpost.css";
const Addpost = () => {
  const [imgFile, uploadImg] = useState([]);
  const ImagePreview = (e) => {
    if (e.target.files.length !== 0) {
      uploadImg((imgFile) => [
        ...imgFile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return (
    <div className="createpost_main">
      <form>
        <div className="post">
          <h1>Create a post</h1>
          <h1>Image Preview</h1>
          {imgFile.map((elem) => {
            return (
              <span key={elem}>
                <img src={elem} height="200" width="200" alt="image" />
              </span>
            );
          })}
          <input
            type="file"
            placeholder="Choose File"
            onChange={ImagePreview}
          />
        </div>
        <div className="detail">
          <input type="title" placeholder="Title" />
          <textarea
            placeholder="Description goes here"
            rows="10"
            cols="30"
          ></textarea>
          <button>Add post to feed</button>
        </div>
      </form>
    </div>
  );
};
export default Addpost;
