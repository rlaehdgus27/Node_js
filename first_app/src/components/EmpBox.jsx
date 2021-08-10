import React from "react";

const EmpBox = ({ name, hireDate }) => {
  return (
    <section>
      <h3>{name}</h3>
      <h5>{hireDate}</h5>
      <hr />
      <br />
    </section>
  );
};

export default EmpBox;
