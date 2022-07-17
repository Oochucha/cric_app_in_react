import React from 'react';
import { Button, Container } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import './Home.css';

const Example = (props) => {
  return (
    <Container fluid className="home-margin">
      <div className="bg-danger border border-dark text-light">
        <h1 className="display-3">React Cric App !!!</h1>
        <blockquote className="blockquote">
        </blockquote>
        <hr className="my-2" />
        <p className="lead">This is a simple CRUD application for Creating, Reading, Updating and Deleting players</p>
        <p className="lead">
        </p>
      </div>
    </Container>
  );
};

export default Example;