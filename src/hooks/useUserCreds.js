import { useState } from 'react'

export function useUserCreds() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return { password, setPassword, email, setEmail }
}