import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const HomepageCard = ({ children }) => {
  return (
    <>
      <Container>
        <Jumbotron className="mt-5" md={{ span: 6, offset: 3 }}>
          {children}
        </Jumbotron>
      </Container>
    </>
  );
};

export default HomepageCard;
