import { Link } from 'react-router-dom'
import '../Home/home.about.style.scss'
const HomeAbout = () => {
  return (
    <div className='home__about' >
                <div className='home_about_titleDesc'>
                    <p>Niềm tin của khách hàng là mục tiêu của chúng tôi</p>
                    <small>Chất lượng, uy tín và đồng hành cùng bạn!</small>
                </div>
                <div className='home_about_sight'>
                    <div className='home_about_sight_pictures'>
                        <img src='img\03.png' />
                        <img src='img\01.png' />
                        <img src='img\02.png' />
                        <img src='img\badget-modified.png' />
                    </div>
                    <div className='home_about_sight_content' >
                        <p>Tầm nhìn doanh nghiệp</p>
                        <small>Mục tiêu của chúng tôi trở thành công ty cung cấp <br />
                            giải pháp chuyển đổi số ngành sức khoẻ <br />
                            và dược phẩm uy tín hàng đầu Việt Nam vào năm 2025</small>
                    </div>
                </div>
                <div className='home_about_mission'>
                    <div className='home_about_mission_content' >
                        <p>Sứ mệnh doanh nghiệp</p>
                        <small>MedSolution cam kết mang đến các giải pháp công nghệ
                            <br /> ngành sức khoẻ và dược phẩm bằng chính sự trân trọng,
                            <br />tận tâm và trách nhiệm cao của mình với cuộc sống
                            <br />con người và xã hội</small>
                        <Link to="#" >Xem thêm</Link>
                    </div>
                    <img src='img\04.png' />
                </div>
            </div>
  )
}

export default HomeAbout