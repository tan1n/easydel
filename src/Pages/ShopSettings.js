import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  FormLabel,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import BackButton from "../components/BackButton";
import LoggedInHeader from "../components/LoggedInHeader";
import { save_ShopInfo_Api } from "../constants/Api";

export default function ShopSettings() {
  const titleStyle = {
    color: "#ff7900",
    fontWeight: "bold",
  };

  const [info, setInfo] = useState({
    address: {
      city: "",
      location: "",
    },
    business: {
      address: {
        city: "",
        location: "",
      },
      social: [""],
      category: ["", ""],
      name: "",
    },
    is_admin: false,
    roles: [""],
    name: "",
    password: "",
    phone: "",
  });

  const handleSubmitInfo = () => {
    save_ShopInfo_Api(info).then((res) => console.log(res));
  };

  return (
    <Container fluid>
      <Container>
        <LoggedInHeader />
        <BackButton />
        <div className="card p-5 mt-2">
          <Row>
            <Col md={12}>
              <h5 style={titleStyle}>1.Business Information</h5>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Business name</FormLabel>
                <FormControl
                  value={info.business.name}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      business: { ...oldData.business, name: e.target.value },
                    }))
                  }
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Business Category</FormLabel>
                <FormControl
                  value={info.business.category}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      business: {
                        ...oldData.business,
                        category: e.target.value,
                      },
                    }))
                  }
                  as="select"
                >
                  <option>Tech</option>
                  <option>Clothing</option>
                  <option>Gadget</option>
                  <option>Service</option>
                  <option>Others</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Business Address</FormLabel>
                <FormControl
                  value={info.business.address.location}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      business: {
                        ...oldData.business,
                        address: {
                          ...oldData.business.address,
                          location: e.target.value,
                        },
                      },
                    }))
                  }
                  as="textarea"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>City</FormLabel>
                <FormControl
                  value={info.business.address.city}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      business: {
                        ...oldData.business,
                        address: {
                          ...oldData.business.address,
                          city: e.target.value,
                        },
                      },
                    }))
                  }
                  as="select"
                >
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={12}>
              <h5 style={titleStyle}>2.Profile Information</h5>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Owner's name</FormLabel>
                <FormControl
                  value={info.name}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      name: e.target.value,
                    }))
                  }
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Phone number</FormLabel>
                <FormControl
                  value={info.phone}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      phone: e.target.value,
                    }))
                  }
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <h5 style={titleStyle}>3.Pickup Information</h5>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Pickup city</FormLabel>
                <FormControl
                  value={info.address.city}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      address: {
                        ...oldData.address,
                        city: e.target.value,
                      },
                    }))
                  }
                  as="select"
                >
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Pickup address</FormLabel>
                <FormControl
                  value={info.address.location}
                  onChange={(e) =>
                    setInfo((oldData) => ({
                      ...oldData,
                      address: {
                        ...oldData.address,
                        location: e.target.value,
                      },
                    }))
                  }
                  as="textarea"
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <Button onClick={handleSubmitInfo} variant="info">
                Save
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
