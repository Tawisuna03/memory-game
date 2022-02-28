import { useState } from "react";
import Card from "./Card";

function Cards() {
    const [items, setItems] = useState([
        {img: "./img/manhwa1.jpg", "id": 1},
        {img: "./img/manhwa1.jpg", "id": 1},
        {img: "./img/manhwa2.jpg", "id": 2},
        {img: "./img/manhwa2.jpg", "id": 2},
        {img: "./img/manhwa3.jpg", "id": 3},
        {img: "./img/manhwa3.jpg", "id": 3},
        {img: "./img/manhwa4.jpg", "id": 4},
        {img: "./img/manhwa4.jpg", "id": 4},
        {img: "./img/manhwa5.jpg", "id": 5},
        {img: "./img/manhwa5.jpg", "id": 5},
        {img: "./img/manhwa6.jpg", "id": 6},
        {img: "./img/manhwa6.jpg", "id": 6},
        {img: "./img/manhwa7.jpg", "id": 7},
        {img: "./img/manhwa7.jpg", "id": 7},
        {img: "./img/manhwa8.jpg", "id": 8},
        {img: "./img/manhwa8.jpg", "id": 8},
    ].sort(() => Math.random()-0.5))

    return (
        <div className="container">
            {items.map((item, index)=>(
                <Card key={index} item={item}/>
            ))}
        </div>
    )
}

export default Cards