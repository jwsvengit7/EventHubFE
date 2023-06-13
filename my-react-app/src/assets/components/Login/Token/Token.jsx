
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Containers, Text, View } from '../../Styled/Styled';
const PORT = 8999;

const Token = () => {
  const { token } = useParams();
  alert(token)
  const email = localStorage.getItem('email');
  const [mainMessage, setMainMessage] = useState('');

  let val="";


  useEffect(() => {
    const url = `http://localhost:${PORT}/api/v1/auth/verify-email`;
    axios
      .get(url, {
        headers: { 'Access-Control-Allow-Origin': '*' },
        params: {
          token: token,
        },
      })
      .then(response => {
        console.log(response.data);
        console.log(response.status);


        
          if (response.status == 200) {
            setMainMessage("USER ACTIVATED");
            return;
          }
       
            
   
      })
      .catch(error => {
        console.error(error);
        setMainMessage("Try again or check verification Link");
      });
  }, []);

  return (
    <View>
      <Containers>
        <Text>{mainMessage}</Text>
      </Containers>
    </View>
  );
};

export default Token;


