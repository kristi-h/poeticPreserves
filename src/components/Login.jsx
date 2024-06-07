import React from 'react'

const Login = ({user, createClicked, loginClicked}) => {
    const [emailInput, setEmailInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')
    const [emailInputError, setEmailInputError] = React.useState('')
    const [passwordInputError, setPasswordInputError] = React.useState('')
  
    const onAcctCreateClick = () => {
      setUser(prev => ({
        ...prev,
        email: emailInput,
        password: passwordInput
      }))
      console.log({emailInput})
      console.log({passwordInput})

      //firebse method to login
      createClicked
    }
    
    const onAcctLoginClick = () => {
      setUser(prev => ({
        ...prev,
        email: emailInput,
        password: passwordInput
      }))
      console.log({emailInput})
      console.log({passwordInput})

      if (emailInput === user.email && passwordInput === user.password){
        loginClicked
      } else {
        "Login credentials could not be found. Please try again or create a new account."
      }
    }
  
    

    return (
      <div className={'outer-container'}>
        <div className={'title-container'}>
          <div>Login</div>
        </div>
        <br />
        <div className={'input-container'}>
          <input
            value={emailInput}
            placeholder="Email"
            onChange={(e) => setEmailInput(e.target.value)}
            className={'input-box'}
          />
          <label className="error-label">{emailInputError}</label>
        </div>
        <br />
        <div className={'input-container'}>
          <input
            value={passwordInput}
            placeholder="Password"
            onChange={(e) => setPasswordInput(e.target.value)}
            className={'input-box'}
          />
          <label className="error-label">{passwordInputError}</label>
        </div>
        <br />
        <div className={'input-container'}>
          <input className={'input-button'} type="button" onClick={onAcctLoginClick} id="login-btn" value={'Log in'} />
        </div>
        <div className={'input-container'}>
          <input className={'input-button'} type="button" onClick={onAcctCreateClick} id="create-btn" value={'Create account'} />
        </div>
      </div>
    )
  }
  
  export default Login