import './index.css'

const SimpleTodos = props => {
  const {details, deleteUser} = props
  const {title, id} = details

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <p className="todo-name"> {title} </p>
      <button className="delete-button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default SimpleTodos
