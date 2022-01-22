import React, {useState, useEffect} from "react";
import {useMediaQuery} from 'react-responsive'
import { createNewsletterSub, getNews } from "../http/deviceAPI";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { useHistory, useParams } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
const { Header, Content, Footer } = Layout;

const NewsPageSingle = () => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        getNews(id).then(data => setPosts(data))
    }, [])

    console.log(posts)

    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content>
                <Col>
                    <img width="100%" src={process.env.REACT_APP_API_URL + posts.img}/>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content style={{minHeight: 700}}>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={4}>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 65, paddingBottom: 10, color: '#FFFFFF'}}>{posts.title}</h1>
                    </Col>
                    <Col span={20} offset={4}>
                        <h4 style={{paddingTop:20, fontSize: 23, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF', width: 1400}}>{posts.description}</h4>
                    </Col>
                </Row>
            </Content>
            }
            {isMobile &&
            <Content>
                <Col>
                    <img width="100%" src={process.env.REACT_APP_API_URL + posts.img}/>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content style={{minHeight: 700}}>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={2}>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, paddingBottom: 10, color: '#FFFFFF'}}>{posts.title}</h1>
                    </Col>
                    <Col span={20} offset={2}>
                        <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF', width: 330}}>{posts.description}</h4>
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

export default NewsPageSingle;