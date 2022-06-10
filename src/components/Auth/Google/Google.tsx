import React from 'react';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';


const Google = ({informParent}:any): JSX.Element => {

    const responseGoogle = (response:any) =>{
        informParent(response);
    }
    return (
        <GoogleLogin
          clientId={`${process.env.GOOGLE_CLIENT_ID}`}
          buttonText='Login with google'
          render={renderProps => (
            <button style={{
                backgroundColor: 'white',
                padding: '10px 25px',           
                border:'none',
                display: 'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                outline: 'none',
                width: 250,
                margin: 10,
                fontSize:16,
                borderRadius:5,
                cursor: 'pointer',
                boxShadow:`#64646433 0px 5px 8px 0px`
              }} 
              onClick={renderProps.onClick} 
              disabled={renderProps.disabled}>
             <FcGoogle size={20} style={{marginRight:10}} /> Sign in with Google
            </button>
        )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
    )
}

export default Google;