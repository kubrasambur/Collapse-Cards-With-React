import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardGroup,
} from "reactstrap";
import PropTypes from "prop-types"

function CardGroupp(props) {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardImg
            top
            width="100%"
            src={props.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{props.cardTitle}</CardTitle>
            <CardText>
              {props.cardText}
            </CardText>
            <Button>{props.updatedTime}</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

CardGroupp.defaultProps={
  cardTitle : "default Title"
}

Card.propTypes ={
  cardText : PropTypes.string
}

export default CardGroupp;
