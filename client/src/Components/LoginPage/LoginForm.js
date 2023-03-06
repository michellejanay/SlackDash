import React, { useState, useEffect } from 'react';
import "../../pages/Login.css";

function LoginForm() {
  // I have just added this click handle functions to use for future purposes
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [userInputClass, setUserInputClass] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
	const [userInputPasswordClass, setUserInputPasswordClass] = useState("");

  const handleEmailChange = (event) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const inputEmail = event.target.value;
    setIsValidEmail(emailRegex.test(inputEmail));
    setEmail(event.target.value);
    if(isValidEmail){
      setUserInputClass("userInput")
    }else{
      setUserInputClass("userInputWrong")
    }
  };

  const handlePasswordChange = (event) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
	  const inputPassword = event.target.value;
	  setIsValidPassword(passwordRegex.test(inputPassword));
    setPassword(event.target.value);
	  if(isValidPassword){
		setUserInputPasswordClass("userInputPassword")
	  }else{
		setUserInputPasswordClass("userInputPasswordWrong")
	  }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };
  return (
    <div className='userDetail'>
     <form onSubmit={handleSubmit} className='loginForm' >
      <label htmlFor='email'>Email</label>
      <input type="email" value={email} onChange={handleEmailChange} className={userInputClass===""?"userInput":userInputClass} id='email' required />
      <label htmlFor='password' >Password</label>
      <input type="password" value={password} onChange={handlePasswordChange} className={userInputPasswordClass===""?"userInputPassword":userInputPasswordClass} required/>
      <button type="submit" className='submitBtn' >Continue</button>
     </form>
   </div>
  )
}

export default LoginForm
