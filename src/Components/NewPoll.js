import React, { useRef, useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const NewPoll = (props) => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();

  const candidateName1URL = useRef();
  const candidateName2URL = useRef();

  const promptRef = useRef();

  const [disableButton, changeDisable] = useState(false);

  const sendToBlockChain = async () => {
    changeDisable(true);

    // logic needed to store image url for Candidate 1

    // logic needed to store image url for Candidate 2

    // logic needed to add candidate pair

    // logic needed to add to prompt array

    // logic needed to add a new vote count array

    alert("head back to home page");
  };

  return (
    <Container style={{ marginTop: "10px" }}>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Voting Prompt</Card.Title>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Prompt</Form.Label>
                <Form.Control
                  ref={promptRef}
                  placeholder='Add Prompt'
                ></Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{ marginTop: "5vh" }}>
        <Col className='justify-content-center d-flex'>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Candidate 1 Information</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Enter your Information For your First Candidate
              </Card.Subtitle>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Candidiate 1 Name</Form.Label>
                  <Form.Control
                    ref={candidateName1}
                    placeholder='Enter Candidate Name'
                  ></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Candidate 1 Image URL</Form.Label>
                  <Form.Control
                    ref={candidateName1URL}
                    placeholder='enter Image URL'
                  ></Form.Control>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col className='justify-content-center d-flex'>
          <Card style={{ width: "18rem" }}>
            {" "}
            <Card.Body>
              <Card.Title>Candidate 2 Information</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Enter your Information For your First Candidate
              </Card.Subtitle>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Candidiate 2 Name</Form.Label>
                  <Form.Control
                    ref={candidateName2}
                    placeholder='Enter Candidate Name'
                  ></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Candidate 2 Image URL</Form.Label>
                  <Form.Control
                    ref={candidateName2URL}
                    placeholder='enter Image URL'
                  ></Form.Control>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "10vh" }}>
        <Button
          disabled={disableButton}
          onClick={sendToBlockChain}
          variant='primary'
        >
          Submit
        </Button>
      </Row>
    </Container>
  );
};

export default NewPoll;
