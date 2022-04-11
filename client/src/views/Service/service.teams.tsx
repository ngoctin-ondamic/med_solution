import { Link } from "react-router-dom";
import './service.teams.style.scss'

const ServiceTeams = () => {
    return (
        <div className='service-team'>
            <img src='img\service5.jpg' />
            <p>Tìm Hiểu Về Đội Ngũ Nhân Viên Của Chúng Tôi</p>
            <Link to='../team'>Thông Tin Nhóm</Link>
        </div>
    )
}
export default ServiceTeams;