import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import SignOut from "./SignOut";


export default function NavBar() {
    const { user } = useUser()
    return (
        <header>
            <nav>
                <ul>
                    {
                        !user &&
                        <>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='register'>Register</Link></li>
                        </>
                    }
                    {
                        user && <SignOut />
                    }
                </ul>
            </nav>
        </header>
    )
}






