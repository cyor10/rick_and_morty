import React from 'react';
import style from './Form.module.css';
import { useState } from 'react';
import validate from "./validation";

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: 'error test email',
        password: 'error test password',
    });

    const handleChange = (evento) => {
        setErrors(
            validate({
                ...userData,
                [evento.target.name]: evento.target.value
            }))
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value,
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        let aux = Object.keys(errors);
        if (aux.length === 0) {
            setUserData({
                email: '',
                password: ''
            });
            setErrors({
                email: "",
                password: "",
            });
            login(userData);
        } else {
            return alert(errors)
        }
    };

    return (
        <div className={style.login}>
            <form onSubmit={handleSubmit}>
                <h1>Welcome my app</h1>
                <label>Email: </label>
                <input
                    type="text"
                    key="email"
                    name="email"
                    onChange={handleChange}
                    value={userData.email} />
                <br></br>
                <span>{errors?.email && errors.email}</span>
                <hr></hr>
                <label>Password: </label>
                <input
                    type="password"
                    key="password"
                    name="password"
                    onChange={handleChange}
                    value={userData.password} />
                <br></br>
                <span>{errors?.password && errors.password}</span>
                <hr></hr>
                {Object.keys(errors).length === 0 ? (
                    <button type='submit'>Submit</button>
                ) : null}
            </form>
        </div>
    );
}

