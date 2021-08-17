import React, { useState, useEffect } from "react";
import axios from "axios";

const Create = ({ history }) => {
  const create = async () => {
    // await axios.get("http://127.0.0.1:4000/create");
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  useEffect(() => {
    create();
  }, []);
  return (
    <div class="container">
      <h2>게시글 등록</h2>

      <form id="create-form" method="POST">
        <div>
          제목
          <input id="title" type="text" placeholder="제목" name="제목" />
        </div>
        <div>
          내용
          <input id="content" type="text" placeholder="내용" name="제목" />
        </div>
        <div>
          작성자
          <input id="author" type="text" placeholder="작성자" />
        </div>
        <button type="submit">등록</button>
      </form>

      <h6 onClick={() => moveLinkHandler(`/users`)}>목록</h6>
    </div>
  );
};

export default Create;
