import '../Home/home.reason.style.scss'

const HomeReason = () => {
    return (
        <div className='home__reason' >
            <div className='home__reason_titleDesc'>
                <p>Tại sao các doanh nghiệp chọn chúng tôi?</p>
                <small>Sự hài lòng của khách hàng</small>
            </div>
            <div className='home__reason__box'>
                <div className='home__reason__box__rowOne' >
                    <div className='home__reason_boxOne' >
                        <img src='img\05.png' />
                        <div className='home__reason_boxOne_content' >
                            <p>Hiệu quả</p>
                            <small>Các giải pháp cung cấp đáp ứng 99% về <br />
                                chất lượng và đúng tiến độ. Cải thiện trung <br />
                                bình trên 18% năng suất doanh nghiệp</small>
                        </div>
                    </div>
                    <div className='home__reason_boxTwo' >
                        <img src='img\06.png' />
                        <div className='home__reason_boxTwo_content' >
                            <p>Hiệu quả</p>
                            <small>MedSolution hướng tới sự phát triển <br />
                                bền vững và hợp tác lâu dài <br />
                                với khách hàng</small>
                        </div>
                    </div>
                </div>
                <div className='home__reason__box__rowTwo' >
                    <div className='home__reason_boxThree' >
                        <img src='img\07.png' />
                        <div className='home__reason_boxThree_content' >
                            <p>Không ngừng cải tiến</p>
                            <small>Đầu tư và phát triển đội ngũ R&D <br />
                                để có thể đáp ứng kịp thời <br /> xu hướng phát triển</small>
                        </div>
                    </div>
                    <div className='home__reason_boxFour' >
                        <img src='img\08.png' />
                        <div className='home__reason_boxFour_content' >
                            <p>Vì sức khoẻ cộng đồng</p>
                            <small>Đích đến cuối cùng của chúng tôi <br />
                                là nâng cao chất lượng cuộc sống <br />
                                và sức khoẻ cộng đồng</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeReason