import React from 'react'
import { replace } from 'gatsby'
import Cookies from 'universal-cookie'

const AuthWrapper = ({children}) => {
    const cookies = new Cookies();
    let shop = null;
    let token = null;

    if (typeof window !== 'undefined' && window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        shop = urlParams.get('shop');
        token = urlParams.get('token');
    }

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
        if (typeof window !== 'undefined' && window) {
            replace(`/install`)
        }
        return <></>
    }
}

export default AuthWrapper
