import { observer } from "mobx-react-lite";
import {useMediaQuery} from 'react-responsive'
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import DeviceItem from "../components/DeviceItem";
import TypeBar from "../components/TypeBar";
import FooterMobile from "../components/FooterMobile";
import FooterComputer from "../components/FooterPC";
import { fetchBrands, fetchDevices, fetchTypes, fetchOneCollection, fetchPosts, fetchOneCollectionMobile, fetchOneCollectionPC, fetchCollections } from "../http/deviceAPI";
import { useHistory } from "react-router-dom";
import { Layout, Card, Form, Input, Button, Row, Space, Menu, Image, Col, message} from 'antd';
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined, MoreOutlined } from '@ant-design/icons';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE, COLLECTION, BRANDS} from "../utils/consts";
import Pages from "../components/Pages";
import CarouselBar from "../components/Carousel";
import pictureOne from "../assets/best.jpg"
import pictureTwo from "../assets/psplus.jpg"

import CarouselBarTwo from "../components/CarouselTwo";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


const Shop = observer(() => {
    const {devices} = useContext(Context)
    const [postData, setPostData] = useState([])
    const [allCollectionsGames, setAllCollectionsGames] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const [collectionOne, setCollectionOne] = useState([])
    const [collectionTwo, setCollectionTwo] = useState([])
    const [collectionThree, setCollectionThree] = useState([])
    const [collectionFour, setCollectionFour] = useState([])
    const [collectionFive, setCollectionFive] = useState([])
    const [collectionOneMob, setCollectionOneMob] = useState([])
    const [collectionTwoMob, setCollectionTwoMob] = useState([])
    const [collectionThreeMob, setCollectionThreeMob] = useState([])
    const [collectionFourMob, setCollectionFourMob] = useState([])
    const [collectionFiveMob, setCollectionFiveMob] = useState([])
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const history = useHistory()
    const [newsletter, setNewsletter] = useState('')

    useEffect(() => {
        fetchTypes().then(data => devices.setTypes(data))
        fetchTypes().then(data => setAllCollectionsGames(data))
        fetchOneCollectionPC(1).then(data => setCollectionOne(data))
        fetchOneCollectionPC(2).then(data => setCollectionTwo(data))
        fetchOneCollectionPC(3).then(data => setCollectionThree(data))
        fetchOneCollectionPC(4).then(data => setCollectionFour(data))
        fetchOneCollectionPC(5).then(data => setCollectionFive(data))
        fetchOneCollectionMobile(1).then(data => setCollectionOneMob(data))
        fetchOneCollectionMobile(2).then(data => setCollectionTwoMob(data))
        fetchOneCollectionMobile(3).then(data => setCollectionThreeMob(data))
        fetchOneCollectionMobile(4).then(data => setCollectionFourMob(data))
        fetchOneCollectionMobile(5).then(data => setCollectionFiveMob(data))
        fetchDevices(null).then(data => {
            devices.setDevices(data.rows)
            devices.setTotalCount(data.count)
        })
    }, [])


    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <CarouselBar />
            }
            {isDesktopOrLaptop && 
            <Content style={{ marginBottom: 37}}>
                    <Row style={{fontSize: 25}} >
                        <Col offset={2} span={20}>
                            <Col style={{marginBottom: 20, position: 'absolute', left: 1, bottom: -170}}>
                                <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: 'white'}}>Оформление<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 1)} style={{fontSize: 21, color: 'white'}}/></Space>
                                <Col>
                                    <Space>
                                        {collectionOne.map(device => 
                                            <DeviceItem key={device.id} device={device}/>
                                        )}
                                    </Space>
                                </Col>
                            </Col>  
                        </Col>
                        <Col offset={2} span={20} style={{marginTop: 187}}>
                            <Col style={{ marginBottom: 20}}>
                                    <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: 'white'}}>Сборки серверов<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 2)} style={{fontSize: 21, color: 'white'}}/></Space>
                                    <Col>
                                        <Space>
                                            {collectionTwo.map(device => 
                                                <DeviceItem key={device.id} device={device}/>
                                            )}
                                        </Space> 
                                    </Col>
                            </Col>
                        </Col>
                        </Row>
                    </Content>}
                    {isDesktopOrLaptop &&
                    <Content style={{marginTop: 37, marginBottom: 20}}>

                        <Col>
                            <Col style={{position: 'relative'}}>
                                <img style={{position: 'relative'}} width='100%' src={pictureOne}/>
                            </Col>
                            <Col style={{position: 'absolute', left: 100, bottom: 240}}>
                                <h4 style={{fontWeight: 700, fontSize: 30, color: 'white', fontFamily: 'IBM Plex Mono'}}>Раздел новостей!</h4> 
                                <h4 style={{paddingTop:10, fontSize: 23, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'white', width: 600, fontWeight: 700}}> У нас появился раздел "Новости"! Там мы будем публиковать новости об событиях, скидках, новых услугах и не только! Заходи и читай :)</h4>
                                <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: 14, width: 200, height: 50,}} onClick={() => history.push(FAQ_ROUTE)}>Почитать...</Button>
                            </Col>
                        </Col>
                        
                    </Content>
                    }
                    {isDesktopOrLaptop &&
                    <Content>
                        <Row style={{fontSize: 25}} >
                        <Col offset={2} span={20}>
                            <Col style={{marginTop: 37, marginBottom: 20}}>
                                    <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: 'white'}}>Сайты<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 3)} style={{fontSize: 21, color: 'white'}}/></Space>
                                    <Col>
                                        <Space>
                                            {collectionThree.map(device => 
                                                <DeviceItem key={device.id} device={device}/>
                                            )}
                                        </Space> 
                                    </Col>
                            </Col>
                            
                            <Col style={{marginTop: 37, marginBottom: 20}}>
                                <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: 'white'}}>Плагины<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 4)} style={{fontSize: 21, color: 'white'}}/></Space>
                                <Col>
                                <Space>
                                    {collectionFour.map(device => 
                                        <DeviceItem key={device.id} device={device}/>
                                    )}
                                </Space>
                                </Col>
                            </Col>   
                            <Col style={{marginTop: 37, marginBottom: 20}}>
                                    <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: 'white'}}>Автодонат<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 5)} style={{fontSize: 21, color: 'white'}}/></Space>
                                    <Col>
                                    <Space>
                                        {collectionFive.map(device => 
                                            <DeviceItem key={device.id} device={device}/>
                                        )}
                                    </Space> 
                                    </Col>
                            </Col>
                        </Col>
                        </Row>
                        </Content>
                        }
                        {isDesktopOrLaptop &&
                        <Content style={{marginTop: 37, marginBottom: 20}}>
                        <Col >
                            <Col style={{position: 'relative'}}>
                                <img style={{position: 'relative'}} width='100%'  src={pictureTwo}/>
                            </Col>
                            <Col style={{position: 'absolute', left: 100, bottom: 190}}>
                            <h4 style={{fontWeight: 700, fontSize: 30, color: 'white', fontFamily: 'IBM Plex Mono'}}>Раздел блог!</h4> 
                                <h4 style={{paddingTop:10, fontSize: 23, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: 'white', width: 600, fontWeight: 700}}> У нас появился раздел "Блог"! Там мы будем публиковать блог об нашей жизни, фейлах, каких-либо фейлах и не только! Заходи и читай :)</h4>
                                
                                <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 250, height: 50,}} onClick={() => history.push(REFUND_POLICY_ROUTE)}>Поугарать</Button>
                            </Col>
                        </Col>
                        </Content>
                        }
                    {isDesktopOrLaptop &&
                        <Content>
                        <Row style={{fontSize: 25}} >
                        <Col offset={2} span={20}>
                        <Col style={{marginTop: 37, marginBottom: 20}}>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, color: 'white'}}>Типы наших услуг</h4>
                                    <Row className="d-flex">
                                        {allCollectionsGames.map(device => 
                                        <Col key={device.id} onClick={() => history.push(COLLECTION + '/' + device.id)} style={{marginRight: 25, marginBottom: 25}}>
                                            <img width={355} height={215} src={process.env.REACT_APP_API_URL + device.img} />
                                            <div style={{fontWeight: 600, fontSize: 20, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                                            <div style={{fontWeight: 700, fontFamily: 'IBM Plex Mono'}}>{device.name}</div>
                                            </div>
                                        </Col>
                                        // 292929
                                        )}
                                    </Row> 
                            </Col>
                        </Col>
                    </Row>
            </Content>
            }

            {isMobile &&
            <CarouselBar/>
            }
            {isMobile && 
            <Content>
                <Row style={{fontSize: 25, paddingTop: 10, marginBottom: 30}}>
                        <Col  >
                            <Col style={{marginBottom: 5, position: 'absolute', left: 4, bottom: 290}}>
                                <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, color: 'white'}}>Оформление <MoreOutlined onClick={() => history.push(COLLECTION + '/' + 1)} style={{fontSize: 16, color: 'white'}}/></Space>
                                <Col>
                                    <Space>
                                    {collectionOneMob.map(device => 
                                        <DeviceItem key={device.id} device={device}/>
                                    )}
                                </Space>
                                </Col>
                            </Col>  
                        </Col>
                        <Col style={{marginLeft: 4}}style={{marginTop: 197}}>
                            <Col style={{ marginBottom: 20, marginLeft: 4}}>
                                    <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, color: 'white'}}>Сборки серверов <MoreOutlined onClick={() => history.push(COLLECTION + '/' + 2)} style={{fontSize: 16}}/></Space>  

                                    <Col>
                                        <Space>
                                        {collectionTwoMob.map(device => 
                                            <DeviceItem key={device.id} device={device}/>
                                        )}
                                    </Space> 
                                    </Col>
                            </Col>
                        </Col>
                        <Col style={{marginTop: 20, marginBottom: 10}}>
                            <Col style={{position: 'relative'}}>
                                <img style={{position: 'relative'}} width="100%" src={pictureOne}/>
                            </Col>
                            <Col style={{position: 'absolute', left: 20, bottom: 10}}>
                                <h4 style={{fontWeight: 700, fontSize: 12, color: 'white', fontFamily: 'IBM Plex Mono'}}>Раздел новости!</h4> 
                                <h4 style={{paddingTop:7, fontSize: 7, fontFamily: 'IBM Plex Mono', paddingBottom: 1, color: 'white', width: 150}}>У нас появился раздел "Новости"! Там мы будем публиковать новости об событиях, скидках, новых услугах и не только! Заходи и читай :)</h4>
                                <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: 7, width: 80, height: 20,}} onClick={() => history.push(FAQ_ROUTE)}>Почитать...</Button>
                            </Col>
                        </Col>
                        <Col style={{marginLeft: 4}}>
                            <Col style={{marginTop: 1, marginBottom: 20}}>
                                    <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, color: 'white'}}>Сайты<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 3)} style={{fontSize: 16}}/></Space>
                                    <Col>
                                        <Space>
                                        {collectionThreeMob.map(device => 
                                            <DeviceItem key={device.id} device={device}/>
                                        )}
                                    </Space>
                                    </Col> 
                            </Col>
                            
                            <Col style={{marginTop: 10, marginBottom: 20}}>
                                <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, color: 'white'}}>Плагины<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 4)} style={{fontSize: 16}}/></Space>
                                <Col>
                                        <Space>
                                    {collectionFourMob.map(device => 
                                        <DeviceItem key={device.id} device={device}/>
                                    )}
                                </Space>
                                </Col>
                            </Col>   
                            <Col style={{marginTop: 10, marginBottom: 20}}>
                                    <Space style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, color: 'white'}}>Автодонат<MoreOutlined onClick={() => history.push(COLLECTION + '/' + 5)} style={{fontSize: 16}}/></Space>
                                    <Col>
                                        <Space>
                                        {collectionFiveMob.map(device => 
                                            <DeviceItem key={device.id} device={device}/>
                                        )}
                                    </Space>
                                    </Col> 
                            </Col>
                        </Col>
                        <Col style={{marginTop: 37, marginBottom: 20}}>
                            <Col style={{position: 'relative'}}>
                                <img style={{position: 'relative'}} width="100%" src={pictureTwo}/>
                            </Col>
                            <Col style={{position: 'absolute', left: 20, bottom: 30}}>
                                <h4 style={{fontWeight: 700, fontSize: 12, color: 'white', fontFamily: 'IBM Plex Mono'}}>Раздел блог!</h4> 
                                <h4 style={{paddingTop:10, fontSize: 7, fontFamily: 'IBM Plex Mono', color: 'white', width: 150, fontWeight: 700}}> У нас появился раздел "Блог"! Там мы будем публиковать блог об нашей жизни, фейлах, каких-либо фейлах и не только! Заходи и читай :)</h4>
                                <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: 7, width: 80, height: 20,}}>Поугарать</Button>
                            </Col>
                        </Col>
                        <Col style={{marginTop: 37, marginBottom: 20}}>
                                    <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: 'white'}}>Типы наших услуг</h4>
                                    <Row className="d-flex">
                                        {allCollectionsGames.map(device => 
                                        <Col key={device.id} onClick={() => history.push(COLLECTION + '/' + device.id)} style={{marginRight: 25, marginBottom: 25}}>
                                            <img width={162} height={90} src={process.env.REACT_APP_API_URL + device.img} />
                                            <div style={{fontWeight: 600, fontSize: 12, color: '#FFFFFF', paddingTop: 5}} className=" d-flex justify-content-between align-items-center">
                                            <div style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{device.name}</div>
                                            </div>
                                        </Col>
                                        )}
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
})



export default Shop;