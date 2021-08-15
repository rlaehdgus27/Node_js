import React, { useState, useEffect } from "react";
import axios from "axios";

const Create = ({ history }) => {
  const create = async () => {
    // await axios.get("http://127.0.0.1:4000/create");
    document
      .getElementById("create-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const content = e.target.content.value;
        const author = e.target.author.value;

        if (!title) {
          return alert("제목 입력하세요");
        }
        if (!content) {
          return alert("내용을 입력하세요");
        }
        if (!author) {
          return alert("직성자 입력하세요");
        }
        try {
          await axios.post("/user/create", {
            title,
            content,
            author,
          });
        } catch (err) {
          console.error(err);
        }
        e.target.title.value = "";
        e.target.content.value = "";
        e.target.author.value = "";
      });
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
