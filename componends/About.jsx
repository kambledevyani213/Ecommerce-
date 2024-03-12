import { useParams } from "react-router-dom";
import './About.css';
// import { Tilt } from 'react-tilt';

const About = ({ Data, handleClick }) => {
    const { id } = useParams();
    const data = Data.find((item) => item.id === parseInt(id));

    if (!data) {
        // Handle the case when data for the given id is not found
        return (
            <div className="About">
                <p>Error: Product not found</p>
            </div>
        );
    }

    return (
        <div className="About">
            <div className="aboutimg">
                {/* <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}> */}
                <img className="img" height={"300px"} width={'300px'} src={data.image} alt={data.title}></img>
                {/* </Tilt> */}
            </div>
            <div className="aboutp">
                <p className="title">{data.title}</p>
                <p className="description">{data.description}</p>
                <p className="price"><b>Price:</b><i className="fa fa-inr"></i>{data.price}</p>
                <p className="rating"><b>Rating:</b> {data.rating.rate}⭐</p>
                <button id="btn" onClick={() => handleClick(data)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default About;
