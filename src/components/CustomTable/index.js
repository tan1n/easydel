import React from 'react'
import DataTable from 'react-data-table-component'

export default function CustomTable(props) {
    return (
        <div>
            <DataTable
                title={props.title}
                columns={props.columns}
                data={props.data}
            />
        </div>
    )
}
