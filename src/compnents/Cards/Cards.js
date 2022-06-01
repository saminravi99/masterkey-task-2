import React from 'react';
import { Card } from 'react-bootstrap';
import "./Cards.css"

const Cards = () => {
    return (
      <div className="container business-card-container ">
        <div className="d-flex justify-content-around align-items-center">
          <Card
            className="shadow-lg business-card"
            style={{ width: "18rem", height: "10rem" }}
          >
            <Card.Body>
              <Card.Title>About Us</Card.Title>
            </Card.Body>
            <div className="card-img-div">
              <img
                className="card-img"
                src="https://img.freepik.com/free-vector/young-people-standing-talking-each-other-speech-bubble-smartphone-girl-flat-vector-illustration-communication-discussion_74855-8741.jpg?size=626&ext=jpg&ga=GA1.2.523867278.1651156463"
                alt=""
              />
            </div>
          </Card>
          <Card
            className="shadow-lg business-card"
            style={{ width: "18rem", height: "10rem" }}
          >
            <Card.Body>
              <Card.Title>Products & Services</Card.Title>
            </Card.Body>
            <div className="card-img-div">
              <img
                className="card-img"
                src="https://img.freepik.com/free-vector/business-team-human-resources-people-person-communication-businesswoman-businessman-meeting-office-vector-illustration_1284-47630.jpg?t=st=1654063081~exp=1654063681~hmac=03ede22f8361aa8400d592f7cff1332d00cad7b6de49c997ee620142a94d7227&w=740"
                alt=""
              />
            </div>
          </Card>
          <Card
            className="shadow-lg business-card"
            style={{ width: "18rem", height: "10rem" }}
          >
            <Card.Body className="card-body">
              <Card.Title className="card-title">Become a Client</Card.Title>
            </Card.Body>
            <div className="card-img-div">
              <img
                className="card-img"
                src="https://img.freepik.com/free-vector/help-support-climbing-employee-from-mentor-leader-hand-team-corporate-people-walking-up-ladder-together-flat-vector-illustration-success-career-growth-leadership-teamwork-concept_74855-21923.jpg?size=626&ext=jpg&ga=GA1.2.523867278.1651156463"
                alt=""
              />
            </div>
          </Card>
          <Card
            className="shadow-lg business-card"
            style={{ width: "18rem", height: "10rem" }}
          >
            <Card.Body>
              <Card.Title>Downloads</Card.Title>
            </Card.Body>
            <div className="card-img-div">
              <img
                className="card-img"
                src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?size=626&ext=jpg&ga=GA1.2.523867278.1651156463"
                alt=""
              />
            </div>
          </Card>
        </div>
      </div>
    );
};

export default Cards;