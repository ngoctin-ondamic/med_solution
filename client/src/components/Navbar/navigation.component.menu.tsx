import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'
import '../Navbar/navigation.menu.style.scss'
import {Link} from 'react-router-dom'

const NavBarMenu = () => {
    return (
        <Dropdown className='navBarMenu'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu>    
                <Dropdown.Item href='/' >Trang chủ</Dropdown.Item>
                <Dropdown.Item href='/about-us' >Giới thiệu</Dropdown.Item>
                <Dropdown.Item href='/service' >Sản phẩm và dịch vụ</Dropdown.Item>
                <Dropdown.Item href='/team' >Đội ngũ</Dropdown.Item>
                <Dropdown.Item href='/contact' >Liên hệ</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default NavBarMenu