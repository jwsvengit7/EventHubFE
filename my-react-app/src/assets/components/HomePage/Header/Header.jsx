import Profile from '../../Dashboard/Profile/Profile';
import { Account, Button, HeaderStyle, Headers, LogoDiv } from '../../Styled/Styled';
import '../css/HomePage.css'
import { Link } from 'react-router-dom';

export default function Header(){
    const TOKEN = localStorage.getItem("TOKEN");
    return (
        <>
        <HeaderStyle>
            <Headers>
            <LogoDiv><h1 className='eventLogo'>Event</h1></LogoDiv>
            <Account>
                
                {(TOKEN==null) ? <Link className='link-login' to="/login">Login</Link> :<Profile /> }
                
                <Button><Link className='link-createvent' to="/createvent"> Create Event </Link></Button>
            </Account>
            </Headers>
        </HeaderStyle>
        </>
    )
}


