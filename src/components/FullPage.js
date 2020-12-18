import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./full_page.css";
function FullPage() {
    return (
        <>
            {/* <div className="outerWrapper">
        <div className="category">Category</div>
        <div className="title">Title</div>
        <div className="description">Description</div>
        <div className="author-date">author date</div>
        <div className="newsImage">Image</div>
        <div className="mainContent">mainContent</div>
      </div> */}
            <div className="outerWrapper">
                <Row>
                    <Col className="com category" xs="auto">
                        Automobile
          </Col>
                </Row>
                <Row>
                    <Col className="com title" xs="auto">
                        <h1>These '60s Muscle Cars Can Obliterate The Drag Strip</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="com description" xs="auto">
                        Early muscle cars were designed with one goal: going fast in a
                        straight line. But while some dominated the strip, others
                        surprisingly struggled.
          </Col>
                </Row>
                <Row>
                    <Col className="com author-date" xs="auto">
                        <span> BY TOLU AKINSHETE </span>
                        <span> NOV 18, 2020</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="com newsImage" xs="auto">
                        <img src="../Images/news3.jpg" alt=""></img>
                    </Col>
                </Row>
                <Row>
                    <Col className="com content" xs="auto">
                        The muscle car craze that kicked off in the 1950s had gathered steam
                        and was in full swing during the 1960s. The race was on among
                        carmakers and it was basically a question of how big an engine you
                        could fit into your car. Unsurprisingly, these carmakers enjoyed
                        varying degrees of success with their creations. On one side, you
                        had really powerful muscle cars, with loads of horsepower and torque
                        to light up the tires and burn some rubber out at the drag strip.
                        However, there were also the cars that struggled to put together any
                        sort of decent performance and only served to make up the numbers
                        during drag races. Let's look at how the best and worst classic
                        muscle cars compare when it comes to obliterating the drag strip.
          </Col>
                </Row>
                <Row>
                    <Col className="shareAndReport">
                        <Button className="shareAndReportButton">
                            <i className="fa fa-share" aria-hidden="true">
                                Share
              </i>
                        </Button>
                        <Button className="shareAndReportButton">
                            <i className="fa fa-flag" aria-hidden="true">
                                Report
              </i>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default FullPage;
