import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import slide1 from './dcmads.png';
import slide2 from '../assets/1629283201-matrixone.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { Link, useParams } from "react-router-dom";

function Detail(props) {
    const data = require('../data.json/a92ff2d6-2377-441d-b75e-fff730633482');
    function fetchData() {
        return data.map(function (value) {
            console.log(value)
            var img1 = value.images[0];
            var img2 = value.images[1];
            var title = value.title;
            var address = value.address;
            var area = value.area;
            var description = value.description;
            return (
                <>
                    <div className='body'>
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require("../ + img1")}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require("../ + img2")}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='center'>
                            <p>{title}</p>
                            <p>{address}</p>
                            <p>Diện tích {area} m2</p>
                            <h2>Thông tin chi tiết</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </>
            )
        })
    }
    return (
        <>
            {fetchData()}
        </>
    )
}
export default Detail;