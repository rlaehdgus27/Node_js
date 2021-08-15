import React, { useState, useEffect } from "react";
import axios from "axios";

const Detail = ({}) => {
  const [detail, setDetail] = useState("");

  const noticeDetail = async () => {
    const result = await axios.get(`http://127.0.0.1:4000/user/users/:id`);

    console.log(result);

    setDetail(result.data);
  };

  console.log(detail);

  useEffect(() => {
    noticeDetail();
  }, []);
  return (
    <div class="container">
      <h2>Detal</h2>
    </div>
  );
};

export default Detail;
