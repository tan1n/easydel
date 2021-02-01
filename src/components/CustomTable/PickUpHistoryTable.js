import React from "react";
import CustomTable from ".";

export default function PickUpHistoryTable({ data }) {
  const columns = [
    { name: "SN", sortable: true, selector: "id" },
    { name: "Recievers Name", selector: "reciever.name" },
    { name: "Delivery Address", selector: "reciever.address.city" },
    { name: "Location/Road", selector: "reciever.address.location" },
    { name: "Parcel Weight", sortable: true, selector: "total_weight" },
    { name: "Delivery Type", selector: "delivery.type" },
    { name: "Amount", selector: "payment.amount" },
    { name: "Pickup Point", selector: "pickup_point" },
    { name: "Status", selector: "delivery.status" },
  ];

  return <CustomTable title="Delivery history" columns={columns} data={data} />;
}
