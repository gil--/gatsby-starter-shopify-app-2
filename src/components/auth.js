import React from 'react'
import { replace } from 'gatsby'
import Cookies from 'universal-cookie'

const AuthWrapper = ({children}) => {
    const cookies = new Cookies();
    const urlParams = new URLSearchParams(window.location.search);
    const shop = urlParams.get('shop');
    const token = urlParams.get('token');

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
        replace(`/install`)
        return <></>
    }
}

export default AuthWrapper
