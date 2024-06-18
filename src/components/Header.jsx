import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import SignOut from "./SignOut";


export default function Header() {
    const { user } = useUser()
    return (
        <header>
            <nav>
                <ul>
                    {
                        !user &&
                        <>
                            <Link to='/' className="nav-item">Home</Link>
                            <Link to='register' className="nav-item">Register</Link>
                        </>
                    }
                    {
                        user && 
                        <>
                            <Link to='/' className="nav-item">Home</Link>
                            <Link to='/create-poem' className="nav-item">New Poem</Link>
                            <Link to='/get-poems' className="nav-item">Poems</Link>
                            <SignOut />
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}






