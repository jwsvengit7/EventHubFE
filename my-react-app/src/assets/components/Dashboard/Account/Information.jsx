import Footer from "../../HomePage/Footer/Footer";
import Header from "../../HomePage/Header/Header";
import axios from "axios";
import { UpcomingEvents,
    EvnetsBody,
    Setup,
    FormAccount,
    MessageResponse,
    Details,
     ButtonForm,DiviNFO,
    AccountNFO, 
    Button} from "../../Styled/Styled";
    import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
const TOKEN = localStorage.getItem("TOKEN");
const  Information   = ()  =>{
  if(TOKEN==null){
    window.location.replace("/login")
  }
  const [accounts,setAccounts] =useState([])
  
  axios.
  get("http://localhost:8999/api/v1/bank/account",{
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${TOKEN}`
      }
})
.then((data)=>{
    console.log(data)
    setAccounts(data.data.data)

}).catch((e)=>{
  console.log(e)
})



  
    return (
        <>
        <Header />

        <UpcomingEvents>
            <EvnetsBody>
            <Setup>
                <h1></h1>
                   
                        <FormAccount>
                          {
                           (accounts.length > 0) ? accounts.map((val, index) => {
                            if (val) { 
                            return(
                              <>
                              <Details>
                              <DiviNFO>
                                <p>Account Name</p>
                                <h3>{val.accountName}</h3>
                              </DiviNFO>
                              <AccountNFO>
                                <Link to="/app/account"><Button>Edit</Button></Link>
                              </AccountNFO>
                              </Details>
                              <Details>
                              <DiviNFO>
                                <p>Account Number</p>
                                <h3>{val.accountNumber}</h3>
                              </DiviNFO>
                              <AccountNFO>
                               
                              </AccountNFO>
                              </Details>
                              <Details>
                              <DiviNFO>
                                <p>Bank</p>
                                <h3>{val.bankName}</h3>
                              </DiviNFO>
                              <AccountNFO>
                               
                              </AccountNFO>
                              </Details>
                              </>
                            )
                            }
                          }) :""
                        
}

                        </FormAccount>
                            
                    </Setup>

                </EvnetsBody>
                </UpcomingEvents>

        <Footer />
        </>
    )
}
export default Information;