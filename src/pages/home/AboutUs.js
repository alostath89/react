import React, { useState } from 'react';

import aboutusVideo from '../../assets/image.jpg';
import playButton from '../../assets/play-button.svg';
import { Row, Col, Layout, Modal } from 'antd';
const { Content } = Layout;
// import { ArrowRightOutlined } from '@ant-design/icons';


function AboutUs() {

    let url="";
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
      };

    return (
        <section>
            <Content className="aboutus-section">
                <div className="site-layout-content">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" xs={24} sm={24} md={24} lg={12} xl={12} style={{ padding: '0' }}>
                            <div className="aboutus-info">
                                <h1>The thing about us is we think big, huge</h1>
                                <ul>
                                    <li>If the path is beautiful, let us not ask where it leads</li>
                                    <li>my religion is very simple. my religion is kindness</li>
                                    <li>each of us has within our power the ability to disrupt</li>
                                </ul>
                                <a href={url} >Learn More</a>
                            </div>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={24} md={24} lg={12} xl={12} style={{ padding: '0' }}>
                            <div className="aboutus-video" style={{ backgroundImage: 'url('+ aboutusVideo +')' }} >
                                <div className="aboutus-video-icon"><img src={playButton} alt="" onClick={showModal} /></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>

            <Modal title="About Us Video"  onCancel={handleCancel} visible={isModalVisible} footer=''>
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/LPxD5eCkp_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>

        </section>
    )
}

export default AboutUs
