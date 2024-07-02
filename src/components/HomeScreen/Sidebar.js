import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div>
      <h4 className='heading-text mb-4'>Latest News</h4>
      <ListGroup>
        <ListGroup.Item action href="/">
          News Item 1
        </ListGroup.Item>
        <ListGroup.Item action href="/">
          News Item 2
        </ListGroup.Item>
        <ListGroup.Item action href="/">
          News Item 3
        </ListGroup.Item>
        <ListGroup.Item action href="/">
          News Item 4
        </ListGroup.Item>
        <ListGroup.Item action href="/">
          News Item 5
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
