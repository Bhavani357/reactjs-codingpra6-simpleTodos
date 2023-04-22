import {Component} from 'react'
import TodoElement from '../TodoItem'
import './index.css'

const initialTodosList = [
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

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteTodoItem = id => {
    const {todoList} = this.state

    const filteredTodoData = todoList.filter(each => each.id !== id)

    this.setState({todoList: filteredTodoData})
  }

  render() {
    return (
      <div className="bg-container">
        <di className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="ul-container">
            {initialTodosList.map(eachObj => (
              <TodoElement
                todoDetails={eachObj}
                key={eachObj.id}
                deleteTodoItem={this.deleteTodoItem}
              />
            ))}
          </ul>
        </di>
      </div>
    )
  }
}

export default SimpleTodos
