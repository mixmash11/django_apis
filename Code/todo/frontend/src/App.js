import React, {Component} from "react";
import axios from "axios";

const list = [
    {
        "id": 1,
        "title": "Complete API Book Coursework",
        "body": "Finish all the chapters"
    },
    {
        "id": 2,
        "title": "Make Mac n Cheese",
        "body": "Make sure to leave a good hour to get things done"
    },
    {
        "id": 3,
        "title": "Take a Shower",
        "body": "You stanky."
    }
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { list };
    }

    render() {
        return (
            <div>
                {this.state.list.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default App;