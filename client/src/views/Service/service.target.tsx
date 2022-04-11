import './service.target.style.scss'

const ServiceTarget = () => {
    return (
        <div className='target' >
            <div className='target-slogan' >
                <div className='target-slogan-content' >
                    <p>Đơn giản hóa hệ thống</p>
                    <p>với các giải pháp công nghệ</p>
                </div>
                <img src='img\services1.png' />
            </div>
            <div className='target-slogan-list' >
                <div className='target-left'>

                </div>
                <div className='target-right'>
                    <div className='target-right-display'>
                        <img src='img\services2.jpg' />
                        <div>
                            <p>Thảo Luận Dự Án</p>
                            <small>
                                Phân tích các bên liên quan.
                                <br /> Phân tích các data cần thiết.
                            </small>
                        </div>
                    </div>
                    <div className='target-right-display'>
                        <img src='img\services3.jpg' />
                        <div>
                            <p>Nghiên Cứu Tình Huống</p>
                            <small>
                                Đưa ra nhiều trường hợp.
                                <br />Chỉ ra đúng sai trong các trường hợp.
                            </small>
                        </div>
                    </div>
                    <div className='target-right-display'>

                        <img src='img\services4.jpg' />
                        <div>
                            <p>Thực Hiện Dự Án</p>
                            <small>Bắt đầu thực hiện dự án</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTarget;