import React from 'react'
import Logo from '../Logo/logo.component'
import Navbar from '../Navbar/navigation.component'
import '../Header/header.style.scss'
import { useEffect , useState} from 'react'
import NavBarMenu from '../Navbar/navigation.component.menu'

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)
    }, [])


    if (width >= 400 && width <= 1199) {
        return (
            <div className='header' >
                <Logo color='#333535' />
                <NavBarMenu/>
            </div>
        )
    } else {
        return (
            <div className='header' >
                <Logo color='#333535' />
                <Navbar />
            </div>
        )
    }
}

export default Header