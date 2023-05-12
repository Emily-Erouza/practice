import React, { useState } from "react";
import Display from "./Display";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [list, setList] = useState();

  const save = (e) => {
    e.preventDefault();
    setList([{ name, password, contact }]);
  };

  return (
    <div>
      <form onSubmit={save} className="form">
        <div className="title">Register form</div>
        <div className="subtitle">Hello please Register</div>
        <div className="input-container ic1">
          <input
            className="input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Password
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            onChange={(e) => setContact(e.target.value)}
            type="number"
            placeholder=" "
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Contact
          </label>
        </div>
        <button type="text" className="submit">
          submit
        </button>
      </form>
      <div className="divider"></div>
      <Display list={list} />
    </div>
  );
};

export default Form;