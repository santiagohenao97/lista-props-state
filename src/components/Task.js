import React, { Component } from 'react';

class Task extends Component {

   
    
    render() { 
        //destructuring
        const {task} = this.props

        return ( <p key={task.id}>{task.title} - {task.description}</p> );
    }
}
 
export default Task;