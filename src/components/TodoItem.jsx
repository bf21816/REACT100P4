import { FaEdit, FaTrash } from 'react-icons/fa';

function TodoItem({ todo, editTodo, deleteTodo, saveTodo}) {
  const priorityColor = {1: 'list-group-item-danger', 2: 'list-group-item-warning', 3: 'list-group-item-success'}
  const priority = {1: 'priority-high', 2: 'priority-medium', 3: 'priority-low'}

  return (
    todo.editEnabled ? 
      (<li className={`rounded-0 list-group-item ${priorityColor[todo.priority]}`}>
        <form action={saveTodo}>
          <input type="hidden" name="id" value={todo.id} />
          <div className="py-2"> 
            <label className="fw-bold" htmlFor="todo">Description</label>
            <textarea defaultValue={todo.text} required className="form-control" name="todo" id="todo" data-testid="update-todo-text">

            </textarea>
          </div>
          <div className="py-3">
            <label className="fw-bold" htmlFor="priority">Priority</label>
            <select required defaultValue={todo.priority} className="form-select w-50" name="priority" id="priority" data-testid="update-todo-priority">
              <option value="" disabled hidden>Select</option>
              <option value="1">1 - High</option>
              <option value="2">2 - Medium</option>
              <option value="3">3 - Low</option>
            </select>
          </div>
          <div className="p-3 text-end">
            <button type="submit" className="btn btn-success" data-testid="update-todo">Save</button>
          </div>
        </form>
      </li>) :
      (<li className={`d-flex rounded-0 align-items-center list-group-item ${priorityColor[todo.priority]} ${priority[todo.priority]}`} data-testid="todo-item"  >
        <label className="d-flex flex-grow-1" style={{ cursor: 'pointer' }}>
          <input type="checkbox" />
          <div className="px-2 text-break">{todo.text}</div>
        </label>
        <a onClick={()=>editTodo(todo.id)} className="mx-2" style={{ cursor: 'pointer' }} data-testid="edit-todo">
          <FaEdit />
        </a>
        <a onClick={()=>deleteTodo(todo.id)} className="" style={{ cursor: 'pointer' }} data-testid="delete-todo">
          <FaTrash />
        </a>
      </li>)
  );
}

export default TodoItem;
