import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import articles from '../../articles';
import { Link } from 'react-router-dom';

function Proza() {
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const startIndex = (activePage - 1) * itemsPerPage;
    const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

    return (
        <Container>
            <hr />
            <h2 className='mt-5 heading-text'>Проза</h2>

            <Row className="page-transition">
                {currentArticles.map((article, index) => (
                    <Col md={4} key={index} className='p-0'>
                        <Card className='my-3' style={{ border: "none", marginLeft: "2rem" }}>
                            <Row>
                                <Col md={5}>
                                    <Link to={`/proza/${article._id}`}>
                                        <Card.Img src={article.image} alt={article.image} style={{ borderRadius: "50%" }} />
                                    </Link>
                                </Col>

                                <Col md={7} className='d-flex align-items-center p-0'>
                                    <Card.Body className='p-0'>
                                        <small className="text-muted text-center">{article.date}</small>
                                        <Link to={`/proza/${article._id}`}>
                                            <Card.Title style={{ fontSize: "x-small" }} className='py-1 pb-3 pe-3'>{article.title}</Card.Title>
                                        </Link>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="dot-pagination mt-4">
                {[...Array(totalPages).keys()].map(number => (
                    <span
                        key={number + 1}
                        className={number + 1 === activePage ? 'active-dot' : 'dot'}
                        onClick={() => setActivePage(number + 1)}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Proza;
