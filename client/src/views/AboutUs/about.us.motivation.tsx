import '../AboutUs/about.us.motivation.style.scss'
const AboutUsMotivation = () => {
    return (
        <div className='aboutUs__passion' >
            <div className='aboutUs__passion__content'>
                <p>'Niềm Đam Mê Vì Mục Tiêu Chung' </p>
                <img src='img\au_passion.PNG' />
                <div className='aboutUs__passion__content__line'></div>
                <small>Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy,
                    nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước,
                    các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa.</small>
                <div className='aboutUs__passion__content__user'>
                    <img src='img\user.png' />
                    <div className='aboutUs__passion__content__user__content'>
                        <p>Vladimir Putin</p>
                        <small>Russia President</small>
                    </div>
                </div>
            </div>

            {/*  */}
        </div>
    )
}

export default AboutUsMotivation