import { useState } from "react";

export default function FormComp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [result, setResult] = useState([]);
  const changeFn = (evt, param) => {
    // console.log(evt.target.value);
    // console.log(evt.target.name);
    // if (evt.target.name === "fname") {
    if (param) {
      setFname(evt.target.value);
    } else {
      setLname(evt.target.value);
    }
  };
  const clickFn = () => {
    debugger;
    const data = [...result];
    const obj = {
      fname: fname,
      lname: lname,
    };
    data.push(obj);
    setResult(data);
    setFname("");
    setLname("");
  };
  return (
    <div>
      <h1>Forms</h1>
      {console.log(result)}
      Fname{" "}
      <input
        type="text"
        name="fname"
        onChange={(evt) => setFname(evt.target.value)}
        value={fname}
      />
      <br />
      Lname{" "}
      <input
        type="text"
        name="lname"
        onChange={(evt) => setLname(evt.target.value)}
        value={lname}
      />
      <br />
      <button onClick={clickFn}>Submit</button>
      <br />
      {result.map((data) => {
        return (
          <div>
            Fname - {data.fname}
            Lname - {data.lname} <br />
          </div>
        );
      })}
    </div>
  );
}
