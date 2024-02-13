import Card from 'react-bootstrap/Card';
import Boton from './boton';
import Tag from './tag';


const MyCard = ({image, title, colorButton, textButton, description, raza }) => {
    return (
    <>
     <div className="col">  
    <Card style={{ width: "18rem", height:"500px" }} >
    <Card.Img variant="top" src={image} />
    <Card.Title>{title}   <Tag className="tag" raza={raza} /> </Card.Title>
    <p> {description} </p>
    <Boton colorButton={colorButton} textButton={textButton} />
    </Card>
    </div>
    </>
    );
    };
    export default MyCard;