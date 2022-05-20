import Logo from '../../assets/Logo.svg';
import Navigation from '../../assets/Navigation.svg';
import { Row, Col, Layout } from 'antd';
const { Content } = Layout;

function Header() {
    const url = "";
    return (
        <header>
            <Content>
                <div className="site-layout-content">
                    <Row justify="space-around" align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" xs={8} sm={8} md={8} lg={8} xl={8}>
                            <a href={url}><img src={Logo} alt="" /></a>
                        </Col>
                        <Col className="gutter-row" xs={8} sm={8} md={8} lg={8} xl={8}>
                            <a href={url}><img src={Navigation} alt="" /></a>
                        </Col>
                        <Col className="gutter-row" xs={8} sm={8} md={8} lg={8} xl={8}>

                        </Col>
                    </Row>
                </div>
            </Content>
        </header>
    )
}

export default Header
