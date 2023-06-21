import React, { useState } from 'react';
import styled from 'styled-components';
import profile from '../Profile-modal/img/profile.png';
import paymentImg from '../Profile-modal/img/paymentImg.png';
import logoutLogo from  '../Profile-modal/img/Vector.png';
import { Link } from 'react-router-dom';



function UserProfileModal() {

  return (
    <>
    
    
        <Modal >
          <ModalContent>
            <ModalHeader>
              <ModalDetails>
                <Img>
                  <Src src={profile} alt="Profile" />
                </Img>
                <ProfileName>
                  <span>Tochukwu Ezinne</span>
                  <p>tochukwuezinne@gmail.com</p>
                </ProfileName>
              </ModalDetails>
              <ModalInfo> 
                 <PaymentImg><Link to="/login"><img src={paymentImg}/></Link>
                 </PaymentImg> 
                 <Link to="../app/account" style={{textDecoration:"none"}}>
                 <ModalText><p>Payment Account</p>
                 </ModalText></Link>
            </ModalInfo>
            <ModalInfo> 
                 <LogOutLogo> <Link to="/login"><img src={logoutLogo}/></Link>
                 </LogOutLogo> 
                 <Link to="../logout" style={{textDecoration:"none"}}>
                 <ModalText><p style={{display:"flex", justifyContent:"flex-start"}}>Logout</p>
                 </ModalText>
                 </Link>
            </ModalInfo>
            </ModalHeader>
            {/* <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton> */}
          </ModalContent>
        </Modal>
  
    </>
  );
}

export default UserProfileModal;


const ModalButton = styled.button`
  /* Style the button to open the modal */
`;

const Modal = styled.div`
  width: 293px;
  height: 269px;
  display: flex;
  justify-content: center;
  background: #ffffff;
  position: absolute;
  left: 80%;
  top: 30%;
  transform: translate(-50%, -50%);
  border: 1px solid #999;
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
 

  justify-content: center;

`;

const ModalHeader = styled.div`
  width: 80%;
  height: auto;

  text-align: left;
  color: white;
  padding-top: 13px;
`;

const ModalDetails = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d0d5dd;
`;

const Img = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Src = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ProfileName = styled.div`
padding-left:5px;
  span {
    color: #101828;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Inter';
    line-height: 20px;
    font-style: normal;
  }
  p {
    color: #98a2b3;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
`;

const ModalInfo = styled.div`
  color: red;
  width: 70%;
  display: flex;
  align-items: center;


`;

const PaymentImg = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
 

  img {
    width: 15px;
    height: 19px;
    margin-right: 5px;
  }
`;

const LogOutLogo= styled.div`
display: flex;
align-items: center;
margin-right: 10px;
img {
  width: 15px;
  height: 19px;
  margin-right: 5px;
}
` 


const ModalText = styled.p`
font-weight: bold;
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #101828;
padding-left:10px;
 margin:0px;
`;

const ModalX = styled.div`
 

  ${ModalInfo} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
// const ModalCloseButton=styled.div`
//  color :red;
// `