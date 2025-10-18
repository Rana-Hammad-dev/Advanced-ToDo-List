import React from 'react'
import './Style.css'

const Navbar = ({ setMode, mode }) => {



    return (
        <div className='navbar'>
            <h1>My Tasks</h1>
            <div className='mode' onClick={() => { setMode(!mode) }}>
                <div className={mode ? `mode-btn move` : `mode-btn`}></div>
            </div>
        </div>
    )
}

export default Navbar
