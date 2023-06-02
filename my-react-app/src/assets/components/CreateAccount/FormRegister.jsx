import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import swal from 'sweetalert';
import preloader from './image/preloader.gif';
import bg from './image/registerbg.png'
import { Link } from "react-router-dom";



const FormRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.firstName.length < 3) {
      swal('ALERT', 'Name is required', 'error');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      swal('ALERT', 'Invalid email format', 'error');
    } else if (formData.password.length < 6) {
      swal('ALERT', 'Password must be at least 6 characters long', 'error');
    } else if (formData.password !== formData.cpassword) {
      swal('ALERT', 'Password does not match', 'error');
    } else {
      try {
        setLoading(true);

        const url = "http://localhost:8080/api/v1/auth/register";
        const response = await axios.post(url, formData);

        setLoading(false);

        const result = response.data;
        const message = result.data.message;
        console.log(result);
        console.log(message);
        if (message === "Registration Successful") {
          swal('ALERT!', 'Kindly Check your inbox to verify your Email', 'success');

        } else {
          if (message === "Email Already exist") {
            console.log(result.data);
            swal('ALERT!', message, 'error');
          } else {
            throw new Error(result.data);
          }
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        swal('ALERT', "Try again later", 'error');
      }
    }
  };

  return (
    <Container>
      {(loading) ?
      <Preloader>
        <Loader src={preloader}></Loader>
      </Preloader>
      
      : null}
         <FormDiv>
          <Form onSubmit={handleSubmit}>
            <h1>Create an account</h1>
            <p style={{margin:"0px",marginBottom:"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           


              <Fieldset>
                <legend>First Name</legend>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  name="firstName"
                />
              </Fieldset>

              <Fieldset>
                <legend>Last Name</legend>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  name="lastName"
                />
              </Fieldset>

              <Fieldset>
                <legend>Email</legend>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
              </Fieldset>

              <Fieldset>
                <legend>Phone Number</legend>
                <input
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                />
              </Fieldset>

              <Fieldset>
                <legend>Date of Birth</legend>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  name="dob"
                />
              </Fieldset>

              <Fieldset>
                <legend>Password</legend>
                <input
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
              </Fieldset>

              <Fieldset>
                <legend>Confirm Password</legend>
                <input
                  type="password"
                  value={formData.cpassword}
                  onChange={handleChange}
                  name="cpassword"
                />
              </Fieldset>


            <Button>
              Create Account
            </Button>
            <CenterDiv>
              <p>Already Registerd? <Link to="/login">Login</Link></p>
            </CenterDiv>
          </Form>
        </FormDiv>
        <BackgroundImage>
        </BackgroundImage>

    </Container>

  )
}

export default FormRegister;

const Preloader =styled.div`
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
const Loader =styled.img`
width:40px;
height:40px;

`

const Container =styled.div`
width:100%;
height:auto;
background: #F8F9FA;
display:flex;
@media(max-width:600px){
  flex-direction:column;
}
`

const FormDiv =styled.div`
width:40%;
height:auto;
display:flex;
justify-content:center;
margin-bottom:30px;
@media(max-width:600px){
  width:100%;
  
}
`
const Form =styled.form`
width:80%;
height:auto;

font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #252D42;
`
const BackgroundImage = styled.div`
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
const Fieldset = styled.fieldset`
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

const Button =styled.button
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
const CenterDiv =styled.div`
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