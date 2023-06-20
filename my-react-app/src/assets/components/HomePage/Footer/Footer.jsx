import wordWibeWEb from '../image/svg/word.svg'
import facebook from '../image/svg/facebook.svg'
import twitter from '../image/svg/twitter.svg'
import youtube from '../image/svg/youtube.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { DivFooter, 
    DivInsideRight, 
    FooterDiv, 
    LetfDivEvent, 
    RightDivEvent } from '../../Styled/Styled'
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


