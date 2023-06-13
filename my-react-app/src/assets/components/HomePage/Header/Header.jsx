import { Account, Button, HeaderStyle, Headers, LogoDiv } from '../../Styled/Styled';
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


