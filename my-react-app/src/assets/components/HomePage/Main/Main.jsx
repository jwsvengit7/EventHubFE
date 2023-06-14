
import '../css/HomePage.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import arrow from '../image/svg/Arrow 1.svg'
import image from '../image/event_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import EventData from './EventData';
import { BannerDiv,ButtonArrow,ButtonFilter,ButtonLoad,Div,DivRoleContent,Events,EvnetsBody,InsideDiv,Label,PositionForm, RoleEventFilter, UpcomingEvents } from '../../Styled/Styled';


export default function Main(){
    const event = [
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum molestias, atque nam quas soluta dolore ut,",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        }
     
    ]

    return (
        <>
        <div style={{background:"#f8f8f8",paddingBottom:"50px"}}>
        <BannerDiv>
                <h1 className='h1'>Connect to all the event</h1>
                <h1 className='h1 mag-up'>happening around you</h1>
                <p className='expore'>Explore More <img src={arrow} width={35} /> </p>
        </BannerDiv>
        <PositionForm>
            <InsideDiv>
                <DivRoleContent>
                    <Label>
                        What are you looking?<br />
                        <input type='text' placeholder='Search events' />
                    </Label>
                    <Label>
                        Location<br />
                        <select>
                        <option>Lagos Nigeria</option>
                        <option>H</option>
                        </select>
                    </Label>
                    <Label>
                        When<br />
                        <select>
                        <option>Any date</option>
                        <option>H</option>
                        </select>
                    </Label>

                    <ButtonArrow>
                        <FontAwesomeIcon className='icon' icon={faArrowRight} />
                    </ButtonArrow>
                </DivRoleContent>
            </InsideDiv>
        </PositionForm>
        <UpcomingEvents>
            <EvnetsBody>
                <RoleEventFilter>
                    <h1 style={{fontFamily:"sans-serif"}}>Upcoming events</h1>
                    <Div>
                    <ButtonFilter>
                           <span className='ccc'>All Category <FontAwesomeIcon icon={faAngleDown} /></span>
                        </ButtonFilter>
                        <ButtonFilter>
                           <span className='ccc'>Event Type <FontAwesomeIcon icon={faAngleDown} /></span>
                        </ButtonFilter>
                    </Div>
                </RoleEventFilter>

                <Events>
                    {event.map((val,index)=>{
                        return (
                            <EventData
                            key={index} 
                            image ={image} 
                            eventName="eventName" 
                            date="date" 
                            text={val.text} 
                            month={val.month}
                            />
                    
                        )
                    })
                    }
                </Events>

                <center>
                <ButtonLoad>
                    Load More Events
                </ButtonLoad>
                </center>

            </EvnetsBody>

        </UpcomingEvents>
        </div>
        </>
    )
}
