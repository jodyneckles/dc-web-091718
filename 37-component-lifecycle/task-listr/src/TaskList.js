import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks !== null ? props.tasks.map(task => <Task
      key={task.id}
      task={task}
      onDelete={props.onDelete}
    />) : null
  )
}

//<Task id=1>
//<Task id=2>
//<Task id=3>

export default TaskList
