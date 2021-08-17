import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Detail = ({ history, match }) => {
  const [detail, setDetail] = useState("");

  const noticeDetail = async () => {
    const result = await axios.get(
      `http://127.0.0.1:4000/users/${match.params.id}`
    );

    setDetail(result.data);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  useEffect(() => {
    noticeDetail();
  }, []);

  if (!detail) {
    return null;
  }
  return (
    <div class="container">
      <h2>{detail.title}</h2>

      <p>{detail.content}</p>

      <button
        type="submit"
        onClick={() => moveLinkHandler(`/update/${detail._id}`)}
      >
        수정
      </button>

      <button
        type="submit"
        onClick={() => moveLinkHandler(`/delete/${detail._id}`)}
      >
        삭제
      </button>

      <h6 onClick={() => moveLinkHandler(`/users`)}>목록</h6>
    </div>
  );
};

export default Detail;
