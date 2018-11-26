import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn('App constructor method')
  }

  componentDidMount(){
    //fetch calls
    this.fetchTasks()
  }

  fetchTasks(){
    fetch(`http://localhost:3000/tasks`)
    .then(res => res.json())
    .then(data => {
      //do something
      this.setState({
        taskList: data
      })
    })
    console.warn('App componentDidMount method')
  }

  componentDidUpdate(){
    console.warn('App componentDidUpdate method')
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    //post to server
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        text: this.state.formText,
        done: false
      })
    }).then(res => res.json())
    .then(data => {
      this.setState({
        taskList: [...this.state.taskList, data]
      })
    })
  }

  onDeleteATask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(data => {
      let newTaskList = [...this.state.taskList]
      let taskIndex = newTaskList.findIndex(task => task.id === id)
      newTaskList.splice(taskIndex, 1)
      this.setState({
        taskList: newTaskList
      })
    })
  }

  render() {
    console.warn('App render method')
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask} value={this.state.formText}/>
        <TaskList tasks={this.state.taskList} onDelete={this.onDeleteATask}/>
      </div>
    );
  }
}

export default App;
