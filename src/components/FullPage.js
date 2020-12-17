import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './full_page.css'
function FullPage() {
    return (
        <>
            <div className="outerWrapper">
                <div className="category">Category</div>
                <div className="title">Title</div>
                <div className="description">Description</div>
                <div className="author-date">author date</div>
                <div className="newsImage">Image</div>
                <div className="mainContent">mainContent</div>
            </div>
            <Container className="wrapper">
                <Row>
                    <Col className="com category" xs="auto">Category</Col>
                </Row>
                <Row>
                    <Col className="com title" xs="auto"><h1>Title</h1></Col>
                </Row>
                <Row>
                    <Col className="com description" xs="auto">description</Col>
                </Row>
                <Row>
                    <Col className="com author-date" xs="auto">author-date</Col>
                </Row>
                <Row>
                    <Col className="com newsImage" xs="auto"><img src="" alt=""></img> </Col>
                </Row>
            </Container>
        </>
    )
}

export default FullPage
