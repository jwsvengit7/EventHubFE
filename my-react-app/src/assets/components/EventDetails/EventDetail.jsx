import './css/EventDetails.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BannerDiv, UpcomingEvents,EvnetsBody,ButtonForm,ButtonFormWhite } from '../Styled/Styled'
import MapOfEvent from './MapOfEvent'
import MoreEvents from './MoreEvents'

  
export default function EventDetail(){
    return (
        <div style={{background:"#f8f8f8",paddingBottom:"50px"}}>
            <BannerDiv>
               <GobackDiv>
                <Divs>
                    <p className='back'>← Go Back</p>
                <EventName>
                    <h1 className='h1'>Eko All Night Pool Party Festival</h1>
                </EventName>
                <Caption>
                    <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam</p>
                </Caption>
                </Divs>
                
                <BuyModal>
                    <p className='datex'>Date & Time </p>
                    <p className='time'>Saturday, Nov 06, 2021 at 20:30PM </p>
                    <ModalCalender>
                        <p className='calender'>+ Add to Calender</p>
                    </ModalCalender>
                    <ButtonForm>
                    Buy Ticket
                    </ButtonForm>
                    <ButtonFormWhite>
                    Save Ticket
                    </ButtonFormWhite>
                    </BuyModal>

                </GobackDiv> 



            </BannerDiv>
            <UpcomingEvents>
            <EvnetsBody>
                <DetailedEvent>
                    <Divs2>
                        <EventDesc>
                            <Description>Description</Description>
                            <DetailedDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing nibh nisi auctor sagittis risus eu ac. Neque et pulvinar cum mi sed ullamcorper ornare morbi aliquam. Neque, quam natoque feugiat quisque. Adipiscing viverra egestas lorem convallis. Interdum ipsum fusce elementum dolor a semper. Lectus elit ac viverra lorem nunc vitae. Laoreet morbi auctor ultrices augue interdum elementum facilisis in proin. Commodo auctor adipiscing id sit leo. Et pulvinar et ornare aliquam dignissim. Ut semper pulvinar nulla est nulla lectus. Tincidunt mauris eu mollis viverra eget. In dolor eget ridiculus venenatis. Eget elementum erat nisl justo turpis nulla. Rhoncus luctus amet, mi eu varius. Et id imperdiet malesuada sem eu viverra neque. A, dui morbi vitae placerat eget mi in rhoncus. In molestie elementum volutpat ac. Quisque arcu, egestas scelerisque egestas volutpat feugiat morbi nisi. Feugiat pulvinar vitae mauris ultrices diam molestie mattis vel mi. Fermentum integer tortor orci ut consequat consectetur lectus. Pretium odio enim elementum placerat vel mauris turpis. Etiam amet, ornare sed dui elementum, suspendisse quis sapien. Id amet tempor, donec pulvinar. Consectetur ut mauris vitae, eget ultricies egestas non netus. Risus est pellentesque nibh diam malesuada tellus adipiscing in fermentum. Malesuada commodo fames turpis phasellus leo scelerisque interdum. Faucibus phasellus sit erat faucibus. Nibh porttitor mi nulla malesuada consequat sit neque.</DetailedDescription>
                        </EventDesc>
                        <EventDesc>
                            <p className='eventdate'>Date and Time</p>
                            <EventDate>
                                <StartDate>
                                    <StartDateName>Start Date</StartDateName>
                                    <StartDateValue>09/06/2022</StartDateValue>
                                </StartDate>
                                <StartDate>
                                    <StartDateName>End Date</StartDateName>
                                    <StartDateValue>09/06/2022</StartDateValue>
                                </StartDate>
                                <StartDate>
                                    <StartDateName>Time</StartDateName>
                                    <StartDateValue>09/06/2022</StartDateValue>
                                </StartDate>
                            </EventDate>
                        </EventDesc>
                        <EventDesc>
                            <p className='eventdate'>How to contact the organizer</p>
                            <p className='contactInfo'>Pleace visit <Link to="https://samplewebsite.com/contact-us">https://samplewebsite.com/contact-us</Link> or refer to the FAQ section for all questions.</p>
                        </EventDesc>
                    </Divs2>
                    <SecondDiv>
                        <EventMap>
                            <EventLocation>Event Location</EventLocation>
                            <MapOfEvents>
                                <MapOfEvent />
                            </MapOfEvents>
                        </EventMap>
                        <EventMap>
                            <ShareSocial>Share with Friends</ShareSocial>
                        </EventMap>
                    </SecondDiv>
                </DetailedEvent>
                <OtherEvents>
                    <p className='otherEvent'>Other event you might like</p>
                </OtherEvents>
                <MoreEvents/>
            </EvnetsBody>
            </UpcomingEvents>
        </div>
    )
    
}

const GobackDiv = styled.div`
width:85%;
height:400px;
display:flex;
justify-content:space-between
`
const Divs =styled.div`
width:40%;
height:auto;
`
const Divs2 =styled.div`
width:60%;
height:auto;
`

const BuyModal =styled.div`
width: 382px;
height: 315px;
background:white;
border-radius: 10px;
padding:30px;
margin-top:70px
`
const EventMap =styled.div`
width: 100%;
`
const SecondDiv = styled.div`
width: 37%;
height: auto;
`

const EventName =styled.div`
width: 567px;
height: 152px;
margin-top:128px
`

const Caption = styled.div`
width: 525px;
height: 99px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
padding-top: 32px;
`

const ModalCalender =styled.div`
margin-bottom:30px
`
const DetailedEvent =styled.div`
width:100%;
height: auto;
margin-top: 100px;
display: flex;
justify-content: space-between;
`
const EventDate = styled.div`
width: 707px;
height: 76px;
font-weight: 600;
font-size: 20px;
line-height: 37px;
color: #252D42;
display: flex;
justify-content: space-between
`
const Description = styled.div`
width: 567px;
height: 44px;
font-weight: 800;
font-size: 32px;
line-height: 44px;
color: #252D42;
`
const DetailedDescription = styled.div`
margin-top: 24px;
width: 100%;
height: auto;
font-weight: 400;
font-size: 16px;
line-height: 27px;
color: #252D42;
`
const EventDesc = styled.div`
width: 100%;
height: auto;
`

const EventLocation =styled.div`
width: 100%;
height: 44px;
font-weight: 800;
font-size: 32px;
line-height: 44px;
color: #252D42;

`

const StartDate = styled.div`
width: 98px;
height: 78px;
`
const StartDateName = styled.div`
width:98px;
font-weight: 600;
font-size: 20px;
line-height: 37px;
color: #252D42;
`
const StartDateValue = styled.div`
width:98px;
font-weight: 200;
font-size: 16px;
line-height: 37px;
color: #252D42;
`
const MapOfEvents =styled.div`
margin-top: 24px;
width: 100%;
height: 385px;
div{
 position:relative   
}
`
const ShareSocial =styled.div`
margin-top: 85px;
width: 100%;
height: 44px;
font-weight: 800;
font-size: 32px;
line-height: 44px;
color: #252D42;
`
const OtherEvents =styled.div`
width: 100%;
height auto;
`

