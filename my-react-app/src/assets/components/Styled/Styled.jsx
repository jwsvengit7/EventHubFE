import styled from "styled-components";
import bannerUrl from '../HomePage/image/bg-connect.png'
import bg from '../CreateAccount/image/registerbg.png'
// HEADER

export const HeaderStyle = styled.header`
width:100%;
height:100px;
background:white;
display:flex;
justify-content:center;
align-items:center;

`
export const Headers = styled.div`
width:85%;
height:auto;
display:flex;
justify-content:space-between;
align-items:center;
`
export const LogoDiv = styled.div`
width:25%;
height:100px;
display:flex;
align-items:center;


`
export const Account = styled.div`
width:40%;
height:100px;
display:flex;
align-items:center;
justify-content:flex-end;
text-decoration:none;
font-size:16px;
@media(max-width:600px){
    width:70%
}
`
export const Button = styled.button`
width:146px;
height:54px;
background:#ff5722;
color:white;
margin-left:30px;
border-radius:4px;
border:0px;
cursor:pointer

`


// EVENT
export const EventDatas =styled.div`
width:32%;
height:auto;
background:white;
margin-bottom:30px;
@media(max-width:600px){
    width:100%
}

`

export const ContentEvent= styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-around;

`

//MAIN 


export const BannerDiv =styled.div`
width:100%;
height:600px;
background-image:url(${bannerUrl});
display:flex;
justify-content:center;
align-items:center;
flex-direction:column
`
export const PositionForm = styled.div`
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
export const InsideDiv = styled.div`
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
export const DivRoleContent = styled.div`
width:100%;
height:auto;
display:flex;
@media(max-width:600px){

flex-direction:column;
}
`
export const Label = styled.label`
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
export const ButtonArrow  =styled.button`
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
export const UpcomingEvents = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
background:#f8f8f8;
`
export const EvnetsBody =styled.div`
width:85%;
height:auto;
`
export const RoleEventFilter = styled.div
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
export const Div =styled.div`
width:26%;
height:50px;
display:flex;
justify-content:space-around;
align-items:center;

@media(max-width:600px){
    width:50%
}

`
export const ButtonFilter=styled.div`
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
export const Events =styled.div`
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
export const ButtonLoad=styled.button`
width:200px;
height:50px;
background:#ff5722;
outline:none;
color:white;
font-size:16px;
border:0px`



// footer


export const FooterDiv =styled.footer`
width:100%;
height:400px;
background:#10375c;
display:flex;
align-items:center;
justify-content:center;

@media (max-width:700px){
    height:auto;

    flex-direction:column;
}
`
export const LetfDivEvent =styled.div`
width:25%;
height:300px;

p{
    color:white;
    font-family:sans-serif;
}

@media (max-width:700px){
    height:auto;
    width:70%;
    margin:20px;
}
`
export const RightDivEvent =styled.div`
width:60%;
height:300px;
display:flex;
@media (max-width:700px){
    height:auto;
    width:70%;
    flex-direction:column;
}
`

export const DivFooter =styled.div`
width:40%;
height:40px;
align-items:center;
display:flex;
justify-content:space-between;

@media (max-width:700px){
    width:70%;
}
`

export const DivInsideRight =styled.div`
width:25%;
height:auto;

p{
    color:white;
    font-family:sans-serif;
}
label{
    width:250px;
    height:40px;
    display:flex;
    background:#fff;
    opacity:0.2;
    border-radius:8px;
    align-items:center;
    justify-content:space-around;
}
label input{
    width:80%;
    height:90%;
    border-radius:8px;
    border:0px;
    outline:none;
}
@media (max-width:700px){
    width:70%;
}

`
// create account

export const Preloader =styled.div`
width:100%;
height:100vh;
position:fixed;
top:0px;
left:0px;
background:rgba(0,0,0,0.5);
display:flex;
justify-content:center;
align-items:center
`
export const Loader =styled.img`
width:40px;
height:40px;

`

export const Container =styled.div`
width:100%;
height:auto;
background: #F8F9FA;
display:flex;
@media(max-width:600px){
  flex-direction:column;
}
`

export const FormDiv =styled.div`
width:40%;
height:auto;
display:flex;
justify-content:center;
margin-bottom:30px;
@media(max-width:600px){
  width:100%;
  
}
`
export const Form =styled.form`
width:80%;
height:auto;

font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #252D42;
`
export const BackgroundImage = styled.div`
width:60%;
height:850px;
background-image:url(${bg});
background-size:cover;
background-repeat:no-repeat;
background-position: none;
@media(max-width:600px){
  display:none
}
`
export const Fieldset = styled.fieldset`
margin-bottom:25px;
height:50px;
border: 1px solid rgba(37, 45, 66, 0.29);
border-radius: 4px;
color:#252D42;
input{
  width:100%;
  height:100%;
  border:0px;
  outline:none;
  font-size:15px;
  background: #F8F9FA;

}

`

export const ButtonForm =styled.button
`
width: 100%;
height: 48px;
outline:none;
border:0px;
margin-bottom:30px;

background: #FF5722;
border-radius: 4px;
transition-duration:0.5s;
color:white;
font-size:17px;

&:hover{
  background:pink
}
`

export const CenterDiv =styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;

p{

color:#003366;
a{
  color:#FF5722;
  text-decoration:none;

}

}
`


export const IconDiv =styled.div`
width:100%;
height:30px;
display:flex;
align-items:center;
justify-content:center;
border:1px solid red;
padding:10px
`

export const I =styled.div`
width:95%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
color:red
`


export const View = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Containers = styled.div`
  width: 50%;
  height: 400px;
  box-shadow: 0px 0px 2px #ccc;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: green;
  font-size: 30px;
  font-weight:bold;
  font-family: sans-serif;
  text-align: center;
  border-radius:10px
`;