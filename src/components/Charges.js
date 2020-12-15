import React from 'react'
import { Tabs, Tab, Row } from 'react-bootstrap'
import Lorem from './Lorem'
import PricesByWeight from './Faq'

export default function Charges() {

    return (
        <div className="mb-5">
            <Row><h1 className="text-center"><b>Charges</b></h1></Row>
            <Row>
                <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Insde City">
                        <PricesByWeight />
                    </Tab>
                    <Tab eventKey="profile" title="Outside City">
                        <Lorem />
                    </Tab>
                </Tabs>
            </Row>
        </div>
    )
}
