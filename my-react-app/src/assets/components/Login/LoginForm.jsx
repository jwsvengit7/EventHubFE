import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import preloader from '../CreateAccount/image/preloader.gif'
import { Link } from "react-router-dom";
import google from './icons/google.svg'
import facebook from './icons/facebook.svg'
import { BackgroundImage, ButtonForm, CenterDiv, Container, Fieldset, Form, FormDiv, I, IconDiv, Loader, Preloader } from "../Styled/Styled";

const PORT = 8999;


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      swal('ALERT', 'Invalid email format', 'error');
    }   else {
      try {
        setLoading(true);

        const url = `http://localhost:${PORT}/api/v1/auth/authenticate`;
        const response = await axios.post(url, formData);

        setLoading(false);

        const result = response.data;
        const message = result.data.message;
        console.log(result);
    

        
      } catch (err) {
        setLoading(false);
        const message = err.response.data.data.message;
        console.log(err.response.data.data)
        if(message=="Account Invalid"){
          var x=0;
          setInterval(() => {
            x++;
            if(x==5){
              localStorage.setItem("email",formData.email)
              window.location.replace("/verify-user")
            }
            
          }, 1000);
     
        }
      
        
        
        swal('ALERT',message, 'error');
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
            <h3>Login to your account</h3>
            <p style={{margin:"0px",marginBottom:"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        
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
                <legend>Password</legend>
                <input
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
              </Fieldset>
              <p>
              <Link to="/user/forgetpassword/authenticate/" style={{marginBottom:"20px",textDecoration:"none"}}>Forget Password</Link>
              </p>

            <ButtonForm>
              Login
            </ButtonForm>
            <CenterDiv>
              <p>Don't have an Account? <Link to="/signup">Register</Link></p>
            
            </CenterDiv>
            <center><p>or</p></center>
            <CenterDiv>
            
              <IconDiv>
                <img src={google} width={20} alt="" /> <I>Google</I>
              </IconDiv>
            </CenterDiv>
            <p></p>
            <CenterDiv>
            
            <IconDiv>
              <img src={facebook} width={20} alt="" /> <I>Facebook</I>
            </IconDiv>
          </CenterDiv>
          </Form>
        </FormDiv>
        <BackgroundImage>
        </BackgroundImage>

    </Container>

  )
}

export default LoginForm;









