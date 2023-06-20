import styled from "styled-components";
import { UpcomingEvents,EvnetsBody, Fieldset, Button, ButtonForm } from "../../Styled/Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from '../CreateEvent/image/icon.png';
import { faGear } from "@fortawesome/free-solid-svg-icons";
const CreateEvent = ()=>{
    return (
        <>
           <UpcomingEvents>
            <EvnetsBody>
                <EventCreation>
                    <HeaderEvent>
                        <IconHoled>
                            <FontAwesomeIcon icon={faGear} />
                        </IconHoled>
                        <P>Note that for every ticket sold, there would be a 9.99% deduction.</P>
                    </HeaderEvent>
                    <h2>Basic Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <FormEvent>
                    <Fieldset>
                <legend>Event Title</legend>
                <input
                  type="email"
                  name="email"
                />
              </Fieldset>
              <Fieldset>
                <legend>Organizer</legend>
                <input
                  type="email"
                  name="email"
                />
              </Fieldset>
              <Fieldset>
                <legend>Event Title</legend>
                <input
                  type="email"
                  name="email"
                />
              </Fieldset>

                    </FormEvent>
                    <UploadImg>

                    </UploadImg>
                    <h2>Location</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    <LocationBox>
                    <BoxLocal>Online</BoxLocal>
                    <BoxLocal>Venue</BoxLocal>

                    </LocationBox>
                    <h2>Date & Time</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <WrapEvent>
                    <WrapBox></WrapBox>
                    <WrapBox></WrapBox>
                    <WrapBox></WrapBox>
                    <WrapBox></WrapBox>

                    </WrapEvent>
                    <ButtonForm>Save & Continue</ButtonForm>

                </EventCreation>


            </EvnetsBody>
            </UpcomingEvents>



        
        </>
    )
}
export default CreateEvent;

const EventCreation =styled.div`
width:100%;
height:auto;
margin-top:30px

`
const P =styled.p`
font-weight: 600;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.15px;
color: #932F19;`

const HeaderEvent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
padding:20px;
width: 96.6%;
height: 72px;
background: #FEFBE8;
border: 1px solid #932F19;
border-radius: 6px;
margin-bottom:50px
`

const IconHoled =styled.div`
width:50px;
height:50px;

display:flex;
justify-content:center;
align-items:center;
border-radius:60px;
border: 2px solid #932F19;


`

const FormEvent =styled.form`
width:100%;
`
const UploadImg =styled.div`
box-sizing: border-box;
width: 100%;
height: 485px;
background: rgba(0, 0, 0, 0.03);
border: 1px dashed #979797;
`
const LocationBox =styled.div`
width:35%;
height:auto;
display:flex;
justify-content:space-between
`

const BoxLocal =styled.div`
width: 203px;
height: 90px;
background: rgba(0, 50, 47, 0.05);
border-radius: 4px;
display:flex;
justify-content:center;
align-items:center
`
const WrapEvent=styled.div`
width:55%;
height:250px;
margin-bottom:30px;
display:flex;
flex-wrap:wrap
`
const WrapBox=styled.div`
width: 300px;
height: 74px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid rgba(37, 45, 66, 0.29);
border-radius: 4px;
margin-right:10px
`