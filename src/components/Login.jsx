
import { Link } from 'react-router-dom'
import { useUserCreds } from '../hooks/useUserCreds'
import { loginAccount } from '../lib/firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {
      password,
      setPassword,
      email,
      setEmail
    } = useUserCreds()
    const navigate = useNavigate()
    
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
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={'input-box'}
          />
          {/* <label className="error-label">{emailInputError}</label> */}
        </div>
        <br />
        <div className={'input-container'}>
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={'input-box'}
          />
          {/* <label className="error-label">{passwordInputError}</label> */}
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