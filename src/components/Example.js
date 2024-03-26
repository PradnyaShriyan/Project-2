import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { Link } from "react-router-dom";

function Example() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Link to="/aboutus">About</Link>
      <p>Click here {counter}</p>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Submit
      </button>
      <ChildComponent counter={counter} setCounter={setCounter} />
    </div>
  );
}
export default Example;
