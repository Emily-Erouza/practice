import { useState } from "react";
import Display from "./Display";

const Form = ({ list, setList }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const save = (e) => {
    console.log("pasword name contact", password, name, contact);
    setList([...list, { name: name, password: password, contact: contact }]);
  };

  return (
    <div className=" form-container">
      <div>
        <label for="fname">Username</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          // value={name}
        />
      </div>
      <br />

      <div>
        <label for="password">Password</label>
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          // value={password}
        />
      </div>

      <br />

      <label for="contact">Contacts</label>
      <br />
      <input
        type="text"
        name="contact"
        placeholder=" Enter your contact"
        onChange={(e) => setContact(e.target.value)}
        // value={contact}
      />
      <br />

      <button type="button" className="btn" onClick={() => save()}>
        Save
      </button>
      {/* <button onClick={() => save()}>save </button> */}
      <Display name={name} password={password} contact={contact} />
    </div>
  );

  {
    /* <div>
<table>
  <tr>
    <th></th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
</table>
</div> */
  }
};

export default Form;
