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
            index <= 0 ? props.data.length -1 : index + 1
        );
    }
	return (
		<div>
			<h2 className="employee-num">Employee # {index + 1}</h2>
            <Card className='container' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body>
                    <Card.Header>{name}</Card.Header>
                    <Card.Subtitle>{email}</Card.Subtitle>
                    <Card.Subtitle>{age}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup flush>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <button className='prev' onClick={prevHandler}>previous</button>
            <button className='next' onClick={nextHandler}>next</button>
        </div>
	);
};

export default EmployeeCard;
