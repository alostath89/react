import { Carousel } from 'antd';
import './style.css';
import simg from '../../assets/image.jpg';
import { ArrowRightOutlined } from '@ant-design/icons';


function Slider() {

    let url="";

    return (
        <section>
            <Carousel autoplay>
                <div>
                    <div className="carousel-item">
                        <div className="carousel-img"><img src={simg} alt="" /></div>
                        <div className="carousel-info">
                            <h1>Grow your brand through digital</h1>
                            <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt.</p>
                            <a href={url}>Learn More <ArrowRightOutlined style={{marginLeft:'10px'}} /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-item">
                        <div className="carousel-img"><img src={simg} alt="" /></div>
                        <div className="carousel-info">
                            <h1>Grow your brand through digital</h1>
                            <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt.</p>
                            <a href={url}>Learn More <ArrowRightOutlined style={{marginLeft:'10px'}} /></a>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default Slider
