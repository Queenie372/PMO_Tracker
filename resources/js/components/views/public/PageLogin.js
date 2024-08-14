import { Row, Col } from "antd";
import React from "react";

export default function PageLogin() {
    return (
        <div id="PageLogin">
            <Row gutter={[12, 12]} className="top-nav">
                <img
                    src="./images/PMO_logo.png"
                    alt="PMO_LOGO"
                    className="pmo-logo"
                />

                <Col className="menu">
                    <ul>
                        <li>
                            <a className="active" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                    </ul>
                    <img
                        src="./images/fsuulogo.png"
                        alt="FSUU_LOGO"
                        className="fsuu-logo"
                    />
                </Col>
            </Row>

            <Row gutter={[12, 12]} className="content">
                <Col className="title">
                    <div className="title1">
                        <p>Purchased </p>
                        <p>Tracking System</p>
                    </div>
                </Col>
                <p className="title2">Your Reliable Tracking Platform</p>
            </Row>
        </div>
    );
}
