"use client";
import { supabase } from '../../../lib/supabase.js'
import { useState } from "react"

export default function UserAccountCreation() {
    const [username, setUsername] = useState([]);
    const [first, setFirst] = useState([]);
    const [last, setLast] = useState([]);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        //const { userId, idError } = await supabase.auth.getSession()
        //alert(userId)
        
        const { data, dataError } = await supabase.from("Users").insert(
            {user_name: username , first_name: first, last_name: last, uuid: 1}).select()
        alert(data)
    }
    return (
        <div>
        <form
            onSubmit={handleSubmit}>
            <label>Username:
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required />
            </label>
            <label>First name:
                <input
                  id="first-name"
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  required />
            </label>
            <label>Last name:
                <input
                  id="last-name"
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  required />
            </label>
            
            <input type="submit" />
        </form>
        </div>
    )
}