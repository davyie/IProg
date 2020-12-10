import React from 'react';
const Auth = (props) => {
    const {email, password, setEmail, setPassword,createLogin,createSignup,existingAccount,setExistingAccount,emailError,passwordError} 
    = props;


    return (

        <section className="login">
        
        <div className="loginContainer"> 
        <label>Username </label>
        <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}> </input>
        <p className= "errorMsg">{emailError} </p> 
        <label>Password </label>
        <input type="password" autoFocus required value={password} onChange={(e)=>setPassword(e.target.value)}> </input>
        
        
        </div>



        </section>
    )


} 
export default Auth;
