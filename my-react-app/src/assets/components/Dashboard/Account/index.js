fetch("http://localhost:8999/api/v1/bank/account",{
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGlvcmx1amFja0BnbWFpbC5jb20iLCJpYXQiOjE2ODcyMDk0NDEsImV4cCI6MTY4NzI5NTg0MX0.87nEMHIROYcdmGh3AR67oCAeKF4y6ceVpd6_EVHyfMjdR81MFm8dxtuqCVMcHWmlWruQNh9Txlu9baV5H-_dXQ`
      }
}).then(response=>response.json())
.then((data)=>{
    console.log(data)
})