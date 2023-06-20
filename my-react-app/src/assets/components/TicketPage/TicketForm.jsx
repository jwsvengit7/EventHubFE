import styled from "styled-components";
import bg from '../TicketPage/bg-connect.png'
import '../TicketPage/ticket.css'


import React from 'react'
import { Link } from "react-router-dom";
 import   {BsArrowLeftShort} from 'react-icons/bs';
import { ButtonForm } from "../Styled/Styled";

function TicketForm() {
  return (
     <Container>
        
        <BackgroundImage>
            <Div>
            <Text>
   <BsArrowLeftShort/> <Link to='/' style={{color :'white', textDecoration :'none'}} >Go Back</Link>
 
          </Text>
        <Span>EKO ALL NIGHT POOL PARTY FESTIVAL</Span>
          </Div>
      </BackgroundImage>
      <ContentBackground>
        <Div>
      <ContentText>
            <p  style={{fontSize:'32px'}}>Fill in your details as required</p>
             <button >View map</button> 
     </ContentText>
      <Form>
       <Fieldset>
        <legend>FirstName</legend>
        <input type="text" />
       </Fieldset>
        <Fieldset>
        <legend>email</legend>
        <input type="text" />
       </Fieldset>
       </Form>
     <T>Tickets</T>
      <Content>
   <ContentBox>
       <Items>
            <Box><span>+</span> 0<span>-</span></Box>
            <span >100 available</span>
        </Items>
        <Items>
            <spanDiv><p>Table for 4 (Gold)  VVIP “Eko All Night Pool Party Festival”</p></spanDiv>
        </Items>
        <Items className="amount">
            <span>N150,000</span>
        </Items>
  </ContentBox>
  <ContentBox>
       <Items>
            <Box><span>+</span> 0<span>-</span></Box>
            <span style={{marginTop:'20px'}}>80 available</span>
        </Items>
        <Items>
        <spanDiv><p>Table for 4 (Gold)  VVIP “Eko All Night Pool Party Festival”</p></spanDiv>

        </Items>
        <Items className="amount">
            <span >N200,000</span>
        </Items>
  </ContentBox>
  <ContentBox>
       <Items >
            <Box><span>+</span> 0<span>-</span></Box>
            <span >100 available</span>
        </Items>
        <Items>
        <spanDiv><p>For 4 Regular “Eko All Night Pool Party Festival</p></spanDiv>
        
        </Items>
        <Items className="amount">
            <span>N150,000</span>
        </Items>
  </ContentBox>
  <ContentBox>
    <ButtonForm style={{width:"200px" ,marginTop:"50px", display:"flex" , justifyContent:"center", textAlign:"center", padding:"10px"}}>continue</ButtonForm>
       
        
  </ContentBox>
    </Content>
    </Div>
    </ContentBackground>
     </Container>
  )
}

export default TicketForm


const Container =styled.div`
width:100%;
`
const BackgroundImage= styled.div`
background-image:url(${bg});
width:100%;
height:600px;
marigin-bottom:30px;
display:flex;
justify-content:center

`

const Div=styled.div`
width:83%;


`
const Text =styled.div`
color:white;
width:25%;
height:100px;
display:flex;
align-items:center;
font-size:18px;
margin-top:50px;
font-weight:600;
text-decoration:none;
  `
  const Span = styled.div`
  color:white;
  font-size:56px;
  font weight:700px;
  margin-top:130px;
  `
  const spanDiv = styled.div`
   color:blue;
   display:flex
  align-items:center;
  `

 const Content = styled.div`
  width:100%;
  height:auto;
  margin-bottom:100px;
  padding-top:40px;

 ` 
const Box = styled.div`
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 text-align:center;
  width:200px;
  height:60px;
   margin:5px;
  background:#FFFFFF;
`

 const ContentBox = styled.div`
 background: rgba(0, 50, 47, 0.05);
  display:flex;
  justify-content:space-between;
  width:100%;
  height:auto;
  padding:50px;
  
  border-bottom:1px solid #C4C4C4;
  button{
    margin-left:400px;
    text-align:center;
    background: rgba(255, 87, 34, 1);
    border:none;


  }

 ` 
 const T = styled.div`
   margin-top:100px;
   font-weight: 700;
font-size: 24px;
line-height: 33px;
color: #000000;
 `
 const ContentText =styled.div`
 margin-top:70px;
  display:flex;
 justify-content:space-between;
 align-item:center;
 
 button{
    color:black;
    width:100px;
    height:30px;
    margin:40px
}


 `
 const Fieldset = styled.fieldset`
margin-top:20px;
height:50px;
width:40%;
border: 1px solid rgba(37, 45, 66, 0.29);
border-radius: 4px;
box-sizing:box;

input{
  width:100%;
  height:20px;
  border:0px;
  outline:none;
  font-size:15px;


}

`
const Form =styled.form`


display:flex;
backgroud:blue;
justify-content:space-between;
align-items:center;



font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`

 const Items =styled.div`
 width:100%;
 height:70px;
margin-bottom:30px;
margin-left:10px;

 
 `

 const ContentBackground =styled.div`
 width:100%;
 height:auto;
 display:flex;
 justify-content:center`
