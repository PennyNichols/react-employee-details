import React, {useState} from "react";
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const EmployeeCard = (props) => {
	const [index, setIndex] = useState(0);
	let { name, age, email, image, id } = props.data[index];
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
			<h2 className="employee-num text-white pb-3">Employee # {index + 1}</h2>
            <Card className='container bg-white' style={{ width: '32rem' }}>
                <img className=' img-fluid w-50 h-50 mx-auto mt-5' src={image} alt={name} />
                <Card.Body>
                    <Card.Header className='h2 my-0 bg-white border-0'>{name}</Card.Header>
                    <Card.Subtitle className='my-2 fw-bolder text-uppercase email'>{email}</Card.Subtitle>
                    <Card.Subtitle className='my-4 fw-lighter fs-5'>{age} years old</Card.Subtitle>
                    
                </Card.Body>
                
                <Card.Body>
                    
                </Card.Body>
            </Card>
            <button className='prev' onClick={prevHandler}>previous</button>
            <button className='next' onClick={nextHandler}>next</button>
        </div>
	);
};

export default EmployeeCard;
