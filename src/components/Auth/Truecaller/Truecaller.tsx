import React from 'react';
import axios from 'axios';
import { v4 as uuidV4 } from 'uuid';
import { IoMdCall } from 'react-icons/io';
import { toast } from 'react-toastify';

const Truecaller = ({ informParent }: any) => {
  const loginWithTruecaller = () => {
    const randomRequestId = uuidV4();
    var wnd: any = window.open(
      `truecallersdk://truesdk/web_verify?requestNonce=${randomRequestId}&partnerKey=${
        process.env.NEXT_APP_TRUECALLER_PARTNER_KEY
      }&partnerName=${'Invest With Tribe'}&lang=en&title=TrueCaller`
    );

    setTimeout(function () {
      if (wnd.location.href === 'about:blank') {
        // Truecaller app not present on the device and you redirect the user
        toast.warn('Kindly install Truecaller');
        wnd.close();
      } else {
        setTimeout(() => {
          let timo: any;

          let intv = setInterval(() => {
            // request status 200 intv
            axios
              .post('/api/users/truecaller-polling', {
                requestId: randomRequestId,
              })
              .then(({ data }) => {
                console.log(data);
                clearInterval(intv);
                clearTimeout(timo);
              })
              .catch((err) => {
                console.log('re requesting');
              });
            console.log('sending request');
          }, 1000);

          timo = setTimeout(() => {
            clearInterval(intv);
            toast.warn('TimeOut...!');
          }, 10000);
        }, 500);
        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify and you'll receive the user's access token to fetch the profile on
        // your callback URL - post which, you can refresh the session at your frontend and complete the user verification
      }
    }, 500);

    informParent(randomRequestId);
  };

  return (
    <button
      style={{
        backgroundColor: 'white',
        padding: '10px 25px',
        border: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        outline: 'none',
        width: 250,
        margin: 10,
        fontSize: 16,
        borderRadius: 5,
        cursor: 'pointer',
        boxShadow: `#64646433 0px 5px 8px 0px`,
      }}
      onClick={loginWithTruecaller}
    >
      <IoMdCall color='#1A7EB8' size={20} style={{ marginRight: 10 }} />
      Sign in with Truecaller
    </button>
  );
};

export default Truecaller;
