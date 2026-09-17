import TodoItem from './TodoItem';

function TodoList({ todos, editTodo, deleteTodo, saveTodo, sortTodo}) {
  return (
    <div className="col-8">
      <div className="d-flex justify-content-between align-items-center p-3 border text-bg-light rounded-top">
        View Todos
        {todos.length >= 2 && (<button className="py-0 btn btn-success" onClick={()=>sortTodo()}>Sort</button>)}
      </div>
        <ul className="list-group">
        {todos.length === 0 ? 
          (<li className="py-3 rounded-0 list-group-item">
            <div className="fw-bold">Welcome to Very Simple Todo App!</div>
            <div>Get started now by adding a new todo on the left</div>
          </li>) : 
          todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} saveTodo={saveTodo}/>))
        }
        </ul>
    </div>
  );
}

export default TodoList;
