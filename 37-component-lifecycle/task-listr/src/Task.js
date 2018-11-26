import React, {PureComponent} from 'react'

class Task extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done
    }
    console.warn(`Task ${this.props.task.id} constructor method`)
  }

  updateChecked = () => {
      fetch(`http://localhost:3000/tasks/${this.props.task.id}`, {
        method:"PATCH",
        headers: {
          "Content-Type" : "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          done: !this.state.done
        })
      }).then(res => res.json())
      .then(data => {
        this.setState({
          done: !this.state.done
        })
      })
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount method`)
    window.addEventListener('resize', this.resize)
  }

  resize(){
    console.log('window is resizing')
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate method`)
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount method`)
    window.removeEventListener('resize', this.resize)
  }

  render(){
    console.warn(`Task ${this.props.task.id} render method`)
    return(
      <div>
        <button onClick={() => {this.props.onDelete(this.props.task.id)}}>x</button>
        {this.props.task.text}
        <input type="checkbox" checked={this.state.done} onChange={this.updateChecked}/>
      </div>
    )
  }
}

export default Task
