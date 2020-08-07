import React, { Component } from 'react';

import Task from './Task'

class Tasks extends Component {

    render() { 
        return ( 
            <div>
                <h1>Mi lista de pendientes</h1>
                
                {/*this.props.tasks.map(data => <div><p key={data.id}>{data.title}-{data.description} </p></div>)*/}
                {this.props.tasks.map(data => <div><Task task={data}/></div>)}
                <h1>Estas fueron mis tareas</h1>
            </div>
                
         );
    }
}
 
export default Tasks;