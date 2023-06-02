import styled from 'styled-components';
function EventData(props){
    return (
    <EventDatas>
      <img src={props.image} />
                    <ContentEvent>
                        <div className={props.date}>
                        <h2>{props.month} </h2> 
                        <span>{props.date}</span> 
                        </div>
                        <div className={props.eventName}>
                        <h3>{props.name} </h3>
                        <p>{props.text}</p>
                        </div>
                    </ContentEvent>
    </EventDatas>
    )
}
export default EventData;

const EventDatas =styled.div`
width:32%;
height:auto;
background:white;
margin-bottom:30px;
@media(max-width:600px){
    width:100%
}

`

const ContentEvent= styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-around;


`