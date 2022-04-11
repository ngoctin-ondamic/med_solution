import './team.professional.style.scss'


const TeamProfessional = () => {
    return (
        <div className='team-professional'>
            <div className='team-professional-title'>
                <p>Gặp gỡ đội ngũ chuyên nghiệp của chúng tôi</p>

                <small>Các chuyên gia trong từng lĩnh vực</small>
            </div>
            <div className='team-professional-box'>
                <div className='team-professional-boxOne'>
                    <img src='./img/team5.jpg' />
                    <p>ROSÉ</p>
                    <small>UI/UX Designer</small>
                    <div className='team-professional-content'>
                        <a href='https://www.facebook.com/hades.2606/'><img src='./img/team8.jpg' /> </a>
                        <a href='#'><img src='./img/team9.jpg' /></a>
                        <a href='#'><img src='./img/team10.jpg' /></a>
                    </div>
                </div>
                <div className='team-professional-boxTwo'>
                    <img src='./img/team6.jpg' />
                    <p>DANIEL RADCLIFFE</p>
                    <small>Senior Programmer</small>
                    <div className='team-professional-content'>
                        <a href='https://www.facebook.com/hades.2606/'><img src='./img/team8.jpg' /> </a>
                        <a href='#'><img src='./img/team9.jpg' /></a>
                        <a href='#'><img src='./img/team10.jpg' /></a>
                    </div>
                </div>
                <div className='team-professional-boxThree'>
                    <img src='./img/team7.jpg' />
                    <p>G-DRAGON</p>
                    <small>Senior Analyst</small>
                    <div className='team-professional-content'>
                        <a href='https://www.facebook.com/hades.2606/'><img src='./img/team8.jpg' /> </a>
                        <a href='#'><img src='./img/team9.jpg' /></a>
                        <a href='#'><img src='./img/team10.jpg' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamProfessional;