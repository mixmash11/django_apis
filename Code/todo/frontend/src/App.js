import React, {Component} from "react";
import axios from "axios";

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios
            .get('http://localhost:8000/api/')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <hr/>
                {this.state.todos.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default App;