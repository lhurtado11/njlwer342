import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  state={
    string: '',
    task: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
  }
   
  handleChange(e) {
    this.setState({
      string: e.target.value
    })
  } 

  onSubmit(e) {
    this.setState({
      task: [...this.state.task, this.state.string],
      string: ''
    })
    e.preventDefault()
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.task.map((e,i) => <li key={i}>{e}</li>)}
          </ul>
           <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.string}
              onChange={this.handleChange.bind(this)}
            />
             
           </form>
        </div>
      </div>
    )
  }
}
export default App;
