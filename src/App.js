import {Component} from 'react'
import SimpleTodos from './components/SimpleTodos'
import './App.css'

const initialTodoList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class App extends Component {
  state = {
    todoList: initialTodoList,
  }

  deleteUser = id => {
    const {todoList} = this.state
    const filteredTodoData = todoList.filter(each => each.id !== id)
    this.setState({
      todoList: filteredTodoData,
    })
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="app-container">
        <ul className="list-container">
          <h1 className="title">Simple Todos</h1>
          {todoList.map(eachTodo => (
            <SimpleTodos
              details={eachTodo}
              key={eachTodo.id}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
