import React from 'react'

const formContext = React.createContext({ authenticated: false, login: () => { } })

export default formContext;