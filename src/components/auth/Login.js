import React, { useState, useEffect } from 'react';
// import db, { auth } from '../../firebase'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const Login = (props) => {

    // const [posts,setPost] = useState([]);
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const onPasswordChange = (event) => setPassword(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);

 
  const history = useHistory();

  const onSubmit = () => {

// var formJson = {
//   'email': email,
//     'password': password
// };
// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
const formData = new FormData();
    formData.append('email',email);
    formData.append('password',password);
  axios.post('http://projectsimplifiedcompany.atwebpages.com/login.php',formData)
  .then(response =>{
    console.log("my res-> ",response.data); 
   if(response.data[0].message=="success"){
    // localStorage.setItem("user", JSON.stringify(response.data));
     history.push('/main');
   }else{
    console.log("unable......")
   }

  });
  // var json = JSON.stringify({
  //   email: email,
  //   password: password 
  // });
}



  return (
    <div>

      <input type="text" name="email" placeholder="email" value={email} onChange={onEmailChange}></input>
<input type="text" name="password" placeholder="Password" value={password} onChange={onPasswordChange}></input>
        <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Login;