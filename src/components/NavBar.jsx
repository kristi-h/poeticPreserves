import { FiLogOut } from "react-icons/fi";

export function NavBar() {

    function showProfile(imgElement, user) {
        const photoURL = user.photoURL
        
        //give option to add an image
        if (photoURL) {
            imgElement.src = photoURL
        } else {
          <Avatar {...stringAvatar({user.name})} />
        }
    } 

    return(
        <div className={'container nav-menu'}>
            <div>showProfile()</div>
            <button className={'signout-btn'} type="button" onClick={signout}><FiLogOut /></button>
        </div>
    )
}

