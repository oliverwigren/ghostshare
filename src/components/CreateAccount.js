import React from "react";
import { addUser } from './components/Firebase';

export function CreateAccount() {

    const handleSubmit = (e) => {
        e.preventDefault()

        // addUser({
        //     username:
        // })
    }

    return (
       <section>
        <h1></h1>
        <p></p>

         <form onSubmit={handleSubmit}>
            <label htmlFor="username" >Username</label>
            <input name="username" type="username" placeholder="username" id="username" autoComplete="off" />
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="password" id="password" autoComplete="off" />
            <button type="submit">Sign up </button>
        </form>   
       </section>
    )
}