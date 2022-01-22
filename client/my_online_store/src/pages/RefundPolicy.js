import React, {useState, useEffect} from "react";
import {useMediaQuery} from 'react-responsive'
import { createNewsletterSub, fetchPosts, fetchNews } from "../http/deviceAPI";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { useHistory } from "react-router-dom";
import {BLOG, NEWS} from "../utils/consts";
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
import aboutus from "../assets/town.jpg";
const { Header, Content, Footer } = Layout;

const Refund = () => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [posts, setPosts] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchNews().then(data => setPosts(data))
    }, [])

    console.log(posts)

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
            <Content style={{minHeight: 700}}>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={4}>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 50, color: '#FFFFFF'}}>{'Новости'}</h1>
                    </Col>
                    <Col span={20} offset={4}>
                    <Row className="d-flex" style={{marginBottom: 50}}>
                        {posts.map(num => ( 
                                <Col  md={3} style={{marginRight: 165}} className='mt-3'>
                                <div style={{width: 350, color: '#FFFFFF', cursor: 'pointer', fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 16, borderRadius: 15, paddingTop: 2, background: '#292929',  borderColor: '#292929'}}>
                                    <div className="d-flex align-items-center">
                                        <Image width={350} height={210} style={{borderRadius: 15}} src={process.env.REACT_APP_API_URL + num.imgMini}/>
                                    </div>
                                    <div>
                                        <h4 style={{fontSize: 20,fontWeight: 700, fontFamily: 'IBM Plex Mono', marginTop: 15, color: '#FFFFFF'}}>{num.title}</h4>
                                    </div>
                                    
                                    <div style={{fontWeight: 300}} className="mt-1 d-flex justify-content-between align-items-center">
                                    <div style={{fontSize: 18, fontWeight: 700, fontFamily: 'IBM Plex Mono',}}>{num.descriptionMini}</div>
                                    </div>
                                    <div style={{fontSize: 18, marginTop: 20, justifyContent: 'center', paddingBottom: 20}} className="d-flex" >
                                        <a style={{color: '#FFFFFF', textDecorationLine: 'underline', fontWeight: 700, fontFamily: 'IBM Plex Mono',}} onClick={() => history.push(NEWS + '/' + num.id)}>Подробнее</a>
                                    </div>
                                </div>
                            </Col>
                            ))}
                    </Row>

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
            <Content style={{minHeight: 700}}>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={2}>
                        <h1 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, paddingBottom: 10, color: '#FFFFFF'}}>{'Новости'}</h1>
                    </Col>
                <Col >
                <Row className="d-flex" style={{marginBottom: 50, marginLeft: 10}}>
                        {posts.map(num => ( 
                                <Col  md={3} style={{marginRight: 165}} className='mt-3'>
                                <div style={{width: 350, color: '#FFFFFF', cursor: 'pointer', fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 16, borderRadius: 15, paddingTop: 2, background: '#292929',  borderColor: '#292929'}}>
                                    <div className="d-flex align-items-center">
                                        <Image width={350} height={210} style={{borderRadius: 15}} src={process.env.REACT_APP_API_URL + num.imgMini}/>
                                    </div>
                                    <div>
                                        <h4 style={{fontSize: 20, fontWeight: 600, marginTop: 15, color: '#FFFFFF', fontWeight: 700, fontFamily: 'IBM Plex Mono',}}>{num.title}</h4>
                                    </div>
                                    
                                    <div style={{fontWeight: 300}} className="mt-1 d-flex justify-content-between align-items-center">
                                    <div style={{fontSize: 18, fontWeight: 700, fontFamily: 'IBM Plex Mono',}}>{num.descriptionMini}</div>
                                    </div>
                                    <div style={{fontSize: 18, marginTop: 20, justifyContent: 'center', paddingBottom: 20}} className="d-flex" >
                                        <a style={{color: '#FFFFFF', textDecorationLine: 'underline', fontWeight: 700, fontFamily: 'IBM Plex Mono',}} onClick={() => history.push(NEWS + '/' + num.id)}>Подробнее</a>
                                    </div>
                                </div>
                            </Col>
                            ))}
                    </Row>
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

export default Refund;