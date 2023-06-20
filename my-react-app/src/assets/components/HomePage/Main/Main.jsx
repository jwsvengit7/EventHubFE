
import '../css/HomePage.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import arrow from '../image/svg/Arrow 1.svg'
import image from '../image/event_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import EventData from './EventData';
import { BannerDiv,ButtonArrow,ButtonFilter,ButtonLoad,Div,DivRoleContent,Events,EvnetsBody,InsideDiv,Label,PositionForm, RoleEventFilter, UpcomingEvents } from '../../Styled/Styled';
import styled from 'styled-components';


export default function Main(){
    const event = [
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
            name:"Event Name which can be long",
            date:"Oct",
            month:"Oct"
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus penatibus viverra aliquam diam.",
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
                    <DivPad>
                    <Label>
                        What are you looking?<br />
                        <input type='text' placeholder='Search events' />
                    </Label>
                    <Label>
                        Location<br />
                        <input type='text' placeholder='Lagos, Nigeria' />
                    </Label>
                    <Label>
                        When<br />
                        <select>
                        <option>Most Recent</option>
                        <option>Later</option>
                        </select>
                    </Label>

                    <ButtonArrow>
                        <FontAwesomeIcon className='icon' icon={faArrowRight} />
                    </ButtonArrow>
                    </DivPad> 
                </DivRoleContent>
            </InsideDiv>
        </PositionForm>
        <UpcomingEvents>
            <EvnetsBody>
                <RoleEventFilter>
                    <h1 className='upcoming'>Upcoming events</h1>
                    <Div>
                    <ButtonFilter>
                           <span className='ccc'>All Category   <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"15px",color:"red"}}/></span>
                        </ButtonFilter>
                        <ButtonFilter>
                           <span className='ccc'>Event Type   <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"18px",color:"red"}}/></span>
                        </ButtonFilter>
                    </Div>
                </RoleEventFilter>

                <Events>
                    {event.map((val,index)=>{
                        return (
                            <EventData
                            key={index} 
                            eventName="eventName"
                            image ={image} 
                            name={val.name} 
                            date="date" 
                            text={val.text} 
                            month={val.month}
                            day={val.date}
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

const DivPad=styled.div`
width: 90%;
display:flex;
justify-content: space-between;
`
