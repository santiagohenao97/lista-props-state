import React, { Component } from 'react';

import dataTasks from './data/taskList.json';
import Tasks from './components/Tasks'

const persona={
  nombre: "santiago"
}

class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      //Voy a crear un estado tasks y voy a traer las tareas que importe "dataTasks"
      tasks: dataTasks
    }
  }

  render(){

    //const {tasks} = this.state

    return (
      <div className="App">
        <h1>Hola {persona.nombre}</h1>
        {/*this.state.tasks.map(data => <h1>{data.title}-{data.description}</h1>)*/}
        {/*Paso por props lo que tengo en el estado */}
        <Tasks tasks={this.state.tasks}/>
        
      </div>
    );
  }
}

export default App;
