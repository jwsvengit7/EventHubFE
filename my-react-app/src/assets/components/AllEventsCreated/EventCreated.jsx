import {UpcomingEvents, SetUp2, ConfirmTitle, SetUp3, TheDetails2, Filter, FilterContent, HorLine, TheContent,
    CreatedEvents, FirstDetails, SecondDetails, ThirdDetails, Active, TicketSold} from "../Styled/Styled.jsx";
import './EventCreated.css'
import {GrFormFilter} from "react-icons/gr";
import picture from '../HomePage/image/image-2.png'
import {FiEdit} from "react-icons/fi";

export default function EventCreated(){
    return(
        <div style={{background:"#f8f8f8",paddingBottom:"50px"}}>
           <UpcomingEvents>
               <SetUp2>
                   <ConfirmTitle>
                       <p className='eventCreated'>All events created</p>
                       <p className='total'>4 events created so far.</p>
                   </ConfirmTitle>
                   <Filter>
                       <FilterContent>
                           <TheContent>
                               <GrFormFilter className='filter'/>
                               <p className='filterText'>Filter</p>
                               <HorLine/>
                               <p className='filterText'>Date</p>
                           </TheContent>
                       </FilterContent>
                   </Filter>
               </SetUp2>
               <SetUp3>
                   <CreatedEvents>
                       <img src={picture} alt=''/>
                   </CreatedEvents>
                   <FirstDetails>
                       <TheDetails2>
                           <p>Event Title</p>
                           <span >Eko All Night Pool Party Festival</span>
                       </TheDetails2>
                       <TheDetails2>
                           <p>Organizer</p>
                           <span >ACMA People’s platform</span>
                       </TheDetails2>
                       <TheDetails2>
                           <p>Ticket Class</p>
                           <span >VVIP, VIP & Regular</span>
                       </TheDetails2>
                   </FirstDetails>
                   <SecondDetails>
                       <TheDetails2>
                           <p>Category</p>
                           <span >Event & Lifestyle</span>
                       </TheDetails2>
                       <TheDetails2>
                           <p>Location</p>
                           <span >2b, Herbert Macaulay Road, Yaba, Lagos</span>
                       </TheDetails2>
                       <TheDetails2>
                           <p>Date & Time</p>
                           <span >20/01/2023 - 22/01/2023  4pm - 9pm</span>
                       </TheDetails2>
                   </SecondDetails>
                   <ThirdDetails>
                       <Active>
                           <p>Active</p>
                       </Active>
                       <TicketSold>View Tickets Sold</TicketSold>
                       <FiEdit className='editEvent'/>
                   </ThirdDetails>
               </SetUp3>
           </UpcomingEvents>
        </div>
    )
}
