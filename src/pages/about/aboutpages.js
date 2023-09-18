import { Col, Container, Row } from "@smarteye/optic";
import React from "react";

function Aboutpages() {
    return (
        <div className="pt-20">
            <div className="relative">
                <div
                    style={{
                        backgroundImage: "url('/about/vrlab.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "40vh",
                        width: "100%",
                    }}
                >
                <Row className="flex flex-col">
                    <Col>
                        <h1 className="mt-10 ml-8 text-4xl font-extrabold text-left text-white">
                        Smarteye.id
                        </h1>
                        <h3 className="mt-4 ml-8 text-lg font-bold text-left text-white">
                            Wujudkan imajinasi anda menjadi kenyataan bersama kami, <br/>
                            dengan teknologi virtual dan augmented reality.
                        </h3>
                    </Col>
                </Row>
                </div>
            </div>

            <div className="px-5 py-20">
                <Container>
                    <Row>
                        <Col className="px-5 py-5">
                            <h1>
                                Who we are
                            </h1>
                        </Col>
                        <Col className="px-5 py-5">
                            <p>
                                Misi
                            </p>
                            <h1>
                                lorem ipsum
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="py-20 about_description">
                <Container>
                    <Row>
                        <Col>
                        <h1>lorem ipsum</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-20">
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Aku juga bingung kak :)
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Aboutpages;
