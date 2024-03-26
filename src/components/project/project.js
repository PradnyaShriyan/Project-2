import { useState } from "react";
import Page from "./projectchild";

function Login() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(0);

  const submitFn = () => {
    if (parseInt(age) < 18) {
      alert("Age is minor.Cannot submit");
    } else {
      const obj = {
        id: data.length ? data[data.length - 1].id + 1 : 1,
        namef: name,
        age: age,
      };
      const temp = [...data, obj]; // const temp = structuredClone(data);// temp.push(obj);
      setData(temp); // setUserData([...userData, { name, age }]);
      setName("");
      setAge("");

      if (edit) {
        const editit = data.find((c) => c.id === edit);
        const updatedata = data.map((d) =>
          d.id === editit.id
            ? (d = { id: d.id, data })
            : { id: d.id, data: d.data }
        );
        setData(updatedata);
        setEdit(0);
        setName("");
        setAge("");
        return;
      }
      //  const toEdit = data.find(index(b) => b.id === x.id);
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
    debugger;
    const toEdit = data.find((b) => b.id === x.id);

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
}
export default Login;

// EK Parent component me Ek textbox bana and ek button bana.Text box me jo bhi type kiya hai na woh button ke click
//  ke baad child component me pass kar and jobhi likha hai tab dikha wo
