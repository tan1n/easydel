import React from 'react'
import { Faq } from '../components/Faq';
import { About } from '../components/About';
import { CalculatePricing } from '../components/CalculatePricing';
import { Services } from '../components/Services';
import { Tracking } from '../components/Tracking';
import { Header } from '../components/Header';
import { Container } from 'react-bootstrap';


export default function Home() {
    return (
        <Container fluid>
            <Container>
                <Header />
            </Container>
            <Tracking />
            <Container>
                <CalculatePricing />
                <About />
                <Services />
                <Faq />
            </Container>
        </Container>
    )
}
