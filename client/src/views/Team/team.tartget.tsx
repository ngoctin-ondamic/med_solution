import './team.target.style.scss'


const TeamTarget = () => {
    return (
        <div className='team-target'>
            <img src='./img/au_solution_02.jpg' />
            <img src='./img/team2.jpg' />

            <div className='team-target-box'>
                <p>Nhóm của chúng tôi đưa ra cho bạn các giải pháp tốt nhất</p>
                <small>Tiêu chí của team chúng tôi</small>
                <div className='team-target-box-rowOne'>
                    <div className='team-target-box-one'>
                        <img src='./img/team3.jpg' />
                        <div className='team-target-box-one-content' >
                            <p>Tận tâm với khách hàng</p>
                        </div>
                    </div>
                    <div className='team-target-box-two'>
                        <img src='./img/team3.jpg' />
                        <div className='team-target-box-two-content' >
                            <p>Hỗ trợ trực tiếp</p>
                        </div>
                    </div>
                </div>
                <div className='team-target-box-rowTwo'>
                    <div className='team-target-box-three'>
                        <img src='./img/team3.jpg' />
                        <div className='team-target-box-three-content' >
                            <p>Chuyên nghiệp trong công việc</p>
                        </div>
                    </div>
                    <div className='team-target-box-four'>
                        <img src='./img/team3.jpg' />
                        <div className='team-target-box-four-content' >
                            <p>Chuyên gia trong các lĩnh vực</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamTarget;