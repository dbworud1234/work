import React from 'react';
import { withRouter } from 'react-router-dom';

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push('/');
  }
  return <button style={LogoutBtnStyle} onClick={handleClick}>로그아웃</button>;
}

export default withRouter(LogoutButton);

const LogoutBtnStyle = {
  cursor: "pointer",
  padding: ".440rem .75rem",
  background: "#FFFF92",
  border: 0,
  outline: 0,
}