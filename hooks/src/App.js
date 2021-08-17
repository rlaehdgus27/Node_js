import { Form } from "antd";
import React, { useCallback, useState } from "react";
import useInput from "./hooks/useInput";
import axios from "axios";

const App = () => {
  const email = useInput("");
  const nickname = useInput("");

  const onSubmit = useCallback(async () => {
    try {
      const result = await axios.post("http://localhost:4000/user/login", {
        inputEmail: email.value,
        inputNickname: nickname.value,
      });

      console.log(result.data);
      alert(result.data);
    } catch (error) {
      console.log(error);
      alert("데이터통신실패");
    }
  }, [email, nickname]);

  return (
    <div className="App">
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="inputEmail">email</label>
          <input type="email" name="inputEmail" id="inputEmail" {...email} />
        </div>
        <div>
          <label htmlFor="inputNickname">nickname</label>
          <input
            type="text"
            name="inputNickname"
            id="inputNickname"
            {...nickname}
          />
        </div>
      </Form>
      <input type="submit" value="send" onClick={onSubmit} />
    </div>
  );
};

export default App;
