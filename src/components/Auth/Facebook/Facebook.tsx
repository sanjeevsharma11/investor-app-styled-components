import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { BsFacebook } from 'react-icons/bs'

const Facebook = ({ informParent }: any) => {
  const responseFacebook = (response: any) => {
    informParent(response)
  }
  return (
    <FacebookLogin
      appId={`${process.env.FACEBOOK_APP_ID}`}
      autoLoad={false}
      callback={responseFacebook}
      render={(renderProps: any) => (
        <button
          className="flex justify-center items-center text-white w-56 p-2"
          style={{
            backgroundColor: '#1877F2',
            padding: '10px 25px',
            color: 'white',
            border: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
            margin: 10,
            outline: 'none',
            fontSize: 16,
            borderRadius: 5,
            cursor: 'pointer',
          }}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <BsFacebook size={20} style={{ marginRight: 10 }} /> Sign in With
          Facebook
        </button>
      )}
    />
  )
}

export default Facebook
