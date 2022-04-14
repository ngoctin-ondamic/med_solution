import React from 'react'
import { useState } from 'react'
import { IUser } from '../../models/user.model';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../Home/home.feedback.style.scss'
const HomeFeedback = () => {

    const [data, setData] = useState<Array<IUser>>([
        {
            id: 1,
            avatar: 'img/user.png',
            name: 'Nguyen Ngoc Tin',
            description: 'Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi.',
            job: 'Fullstack Developer',
            rating: 3
        },
        {
            id: 2,
            avatar: 'img/user.png',
            name: 'Ngo Manh Thanh',
            description: 'Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi.',
            job: 'Fullstack Developer',
            rating: 4
        },
        {
            id: 3,
            avatar: 'img/user.png',
            name: 'Ho Trong Hieu',
            description: 'Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi.',
            job: 'Fullstack Developer',
            rating: 5
        },
    ]);
    const [user, setUser] = useState<IUser>({
        id: 1,
        avatar: 'img\\user.png',
        name: 'Nguyen Ngoc Tin',
        description: ' Một giáo sư của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum.',
        job: 'Fullstack Developer',
        rating: 3
    });
    const [flag, setFlag] = useState<number>(1);
    const [rating, setRating] = useState<number>(1);
    function handleOnChange(event: React.MouseEvent) {
        console.log(`handleOnChange : ${event.currentTarget.getAttribute("name")?.toString()}`);
        if (event.currentTarget.getAttribute("name") === 'btnNext') {
            console.log(`handleOnChange : ${event.currentTarget.getAttribute("Previous")?.toString()}`);
            var current = flag + 1;
            console.log(current);
            if (current > data.length) {
                current = 1;
            }
            setFlag(current);
            data.forEach((user: IUser) => {
                if (user.id === current) {
                    setUser(user);
                    setRating(user.rating);
                }
            })
        } else {
            console.log(`handleOnChange : ${event.currentTarget.getAttribute("Next")?.toString()}`);
            var current = flag - 1;
            console.log(current)
            if (current < 1) {
                current = data.length
            }
            setFlag(current);
            data.forEach((user: IUser) => {
                if (user.id === current) {
                    setUser(user);
                    setRating(user.rating);
                }
            })
        }
    }

    return (
        <div className='home__feedback' >
            <div className='home__feedback__titleDesc' >
                <p> Cảm nhận của khách hàng về MedSolution</p>
                <small>Suy nghĩ của bạn là tương lai của chúng tôi.</small>
            </div>
            <div className='home__feedback__slider' >

                <div className='home__feedback__slider__box'>
                    <img src={user.avatar} />
                    <div className='home__feedback__slider__box__text' >
                        <p>{user.name}</p>
                        <div className='home__feedback__slider__box__text__job'>
                            <button name='btnPrev' onClick={handleOnChange} > <ArrowBackIcon /> </button>
                            <p>{user.job}</p>
                            <button name="btnNext" onClick={handleOnChange} ><ArrowForwardIcon /> </button>
                        </div>
                        <p>{user.description}</p>
                    </div>
                    <div className='home__feedback__slider__box__star'>
                        {
                            [...Array(user.rating)].map(star => <StarIcon />)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeFeedback