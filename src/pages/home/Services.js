import { Row, Col, Layout } from 'antd';
import serviceIcon from '../../assets/oval.svg';
const { Content } = Layout;
function Services() {
    return (
        <section>
            <Content className="serviceList">
            <div className="site-layout-content">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <div className="serviceItem">
                        <img src={serviceIcon} alt=""/>
                        <h1>Fast</h1>
                        <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <div className="serviceItem">
                        <img src={serviceIcon} alt=""/>
                        <h1>Efficient</h1>
                        <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <div className="serviceItem">
                        <img src={serviceIcon} alt=""/>
                        <h1>Strategy</h1>
                        <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <div className="serviceItem">
                        <img src={serviceIcon} alt=""/>
                        <h1>Reliable</h1>
                        <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion</p>
                    </div>
                </Col>
            </Row>
            </div>
            </Content>
        </section>
    )
}

export default Services
