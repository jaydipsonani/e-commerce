import React from 'react'
import './css/About.css';

const About = () => {
  return (
    <div>
              <div className="about-page">
            <header className="header-section">
                <div className="header-overlay">
                    <div className="container">
                        <h1>Welcome to Our Fashion World</h1>
                        <p>Where style meets comfort and elegance.</p>
                    </div>
                </div>
            </header>

            <section className="intro-section">
                <div className="container">
                    <h2>About Our Brand</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
                        justo nec orci congue, vel condimentum erat convallis.
                    </p>
                    <p>
                        We are passionate about providing high-quality clothing that reflects
                        modern trends and enhances your personal style.
                    </p>
                </div>
            </section>

            <section className="story-section">
                <div className="container">
                    <h2>Our Story</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">2010</div>
                            <div className="timeline-content">
                                <h3>Founded Our Fashion Brand</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus eget fermentum justo.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2015</div>
                            <div className="timeline-content">
                                <h3>Launched First Collection</h3>
                                <p>
                                    Sed cursus dolor vitae nunc varius, non ullamcorper odio
                                    sagittis.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2020</div>
                            <div className="timeline-content">
                                <h3>Expanded Globally</h3>
                                <p>
                                    Morbi lobortis ligula sit amet tortor dictum, in varius
                                    libero maximus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <h2>Our Values</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="value-item">
                                <div className="value-icon">
                                    <i className="fa fa-recycle"></i>
                                </div>
                                <h3>Sustainability</h3>
                                <p>We are committed to sustainable and ethical practices.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="value-item">
                                <div className="value-icon">
                                    <i className="fa fa-users"></i>
                                </div>
                                <h3>Inclusivity</h3>
                                <p>We celebrate diversity and embrace inclusivity in fashion.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="value-item">
                                <div className="value-icon">
                                    <i className="fa fa-heart"></i>
                                </div>
                                <h3>Quality Craftsmanship</h3>
                                <p>We take pride in crafting high-quality garments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <h2>Meet Our Team</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="team-member">
                                <img src={require(`./image/i.webp`)} alt="Team Member 1" />
                                <h4>John Doe</h4>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-member">
                                <img src={require(`./image/amit.webp`)} alt="Team Member 2" />
                                <h4>Jane Smith</h4>
                                <p>Head of Design</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-member">
                                <img src={require(`./image/aman.webp`)} alt="Team Member 3" />
                                <h4>Michael Brown</h4>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <div className="container">
                    <h2>Customer Testimonials</h2>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <p className="testimonial-text">
                                    "Absolutely love the clothes I bought here! Perfect fit and
                                    amazing quality."
                                </p>
                                <p className="testimonial-author">- Sarah Johnson</p>
                            </div>
                            <div className="carousel-item">
                                <p className="testimonial-text">
                                    "Fast delivery and beautiful packaging. Highly recommend!"
                                </p>
                                <p className="testimonial-author">- Mike Smith</p>
                            </div>
                            <div className="carousel-item">
                                <p className="testimonial-text">
                                    "Best shopping experience online. Will shop here again!"
                                </p>
                                <p className="testimonial-author">- Emily Brown</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Stay Connected</h2>
                    <p>Follow us for the latest updates and exclusive offers.</p>
                    <ul className="social-links list-unstyled list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </section>
        </div>

    </div>
  )
}

export default About