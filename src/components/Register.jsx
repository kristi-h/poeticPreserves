import { useUserCreds } from "../hooks/useUserCreds"
import { createAccount } from "../library/firebase"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const {
        password,
        setPassword,
        email,
        setEmail
    } = useUserCreds()
    const navigate = useNavigate()

    const handleOnCreateClick = async () => {
      const creds = { email, password }

      //firebse method to login
      try {
        await createAccount(creds)
        console.log('success')
        navigate('create-poem', { replace: true })
      } catch(e) {
        console.log(e)
      }
    }
  return (
    <div className={'outer-container'}>
        <div className={'title-container'}>
          <div style={{fontSize: 48}}>Create Account</div>
        </div>
        <br />
        <div className={'input-container'}>
          <input
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={'input-box'}
          />
        </div>
        <br />
        <div className={'input-container'}>
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={'input-box'}
          />
        </div>
        <br />
        <div className={'input-container'}>
            <input className={'input-button'} type="button" onClick={handleOnCreateClick} id="create-btn" value='Submit' />
        </div>
      </div>
  )
}

export default Register