import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import LoggedInHeader from "../components/LoggedInHeader";
import BackButton from "../components/BackButton";
import PickUpHistoryTable from "../components/CustomTable/PickUpHistoryTable";
import { getall_Pickups_Api } from "../constants/Api";

export default function PickupHistory() {
  const [data, setData] = useState("");

  const call_Api = () => getall_Pickups_Api().then((res) => setData(res));

  useEffect(() => {
    call_Api();
    return call_Api;
  }, []);

  return (
    <Container fluid>
      <Container>
        <LoggedInHeader />
        <BackButton />
        <div className="card p-5 mt-2">
          {data !== "" && <PickUpHistoryTable data={data} />}
        </div>
      </Container>
    </Container>
  );
}
