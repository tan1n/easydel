import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function ProductInfo({
  item,
  index,
  productName,
  productNameChange,
  productType,
  productTypeChange,
}) {
  return (
    <Row className="mt-2">
      <Col md={3}>
        <Form.Group>
          <label>Name</label>
          <Form.Control
            name={item.name}
            value={productName}
            onChange={(e) => productNameChange(item, index)}
            type="text"
          />
        </Form.Group>
      </Col>
      <Col md={3}>
        <Form.Group>
          <label>Type</label>
          <Form.Control
            value={productType}
            onChange={productTypeChange}
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
          <Form.Control type="text" />
        </Form.Group>
      </Col>
    </Row>
  );
}
