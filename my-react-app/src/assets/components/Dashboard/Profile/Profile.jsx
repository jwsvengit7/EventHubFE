import styled from "styled-components"
import profile from '../../HomePage/image/event_1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Profile =()=>{
    const [check,setCheck] =useState(false)
    const handle =()=>{
        setCheck(true)
    }
    return (
        <>
        <ProfileRow>

            <Round>
                <Img src={profile} alt="logo"></Img>
              
            </Round>
            <span onClick={handle}>Temple Jackson <FontAwesomeIcon icon={faChevronDown} /></span>
            {(check) ? "1" : "" }

        </ProfileRow>
        </>
    )
}

export default Profile;

const ProfileRow =styled.div`
width:40%;
height:50px;
display:flex;
align-items:center;
justify-content:space-around;
cursor:pointer
`

const Round=styled.div`
width:40px;
height:40px;
border-radius:100px
`

const Img=styled.img`
width:100%;
height:100%;
border-radius:100px
`