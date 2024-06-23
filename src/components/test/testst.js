function Book() {
  const handleSubmit = () => {};

  return (
    <>
      <input text="Book Name" placeholder="Book Name" />
      <br />
      <input text="Author" placeholder="Author" />
      <br />
      <input type="date " placeholder="created by date" />
      <br />
      <input text="NoofCopies" placeholder="No of Copies" />
      <br />
      <button>Submit</button>
    </>
  );
}

export default Book;
