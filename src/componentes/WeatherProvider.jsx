import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function WeatherProvider (){
    const location = useLocation();
    const navigate = useNavigate();
    const tiempo = location.state?.item;

    if (!tiempo) return "No hay datos del tiempo de esa ciudad";


    return(
        <div>
            <h1>{tiempo.nombre}</h1>

            <Table striped bordered hover>
        <thead>
           
        <tr>
          <th>Ciudad</th>
          <th>Fecha</th>
          <th>Temperatura Maxima</th>
          <th>Temperatura Minima</th>
          <th>Velocidad Viento</th>
          <th>Direccion Viento</th>
          <th>LLuvia</th>
          <th>Salida Sol</th>
          <th>Puesta del Sol</th>
        </tr>
      </thead>
        <tbody>
            {tiempo.fechas.map((item,index)=>(
                <tr>
                <td>{tiempo.nombre}</td>
                <td>{item.fecha}</td>
                <td>{item.temperatura.maxima}</td>
                <td>{item.temperatura.minima}</td>
                <td>{item.viento.velocidad}</td>
                <td>{item.viento.direccion}</td>
                <td>{item.lluvia}</td>
                <td>{item.sol.salida}</td>
                <td>{item.sol.puesta}</td>
                </tr>
            ))}
        
            <tr></tr>
            </tbody>
        </Table>
        </div>

    );
}

export default WeatherProvider;