import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ history }) => {
  const [users, setUsers] = useState([]);

  const notice = async () => {
    const result = await axios.get("http://127.0.0.1:4000/users");

    setUsers(result.data);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  useEffect(() => {
    notice();
  }, []);

  return (
    <div class="container">
      <h2>게시판</h2>

      <div class="col">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th className="title" scope="col">
                제목
              </th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td onClick={() => moveLinkHandler(`/users/${user._id}`)}>
                    {user.title}
                  </td>
                  <td>{user.author}</td>
                  <td>{user.hit}</td>
                  <td>{user.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h6 onClick={() => moveLinkHandler(`/create`)}>글쓰기</h6>
    </div>
  );
};

export default Home;
