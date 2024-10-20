import React, { useState } from 'react';

const Profile = () => {



    const [todos,setTodos] = useState([]);
    const [value, setValue] = useState("");

    const addTodo = () => {
        setTodos((prevTodos) => [...prevTodos, value]); // Correct way to update state
        setValue(""); // Clear the input field after adding
    };

    return (
        <div>
            <p>Profile</p>
            {todos?.map((item) => (
                <p>{item}</p>
            ))}
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
            <button onClick={addTodo}>Add</button>
        </div>
    );
};



export default Profile;