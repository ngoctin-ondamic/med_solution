import React from 'react'
import {Link} from 'react-router-dom'
import '../Navbar/navigation.style.scss'
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Trang chủ</Link>
            <Link to="/about-us">Giới thiệu</Link>
            <Link to="/service">Sản phẩm và dịch vụ</Link>
            <Link to="/team">Đội ngũ</Link>
            <Link to="/contact">Liên hệ</Link>
        </div>
    )
}

export default Navbar