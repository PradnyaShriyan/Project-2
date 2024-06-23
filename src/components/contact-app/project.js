import { useState } from "react";
import Page from "./projectchild";

const Login = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState("");

  const submitFn = () => {
    if (parseInt(age) < 18) {
      alert("Age is minor.Cannot submit");
    } else {
      
      if (edit) {
        const temp = structuredClone(data);
        const editIndex = temp.findIndex((t) => t.id === edit.id);
        temp[editIndex].namef = name;
        temp[editIndex].age = age;
        setData(temp);
        setEdit("");
      } else {
        const obj = {
          id: data.length ? data[data.length - 1].id + 1 : 1,
          namef: name,
          age: age,
        };
        const temp = [...data, obj]; // const temp = structuredClone(data);// temp.push(obj);
        setData(temp); // setUserData([...userData, { name, age }]);
      }
      setName("");
      setAge("");
    }
  };

  const resetFn = () => {
    setName("");
    setAge("");
    setData([]);
  };

  const onChangeFn = (evt) => {
    setName(evt.target.value);
  };
  console.log(name);
  console.log(age);

  const ageChangeFn = (e) => {
    const inputAge = e.target.value;
    setAge(inputAge);
  };

  // const editFn = () => {};

  const deleteFn = (id) => {
    const toDel = data.filter((a) => a.id !== id);
    setData(toDel);
  };

  const editFn = (x) => {
    // const toEdit = data.find((b) => b.id === x.id);

    console.log(x);
    setName(x.namef);
    setAge(x.age);
    // setData(toEdit.data);

    setEdit(x);
  };

  return (
    <>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeFn}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={age}
        onChange={ageChangeFn}
        placeholder="Enter age"
      />
      <button onClick={submitFn} disabled={!name || !age}>
        Submit
      </button>
      <button onClick={resetFn} disabled={!data}>
        Reset
      </button>

      <Page details={data} deleteFn={deleteFn} editFn={editFn} />
    </>
  );
};
export default Login;

// EK Parent component me Ek textbox bana and ek button bana.Text box me jo bhi type kiya hai na woh button ke click
//  ke baad child component me pass kar and jobhi likha hai tab dikha wo
