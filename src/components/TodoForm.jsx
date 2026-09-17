function TodoForm({ addTodo }) {
  return (
    <form className="col-4" action={addTodo}>
      <div className="p-3 border text-bg-light rounded-top">Add New Todo</div>
      <div className="p-3 border-start border-end ">
        <label className="fw-bold" htmlFor="todo">I want to ...</label>
        <textarea required className="form-control" name="todo" id="todo" data-testid="create-todo-text"/>
      </div>
      <div className="p-3 border-start border-end">
        <label className="fw-bold" htmlFor="priority">How much of a priority is this?</label>
        <select required className="form-select" name="priority" id="priority" data-testid="create-todo-priority">
          
          <option value="1">1 - High</option>
          <option value="2">2 - Medium</option>
          <option value="3">3 - Low</option>
        </select>
      </div>
      <div className="p-3 text-center text-bg-light rounded-bottom">
        <button type="submit" className="btn btn-success w-100" data-testid="create-todo">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
