import React from 'react'
import { Container } from 'react-bootstrap'
import LoggedInHeader from '../components/LoggedInHeader'
import BackButton from '../components/BackButton'
import PickUpHistoryTable from '../components/CustomTable/PickUpHistoryTable'

export default function PickupHistory() {

    return (
        <Container fluid>
            <Container>
                <LoggedInHeader />
                <BackButton />
                <div className='card p-5 mt-2'>
                    <PickUpHistoryTable />
                </div>
            </Container>
        </Container>
    )
}
