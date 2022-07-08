import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    profile: false,
    search: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#FF5C8E')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    
    const setMode = (mode) => {
        setCurrentMode(mode)

        localStorage.setItem('themeMode', mode)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    const handleUnclick = (clicked) => {
        setIsClicked({...initialState, [clicked]: false})
    }

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, handleUnclick, screenSize, setScreenSize, currentColor, currentMode, setColor, setMode, themeSettings, setThemeSettings }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)