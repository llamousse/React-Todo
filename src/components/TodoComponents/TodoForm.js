import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.todos);
        this.setState({
            todos: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    className="inputStyle"
                    type="text"
                    value={this.state.todos}
                    name="todos"
                    onChange={this.handleChange}
                    required
                />
                <button className="add">Add</button>
            </form>
        );
    }
}

export default TodoForm;