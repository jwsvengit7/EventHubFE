import {ButtonForm, UpcomingEvents, SetUp2, ConfirmTitle, EditDetails, EditBox,
    AllEvent, Line, TheDetails, OtherConfirmation, } from "../Styled/Styled.jsx";
import './Confirmation.css'
import {AiFillEdit} from "react-icons/ai";
import picture from '../HomePage/image/image-2.png'

export default function ConfirmationDetails(){
    return (
        <div style={{background:"#f8f8f8",paddingBottom:"50px"}}>
            <UpcomingEvents>
                <SetUp2>
                    <ConfirmTitle>
                        <p className='title'>Confirmation Details</p>
                        <p className = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ConfirmTitle>
                    <EditDetails>
                        <EditBox>
                            <AiFillEdit className='editIcon'/>
                            <p className='edit'>Edit</p>
                        </EditBox>
                        <AllEvent>
                            <p className='allEvents'>View all Events created</p>
                        </AllEvent>
                    </EditDetails>
                </SetUp2>
                <Line/>
                <OtherConfirmation>
                    <TheDetails>
                        <p className = 'theDetailsName'>Event Title</p>
                        <span className='theDetailsDesc'>Eko All Night Pool Party Festival</span>
                    </TheDetails>
                    <TheDetails>
                        <p className = 'theDetailsName'>Organizer</p>
                        <span className='theDetailsDesc'>ACMA people’s platform</span>
                    </TheDetails>
                    <TheDetails>
                        <p className = 'theDetailsName'>Ticket Class</p>
                        <span className='theDetailsDesc'>VVIP, VIP & Regular</span>
                    </TheDetails>
                    <TheDetails>
                        <p className = 'theDetailsName'>Category</p>
                        <span className='theDetailsDesc'>Event & Lifestyle</span>
                    </TheDetails>
                    <TheDetails>
                        <p className = 'theDetailsName'>Banner</p>
                        <img className='theDetailsImage' src={picture} alt=''/>

                    </TheDetails>
                    <TheDetails>
                        <p className = 'theDetailsName'>Location</p>
                        <span className='theDetailsDesc'>2b, Herbert Macaulay Road, Yaba, Lagos</span>
                    </TheDetails>
                    <TheDetails>
                        <p className = 'theDetailsName'>Date & Time</p>
                        <p className='theDetailsDesc'>229/12/2021 - 31/12/2021 </p>
                        <p className='theDetailsDesc2'>06:00PM - 09:00PM</p>
                    </TheDetails>
                    <ButtonForm>
                        Send & Publish
                    </ButtonForm>
                </OtherConfirmation>
            </UpcomingEvents>
        </div>
    )
}