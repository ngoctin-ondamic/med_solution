import React from 'react'
import { Link } from 'react-router-dom'
import '../AboutUs/about.us.team.style.scss'
const AboutUsProTeam = () => {
    return (
        <div className='aboutUs__proteam'>
            <div className='aboutUs__proteam__img' >
                <div className='aboutUs__proteam__img__rowOne' >
                    <img src='img\au_team_01.jpg' />
                </div>
                <div className='aboutUs__proteam__img__rowTwo' >
                    <img src='img\au_team_02.jpg' />
                    <img src='img\au_team_03.jpg' /></div>
            </div>
            <div className='aboutUs__proteam__content' >
                <p>Đội Viên <br/>Chuyên Nghiệp</p>
                <small>
                Chúng tôi là những con người trẻ giỏi nhất với đầy sự nhiệt huyết, tinh thần trách nhiệm cao và được trang bị đầy đủ các kiến thức cũng như là kinh nghiệm thực tế.
                </small>
                <small>
                    Để xem thông tin chi tiết điểm nổi bật của từng thành viên ...
                </small>
                <Link to="#">Chi tiết</Link>
            </div>
        </div>
    )
}

export default AboutUsProTeam