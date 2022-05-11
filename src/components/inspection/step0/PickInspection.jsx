import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function SelectInspection() {
  const [validated, setValidated] = useState(false);
  const [manual, setmanual] = useState(false);
  const [api, setapi] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "manual") {
      setmanual(!manual);
    }
    if (e.target.id === "api") {
      setapi(!api);
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    await setValidated(true);
    if (form.checkValidity() === true && manual === true) {
      navigate("/Step1", { replace: true });
    } else if (form.checkValidity() === true && api === true) {
      event.preventDefault();
    }
  };

  return (
    <div className="inspection">
      <div className="container" style={{ marginTop: "6%" }}>
        <div className="row ">
          <h2 className="title">Sell My Device!</h2>
          <div className="col-md-12">
            <Form
              noValidate
              //validated={validated}
              onSubmit={handleSubmit}
              className="justify-content-center"
            >
              <Card className="mt-2">
                <Card.Header className="Header">
                  <Card.Text style={{ marginLeft: "37px" }}>
                    Pick Inspection Option
                  </Card.Text>
                </Card.Header>
                <Card.Body>
                  <Form.Group as={Row} className="mb-3">
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        id="manual"
                        label="Manual Inspection"
                        className="m-3 labell"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Card.Text className="text">
                        You’ll have to answer a couple of questions regarding
                        the device that you wish to sell. Then you will get the
                        estimated Value of the device.
                      </Card.Text>
                      <Form.Check
                        type="radio"
                        label="Software Inspection"
                        id="api"
                        className="m-3 labell"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Card.Text className="text">
                        You’ll have to answer a couple of questions regarding
                        the device that you wish to sell. Then you will get the
                        estimated Value of the device.
                      </Card.Text>
                    </Col>
                  </Form.Group>
                  <Row className="mt-2 d-flex flex-row bt-row justify-content-end">
                    <Button
                      variant="danger"
                      size="sm"
                      type="submit"
                      className="loginBtn"
                    >
                      Continue
                    </Button>
                  </Row>
                </Card.Body>
              </Card>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectInspection;
