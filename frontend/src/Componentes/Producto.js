import React from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap'
import './Producto.css'
function Producto(props) {
  return (
    <Col className="card-group" sm="3">
      <Card className="Card" body outline color="primary">
        <CardImg src={props.imagen} />
        <CardBody>
          <CardTitle>{props.titulo}</CardTitle>
          <CardText>{props.descripcion}</CardText>
          <CardSubtitle>
            <b>Ciudad:</b>
            {props.precio}
          </CardSubtitle>
          <CardSubtitle>
            <b>Año Edicion:</b>
            {props.stock}
          </CardSubtitle>
          <CardSubtitle>
            <b>Contacto:</b>
            {props.contacto}
          </CardSubtitle>
          <button className="Boton">Pedir</button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Producto
