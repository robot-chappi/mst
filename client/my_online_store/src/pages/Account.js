import React, {useState, useEffect} from "react";
import {useMediaQuery} from 'react-responsive'
import { Spinner } from "react-bootstrap";
import CreateUserInformation from "../components/models/CreateUserInfo";
import CreateUpdateUserInfoModl from "../components/models/CreateUpdateUserInfo";
import CreateFeedBackModl from "../components/models/CreateFeedBack";
import CreateOrders from "../components/models/CreateOrders";
import CreateOrdersMobile from "../components/models/CreateOrdersMobile";
import CreateActiveCode from "../components/models/CreateActivateCode";
import CreateActiveCoupones from "../components/models/CreateActivateCoupone";
import CreateCouponenCash from "../components/models/CreateGetCash";
import CreateAboutYouself from "../components/models/CreateInfoAboutYouself";
import jwt_decode from "jwt-decode";
import { fetchUserData, createNewsletterSub, fetchOneUserBackground, fetchReviews } from "../http/deviceAPI";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import aboutus from "../assets/Garantees.jpg";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, message} from 'antd';
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined, EditOutlined, PlusOutlined, CheckCircleOutlined, AreaChartOutlined, DollarCircleOutlined, IdcardOutlined, PhoneOutlined, TagOutlined   } from '@ant-design/icons';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE, CUSTOMER} from "../utils/consts";

import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
const { Header, Content, Footer } = Layout;


