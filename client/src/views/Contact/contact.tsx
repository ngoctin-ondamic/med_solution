import React, { useState } from 'react'
import {Row, Container} from 'react-bootstrap'
import Header from '../../components/Header/header.component'
import Footer from '../../components/Footer/footer.component'
import MainContact from '../../components/Contact/contact.component'


const Contact = () => {

    
    return (
        <Container fluid>
            <Header/>
            
            <Row>
                <MainContact/>
            </Row>
            
            <Footer/>
        </Container>
    )
}

export default Contact;