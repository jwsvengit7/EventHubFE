import wordWibeWEb from '../image/svg/word.svg'
import facebook from '../image/svg/facebook.svg'
import twitter from '../image/svg/twitter.svg'
import youtube from '../image/svg/youtube.svg'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
export default function Footer(){
    return (
        <>
        <FooterDiv>
            <LetfDivEvent>
                <p style={{marginBottom:"50px"}}>Events</p>
                <p>Copyrights events</p>
                 <p>All rights reserved</p>
                    <DivFooter>
                    <Link to="/"><img src={facebook} width={20} /></Link>
                    <Link to="/"><img src={wordWibeWEb} width={20} />  </Link>
                    <Link to="/"><img src={twitter} width={20} />  </Link>
                    <Link to="/"><img src={youtube} width={20} />  </Link>
                </DivFooter>
            </LetfDivEvent>
            <RightDivEvent>
                <DivInsideRight>
                    <p style={{marginBottom:"50px"}}>Company</p>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Testimonials</p>
                </DivInsideRight>
            <DivInsideRight>
                <p style={{marginBottom:"50px"}}>Support</p>
                 <p>Help center</p>
                <p>Terms of service</p>
                 <p>Legal</p>
                <p>Privacy policy</p>
            </DivInsideRight>
                <DivInsideRight>
                <p style={{marginBottom:"50px"}}>Stay up to date</p>
                    <label>
                    <input type='text' placeholder='Your email address' />
                <FontAwesomeIcon icon={faPaperPlane} className='red'/>
                </label>
            </DivInsideRight>
        </RightDivEvent>
        </FooterDiv>
        </>
    )
}

const FooterDiv =styled.footer`
width:100%;
height:400px;
background:#10375c;
display:flex;
align-items:center;
justify-content:center;

@media (max-width:700px){
    height:auto;

    flex-direction:column;
}
`
const LetfDivEvent =styled.div`
width:25%;
height:300px;

p{
    color:white;
    font-family:sans-serif;
}

@media (max-width:700px){
    height:auto;
    width:70%;
    margin:20px;
}
`
const RightDivEvent =styled.div`
width:60%;
height:300px;
display:flex;
@media (max-width:700px){
    height:auto;
    width:70%;
    flex-direction:column;
}
`

const DivFooter =styled.div`
width:40%;
height:40px;
align-items:center;
display:flex;
justify-content:space-between;

@media (max-width:700px){
    width:70%;
}
`
const DivInsideRight =styled.div`
width:25%;
height:auto;

p{
    color:white;
    font-family:sans-serif;
}
label{
    width:250px;
    height:40px;
    display:flex;
    background:#fff;
    opacity:0.2;
    border-radius:8px;
    align-items:center;
    justify-content:space-around;
}
label input{
    width:80%;
    height:90%;
    border-radius:8px;
    border:0px;
    outline:none;
}
@media (max-width:700px){
    width:70%;
}

`
