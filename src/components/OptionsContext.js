import React from 'react'

const OptionsContext = React.createContext({})

export function OptionsProvider({ children }) {
  const [options, setOptions] = React.useState({})
  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  )
}

export function useOptions() {
  return React.useContext(OptionsContext)
}
