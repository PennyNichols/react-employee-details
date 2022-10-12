import React, {useState} from "react";
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const EmployeeCard = (props) => {
	const [index, setIndex] = useState(0);
	let { name, age, email, image} = props.data[index];
    function prevHandler(){
        setIndex(
            index <= 0 ? props.data.length -1 : index - 1
        );
    }
    function nextHandler(){
        setIndex(
            index >= props.data.length -1 ? 0 : index + 1
        );
    }
	return (
		<div>
			<h2 className="employee-num text-white pb-3">Team Member # {index + 1}</h2>
            <Card className='container bg-white' style={{ width: '32rem' }}>
                <img className='shadow-sm img-fluid w-50 h-50 mx-auto mt-5' src={image} alt={name} />
                <Card.Body>
                    <Card.Header className='h2 my-0 bg-white border-0'>{name}</Card.Header>
                    <Card.Subtitle className='my-2 fw-bolder text-uppercase email'>{email}</Card.Subtitle>
                    <Card.Subtitle className='mt-4 fw-lighter fs-5'>{age} years old</Card.Subtitle>
                    
                </Card.Body>
                
                <Card.Body>
                    <a href="https://facebook.com">
                        <FontAwesomeIcon className='icon' icon={faFacebook}/>
                    </a>
                    <a href="https://twitter.com">
                        <FontAwesomeIcon className='icon' icon={faTwitter}/>
                    </a>
                    <a href="https://instagram.com">
                        <FontAwesomeIcon className='icon' icon={faInstagram}/>
                    </a>
                </Card.Body>
            </Card>
            <div className='bg-dark'>
            <button className='prev m-3 border border-white bg-dark' onClick={prevHandler}>
                <FontAwesomeIcon className='control' icon={faArrowLeft}/>
            </button>
            <button className='next m-3 border border-white bg-dark' onClick={nextHandler}>
                <FontAwesomeIcon className='control' icon={faArrowRight}/>
            </button>

            </div>
        </div>
	);
};

export default EmployeeCard;
