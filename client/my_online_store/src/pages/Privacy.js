import React, {useState} from "react";
import {useMediaQuery} from 'react-responsive'
import { createNewsletterSub } from "../http/deviceAPI";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { useHistory } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';
import aboutus from "../assets/water.jpg";
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
const { Header, Content, Footer } = Layout;

const Privacy = () => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const history = useHistory()

    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={aboutus}/>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={4}>
                    <Col span={20}>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 50, paddingBottom: 10, color: '#FFFFFF'}}>Guarantees</h1>
                    </Col>
            <Col span={20}>
            <h4 style={{paddingTop:20, fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>9 years of successful work</h4>

We opened in 2012, and all this time we have been delighting Runet gamers with prices and assortment. We have an excellent reputation, which has cost us a lot of time and effort – we do not deceive customers.

<br/><br/><br/>

<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>Real reviews of work and products</h4>

On the Feedback page you will find a huge number of messages in which real people share their impressions.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>Products from authorized dealers</h4>

All keys were bought legally: no "gray" risky schemes. Buy and use all the features of the official version of the game.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>Instant key acquisition</h4>

After payment, the key is automatically sent to the email address you specified. Pre-order - on the day of release.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>WebMoney Personal Certificate</h4>

We have passed a special verification procedure in the Webmoney system and received a personal certificate. This ensures that the holder of this certificate is a real person and is responsible for the activities of the store.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>Comment system</h4>

Recently we have a comment system! Now our customers can share their honest opinion about the quality of our service and the keys to the games.
</h4>
            </Col>
                    </Col>
                </Row>
            </Content>
            }
            {isMobile &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={aboutus}/>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={4}>
                    <Col span={20}>
                        <h1 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, paddingBottom: 10, color: '#FFFFFF'}}>Guarantees</h1>
                    </Col>
            <Col span={20}>
            <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>9 years of successful work</h4>

We opened in 2012, and all this time we have been delighting Runet gamers with prices and assortment. We have an excellent reputation, which has cost us a lot of time and effort – we do not deceive customers.

<br/><br/><br/>

<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>Real reviews of work and products</h4>

On the Feedback page you will find a huge number of messages in which real people share their impressions.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>Products from authorized dealers</h4>

All keys were bought legally: no "gray" risky schemes. Buy and use all the features of the official version of the game.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>Instant key acquisition</h4>

After payment, the key is automatically sent to the email address you specified. Pre-order - on the day of release.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>WebMoney Personal Certificate</h4>

We have passed a special verification procedure in the Webmoney system and received a personal certificate. This ensures that the holder of this certificate is a real person and is responsible for the activities of the store.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>Comment system</h4>

Recently we have a comment system! Now our customers can share their honest opinion about the quality of our service and the keys to the games.
</h4>
            </Col>
                    </Col>
                </Row>
            </Content>
            }
            {isDesktopOrLaptop && 
            <FooterComputer/>
            }
            {isMobile &&
            <FooterMobile/>
            }
        </Layout>
    )
}

export default Privacy;