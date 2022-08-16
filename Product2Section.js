import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from 'react-bootstrap';
import Demo2 from '../images/Page5Demo.jpg'
import classes from './Page4_5_6.css';

function Product2() {
    return (

        <Container className='py-5 '>
            <Row>
                <Col lg={5} className='py-5'>

                    <img className='pic' src={Demo2} alt='...'></img>

                </Col>

                <Col class="col-lg-7 py-5 align-items-center">

                    <div class="p-5 p-md-5 ">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Sentiment Analysis</h1>
                        <p>
                            Track your mood and what impacts your mood, from media you consume to the places
                            you go.<br/><br/>

                            Get customized, science-based, mood-shifting tone recommendations proven to work
                            in 10 minutes or less.<br/><br/>

                            Listen with headphones to blend binaural beats behind your favorite music,
                            videos and apps, or enjoy them alone to enhance any experience.

                        </p>
                    </div>
                </Col>

            </Row>

        </Container>

    )
}

export default Product2;