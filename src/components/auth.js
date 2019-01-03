import React from 'react'
import { replace } from 'gatsby'

const AuthWrapper = ({children}) => {
    const isAuthenticated = false // get authToken from cookie

    if (!isAuthenticated) {
        replace(`/install`)
        return <></>
    } else {
        return children
    }

}

export default AuthWrapper