const Account = observer(() => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [userInfoVisible, setUserInfoVisible] = useState(false)
    const [userUpdateInfoVisible, setUserUpdateInfoVisible] = useState(false)
    const [userFreeBack, setUserFreeBackVisible] = useState(false)
    const [order, setOrder] = useState(false)
    const [activatedCode, setActivatedCode] = useState(false)
    const [activatedCoupones, setActivatedCoupones] = useState(false)
    const [getCash, setGetCash] = useState(false)
    const [aboutYouself, setAboutYouself] = useState(false)
    const [orderMobile, setOrderMobile] = useState(false)
    const [userData, setUserData] = useState([])
    const [backgroundUserPage, setBackgroundUserPage] = useState([])
    const [allReviews, setAllReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    let idd = jwt_decode(localStorage.getItem('token'))

    useEffect(() => {
        fetchOneUserBackground(idd.id).then(data => setBackgroundUserPage(data))
        fetchReviews(idd.id).then(data => setAllReviews(data))
        fetchUserData(idd.id).then(data => setUserData(data)).finally(() => setLoading(false))
    }, [])

    const Helper = () => {
        console.log(userData)
    }

    // 06967d75-ca01-4fc2-a6e0-31515764c466.jpg
    // const account = 
    //     {name: 'Аноним', vk: 'Нет', email: 'Нет', role: 0, money: 0, personalCode: 'Нет', img: '06967d75-ca01-4fc2-a6e0-31515764c466.jpg',  place: 'Нет', birthday: 'Нет', gender: 'Нет'}
    
    // const backgroundUser = {img: 'forest.jpg'}


    // if(userData === null) {  
    //     setUserData(account)
    //     console.log(account)
    // }

    // if(backgroundUserPage === null) {  
    //     setBackgroundUserPage(backgroundUser)
    //     console.log(backgroundUser)
    // }
    
    if (loading) {
        return <Spinner animation={'grow'}/>
      } 

    if(userData === null) {  
     return (
         <Layout style={{background: "#1F1F1F"}}>
             {isDesktopOrLaptop &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={process.env.REACT_APP_API_URL + 'forest.jpg'}/>
                </Col>
                <Col style={{position: 'absolute', left: 730, bottom: 280}}>
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 65, paddingBottom: 10, color: '#FFFFFF'}}>ТВОЙ АККАУНТ</h1>
                </Col>
            </Content>
            }
             {isDesktopOrLaptop &&
            <Content className='center-block' style={{minHeight: 650}}>
                <Col style={{fontFamily: 'Poppins'}}>
                    <Row style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                        <Image style={{borderRadius: 15}} width={170} height={170} src={process.env.REACT_APP_API_URL + '06967d75-ca01-4fc2-a6e0-31515764c466.jpg'} />
                    </Row>
                    <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <h1 style={{fontSize: 35, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Аноним</h1>
                        </Col> 
                    </Row>
                    <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <h1 style={{fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Почта: Нету</h1>
                        </Col>
                    </Row> 
                    <Row style={{marginTop: 20}} className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono',color: '#FFFFFF'}}>Вк-профиль: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>День рождения: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Пол: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Баланс: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Заказчик</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: Нету</h1>
 
                        </Col> 
                    </Row>   
                           
                </Col>
                <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>
                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserInfoVisible(true)}><PlusOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 15, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserUpdateInfoVisible(true)}><EditOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setOrder(true)}><TagOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setUserFreeBackVisible(true)}><PhoneOutlined/></Button>
                 
                    <CreateUserInformation show={userInfoVisible} onHide={() => setUserInfoVisible(false)}/>
                    <CreateUpdateUserInfoModl show={userUpdateInfoVisible} onHide={() => setUserUpdateInfoVisible(false)}/>
                    <CreateFeedBackModl show={userFreeBack} onHide={() => setUserFreeBackVisible(false)}/>
                    <CreateOrders show={order} onHide={() => setOrder(false)}/>
                </div>
            </Content>
            }
            {isMobile &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={process.env.REACT_APP_API_URL + 'forest.jpg'}/>
                </Col>
                <Col style={{position: 'absolute', left: 110, bottom: 610}}>
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>ТВОЙ АККАУНТ</h1>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content className='center-block' style={{minHeight: 650}}>
                <Col style={{fontFamily: 'Poppins'}}>
                    <Row style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                        <Image style={{borderRadius: 15}} width={170} height={170} src={process.env.REACT_APP_API_URL + '06967d75-ca01-4fc2-a6e0-31515764c466.jpg'} />
                    </Row>
                    <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <h1 style={{fontSize: 35, fontWeight: 700, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Аноним</h1>
                        </Col> 
                    </Row>
                    <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <h1 style={{fontSize: 16, fontWeight: 700, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Почта: Нету</h1>
                        </Col>
                    </Row> 
                    <Row style={{marginTop: 20}} className='d-flex justify-content-center align-items-center'>
                        <Col style={{marginLeft: 40}}>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono',color: '#FFFFFF'}}>Вк-профиль: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>День рождения: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Пол: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Баланс: Нету</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Заказчик</h1>
                            <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 7, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: Нету</h1>
 
                        </Col>
                    </Row>             
                </Col>
                <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>
                <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserInfoVisible(true)}><PlusOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 15, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserUpdateInfoVisible(true)}><EditOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setOrder(true)}><TagOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setUserFreeBackVisible(true)}><PhoneOutlined/></Button>
                 
                    <CreateUserInformation show={userInfoVisible} onHide={() => setUserInfoVisible(false)}/>
                    <CreateUpdateUserInfoModl show={userUpdateInfoVisible} onHide={() => setUserUpdateInfoVisible(false)}/>
                    <CreateFeedBackModl show={userFreeBack} onHide={() => setUserFreeBackVisible(false)}/>
                    <CreateOrdersMobile show={orderMobile} onHide={() => setOrderMobile(false)}/>
                </div>
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
}   if(userData.role == 0) { 
    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
           <Content>
               {backgroundUserPage ?
               <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + backgroundUserPage.img}/>
               </Col>
                : 
                <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + "forest.jpg"}/>
               </Col>
                }
                
               <Col style={{position: 'absolute', left: 730, bottom: 280}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 65, paddingBottom: 10, color: '#FFFFFF'}}>ТВОЙ АККАУНТ</h1>
               </Col>
                
           </Content>
           }
            {isDesktopOrLaptop &&
           <Content className='center-block' style={{minHeight: 700}}>
               <Col style={{fontFamily: 'Poppins'}}>
                   <Row style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                       <Image style={{borderRadius: 15}} width={170} height={170} src={process.env.REACT_APP_API_URL + userData.img} />
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 35, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>{userData.name}</h1>
                       </Col> 
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Почта: {userData.email}</h1>
                       </Col>
                   </Row> 
                   <Row style={{marginTop: 20}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono',color: '#FFFFFF'}}>Вк-профиль: {userData.vk}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>День рождения: {userData.birthday}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Пол: {userData.gender}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Баланс: {userData.money} РУБ</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Заказчик</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col> 
                   </Row>          
               </Col>
               <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>

                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserInfoVisible(true)}><PlusOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 15, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserUpdateInfoVisible(true)}><EditOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setOrder(true)}><TagOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setUserFreeBackVisible(true)}><PhoneOutlined/></Button>
                 
                   
                   <CreateUserInformation show={userInfoVisible} onHide={() => setUserInfoVisible(false)}/>
                   <CreateUpdateUserInfoModl show={userUpdateInfoVisible} onHide={() => setUserUpdateInfoVisible(false)}/>
                   <CreateFeedBackModl show={userFreeBack} onHide={() => setUserFreeBackVisible(false)}/>
                   <CreateOrders show={order} onHide={() => setOrder(false)}/>
                   <CreateActiveCode show={activatedCode} onHide={() => setActivatedCode(false)}/>
                   <CreateActiveCoupones show={activatedCoupones} onHide={() => setActivatedCoupones(false)}/>
                   <CreateCouponenCash show={getCash} onHide={() => setGetCash(false)}/>
               </div>
               <div style={{textAlign: 'center', paddingTop: 10, fontFamily: 'Poppins', marginRight: 15}}>
                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCoupones(true)}><AreaChartOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCode(true)}><CheckCircleOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setGetCash(true)}><DollarCircleOutlined/></Button>
                </div>
           </Content>
           }
           {isMobile &&
           <Content>
               {backgroundUserPage ?
               <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + backgroundUserPage.img}/>
               </Col>
                : 
                <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + "forest.jpg"}/>
               </Col>
                }
               <Col style={{position: 'absolute', left: 110, bottom: 610}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>ТВОЙ АККАУНТ</h1>
               </Col>
           </Content>
           }
           {isMobile &&
           <Content className='center-block' style={{minHeight: 700}}>
               <Col style={{fontFamily: 'Poppins'}}>
                   <Row style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                       <Image style={{borderRadius: 15}} width={170} height={170} src={process.env.REACT_APP_API_URL + userData.img} />
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 35, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>{userData.name}</h1>
                       </Col> 
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 16, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Почта: {userData.email}</h1>
                       </Col>
                   </Row> 
                   <Row style={{marginTop: 20}} className='d-flex justify-content-center align-items-center'>
                       <Col style={{marginLeft: 40}}>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono',color: '#FFFFFF'}}>Вк-профиль: {userData.vk}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>День рождения: {userData.birthday}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Пол: {userData.gender}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Баланс: {userData.money} РУБ</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Заказчик</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 7, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col>
                   </Row>             
               </Col>
               <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>
                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserInfoVisible(true)}><PlusOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 15, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserUpdateInfoVisible(true)}><EditOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setOrderMobile(true)}><TagOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setUserFreeBackVisible(true)}><PhoneOutlined/></Button>
                 
                   <CreateUserInformation show={userInfoVisible} onHide={() => setUserInfoVisible(false)}/>
                   <CreateUpdateUserInfoModl show={userUpdateInfoVisible} onHide={() => setUserUpdateInfoVisible(false)}/>
                   <CreateFeedBackModl show={userFreeBack} onHide={() => setUserFreeBackVisible(false)}/>
                   <CreateOrdersMobile show={orderMobile} onHide={() => setOrderMobile(false)}/>
                   <CreateActiveCode show={activatedCode} onHide={() => setActivatedCode(false)}/>
                   <CreateActiveCoupones show={activatedCoupones} onHide={() => setActivatedCoupones(false)}/>
                   <CreateCouponenCash show={getCash} onHide={() => setGetCash(false)}/>
               </div>
               <div style={{textAlign: 'center', paddingTop: 10, fontFamily: 'Poppins', marginRight: 15}}>
                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCoupones(true)}><AreaChartOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCode(true)}><CheckCircleOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setGetCash(true)}><DollarCircleOutlined/></Button>
                </div>
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
 } if(userData.role == 1) { 
    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
           <Content>
               {backgroundUserPage ?
               <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + backgroundUserPage.img}/>
               </Col>
                : 
                <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + "forest.jpg"}/>
               </Col>
                }
               <Col style={{position: 'absolute', left: 730, bottom: 280}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 65, paddingBottom: 10, color: '#FFFFFF'}}>ТВОЙ АККАУНТ</h1>
               </Col>
           </Content>
           }
            {isDesktopOrLaptop &&
           <Content className='center-block' style={{minHeight: 800}}>
               <Col style={{fontFamily: 'Poppins'}}>
                   <Row style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                       <Image style={{borderRadius: 15}} width={170} height={170} src={process.env.REACT_APP_API_URL + userData.img} />
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 35, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>{userData.name}</h1>
                       </Col> 
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Почта: {userData.email}</h1>
                       </Col>
                   </Row> 
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF', width: 500}}>О себе: {userData.aboutmyself}</h1>
                       </Col>
                   </Row> 
                   <Row style={{marginTop: 20}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono',color: '#FFFFFF'}}>Вк-профиль: {userData.vk}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>День рождения: {userData.birthday}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Пол: {userData.gender}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Баланс: {userData.money} РУБ</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Исполнитель</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Рейтинг: {userData.rating}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col> 
                   </Row>           
               </Col>
               <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserInfoVisible(true)}><PlusOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 15, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserUpdateInfoVisible(true)}><EditOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setAboutYouself(true)}><IdcardOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setUserFreeBackVisible(true)}><PhoneOutlined/></Button>
                   
                   
                   <CreateUserInformation show={userInfoVisible} onHide={() => setUserInfoVisible(false)}/>
                   <CreateUpdateUserInfoModl show={userUpdateInfoVisible} onHide={() => setUserUpdateInfoVisible(false)}/>
                   <CreateFeedBackModl show={userFreeBack} onHide={() => setUserFreeBackVisible(false)}/>
                   <CreateOrders show={order} onHide={() => setOrder(false)}/>
                   <CreateActiveCode show={activatedCode} onHide={() => setActivatedCode(false)}/>
                   <CreateActiveCoupones show={activatedCoupones} onHide={() => setActivatedCoupones(false)}/>
                   <CreateCouponenCash show={getCash} onHide={() => setGetCash(false)}/>
                   <CreateAboutYouself show={aboutYouself} onHide={() => setAboutYouself(false)}/>
               </div>
               <div style={{textAlign: 'center', paddingTop: 10, fontFamily: 'Poppins', marginRight: 15}}>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCoupones(true)}><AreaChartOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCode(true)}><CheckCircleOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setGetCash(true)}><DollarCircleOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setOrder(true)}><TagOutlined/></Button>
               </div>
               <Col style={{marginTop: 20}}>
               <h1 style={{paddingTop: 10, fontWeight: 700, textAlign: 'center', fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 10, color: '#FFFFFF'}}>Мои отзывы</h1>  
               <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                        {allReviews.map((cat) =>
                                    <Card onClick={() => history.push(CUSTOMER + '/' + cat.userId)} className="d-flex flex-column" style={{fontFamily: 'IBM Plex Mono', background: '#292929', borderColor: '#292929', width: 400, borderRadius: 15, marginTop: 10, marginBottom: 10}} key={cat.id}>
                                        <div style={{fontSize: 25, fontWeight: 700, color: "#FFFFFF"}}>
                                            <Space><img style={{height: 50, width: 50, borderRadius: 30}} src={process.env.REACT_APP_API_URL + cat.img}/>{cat.name}</Space>
                                        </div>
                                        <div style={{fontSize: 20, paddingBottom: 30, fontWeight: 700, width: 300, color: "#FFFFFF"}}>
                                            {cat.text}
                                        </div>
                                    </Card>
                                    )}
                    </div>
                </Col>
           </Content>
           }
           {isMobile &&
           <Content>
               {backgroundUserPage ?
               <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + backgroundUserPage.img}/>
               </Col>
                : 
                <Col style={{position: 'relative'}}>
                   <img width="100%" src={process.env.REACT_APP_API_URL + "forest.jpg"}/>
               </Col>
                }
               <Col style={{position: 'absolute', left: 110, bottom: 610}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>ТВОЙ АККАУНТ</h1>
               </Col>
           </Content>
           }
           {isMobile &&
           <Content className='center-block' style={{minHeight: 800}}>
               <Col style={{fontFamily: 'Poppins'}}>
                   <Row style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                       <Image style={{borderRadius: 15}} width={170} height={170} src={process.env.REACT_APP_API_URL + userData.img} />
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 35, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>{userData.name}</h1>
                       </Col> 
                   </Row>
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 16, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Почта: {userData.email}</h1>
                       </Col>
                   </Row> 
                   <Row style={{marginTop: 10}} className='d-flex justify-content-center align-items-center'>
                       <Col>
                           <h1 style={{fontSize: 16, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF', width: 300}}>О себе: {userData.aboutmyself}</h1>
                       </Col>
                   </Row> 
                   <Row style={{marginTop: 20}} className='d-flex justify-content-center align-items-center'>
                       <Col style={{marginLeft: 40}}>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono',color: '#FFFFFF'}}>Вк-профиль: {userData.vk}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>День рождения: {userData.birthday}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Пол: {userData.gender}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Баланс: {userData.money} РУБ</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Исполнитель</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Рейтинг: {userData.rating}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col>
                   </Row>             
               </Col>
               <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>
               <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserInfoVisible(true)}><PlusOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 15, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setUserUpdateInfoVisible(true)}><EditOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setAboutYouself(true)}><IdcardOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setUserFreeBackVisible(true)}><PhoneOutlined/></Button>
                   
                   <CreateUserInformation show={userInfoVisible} onHide={() => setUserInfoVisible(false)}/>
                   <CreateUpdateUserInfoModl show={userUpdateInfoVisible} onHide={() => setUserUpdateInfoVisible(false)}/>
                   <CreateFeedBackModl show={userFreeBack} onHide={() => setUserFreeBackVisible(false)}/>
                   <CreateOrdersMobile show={orderMobile} onHide={() => setOrderMobile(false)}/>
                   <CreateActiveCode show={activatedCode} onHide={() => setActivatedCode(false)}/>
                   <CreateActiveCoupones show={activatedCoupones} onHide={() => setActivatedCoupones(false)}/>
                   <CreateCouponenCash show={getCash} onHide={() => setGetCash(false)}/>
                   <CreateAboutYouself show={aboutYouself} onHide={() => setAboutYouself(false)}/>
               </div>
               <div style={{textAlign: 'center', paddingTop: 10, fontFamily: 'Poppins', marginRight: 15}}>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCoupones(true)}><AreaChartOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setActivatedCode(true)}><CheckCircleOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setGetCash(true)}><DollarCircleOutlined/></Button>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8}} onClick={() => setOrderMobile(true)}><TagOutlined/></Button>
               </div>
               <Col style={{marginTop: 20}}>
               <h1 style={{paddingTop: 10, fontWeight: 700, textAlign: 'center', fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 10, color: '#FFFFFF'}}>Мои отзывы</h1>  
               <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                        {allReviews.map((cat) =>
                                    <Card onClick={() => history.push(CUSTOMER + '/' + cat.userId)} className="d-flex flex-column" style={{fontFamily: 'IBM Plex Mono', background: '#292929', borderColor: '#292929', width: 300, borderRadius: 15, marginTop: 10, marginBottom: 10}} key={cat.id}>
                                        <div style={{fontSize: 25, fontWeight: 700, color: "#FFFFFF"}}>
                                            <Space><img style={{height: 50, width: 50, borderRadius: 30}} src={process.env.REACT_APP_API_URL + cat.img}/>{cat.name}</Space>
                                        </div>
                                        <div style={{fontSize: 20, paddingBottom: 30, fontWeight: 700, width: 250, color: "#FFFFFF"}}>
                                            {cat.text}
                                        </div>
                                    </Card>
                                    )}
                    </div>
                </Col>
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
})

export default Account;