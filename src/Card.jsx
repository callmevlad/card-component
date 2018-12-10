import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  width: 340px;
  height: 300px;
  padding: 25px 26px;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("${props => props.bgImage || 'example-bg.png'}");
  background-position: center center;
  background-size: cover;
  background-repeat: none;
  font-family: "Open Sans", sans-serif;

  color: white;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 5px 0 12px;
`;

const Paragraph = styled.p`
  flex: 1;
  line-height: 26px;
`;

const Button = styled.a`
  display: block;
  text-align: center;
  border-radius: 10px;
  padding: 15px 10px;

  color: #4dd4ff;
  font-weight: 700;
  font-size: 16px;

  background-color: rgba(192, 240, 255, 0.3);

  text-decoration: none;
`;

const Badge = styled.div`
  background: ${props => props.badgeColor || "#4DD4FF"};
  border-radius: 0 14px 0 4px;

  color: black;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 10px;

  top: 0;
  right: 0;
  padding: 8px 20px;

  position: absolute;
`;

class Card extends Component {
  render() {
    const { props } = this;

    return (
      <Wrapper bgImage={props.bgImage}>
        {props.isFeatured ? (
          <Badge>Featured</Badge>
        ) : null}
        <Heading>{props.title || "Title"}</Heading>
        <Paragraph>{props.children}</Paragraph>
        <Button href={props.buttonUrl || "#"}>
          {props.buttonText || "Click here"}
        </Button>
      </Wrapper>
    );
  }
}

export default Card;
