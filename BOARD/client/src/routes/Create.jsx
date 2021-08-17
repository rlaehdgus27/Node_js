import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Form } from "antd";

const Create = ({ history }) => {
  const titleInput = useInput("");
  const contentInput = useInput("");
  const authorInput = useInput("");

  const createHandler = useCallback(async () => {
    const createResult = await axios.post("http://localhost:4000/create", {
      title: titleInput.value,
      content: contentInput.value,
      author: authorInput.value,
    });

    if (createResult) {
      titleInput.setValue("");
      contentInput.setValue("");
      authorInput.setValue("");

      alert("게시글이 등록되었습니다.");
    }
  }, [titleInput, contentInput, authorInput]);

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return (
    <div class="container">
      <h2>게시글 등록</h2>

      <Form onFinish={createHandler}>
        <div>
          제목
          <input
            id="title"
            type="text"
            placeholder="제목"
            name="제목"
            {...titleInput}
          />
        </div>
        <div>
          내용
          <input
            id="content"
            type="text"
            placeholder="내용"
            name="content"
            {...contentInput}
          />
        </div>
        <div>
          작성자
          <input
            id="author"
            type="text"
            placeholder="작성자"
            {...authorInput}
          />
        </div>
        <button type="submit">등록</button>
      </Form>

      <h6 onClick={() => moveLinkHandler(`/users`)}>목록</h6>
    </div>
  );
};

export default Create;
