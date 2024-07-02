import React, { useState } from 'react';
import { Card, Container, Button, CardGroup } from 'react-bootstrap';
import articles from '../../articles';
import { Link } from 'react-router-dom';


function Ruhaniyat() {
    const [index, setIndex] = useState(0);
    const articlesPerPage = 3;

    const handleNext = () => {
        if (index + articlesPerPage < articles.length) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');

        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }

        return text;
    };

    return (
        <Container>
            <hr />

            <div className="d-flex justify-content-between mt-5">
                <h2 className='heading-text'>Руханият</h2>

                <div className="d-flex">
                    <Button variant='info' className='mx-5' onClick={handlePrev} disabled={index === 0}>&lt;</Button>
                    <Button variant='info' onClick={handleNext} disabled={index + articlesPerPage >= articles.length}>&gt;</Button>
                </div>
            </div>

            <div className="card-group-container">
                <div className="card-group-transition" style={{ transform: `translateX(-${index * (100 / articlesPerPage)}%)` }}>
                    {articles.map((article, idx) => (
                        <Card className='my-3 p-3' key={idx} style={{ minWidth: '33.3333%', border: 'none' }}>
                            <Link to={`/adebi-syn/:${article._id}`}>
                                <Card.Img variant="top" src={article.image} alt={article.image} />
                                <Card.Body>
                                    <Card.Title style={{ minHeight: "50px" }} className='d-flex align-items-center ps-3'>{article.title}</Card.Title>
                                    <Card.Text style={{ minHeight: "130px" }}>
                                        {truncateText(article.text, 20)}
                                    </Card.Text>
                                </Card.Body>
                            </Link>

                            <Card.Footer className='text-center'>
                                <small className="text-muted">{article.date}</small>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Ruhaniyat;
