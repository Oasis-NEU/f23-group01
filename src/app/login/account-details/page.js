//import BusinessAccountCreation from '../../../components/login-components'
//import UserAccountCreation from '../../../components/login-components'

export default function Home() {
    
    var user = True;
    return (
    <div>
        <button onclick={user = true}>Make a user account</button>
        <button onclick={user = false}>Make a business account</button>
        if (user) {
            <p>user account</p>
            //<UserAccountCreation />
        }
        else {
            //<BusinessAccountCreation />
            <p>business account</p>
        }
    </div>
    )
}
