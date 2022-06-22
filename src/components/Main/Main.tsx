import React, {FC} from 'react';
import './Main.css'

interface IMain {
    title: string
    topCars: ICar[]
}

interface ICar {
    manufacturer: string
    model: string
    price: number
}

const Main: FC<IMain> = ({topCars}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Manufacturer</td>
                    {topCars?.map((item, index) =>
                        <th key={index + 1}>{item.manufacturer}</th>)}
                </tr>
                <tr>
                    <td>Model</td>
                    {topCars?.map((item, index) =>
                        <td key={index + 1}>{item.model}</td>)}
                </tr>
                <tr>
                    <td>Price</td>
                    {topCars?.map((item, index) =>
                        <td key={index + 1}>{item.price}</td>)}
                </tr>
            </tbody>
        </table>
    );
};

export default Main;