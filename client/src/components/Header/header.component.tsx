import React from 'react'
import Logo from '../Logo/logo.component'
import Navbar from '../Navbar/navigation.component'
import '../Header/header.style.scss'

const Header = () => {
    return (
        <div className='header' >
            <Logo color='#333535'/>
            <Navbar />
        </div>
    )
}

export default Header