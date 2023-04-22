import './index.css'

const TodoElement = props => {
  const {todoDetails, deleteTodoItem} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="li-container">
      <p className="para">{title}</p>

      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoElement
