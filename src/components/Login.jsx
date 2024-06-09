
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
    
    const handleLogin = async () => {
      const creds = { email, password }
      try {
        const user = await loginAccount(creds)
        console.log('user login success', user)
        navigate('create-poem', { replace: true })
      } catch(e) {
        console.log(e)
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
        <div className="input-buttons">
          <div className={'input-container'}>
            <input className={'input-button'} type="button" onClick={handleLogin} id="login-btn" value={'Log in'} />
          </div>
          <Link to='register' >
            Or Sign Up
          </Link>
        </div>
      </div>
    )
  }
  
  export default Login