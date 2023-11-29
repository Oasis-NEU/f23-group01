"use client";
import { supabase } from '../../../lib/supabase.js'
import { useState } from "react"

export default function BusinessAccountCreation() {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { userId, idError } = await supabase.auth.getUser()
        
        /*
        const {dataError } = await supabase.from("Businesses").insert(
            {name: name , email: email, phone_number: phoneNumber})
        */
    
    }
    return (
        <div>
        <form
            onSubmit={handleSubmit}>
            <label>Business name:
                <input
                  id="business-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />
            </label>
            <label>Company email:
                <input
                  id="business-name"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
            </label>
            <label>Company phone number:
                <input
                  id="business-name"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required />
            </label>
            
            <input type="submit" />
        </form>
        </div>
    )
}