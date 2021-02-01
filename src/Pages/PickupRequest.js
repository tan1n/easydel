import React from "react";
import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import BackButton from "../components/BackButton";
import LoggedInHeader from "../components/LoggedInHeader";
import ProductInfo from "../components/PickupRequest/ProductInfo";
import { save_PickUpReq_Api } from "../constants/Api";

export default function PickupRequest() {
  const titleStyle = {
    color: "#ff7900",
    fontWeight: "bold",
  };
  const [data, setData] = useState({
    reciever: {
      address: {
        city: "",
        location: "",
      },
      name: "",
      phone: "",
    },
    delivery: {
      status: "",
      type: "",
    },
    payment: {
      status: "",
      amount: 0,
    },
    has_discount: false,
    discount: 0,
    products: [
      {
        name: "",
        category: "",
        weight: "",
      },
    ],
    total_weight: 5,
    user: {
      name: "Tanin Rahman",
      phone: "0199993969",
    },
    pickup_point: "",
  });

  const handleRemoveClick = (index) => {
    const list = [...data.products];

    setData((oldData) => ({
      ...oldData,
      products: list.splice(index, 1),
    }));
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setData((oldData) => ({
      ...oldData,
      products: [...data.products, { name: "", category: "", weight: "" }],
    }));
  };

  const handleProductChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...data.products];
    list[index][name] = value;
    setData((oldData) => ({
      ...oldData,
      products: list,
    }));
  };
  const submitPickUpReq = () => {
    save_PickUpReq_Api(data).then((res) => console.log(res));
  };
  return (
    <Container fluid>
      <Container className="">
        <LoggedInHeader />
        <BackButton />
        <div className="card p-5 mt-2">
          <Row className="mt-5">
            <Col>
              <h5 style={titleStyle}>1.Recievers Information</h5>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={6}>
              <Form.Group>
                <label>Name</label>
                <Form.Control
                  type="text"
                  value={data.reciever.name}
                  onChange={(e) =>
                    setData((oldData) => ({
                      ...oldData,
                      reciever: { ...oldData.reciever, name: e.target.value },
                    }))
                  }
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <label>Phone Number</label>
                <Form.Control
                  type="text"
                  placeholder="+8801-XXXXXXX"
                  value={data.reciever.phone}
                  onChange={(e) =>
                    setData((oldData) => ({
                      ...oldData,
                      reciever: { ...oldData.reciever, phone: e.target.value },
                    }))
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <label>City</label>
                <Form.Control
                  as="select"
                  value={data.reciever.address.city}
                  onChange={(e) =>
                    setData((oldData) => ({
                      ...oldData,
                      reciever: {
                        ...oldData.reciever,
                        address: {
                          ...oldData.reciever.address,
                          city: e.target.value,
                        },
                      },
                    }))
                  }
                >
                  <option>Select a city</option>
                  <option>Chittagong</option>
                  <option>Dhaka</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <label>Full Address</label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={data.reciever.address.location}
                  onChange={(e) =>
                    setData((oldData) => ({
                      ...oldData,
                      reciever: {
                        ...oldData.reciever,
                        address: {
                          ...oldData.reciever.address,
                          location: e.target.value,
                        },
                      },
                    }))
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <h5 style={titleStyle}>2.Product Information</h5>
            </Col>
          </Row>
          {data.products.map((item, i) => (
            <Row className="mt-2">
              <Col md={3}>
                <Form.Group>
                  <label>Name</label>
                  <Form.Control
                    name="name"
                    value={item.name}
                    onChange={(e) => handleProductChange(e, i)}
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <label>Type</label>
                  <Form.Control
                    name="category"
                    value={item.category}
                    onChange={(e) => handleProductChange(e, i)}
                    as="select"
                  >
                    <option>Clothing</option>
                    <option>Food(Cake)</option>
                    <option>Food(others)</option>
                    <option>Gadget</option>
                    <option>Fragile Item (Glass,Egg)</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <label>Total Weight</label>
                  <Form.Control
                    name="weight"
                    value={item.weight}
                    onChange={(e) => handleProductChange(e, i)}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
          ))}

          <Row className="justify-content-center">
            <Button variant="outline-info" onClick={handleAddClick}>
              +
            </Button>
            {data.products.length > 1 && (
              <Button
                variant="outline-danger"
                style={{ marginLeft: 10 }}
                onClick={handleRemoveClick}
              >
                -
              </Button>
            )}
          </Row>
          <Row className="mt-2">
            <Col>
              <h5 style={titleStyle}>3.Delivery Pricing</h5>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <label>Delivery Option</label>
                <Form.Control
                  as="select"
                  value={data.delivery.type}
                  onChange={(e) =>
                    setData((oldData) => ({
                      ...oldData,
                      delivery: { ...oldData.delivery, type: e.target.value },
                    }))
                  }
                >
                  <option>Select delivery method</option>
                  <option>General</option>
                  <option>Express</option>
                  <option>Super Express</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <label>Total</label>
                <h3></h3>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={12} sm={12}>
              <Button
                onClick={submitPickUpReq}
                variant="info"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                Confirm
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
