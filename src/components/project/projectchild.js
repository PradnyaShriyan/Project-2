function Page(data, edit) {
  console.log(data);

  return (
    <>
      {data.details.map((x) => (
        <p key={x.id}>
          Name - {x.namef} Age - {x.age}
          <button
            onClick={() => {
              data.deleteFn(x.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              data.editFn(x);
            }}
          >
            {edit ? "Edit" : "Submit"}
          </button>
        </p>
      ))}
    </>
  );
}
//[].map(name=> )
export default Page;
