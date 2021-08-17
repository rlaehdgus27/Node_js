import React, { useCallback } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";

const Update = ({ history, match }) => {
  const deleteHandler = async () => {
    const result = await axios.get(
      `http://127.0.0.1:4000/delete/${match.params.id}`
    );

    if (result) {
      alert("삭제되었습니다.");

      history.push(`/users`);
    }
  };

  const moveLinkHandler = () => {
    history.goBack();
  };

  return (
    <div class="container">
      <h2>게시글 삭제</h2>

      <button type="submit" onClick={deleteHandler}>
        삭제
      </button>
      <button type="submit" onClick={() => moveLinkHandler()}>
        아니요
      </button>
    </div>
  );
};

export default Update;
