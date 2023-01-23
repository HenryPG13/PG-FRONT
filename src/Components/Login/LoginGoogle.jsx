import { useAuth0 ,  withAuthenticationRequired} from '@auth0/auth0-react';
import React from 'react';


  const LoginGoogle = () => {
    // const { loginWithRedirect  } = useAuth0();
    const { isAuthenticated, logout, user } = useAuth0();

    return (
        <div>
            <div>
                <h1>hola mundo</h1>
            </div>
        <div>
            <span>Hi, {user.name} <img width={50} height={50} src={user.picture} alt="" /></span>
            <div>Logged: {String(isAuthenticated)}</div>
            <div>Verified: {String(user.email_verified)}</div>
            <button onClick={logout}>Logout</button>
        </div>
        </div>
    );

}; 
export default withAuthenticationRequired(LoginGoogle);
 