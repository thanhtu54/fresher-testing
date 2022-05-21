import { FaSearch } from 'react-icons/fa';
import logo from '../assets/bg-hero_2x.jpg';
import { FaRegHeart } from "react-icons/fa";
// import { useHistory } from "react-router-dom";
function List(props) {
    const data = require('../data.json');
    // const history = useHistory();
    // function HandleClick() {
    //     history.push('/detail')
    // }
    console.log('data: ', data)
    function fetchData() {
        return data.map(function (value) {
            console.log(value)
            var img = value.avatar;
            var title = value.title;
            var address = value.address;
            var pricefrom = value.price.from;
            var priceto = value.price.to;
            return (
                <li>
                    <div className='box-content'>
                        <i><FaRegHeart /></i>
                        <img src={require("../" + img)}></img>
                        <h3>{title}</h3>
                        <p>{address}</p>
                        <p>Giá từ : {pricefrom} tỷ - {priceto} tỷ </p>
                    </div>
                </li>
            )
        })
    }
    return (
        <>
            <div className="header">
                <h1>Sàn giao dịch bất động sản</h1>
                <img src={logo} />
                <div className="filter">
                    <ul>
                        <li>
                            <p>Tỉnh</p>
                            <select>
                                <option disabled selected hidden="Chọn tỉnh">Chọn tỉnh</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            </select>
                        </li>
                        <li>
                            <p>Diện tích</p>
                            <select>
                                <option disabled selected hidden="Chọn diện tích">Chọn diện  tích </option>
                                <option value=">30m2">{"<30m2"}</option>
                                <option value="30-45m2">30-45m2</option>
                                <option value="45-60m2">45-60m2</option>
                                <option value=">60m2">{">60m2"}</option>
                            </select>
                        </li>
                        <li>
                            <div id='search'>
                                <i><FaSearch /></i>
                                <span>Tìm kiếm</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='content'>
                <h2>SẢN PHẨM</h2>
                <ul className='content-head'>
                    <li><a href='#'>Tất cả</a></li>
                    <li><a href='#'>Chung cư</a></li>
                    <li><a href='#'>Biệt thự</a></li>
                    <li><a href='#'>Shophouse</a></li>
                    <li><a href='#'>Contodel</a></li>
                </ul>
                <div className='content-center'>
                    <ul>
                        {fetchData()}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default List;