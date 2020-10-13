import React, { useState } from 'react';

function MyPage({ user }) {
    let [ID] = useState(user.ID);
    let [password] = useState(user.password);
    let [name, setName] = useState(user.name);
    const [edit, setEdit] = useState(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }


    if (edit) {
        return (
            <div>
                <input type="text" value={name} onChange={handleChange} />
                <button onClick={handleToggleEdit}>확인</button>
            </div>
        )
    }
    return (
        <div>
            <h1>아이디 : {ID}</h1>
            <h1>비밀번호 : {password}</h1>
            <h1>이름 : {name}&nbsp;<button style={cursorStyle} onClick={handleToggleEdit}>이름 수정</button></h1>
        </div>
    )

}

export default MyPage;

const cursorStyle = {
    cursor: "pointer",
    background: "#FFFF92",
    border: 0,
    outline: 0,
}