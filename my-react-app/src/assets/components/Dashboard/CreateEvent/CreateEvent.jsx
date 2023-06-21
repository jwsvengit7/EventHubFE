import styled from "styled-components";
import { UpcomingEvents,EvnetsBody, Fieldset, Select, ButtonForm, Button } from "../../Styled/Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LuUpload } from 'react-icons/lu'
import { faGear } from "@fortawesome/free-solid-svg-icons";
import icon from './image/Vector.png'
import { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const TOKEN = localStorage.getItem("TOKEN");
  console.log(TOKEN)
  if (TOKEN == null) {
    window.location.replace("/login")
  }

  const categoryValues = [
    "Food & Drink",
    "File Media & Entertainment",
    "Event & Lifestyle",
    "Special Interest",
    "Religious & Spirituality",
    "Technology",
    "Government & Politics",
    "Education"
  ]

  const [arrays, setArrays] = useState([]);
  let [x, setX] = useState(0);

  const [image,setImage] =useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    
  };

  const [formdata, setFormData] = useState({
    description: "",
    organizer: "",
    title: "",
    caption: "",
    ticket_class: [],
    category: "",
    location:"",
    endTime:"",
    endDate:"",
    startDate:"",
    startTime:"",
    file:image

  });


  const [state, setState] = useState(false);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    if (formdata.ticket_class.length > 0) {
      setState(true);
    }
  };

  let [formd, setFormd] = useState({
    class: "",
    qty: "",
    des: "",
    amount: ""
  });

  const handleTicketClassChange = (e, index) => {
    const updatedTicketClasses = [...ticketClasses];
    updatedTicketClasses[index].ticketClass = e.target.value;
    setTicketClasses(updatedTicketClasses);
  };
  
  const handleQuantityChange = (e, index) => {
    const updatedTicketClasses = [...ticketClasses];
    updatedTicketClasses[index].quantity = e.target.value;
    setTicketClasses(updatedTicketClasses);
  };
  
  const handleDescriptionChange = (e, index) => {
    const updatedTicketClasses = [...ticketClasses];
    updatedTicketClasses[index].description = e.target.value;
    setTicketClasses(updatedTicketClasses);
  };
  
  const handleTicketPriceChange = (e, index) => {
    const updatedTicketClasses = [...ticketClasses];
    updatedTicketClasses[index].ticketPrice = e.target.value;
    setTicketClasses(updatedTicketClasses);
    console.log(formdata)
  };
  
  const [ticketClasses, setTicketClasses] = useState([]);

  const addTicket = () => {
    const newTicketClass = {
      id: x + 1,
      ticketClass: formd.class,
      quantity: formd.qty,
      description: formd.des,
      ticketPrice: formd.amount
    };
    setTicketClasses((prevTicketClasses) => [...prevTicketClasses, newTicketClass]);
    setX((prevX) => prevX + 1);
    setArrays((prevArrays) => [...prevArrays, newTicketClass]);
    setState(true);

    setFormData((prevFormData) => ({
      ...prevFormData,
      ticket_class: [...prevFormData.ticket_class, newTicketClass]
    }));

    setFormd({
      class: "",
      qty: "",
      des: "",
      amount: ""
    });
  };

  const removeDelete = (indexToRemove) => {
    const updatedTicketClasses = [...ticketClasses];
    updatedTicketClasses.splice(indexToRemove, 1);
    setTicketClasses(updatedTicketClasses);
  
    const updatedArrays = [...arrays];
    updatedArrays.splice(indexToRemove, 1);
    setArrays(updatedArrays);
  
    const updatedTicketClassState = formdata.ticket_class.filter((item, index) => index !== indexToRemove);
    setFormData(prevFormData => ({
      ...prevFormData,
      ticket_class: updatedTicketClassState
    }));
  };
  
  

  const handle = async (e) => {
    e.preventDefault();
    alert(image);
    console.log(image)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${TOKEN}`
      }
    };
  
    await axios.post("http://localhost:8999/events/create", formdata, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
    return (
        <>
           <UpcomingEvents>
            <EvnetsBody>
                <EventCreation method="post" onSubmit={handle} encType="multipart/form-data">
                    <HeaderEvent>
                        <IconHoled>
                            <FontAwesomeIcon icon={faGear} />
                        </IconHoled>
                        <P>Note that for every ticket sold, there would be a 9.99% deduction.</P>
                    </HeaderEvent>
                    <h2>Basic Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <FormEvent >
                    <Fieldset>
                <legend>Event Title</legend>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={formdata.title}
                />
              </Fieldset>

              <Fieldset>
                <legend>Caption</legend>
                <input
                  type="text"
                  name="caption"
                  onChange={handleChange}
                  value={formdata.caption}
                />
                </Fieldset>
                <Fieldset style={{height:"auto"}}>
                <legend>Description</legend>
                <TextArea  onChange={handleChange} name="description" value={formdata.description}>

                </TextArea>
               
                </Fieldset>
              <Fieldset>
                <legend>Organizer</legend>
                <input
                  type="text"
                  name="organizer"
                  value={formdata.organizer}
                  onChange={handleChange}
                />
              </Fieldset>
              <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>

 
                <Button  type="button"  onClick={addTicket}>
                  Add Ticket
                </Button>
            


              <Fieldset style={{width:"45%"}} onChange={handleChange}>
                <legend>Category</legend>
                <Select name="Category">
  {categoryValues.map((val, index) => (
    <option key={index} value={val}>
      {val}
    </option>
  ))}
</Select>

              </Fieldset>
              </div>
              <h1>Ticket</h1>

{state &&
  ticketClasses.length > 0 &&
  ticketClasses.map((item,i) => (
    <ul key={item.id} style={{ width: "100%", height: "auto" }}>
      <TicketContent>
        <ContentTicketClass>
          <TicketClassIn>
            <Fieldset>
              <legend>Ticket class</legend>
              <input
                type="text"
                placeholder="eg  GOLD - VIP"
                name="ticketClass"
                value={item.ticketClass}
                onChange={(e) => handleTicketClassChange(e, i)}
                
              />
            </Fieldset>
          </TicketClassIn>
          <TicketAddRemove>
            <Fieldset>
              <legend>Quantity</legend>
              <input
                type="text"
                name="quantity"
                placeholder="eg 100"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, i)}
              />
            </Fieldset>
          </TicketAddRemove>
          <DescriptionType>
            <Fieldset style={{ height: "auto" }}>
              <legend>Description</legend>
              <TextArea
                value={item.description}
                name="description"
                placeholder="Table for 4"
                onChange={(e) => handleDescriptionChange(e, i)}
              />
            </Fieldset>
          </DescriptionType>
          <Amount>
            <Fieldset>
              <legend>Amount</legend>
              <input type="text" 
              name="ticketPrice"
              placeholder="eg 100" 
              value={item.ticketPrice}
              onChange={(e) => handleTicketPriceChange(e, i)}
               />
            </Fieldset>
          </Amount>
          <CloseButton onClick={() => removeDelete(i)}>x</CloseButton>
        </ContentTicketClass>
      </TicketContent>
    </ul>
  ))}
            

                    </FormEvent>
                    <UploadImg htmlFor="file-upload">

                    <ButtonForm  type="button" style={{background:"unset",borderBottom:"1px solid #ccc",color:"#222"}}>Upload Event Banner</ButtonForm>

                    <UPLOAD>
                        <LuUpload  style={{fontSize:"100px"}}/>
                        <p>Upload from file</p>
                        <p>or click here to drag image</p>
                        <p style={{color: "rgba(37, 45, 66, 0.29)"}}>PNG or JPG only</p>

                    </UPLOAD>
                   

                    </UploadImg>
                    <input type="file" style={{display:"none"}} name="file" id="file-upload"   onChange={handleFileChange}  />
                    <h2>Location</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    <LocationBox>
                    <BoxLocal>Online</BoxLocal>
                    <BoxLocal>Venue</BoxLocal>

                    </LocationBox>
                    <h2>Date & Time</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <WrapEvent>
                    <WrapBox>
                        <InLevl>
                            <img src={icon} alt={icon} />
                            <BoxInLevel>
                                <p>Event Starts</p>
                                <span><input type="date" /></span>
                            </BoxInLevel>
                        </InLevl>
                    </WrapBox>
                    <WrapBox>
                    <InLevl>
                            <img src={icon} alt={icon} />
                            <BoxInLevel>
                                <p>Event Starts</p>
                                <span><input type="date" /></span>
                            </BoxInLevel>
                        </InLevl>
                    </WrapBox>
                    <WrapBox>
                    <InLevl>
                            <img src={icon} alt={icon} />
                            <BoxInLevel>
                                <p>Event Starts</p>
                                <span><input type="time" /></span>
                            </BoxInLevel>
                        </InLevl>
                    </WrapBox>
                    <WrapBox>
                    <InLevl>
                            <img src={icon} alt={icon} />
                            <BoxInLevel>
                                <p>Event Starts</p>
                                <span><input type="time" /></span>
                            </BoxInLevel>
                        </InLevl>
                    </WrapBox>

                    </WrapEvent>
                    <ButtonForm type="submit">Save & Continue</ButtonForm>

                </EventCreation>


            </EvnetsBody>
            </UpcomingEvents>



        
        </>
    )
}
export default CreateEvent;

const EventCreation =styled.form`
width:100%;
height:auto;
margin-top:30px

`
const P =styled.p`
font-weight: 600;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.15px;
color: #932F19;`

const HeaderEvent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
padding:20px;
width: 96.6%;
height:50px;
background: #FEFBE8;
border: 1px solid #932F19;
border-radius: 6px;
margin-bottom:50px
`

const IconHoled =styled.div`
width:50px;
height:50px;

display:flex;
justify-content:center;
align-items:center;
border-radius:60px;
border: 2px solid #932F19;


`

const FormEvent =styled.form`
width:100%;
`
const UploadImg =styled.label`
box-sizing: border-box;
width: 100%;
height: 485px;
cursor:pointer;
background: rgba(0, 0, 0, 0.03);
border: 1px dashed #979797;
display:flex;
align-items:center;
flex-direction:column
`
const LocationBox =styled.div`
width:35%;
height:auto;
display:flex;
justify-content:space-between
`

const BoxLocal =styled.div`
width: 203px;
height: 90px;
background: rgba(0, 50, 47, 0.05);
border-radius: 4px;
display:flex;
justify-content:center;
align-items:center
`
const WrapEvent=styled.div`
width:55%;
height:250px;
margin-bottom:30px;
display:flex;
flex-wrap:wrap
`
const WrapBox=styled.div`
width: 300px;
height: 74px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid rgba(37, 45, 66, 0.29);
border-radius: 4px;
margin-right:10px;
display:flex;
justify-content:center;
align-items:center
`
const UPLOAD =styled.div`
width:400px;
height:350px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color: #1D2125;
`

const InLevl =styled.div`
width: 150px;
height: 80px;
display:flex;
justify-content:center;
align-items:center

`
const BoxInLevel =styled.div`
width:70%;
height:auto;
margin:5px;
p,span{
    font-size:14px;
    margin:2px

}
input{
  border:0px;
  outline:none;
}
`
const TextArea =styled.textarea`
border:0px;
background:unset;
outline:none

`

const TicketContent=styled.div`
width:100%;
height:auto;
`
const ContentTicketClass=styled.div`
width:100%;
height:auto;
display:flex

`

const TicketClassIn =styled.div`
width:20%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center

`
const TicketAddRemove =styled.div`
width:20%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
input{
    width:100%; 
}

`
const DescriptionType =styled.div`
width:30%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
Fieldset{
   
        width:100%;
        height:80%
    }
}

`

const Amount =styled.div`
width:30%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
Fieldset{
width:80%
}
`

const CloseButton =styled.button`
margin-top:20px;
width:40px;
height:40px;
border-radius:50px;
background:red;
color:white;
font-size:25px;
cursor:pointer;
border:0px
`