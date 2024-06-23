import { useState } from "react";

function Practice() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");

  const Add = () => {
    let id = data.length + 1; //array length + 1 means initial length value 0 + 1,1+1..id generate
    let abc = { id, name: userName, age: userAge }; //object
    let array = [...data]; //data array store in array using spread operator--original array ka clone lena hai taaki har baar purana value present hojaye.
    array.push(abc); //array data last element mai add karna hai
    setData(array); //new element set using setData
  };
  console.log(data);

  return (
    <>
      <input type="text" />
    </>
  );
}
export default Practice;
