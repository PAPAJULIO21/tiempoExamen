import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';



function WeatherContext(){
    const [data, setData] = useState([]);
    const [seleccionada, setSeleccionada] = useState(null);
  
  
    useEffect(() => {
      fetch("/weather.json")
        .then((response) => response.json())
        .then((data) => {
          setData(data.ciudades);
          setSeleccionada(data.ciudades[0])
        })
        .catch((error) => console.error("Error fetching JSON:", error));
    }, []);

        
    return(
        <div className="container mt-4">
            
            {seleccionada && (
               <Row>
                    {seleccionada.fechas.map((item,index) => (
                        <Col md={5} className="d-flex flex-column align-items-center p-3">
                        <Card>
                            <Card.Title>{seleccionada.nombre}</Card.Title>
                            <Card.Body>
                                <Card.Text>Fecha: {item.fecha}</Card.Text>
                                <Card.Text>Temperatura Maxima: {item.temperatura.maxima}</Card.Text>
                                <Card.Text>Temperatura Minima: {item.temperatura.minima}</Card.Text>
                                <Card.Text>Velocidad viento: {item.viento.velocidad}</Card.Text>
                                <Card.Text>Direccion viento: {item.viento.direccion}</Card.Text>
                            </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
               
            )}
       
            
        
            <Row>
                {data.map((item, index) => (
                <Col md={4} key={index}>
                    <Card className="mb-4" style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title onClick={() => setSeleccionada(item)} ><strong>{item.nombre}</strong></Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    );

}

export default WeatherContext;