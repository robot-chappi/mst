import React, {useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import {useMediaQuery} from 'react-responsive'
import { Layout, Card, Form, Input, Button, Row, Space, Menu, Image, Col, message, Rate} from 'antd';
import { Content } from "antd/lib/layout/layout";
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined, SearchOutlined } from '@ant-design/icons';
import { fetchBrands, fetchDevices, fetchTypes, getAllDevices } from "../http/deviceAPI";
import {DEVICE_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import FooterComputer from "../components/FooterPC";
import {Context} from "../index";
import searchImg from "../assets/shoppingcart.jpg";
import FooterMobile from "../components/FooterMobile";
const { Header, Footer } = Layout;

const Search = () => {
    const {devices} = useContext(Context)
    const history = useHistory()
    const [product, setProducts] = useState([])
    const [types, setTypes] = useState([])
    const [brands, setBrands] = useState([])
    const [find, setFind] = useState('')
    const [typeId, setTypeId] = useState(null)
    const [brandId, setBrandId] = useState(null)
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    
    useEffect(() => {
        fetchDevices(null).then(data => setProducts(data.rows))
        fetchTypes().then(data => setTypes(data))
        fetchBrands().then(data => setBrands(data))
    }, [])

    useEffect(() => {
        fetchDevices(typeId, brandId).then(data => {
            setProducts(data.rows)
        })
    }, [typeId, brandId])

    const throwOut = () => {
        setTypeId(null)
        setBrandId(null)
        setFind('')
    }


    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={searchImg}/>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content style={{marginTop: 30, marginBottom: 100}}>
                <Col className="d-flex" style={{position: 'absolute', left: 585, bottom: -150}}>
                    <Card style={{background: '#292929', borderColor: "#292929", width: 700, borderRadius: 30}}>
                        <Col>
                            <Input style={{background: '#292929', borderRadius: 15, height: 50,  fontSize: 14, marginBottom: 10, fontFamily: 'IBM Plex Mono', marginTop: 7, borderWidth: 2, fontWeight: 700, color: '#FFFFFF'}} value={find} onChange={e => setFind(e.target.value)} placeholder={`Что ты ищешь?`} />
                        </Col>
                        <Col>
                            <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, color: 'white'}}>Тип</h4>
                            <Row className="d-flex" style={{marginLeft: 10}}>
                            {types.map((num) => (
                                <a onClick={() => setTypeId(num.id)} style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, color: 'white', marginRight: 10}}>{num.name}</a>
                            ))}
                            </Row>
                        </Col>
                        <Col className="d-flex" style={{marginTop: 20, justifyContent: 'center'}}>
                            <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 100, height: 30}} onClick={throwOut}>Сбросить </Button>
                        </Col>
                    </Card>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content style={{minHeight: 1000}}>
                <Row>
                    <Col offset={1}>
                        <Row className="d-flex">

                            {product.filter((num) => {
                                if (find == '') {
                                    return num
                                } else if (num.name.toLowerCase().includes(find.toLowerCase())) {
                                    return num
                                }
                            }).map((num) => ( 
                                <Col md={3} className='mt-3' key={num.id} style={{marginRight: 126}}>
                                            <div style={{width: 210, height: 363, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 700, borderRadius: 15, paddingTop: 5, background: '#292929'}}>
                                                <div className="d-flex align-items-center">
                                                    <Image width={210} height={210} style={{borderRadius: 15,}}  src={process.env.REACT_APP_API_URL + num.img}/>
                                                </div>
                                                <div style={{fontWeight: 600, fontSize: 18, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                                                <div>{num.name}</div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{marginLeft: 5}}>
                                                        <Space><Rate style={{fontSize: 17}} value={num.rating} /></Space>
                                                </div>
                                                <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 16, width: 198, height: 36, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + num.id)}>РУБ: {num.price}</Button>
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
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={searchImg}/>
                </Col>
            </Content>
            }
                {isMobile &&
            <Content style={{ marginBottom: 50}}>
                <Col className="d-flex" style={{justifyContent: 'center'}}>
                    <Card style={{background: '#292929', borderColor: "#292929", width: '100%', borderRadius: 30, marginLeft: 10, marginRight: 10}}>
                        <Col>
                            <Input style={{background: '#292929', borderRadius: 15,  height: 40, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7,  borderWidth: 2, fontWeight: 700, color: '#FFFFFF', }} value={find} onChange={e => setFind(e.target.value)} placeholder={`Что ты ищешь?`} />
                        </Col>
                        <Col>
                            <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: 'white'}}>Тип</h4>
                            <Row className="d-flex" style={{marginLeft: 5}}>
                            {types.map((num) => (
                                <a onClick={() => setTypeId(num.id)} style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, color: 'white', marginRight: 10}}>{num.name}</a>
                            ))}
                            </Row>
                        </Col>
                        <Col className="d-flex" style={{marginTop: 10, justifyContent: 'center'}}>
                            <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 100, height: 30}} onClick={throwOut}>Сбросить </Button>
                        </Col>
                    </Card>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content style={{minHeight: 800}}>
                <Row>
                    <Col>
                        <Row className="d-flex" style={{justifyContent: 'center'}}>

                            {product.filter((num) => {
                                if (find == '') {
                                    return num
                                } else if (num.name.toLowerCase().includes(find.toLowerCase())) {
                                    return num
                                }
                            }).map((num) => ( 
                                <Col md={3} className='mt-3' key={num.id} style={{marginRight: 5}}>
                                            <div style={{width: 110, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 600, borderRadius: 15,  background: '#292929', height: 224}}>
                                                <div className="d-flex align-items-center">
                                                    <Image width={110} height={110} style={{borderRadius: 15,}} src={process.env.REACT_APP_API_URL + num.img}/>
                                                </div>
                                                <div style={{fontWeight: 700, fontSize: 12, color: '#FFFFFF', paddingTop: 5}} className=" d-flex justify-content-between align-items-center">
                                                <div>{num.name}</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                        <Space><Rate style={{fontSize: 12}} value={num.rating} /></Space>
                                                    </div>
                                                <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                                                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 10, width: 110, height: 26, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + num.id)}>RUB: {num.price}</Button>
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
            <FooterMobile/>
            }
        </Layout>

    );
}


export default Search;