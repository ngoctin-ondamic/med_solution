import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { initialUserContact, IUserContact } from '../../models/user.model';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { blue } from '@mui/material/colors';
import LocationOnIconMain from '@mui/icons-material/LocationOn';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import GoogleMapReact from 'google-map-react'
import PhoneContact from '../../components/Contact/phone-contact.component'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import userService from '../../services/user.service';
import { IIconParam } from '../../models/styles/contact.model'
import './contact.style.scss'
import { ValidateUtil } from '../../utils/ValidateUtil';
import { IEmail, initialEmail } from '../../models/email.model';
import emailjs from '@emailjs/browser';
import applicationService from '../../services/application.service';
import EMAIL_TEMPLATE_ENUM from '../../enum/emailTemplateID.enum';

const Contact = () => {

    const [userContact, setUserContact] = useState<IUserContact>({ ...initialUserContact, typeContact: 1 });

    const [email, setEmail] = useState<IEmail>(initialEmail);

    useEffect(() => {
        const fetchData = async () => {
            var response : IEmail | null = await applicationService.getInUseEmail();
            if (response) {
                console.log(response.userId)
                setEmail(response);
            }
        }
        fetchData().catch(console.error);
    }, [])



    function LocationOnIcon(props: IIconParam) {
        return (
            <SvgIcon {...props} component={props.iconName === 'location' ? LocationOnIconMain : props.iconName === "calling" ? CallIcon : props.iconName === "callBack" ? PhoneCallbackOutlinedIcon : AttachEmailIcon} inheritViewBox />
        );
    }

    const MapComponent = (text: IIconParam) => (
        <div style={{
            backgroundColor: 'none',
            position: 'absolute',
            color: 'white',
            background: 'grey',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
        }}>
            {text.mapName}
        </div>
    );

    let defaultProps = {
        center: { lat: 10.78, lng: 106.66 },
        zoom: 12

    };

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        var id = event.currentTarget.getAttribute("id");
        switch (id) {
            case 'fullname':
                setUserContact({ ...userContact, fullname: event.currentTarget.value })
                break;
            case 'email':
                setUserContact({ ...userContact, email: event.currentTarget.value })
                break;
            case 'phoneNumber':
                setUserContact({ ...userContact, phoneNumber: event.currentTarget.value })
                break;
            case 'subject':
                setUserContact({ ...userContact, subject: event.currentTarget.value })
                break;
            case 'description':
                setUserContact({ ...userContact, description: event.currentTarget.value })
                break;
            default:
                break;
        }

    }

    async function onClickHandler(event: React.MouseEvent) {
        event.preventDefault();
        console.log('onClickHandler')
        var id = event.currentTarget.getAttribute("id");
        if (ValidateUtil.validateUserContactForm(userContact)) {
            if (id === 'sendUserContactMessageBtn') {
                var responseCreateNewUserContact = await userService.createNewUserContact(userContact);
                var respponseEmail = await userService.sendEmail(userContact, email);
                if (
                    responseCreateNewUserContact === true
                    && respponseEmail === true) {
                    setUserContact({ ...initialUserContact, typeContact: 1 });
                } else {
                }
            }
        } else {
            // diaglog false
        }
    }

    return (
        <Container fluid className='contact'>
            <Row className="mb-5">
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}
                        bootstrapURLKeys={{ key: 'AIzaSyAy43gOxGJ_Sskeskei3ao_2yL66spDie0' }}
                    >
                        <MapComponent mapName={'MedSolutions'} />
                    </GoogleMapReact>
                </div>
            </Row>
            <Form id="contact-form">
                <Form.Group role="form" >
                    <Row>
                        <Col md={3}></Col>
                        <Col md={3} style={{ wordWrap: 'break-word' }} className="center">
                            <Row className="mb-2"><h2>Đơn giản hóa việc giao tiếp với chúng tôi và tư vấn miễn phí ngay bây giờ.</h2></Row>
                            <Row className="mb-2">
                                <Col md={3}>
                                    <LocationOnIcon sx={{ color: blue[500], fontSize: 50, backgroundColor: '#fff', titleAccess: 'location' }} iconName='location' />
                                </Col>
                                <Col md={9} style={{ margin: 'auto' }}>
                                    <div><h6 style={{ fontWeight: 'bold', textAlign: 'left' }}>231 Lý Tự Trọng, P. Bến Thành, Q1, TPHCM</h6></div>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={3}>
                                    <LocationOnIcon sx={{ color: blue[500], fontSize: 50, backgroundColor: '#fff', titleAccess: 'calling' }} iconName='calling' />
                                </Col>
                                <Col md={9} style={{ margin: 'auto' }}>
                                    <div><h6 style={{ fontWeight: 'bold' }}>0902000153</h6></div>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={3}>
                                    <LocationOnIcon sx={{ color: blue[500], fontSize: 50, backgroundColor: '#fff', titleAccess: 'mail' }} iconName='mail' />
                                </Col>
                                <Col md={9} style={{ margin: 'auto' }}>
                                    <div><h6 style={{ fontWeight: 'bold' }}>info@medsolutions.com</h6></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row className="mb-4">
                                <Col md={12}>
                                    <FloatingLabel controlId="lblFullname" label="Họ và tên" >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="button-tooltip-2">Fullname không được trống và không được chứa kí tự số, kí tự đặc biệt !</Tooltip>}
                                        >
                                            <Form.Control onChange={onChangeHandler} value={userContact.fullname} size="lg" className="border border-light rounded" type="fullname" id="fullname" placeholder="Your Fullname" />
                                        </OverlayTrigger>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={12}>
                                    <FloatingLabel controlId="lblEmail" label="Địa chỉ Email" >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="button-tooltip-2">Email không được trống và phải chứa @ !</Tooltip>}
                                        >
                                            <Form.Control onChange={onChangeHandler} value={userContact.email} size="lg" className="border border-light rounded" type="email" id="email" placeholder="Email" />
                                        </OverlayTrigger >
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={12}>
                                    <FloatingLabel controlId="lblPhoneNumber" label="Số Điện Thoại" >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="button-tooltip-2">Số điện thoại không được trống và chỉ chứa kí tự số !</Tooltip>}
                                        >
                                            <Form.Control onChange={onChangeHandler} value={userContact.phoneNumber} size="lg" className="border border-light rounded" type="text" id="phoneNumber" placeholder="Số điện thoại" />
                                        </OverlayTrigger>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={12}>
                                    <FloatingLabel controlId="lblSubject" label="Tiêu đề">
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="button-tooltip-2">Subject không được trống!</Tooltip>}
                                        >
                                            <Form.Control onChange={onChangeHandler} value={userContact.subject} size="lg" className="border border-light rounded" type="text" id="subject" placeholder="Tiêu đề" />
                                        </OverlayTrigger>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={12}>
                                    <FloatingLabel controlId="lblDescription" label="Nội dung tin nhắn" >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="button-tooltip-2">Nội dung tin nhắn không được trống !</Tooltip>}
                                        >
                                            <Form.Control onChange={onChangeHandler} value={userContact.description} as="textarea" size="lg" rows={5} className="border border-light rounded" id="description" placeholder="Nội dung tin nhắn" style={{ height: '10rem' }} />
                                        </OverlayTrigger>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={3}>
                                    <Button onClick={onClickHandler} id="sendUserContactMessageBtn" variant="primary" type="submit"> Gửi Yêu Cầu </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Form.Group>
            </Form>
            <Row className='mt-15'>
                <Col md={3}></Col>
                <Col md={3}>
                    <img src="img/contact_on_the_phone.jpg" style={{ maxHeight: '20rem', width: '100%' }} className="shadow-4 rounded" alt="..." />
                    <LocationOnIcon sx={{ color: 'white', fontSize: 50, bgcolor: 'red', position: 'absolute', borderRadius: '12px', bottom: 0, left: 0 }} className="rounded-circle p-2" iconName='callBack' />
                </Col>
                <Col md={4}>
                    <h2>Miễn phí yêu cầu hỗ trợ của chúng tôi bằng số điện thoại</h2>
                    <p>Nếu bạn muốn chúng tôi hỗ trợ 1 cách nhanh và
                        rõ ràng nhất thì hãy gửi số điện thoại cho chúng tôi,
                        để chúng tôi liên hệ trực tiếp với bạn.</p>
                    <PhoneContact />
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default Contact