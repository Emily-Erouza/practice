import React from "react";

const Display = ({ list }) => {
  return (
    <div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => {
              return (
                <tr class="active-row">
                  <td>{item.name}</td>
                  <td>{item.password}</td>
                  <td>{item.contact}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
