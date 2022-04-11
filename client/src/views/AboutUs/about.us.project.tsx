import '../AboutUs/about.us.project.style.scss'
const AboutUsProject = () => {
    return (
        <div className='aboutUs__project'>
            <div className='aboutUs__project__divOne' >
                <p>Triển Khai Và Mô
                    <br /> Phỏng Dự Án</p>
                <small>Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500,
                     khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản.</small>
            </div>
            <div className='aboutUs__project__divTwo' >
                <div className='aboutUs__project__divTwo__rowOne'>
                    <div className='aboutUs__project__divTwo__rowOne__item' >
                        <p>500+</p>
                        <small>Dự Án Đã Nhận</small>
                    </div>
                    <div className='aboutUs__project__divTwo__rowOne__item' >
                        <p>35K</p>
                        <small>Thời Gian Thực Hiện</small>
                    </div>
                </div>
                <div className='aboutUs__project__divTwo__rowTwo'>
                    <div className='aboutUs__project__divTwo__rowOne__item' >
                        <p>70+</p>
                        <small>Nhân Viên <br/> Chuyên Nghiệp</small>
                    </div>
                    <div className='aboutUs__project__divTwo__rowOne__item' >
                        <p>15K</p>
                        <small>Tổng Nguồn</small>
                    </div>
                </div>
            </div>
            <img src='img\au_project_01.jpg' />
        </div>
    )
}

export default AboutUsProject