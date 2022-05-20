import map from '../../assets/map.svg';
import { Row, Col, Layout, Form, Input, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';







function ContactUs() {

const { Content } = Layout;

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA0AVQU3qw095LyEOg0kxFEh8P_tHVThbI"
  })

  const position = {
    lat: 24.813552, 
    lng: 46.675297,
  };
  const exampleMapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];


    return (
        <section className="contactus-section">
            <h1>Contact Us</h1>
            <Content>
                <div className="site-layout-content">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" xs={24} sm={24} md={24} lg={12} xl={12} >
                        
                        {
                            isLoaded ? (
                                <GoogleMap
                                  mapContainerStyle={{width:'100%', height: '280px'}}
                                  center={position}
                                  zoom={11}
                                  options={{styles: exampleMapStyles}}
                                >

                                  <Marker position={position} icon={map} zIndex={999} />
                                  <Marker position={position} icon={map} zIndex={999} />
                                  
                                </GoogleMap>
                            ) : <></>
                        }


                        </Col>
                        <Col className="gutter-row" xs={24} sm={24} md={24} lg={12} xl={12} >
                            <div className="contactus-section-form">
                                <Form name="basic" autoComplete="off">
                                        
                                    <Form.Item name="name" rules={[{ required: true, message: 'Please input your Username!' }]} >
                                        <Input placeholder="Your full name" />
                                    </Form.Item>

                                    <Form.Item name="email" rules={[{ type: 'email', required: true, message: 'Please input your Email!' }]} >
                                        <Input placeholder="Your e-mail address" />
                                    </Form.Item>

                                    <Form.Item name="message" rules={[{ required: true, message: 'Please input your Message!' }]} >
                                        <Input.TextArea placeholder="Drop us a message here…" />
                                    </Form.Item>

                                    <Button htmlType="submit">Submit <ArrowRightOutlined style={{marginLeft:'10px'}} /></Button>

                                    </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>

        </section>
    )
}

export default ContactUs
