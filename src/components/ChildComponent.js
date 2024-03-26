function ChildComponent(props) {
  console.log(props);
  return (
    <div>
      test <br />
      <button
        disabled={false}
        onClick={() => props.setCounter(props.counter + 1)}
      >
        ChildComponent Counter Click
      </button>
    </div>
  );
}
export default ChildComponent;
