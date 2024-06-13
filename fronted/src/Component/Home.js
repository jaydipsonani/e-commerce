import axios from 'axios'
import './css/Home.css';
import React, { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { addToCart } from '../redux/action';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';


const Home = ({ query, setQuery }) => {

    const [data, setData] = useState([])

    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    console.log("cart", cart)

    useEffect(() => {
        axios.get('https://fakestoreapiserver.reactbd.com/products')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const StarRating = ({ rating }) => {
        const totalStars = 5;
        return (
            <span style={{ fontSize: "large" }}>
                {[...Array(totalStars)].map((_, index) => (
                    index < rating ?
                        <FaStar key={index} /> :
                        <CiStar key={index} />
                ))}
            </span>
        );
    };

    const HandleaddToCart = (item) => {
        let newCart = [...cart];
        let itemInCart = newCart.some((i) => item.title === i.title);

        if (itemInCart) {
            toast.warn('Item is already in cart!', {
                position: "top-right",
                autoClose: 1000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return newCart;
        } else {
            dispatch(addToCart(item))
            toast.success('Your item is added to the cart!', {
                position: "top-right",
                autoClose: 1000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };


    return (
        <div style={{ backgroundColor: "rgb(153, 245, 245)" }}>
            <ToastContainer style={{ top: "50px", right: "20px" }} />
            <Container>
                <Row>
                    {data.filter((item) => item.title.toLowerCase().includes(query)).map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            
                            <Card className='hello1' style={{ margin: "20px 0", height: "452.72px", width: "250px" }}>
                                <Card.Img variant="top" src={item.image} style={{ height: "298px", width: "248px", objectFit: 'fill' }} />
                                <Card.Body>
                                    <Card.Title><h6>{item.title}</h6></Card.Title>

                                    <h5>Price: <span style={{ textDecoration: 'line-through', fontSize: "15px", fontWeight: "lighter" }}>${item.oldPrice}</span> ${item.price}</h5>
                                    <div style={{ marginBottom: '2px' }}>
                                        <span style={{ fontSize: "large" }}>
                                            <StarRating rating={item.rating} />
                                        </span>
                                    </div>
                                    <Button className='btn btn-primary' onClick={() => HandleaddToCart(item)}>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

    )
}

export default Home
