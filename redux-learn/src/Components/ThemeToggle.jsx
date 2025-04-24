import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../Features/Theme/ThemeSlice';

function ThemeToggle() {

    const mode = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();


    return (
        <div style={{ background: mode === 'dark' ? '#333' : '#fff', color: mode === 'dark' ? '#fff' : '#000', padding: 20 }}>
            <h2>Theme: {mode}</h2>
            <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        </div>

    )
}

export default ThemeToggle
