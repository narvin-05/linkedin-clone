import React from 'react'
import styled from 'styled-components';
import style from 'styled-components'


const Login = () => {
  return (
    <Container>
        <Nav>
            <a href='/'>
                <img src="/images/login-logo.svg" alt='Loading'/>
            </a>
            <div>
                <Join>Join Now </Join>
                <SignIn>Sign in</SignIn>
            </div>

        </Nav>
    </Container>
  )
}


const Container = styled.div`
    padding: 0px ;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin:auto;
    padding:12px 0px 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:space-between;
    flex-wrap:nowrap;

    & > a{
        width:135px;
        height:34px;

        @media(max-width: 786px){
            padding:0 5px;

        }
    }
`;


const Join = styled.a`
    font-size: 26px;
    padding: 10px 12px;
    text-decoration: none;
    color:#444242df;
    margin-right: 22px;
    border-radius: 5px;
    &:hover{
        background-color: #d4d2d2;
        color: #090909;
        text-decoration: none;
    }

`; 


const SignIn = styled.a`
    /* box-shadow: inset 0 0 0 1px ; */
    color: blue;
    border-radius:24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding:10px 24px;
    text-align: center;
    background-color: white;
    &:hover{
        background-color: rgba(112,181,249,0.25);
        color: #0a66c2;
        text-decoration: none;
    }

`;


export default Login;