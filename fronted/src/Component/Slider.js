import React from 'react'
import { Carousel } from 'react-bootstrap'
import './css/Slider.css'

const Slider = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(153, 245, 245)' }} className="carousel-container" >
                <Carousel data-bs-theme="dark" interval={3000} pause={false} >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={require(`./image/i (3).webp`)}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={require(`./image/i (4).webp`)}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={require(`./image/i (5).webp`)}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={require(`./image/slider4.jpg`)}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Slider