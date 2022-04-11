import React, { useState, useEffect } from 'react'
import { Form, Row, Button, FormControl, InputGroup, FloatingLabel } from 'react-bootstrap'
import { initialUserContact, IUserContact } from '../../models/user.model'
import { ValidateUtil } from '../../utils/ValidateUtil';
import userService from '../../services/user.service';
import { IEmail, initialEmail } from '../../models/email.model';
import applicationService from '../../services/application.service';

const PhoneContact = () => {
    const [userContact, setUserContact] = useState<IUserContact>({ ...initialUserContact, typeContact: 0 });
    const [email, setEmail] = useState<IEmail>(initialEmail);
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        var id = event.currentTarget.getAttribute("id");
        if (id === 'phoneNumber') {
            setUserContact({ ...userContact, phoneNumber: event.currentTarget.value })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            var response: IEmail | null = await applicationService.getInUseEmail();
            if (response != null) {
                console.log(`${response.userId}`)
                setEmail(response);
            }
        }
        fetchData().catch(console.error);
    }, [])

    async function onClickHandler(event: React.MouseEvent) {
        event.preventDefault();
        if (ValidateUtil.validatePhoneNumber(userContact.phoneNumber)) {
            var responseCreateNewUserContact = await userService.createNewUserContact(userContact);
            var respponseEmail = await userService.sendEmail(userContact, email);
            console.log(`responseCreateNewUserContact : ${responseCreateNewUserContact}`)
            console.log(`respponseEmail : ${respponseEmail}`)
            if (responseCreateNewUserContact === true
                && respponseEmail === true) {
                    console.log("here")
                setUserContact({ ...initialUserContact, typeContact: 0 });
            } else {

            }

        }

    }
    return (
        <Form>
            <Form.Group>
                <Row>

                    <InputGroup className="w-100" id='ipgphoneNumber'>
                        <FloatingLabel controlId="phoneNumber" label="Số Điện Thoại" >
                            <FormControl onChange={onChangeHandler} value={userContact.phoneNumber} id='phoneNumber' className="w-100" placeholder="Số điện thoại" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </FloatingLabel>
                        <Button onClick={onClickHandler} variant="primary">
                            Gửi Yêu Cầu
                        </Button>

                    </InputGroup>

                </Row>
            </Form.Group>
        </Form>

    )



}

export default PhoneContact