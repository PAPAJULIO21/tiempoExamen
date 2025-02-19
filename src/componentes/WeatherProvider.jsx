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
            <th>#</th>
        {tiempo.fechas.map((item,index)=>(
                
                <th>{item.fecha}</th>
        ))}
        </tr>
        </thead>
        <tbody>
            <tr>
            <th>Ciudad</th>
        {tiempo.fechas.map((item,index)=>(
                <td>{tiempo.nombre}</td>
           
        ))}
            
            </tr>
            <tr>
                <th>Temperatura Maxima</th>
                {tiempo.fechas.map((item,index)=>(
                <td>{item.temperatura.maxima}</td>
           
        ))}
            </tr>
            <tr>
                <th>Temperatura Minima</th>
                {tiempo.fechas.map((item,index)=>(
                <td>{item.temperatura.minima}</td>
           
        ))}
            </tr>
            <tr>
                <th>Velocidad Viento</th>
                {tiempo.fechas.map((item,index)=>(
                <td>{item.viento.velocidad}</td>
           
        ))}
            </tr>
            <tr>
                <th>Direccion Viento</th>
                {tiempo.fechas.map((item,index)=>(
                <td>{item.viento.direccion}</td>
           
        ))}
            </tr>
            <tr>
                <th>LLuvia</th>
                {tiempo.fechas.map((item,index)=>(
                <td>{item.lluvia}</td>
           
        ))}
            </tr>
            <tr>
                <th>Salida Sol</th>
                {tiempo.fechas.map((item,index)=>(
                <td>{item.sol.salida}</td>
           
        ))}
            </tr>
            <tr>
                <th>Puesta del Sol</th>
                {tiempo.fechas.map((item,index)=>(
                <td>{item.sol.puesta}</td>
           
        ))}
            </tr>


            </tbody>
        </Table>
        </div>

    );
}

export default WeatherProvider;