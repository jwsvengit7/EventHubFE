import styled from 'styled-components';
import '../css/HomePage.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import bannerUrl from '../image/bg-connect.png'
import arrow from '../image/svg/Arrow 1.svg'
import image from '../image/event_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import EventData from './EventData';


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
                            <EventData image ={image} eventName="eventName" date="date" text={val.text} month={val.month}/>
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

const BannerDiv =styled.div`
width:100%;
height:600px;
background-image:url(${bannerUrl});
display:flex;
justify-content:center;
align-items:center;
flex-direction:column
`
const PositionForm = styled.div`
position:relative;
width:100%;
height:170px;
display:flex;
justify-content:center;
bottom:80px;
@media(max-width:600px){
    height:auto

    }
`
const InsideDiv = styled.div`
background:#10375c;
border-radius:10px;
width:75%;
height:100%;
display:flex;
padding-right:20px;
padding-left:20px;
display:flex;
align-items:center;
@media(max-width:600px){
    height:auto

    }
`
const DivRoleContent = styled.div`
width:100%;
height:auto;
display:flex;
@media(max-width:600px){

flex-direction:column;
}
`
const Label = styled.label`
height:50px;
color:white;
font-family:sans-serif;
margin-left:40px;
color:#ccc;
input {
    width:200px;
    height:20px;
    border-radius:10px;
    margin-top:10px;
    border:0px;
    padding:16px;

}
select{
    height:50px;
    margin-top:10px;
    width:250px;
    border:0px;
    border-radius:10px;
    padding:16px;
    outline:none;
    color:#676767;
}

@media(max-width:600px){

    width:90%;
    height:70px;
    margin-top:20px;
    margin-bottom:20px;

    }
`
const ButtonArrow  =styled.button`
width: 84px;
height: 71px;
background: #FF5722;
border-radius: 10px;
margin-left:30px;
display:flex;
justify-content:center;
align-items:center;
border:0px;
outline:none;

@media(max-width:600px){
    margin:10px;
    height:50px;
    margin-left:40px
}
`
const UpcomingEvents = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
background:#f8f8f8;
`
const EvnetsBody =styled.div`
width:85%;
height:auto;
`
const RoleEventFilter = styled.div
`
width:100%;
display:flex;
justify-content:space-between;

@media(max-width:600px){
    h1{
        font-size:20px
    }
}
`
const Div =styled.div`
width:26%;
height:50px;
display:flex;
justify-content:space-around;
align-items:center;

@media(max-width:600px){
    width:50%
}

`
const ButtonFilter=styled.div`
width:150px;
height:40px;
background:rgba(255,87,34,0.1);
border-radius:4px;
outline:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;

span{
    color:rgba(37,45,66,0.85);
    font-size:13px;
}
@media(max-width:600px){
    width:40%;
    font-size:10px
}
`
const Events =styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
img{
    width:100%;
    height:200px;

}

@media(max-width:600px){}
`
const ButtonLoad=styled.button`
width:200px;
height:50px;
background:#ff5722;
outline:none;
color:white;
font-size:16px;
border:0px`
