import React from 'react'
import { replace } from 'gatsby'
import Cookies from 'universal-cookie'

const AuthWrapper = ({children}) => {
    if (typeof window !== 'undefined' && queryParams) {
        const cookies = new Cookies();
        const queryParams = window.location.search;
        const urlParams = new URLSearchParams(queryParams);
        let shop = null;
        let token = null;

        shop = urlParams.get('shop');
        token = urlParams.get('token');

        if (shop && token) {
            cookies.set('shop', shop, { path: '/' });
            cookies.set('token', token, { path: '/' });

            // this.setState({ 
            //     shop,
            //     token
            // });
        }

        if (cookies.get('shop') && cookies.get('token')) {
            return children
        } else {
            if (urlParams.get('hmac')) {
                replace(`/.netlify/functions/reauth${queryParams}`)
            } else {
                replace(`/install`)
            }
            return <></>
        }
    } else {
        return <></>
    }
}

export default AuthWrapper
