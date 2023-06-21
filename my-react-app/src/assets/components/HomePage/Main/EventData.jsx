import { EventDatas,ContentEvent } from "../../Styled/Styled";
function EventData(props){
    return (
    <EventDatas>
      <img src={props.image} />
                    <ContentEvent>
                        <div className={props.date}>
                        <h2>{props.month} </h2> 
                        <span>{props.day}</span> 
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

