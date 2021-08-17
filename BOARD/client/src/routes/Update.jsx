import React, { useCallback } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Form } from "antd";

const Update = ({ history, match }) => {
  const contentInput = useInput("");

  const upDateHandler = useCallback(async () => {
    const result = await axios.patch(
      `http://127.0.0.1:4000/update/${match.params.id}`,
      {
        content: contentInput.value,
      }
    );

    if (result.data) {
      alert("수정되었습니다.");

      history.goBack();
    }
  }, [contentInput]);

  return (
    <div class="container">
      <h2>게시글 수정</h2>

      <Form onFinish={upDateHandler}>
        내용
        <input id="content" {...contentInput} />
        <button type="submit">등록</button>
      </Form>
    </div>
  );
};

export default Update;
