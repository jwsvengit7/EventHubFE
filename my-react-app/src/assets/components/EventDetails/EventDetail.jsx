import './css/EventDetails.css'
import styled from 'styled-components'
import { BannerDiv,EventDate, UpcomingEvents,EvnetsBody,ButtonForm,ButtonFormWhite, GobackDiv, Divs, EventName, Caption, BuyModal, ModalCalender, DetailedEvent } from '../Styled/Styled'


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
                    <Divs>
                        <p className='description'>Description</p>
                        <p className='detailedDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing nibh nisi auctor sagittis risus eu ac. Neque et pulvinar cum mi sed ullamcorper ornare morbi aliquam. Neque, quam natoque feugiat quisque. Adipiscing viverra egestas lorem convallis. Interdum ipsum fusce elementum dolor a semper. Lectus elit ac viverra lorem nunc vitae. Laoreet morbi auctor ultrices augue interdum elementum facilisis in proin. Commodo auctor adipiscing id sit leo. Et pulvinar et ornare aliquam dignissim. Ut semper pulvinar nulla est nulla lectus. Tincidunt mauris eu mollis viverra eget. In dolor eget ridiculus venenatis. Eget elementum erat nisl justo turpis nulla. Rhoncus luctus amet, mi eu varius. Et id imperdiet malesuada sem eu viverra neque. A, dui morbi vitae placerat eget mi in rhoncus. In molestie elementum volutpat ac. Quisque arcu, egestas scelerisque egestas volutpat feugiat morbi nisi. Feugiat pulvinar vitae mauris ultrices diam molestie mattis vel mi. Fermentum integer tortor orci ut consequat consectetur lectus. Pretium odio enim elementum placerat vel mauris turpis. Etiam amet, ornare sed dui elementum, suspendisse quis sapien. Id amet tempor, donec pulvinar. Consectetur ut mauris vitae, eget ultricies egestas non netus. Risus est pellentesque nibh diam malesuada tellus adipiscing in fermentum. Malesuada commodo fames turpis phasellus leo scelerisque interdum. Faucibus phasellus sit erat faucibus. Nibh porttitor mi nulla malesuada consequat sit neque.</p>
                        <p className='eventdate'>Date and Time</p>
                        <EventDate>
                            <p className='startDate'>Start Date 09/06/2022</p>
                            <p className='endDate'>End Date 09/06/2022</p>
                            <p className='startTime'>Time 09/06/2022</p>
                        </EventDate>
                        
                    </Divs>
                </DetailedEvent>
                
            </EvnetsBody>
            </UpcomingEvents>
        </div>
    )
}

