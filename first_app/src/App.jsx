import React, { useState, useEffect } from "react";
import EmpBox from "./components/EmpBox";
import axios from "axios";

// 화면을 구성하는 컴포넌트는 대문자로 시작한다.

const App = () => {
  const [empList, setEmpList] = useState([]);

  // axios로

  const getEmpList = async () => {
    const result = await axios.get("http://127.0.0.1:7000/api/empList");

    setEmpList(result.data);
  };

  useEffect(() => {
    getEmpList();
  }, []);
  return (
    <div>
      <h3>EMP LIST</h3>

      <hr />
      <h6>총 직원 {empList.length}명</h6>

      {empList.map((emp) => {
        return (
          <EmpBox key={emp.EMPNO} name={emp.ENAME} hireDate={emp.HIREDATE} />
        );
      })}
    </div>
  );
};

export default App;
