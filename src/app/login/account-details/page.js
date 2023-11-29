"use client";
import { useState } from "react";
import BusinessAccountCreation from '../../../components/login-components/BusinessAccountCreation'
import UserAccountCreation from '../../../components/login-components/UserAccountCreation'

export default function Home() {

    const [user, setUser] = useState(true)

    function UserAccount() {
        setUser(true)
    }

    function BusinessAccount() {
        setUser(false)
    }

    return (
        (user) ? (
        <div>
            <button onClick={UserAccount}>Make a user account</button>
            <button onClick={BusinessAccount}>Make a business account</button>
            <UserAccountCreation />
        </div>
        ) : (
        <div>
            <button onClick={UserAccount}>Make a user account</button>
            <button onClick={BusinessAccount}>Make a business account</button>
            <BusinessAccountCreation />
        </div>
        )

    )
}
