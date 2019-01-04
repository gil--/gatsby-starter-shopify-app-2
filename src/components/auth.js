import React from 'react'
import { replace } from 'gatsby'
import Cookies from 'universal-cookie'

const AuthWrapper = ({children}) => {
    if (typeof window !== 'undefined') {
        const cookies = new Cookies();
        const queryParams = window.location.search;
        const urlParams = new URLSearchParams(queryParams);
        let shop = null;
        let apiKey = null;

        shop = urlParams.get('shop');
        apiKey = urlParams.get('apiKey');

        if (shop && apiKey) {
            cookies.set('shop', shop, { path: '/' });
            cookies.set('apiKey', apiKey, { path: '/' });

            // this.setState({ 
            //     shop,
            //     apiKey
            // });
        }

        if (cookies.get('shop') && cookies.get('apiKey')) {
            return React.cloneElement(children, { shop: cookies.get('shop'), apiKey: cookies.get('apiKey') })
        } else {
            if (urlParams.get('hmac')) {
                window.location.href = `${window.location.origin}/.netlify/functions/reauth${queryParams}`
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
