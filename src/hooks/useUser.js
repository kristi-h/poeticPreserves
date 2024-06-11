import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function useUser() {
    const { user, error } = useContext(UserContext)

    return { user, error }
}