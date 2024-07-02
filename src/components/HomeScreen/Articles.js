import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import articles from '../../articles';

function Article() {
  const displayedArticles = articles.slice(0, 6);

  return (
    <Container>
      <hr />
      <h2 className='mt-5 heading-text'>Мақалалар</h2>

      <Row>
        {displayedArticles.map(article => (
          <Col key={article._id} sm={12} md={6} xl={4}>
            <Card className='my-3 p-3 rounded' style={{border: 'none'}}>
              <Link to={`/${article.category}/${article._id}`}>
                <Card.Img src={article.image}></Card.Img>
              </Link>

              <Card.Header as="h6" className='text-center'>
                {article.date} | {article.category}
              </Card.Header>

              <Card.Body>
                <Link to={`/${article.category}/${article._id}`}>
                  <Card.Title as="div" className='d-flex align-items-center justify-content-center text-center' style={{ minHeight: "50px" }}>
                    <strong>{article.title}</strong>
                  </Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Article;
