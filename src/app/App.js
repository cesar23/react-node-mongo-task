import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            _id: '',
            tasks:[]
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    ///-------------------------- Agregar tareas y actualizar si tiene un ID
    addTask(e) {

    //------------ si existe _id significa que  se esta  actualizando
        if(this.state._id) {
            fetch(`/api/task/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: this.state.title,
                    description: this.state.description
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.M.toast({html: 'Task Updated'});
                    this.setState({_id: '', title: '', description: ''});
                    this.fetchTasks();
                });


        } else { //------------ si NO existe _id significa que  se esta guardando uno nuevo

            fetch('/api/task', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.M.toast({html: 'Task Saved'});
                    //limpiamos los inputs
                    this.setState({title: '', description: ''});
                    //actualizamos los  datos
                    this.fetchTasks();
                })
                .catch(err => console.error(err));

        }





        e.preventDefault();




    }
    ///-------------------------- Actualiza el estado por medio del input
    handleChange(e) {

        //name =(nombre del input)
        //value =(Valor del input)
        const {name,value} = e.target;

        this.setState({
            [name]: value
        });

    }

    // -------------------------- es como un document.ready
    componentDidMount() {
        //cuando mi aplicacion carge
        this.fetchTasks();
    }

    ///-------------------------- Listar tareas
    fetchTasks() {
        fetch('/api/task')
            .then(res => res.json())
            .then(data => {
                //almacenamos las tareas en  tareas
                this.setState({tasks: data});
                console.log(this.state.tasks);
            });
    }
    //-------------------------- Eliminar tareas
    deleteTask(id) {
        if(confirm('Are you sure you want to delete it?')) {
            fetch(`/api/task/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.M.toast({html: 'Task deleted'});
                    this.fetchTasks();
                });
        }
    }

//-------------------------- Editar tareas
    editTask(id) {
        fetch(`/api/task/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                });
            });
    }


    render() {
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">MERN Stack</a>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Task Title" autoFocus/>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" placeholder="Task Description" className="materialize-textarea"></textarea>

                                            </div>
                                        </div>

                                        <button type="submit" className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.tasks.map(task => {
                                        return (
                                            <tr key={task._id}>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4">
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                    <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;