import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

function Login({ authenticated, login, location }) {
    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    const handleClick = () => {
        try {
            login({ ID, password })
        } catch (e) {
            alert("로그인 실패")
            setID("")
            setPassword("")
        }
    }

    const { from } = location.state || { from: { pathname: "/" } }
    if (authenticated) return <Redirect to={from} />

    return (
        <>
            <h1>로그인</h1>
            <input type="text" style={inputStyle} value={ID} onChange={({ target: { value } }) => setID(value)}
                placeholder="ID" onKeyPress={onKeyPress} /><br />
            <input type="password" style={inputStyle} value={password} onChange={({ target: { value } }) => setPassword(value)}
                placeholder="password" onKeyPress={onKeyPress} /><br /><br />
            <Button onClick={handleClick}>로그인</Button>
        </>
    )
}
export default Login;

const Button = styled.button`
cursor: pointer;
padding: .440rem .75rem;
background: #FFFF92;
border: 0;
outline: 0;
`
const inputStyle = {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
}