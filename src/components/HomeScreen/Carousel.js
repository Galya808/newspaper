import Carousel from 'react-bootstrap/Carousel'
import articles from '../../articles'
import { Link } from 'react-router-dom'


function NoTransitionExample() {
  return (
    <Carousel>
        {articles.map(article => (
            <Carousel.Item key={article._id}>
                <Link to={`/${article.category}/:${article._id}`}>
                    <img
                        className="d-block w-100 rounded"
                        src={article.image}
                        alt={article.title}
                    />
                </Link>
        
                <Carousel.Caption>
                    <h5 className='carousel-text'>{article.date}</h5>
                    <h1 className='carousel-text'>{article.title}</h1>
                </Carousel.Caption>

            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default NoTransitionExample;