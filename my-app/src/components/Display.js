import { useState } from "react";

const Display = ({ name, password, contact }) => {

const [list, setList] = useState([]);

  // return (
  //   <div>
  //     {name} {password} {contact}{" "}
  //   </div>

  // );


return(
<div>
<table>
<thead>
  <tr>
    <th></th>
    <th>name</th>
    <th>password</th>
<th>contacts</th>
  </tr>
</thead>
<tbody>
{
list.map = (item,i) => {
 (
<>
<tr Key={i}>
<td>{item.name}</td>
<td>{item.password}</td>
<td>{item.contact}</td>
</tr>
</>
)
}


}
</tbody>
</table>
</div>

);

};

export default Display;
