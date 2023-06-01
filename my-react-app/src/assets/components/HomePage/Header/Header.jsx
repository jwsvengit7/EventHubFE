import styled from 'styled-components';
import '../css/HomePage.css'
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <>
        <HeaderStyle>
            <Headers>
            <LogoDiv><h1 className='eventLogo'>Event</h1></LogoDiv>
            <Account>
                <Link className='link-login' to="/login">Login</Link>
                <Button>Create Event</Button>
            </Account>
            </Headers>
        </HeaderStyle>
        </>
    )
}


const HeaderStyle = styled.header`
width:100%;
height:100px;
background:white;
display:flex;
justify-content:center;
align-items:center;

`
const Headers = styled.div`
width:85%;
height:auto;
display:flex;
justify-content:space-between;
align-items:center;
`
const LogoDiv = styled.div`
width:25%;
height:100px;
display:flex;
align-items:center;


`
const Account = styled.div`
width:40%;
height:100px;
display:flex;
align-items:center;
justify-content:flex-end;
text-decoration:none;
font-size:16px;
@media(max-width:600px){
    width:70%
}
`
const Button = styled.button`
width:146px;
height:54px;
background:#ff5722;
color:white;
margin-left:30px;
border-radius:4px;
border:0px;
cursor:pointer

`