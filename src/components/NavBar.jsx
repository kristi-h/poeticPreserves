import { FiLogOut } from "react-icons/fi";

export function NavBar() {
    return(
        <div className={'input-container'}>
          <button className={'signout-btn'} type="button" onClick={signout}><FiLogOut /></button>
        </div>
    )
}

