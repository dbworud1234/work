import React, { useState } from 'react';
import { signIn } from './Components/auth';
import styled from 'styled-components';
import Header from './Top/Header';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import { Weather, About, Login, Wish, MyPage, Memo, AuthRoute, LogoutButton } from './Routes/index';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ ID, password }) => setUser(signIn({ ID, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      <Layout>
        <Header />
        <NavList>
          <NavItem><Link to='/'><Button>홈</Button></Link></NavItem>
          <NavItem><Link to='/about'><Button>소개</Button></Link></NavItem>
          <NavItem><Link to='/memo'><Button>산책 시간 메모</Button></Link></NavItem>
          <NavItem><Link to='/wish'><Button>가고 싶은 장소</Button></Link></NavItem>
          <NavItem><Link to='/mypage'><Button>마이페이지</Button></Link></NavItem>
          <NavLogin>{authenticated ? (<LogoutButton logout = {logout} />) : (
          <Link to='/login'><LoginButton>로그인</LoginButton></Link>)}</NavLogin>
        </NavList>
        <Content>
          <Switch>
            <Route exact path="/" component={Weather} />
            <Route path="/about" component={About} />
            <Route path="/login" render = {props => (
              <Login authenticated = {authenticated} login = {login} {...props} />
            )} />
            <AuthRoute authenticated={authenticated} path="/mypage"
              render = {props => <MyPage user={user} {...props} />} />
            <Route path="/wish" component={Wish} />
            <AuthRoute authenticated={authenticated} path="/memo"
              render = {props => <Memo/>} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}

export default App;

const Layout = styled.div`
// margin: 0 auto;
display: flex;
width: 100%;
flex-flow: row wrap;
`
const Content = styled.div`
text-align: center;
margin: 0 auto;
margin-top: 50px;
display: inline-block;
width: 100%;
`
const Button = styled.button`
cursor: pointer;
padding: .440rem .75rem;
background: #a8ff78;
border: 0;
outline: 0;
color: #000000;
`
const NavList = styled.ul`
width: 1040px;
margin-top: 0;
margin-left: auto;
margin-right: auto;
background-color: #a8ff78;
`
const NavItem = styled.ul`
text-align: center;
display:inline-block;
height: auto;
width: auto;

`
const NavLogin = styled.div`
float: right;
border: 0;
outline: 0;
background-color: #FFFF92;
color: #FFFF92;
display:inline-block;
height: auto;
width: auto;
`
const LoginButton = styled.button`
cursor: pointer;
padding: .440rem .75rem;
background: #FFFF92;
border: 0;
outline: 0;
`