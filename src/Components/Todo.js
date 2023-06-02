import React, { useState } from 'react';
import { TextField, IconButton, Checkbox, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTodo.trim()) return;
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo('');
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Add a task"
                    variant="outlined"
                    fullWidth
                    value={newTodo}
                    onChange={handleInputChange}
                />
                <button type="submit">
                    Add
                </button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => handleComplete(index)}
                            color="primary"
                        />
                        <Typography variant="body1">{todo.text}</Typography>
                        <IconButton onClick={() => handleDelete(index)}>
                            <Delete />
                        </IconButton>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
