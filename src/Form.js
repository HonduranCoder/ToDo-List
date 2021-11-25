function Form({ inputState, addButton }) {
  return (
    <form>
      {/* <input onChange={this.inputState} /> */}
      <label htmlFor="todo">
        <input id="todo" name="todo" onChange={inputState} />
      </label>
      <button onClick={addButton}> Add </button>
    </form>
  );
}
export default Form;
