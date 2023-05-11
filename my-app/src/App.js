// import { render } from "@testing-library/react";
import React, { useRef, useState } from "react";

import "./App.css";

const Form = () => {
  const [formInfo, setFormInfo] = useState({
    Username: "",
    Surname: "",
    password: "",
    Number: "",
    id: "",
  });

  // const firstInfo ="kdjfsdkjf"
  const [list, setList] = useState([]);
  const clear = useRef(null);
  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, formInfo]);
    setFormInfo({ Username: "" });
    clear.current.reset();
  };

  function NumberOfppl(newusers) {
    setFormInfo(formInfo.concat({ ...newusers, id: list.length + 1 }));
  }

  return (
    <div className="forms">
      <form ref={clear} onSubmit={handleSubmit} className="form">
        <h1> Register form</h1>
        <p>
          Hello please<span> Register</span>
        </p>

        <hr />

        <label for="firstname">Username</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={formInfo.Username}
        />
        {""}
        <br />
        <label for="surname">Surname</label>
        <input
          type="text"
          name="surname"
          placeholder="Enter your surname"
          onChange={handleChange}
          value={formInfo.Surname}
        />
        <br />

        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formInfo.password}
        />
        <br />

        <label for="contact">Contacts</label>
        <input
          type="text"
          name="contact"
          placeholder=" Enter your number"
          onChange={handleChange}
          value={formInfo.number}
        />
        <br />

        <label for="Id number">Id Number</label>
        <input
          type="text"
          name="Id"
          placeholder=" Enter your id number"
          onChange={handleChange}
          value={formInfo.Id}
        />
        <br />

        <button type="submit" className="butt">
          submit
        </button>
      </form>
      <br />
      <h2 className="center">The Results</h2>
      <div className="table">
        <h2 className="text-xl">Number of logins({list.length})</h2>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <th className="one">Username</th>
              <th className="two">Surname</th>
              <th className="three">password</th>
              <th className="four">Contacts</th>
              <th className="five">Id Number</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => {
              <tr className="" key={item.id}>
                <td>{item.username}</td>
                <td>{item.surname}</td>
                <td>{item.password}</td>
                <td>{item.Number}</td>
                <td>{item.Id}</td>
              </tr>;
            })}
          </tbody>
        </table>
   
      </div>
    </div>
  );
};

export default Form;
