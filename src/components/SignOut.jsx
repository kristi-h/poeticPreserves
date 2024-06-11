import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

export default function SignOut() {
    const handleSignOut = async () => {
        try {
            await signOut(auth)
        } catch(e) {
            console.log(e)
        }
    }
    return (
        <button className="sign-out" onClick={handleSignOut}>
            <FiLogOut />
        </button>
    )
}