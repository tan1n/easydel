import React from 'react'
import CustomTable from '.'

export default function PickUpHistoryTable() {
    const columns = [
        { name: 'SN', sortable: true, selector: 'id' },
        { name: 'Recievers Name', selector: 'reciever.name' },
        { name: 'Delivery Address', selector: 'reciever.address' },
        { name: 'Parcel Weight', sortable: true, selector: 'total_weight' },
        { name: 'Delivery Type', selector: 'delivery_type' },
        { name: 'Amount', selector: 'total_amount' },
        { name: 'Tracking ID', selector: 'tracking_id' },
        { name: 'Status', selector: 'status' }
    ];
    return (
        <CustomTable
            title='Delivery history'
            columns={columns}
            data={[
                { id: 1, total_weight: '500kg', reciever: { name: 'Tanin Rahman' } }
            ]}
        />
    )
}
