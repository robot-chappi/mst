import React, { useState, useEffect } from "react";
import {useMediaQuery} from 'react-responsive'
import { Button,  Spinner} from "react-bootstrap";
import CreateDevice from "../components/models/CreateDevice";
import CreateType from "../components/models/CreateType";
import CreateOutput from "../components/models/CreateUserDataOutput";
import CreateDeleteTypeDevice from "../components/models/CreateDeleteType";
import CreateDeleteComment from "../components/models/CreateDeleteComments";
import CreatePromoCode from "../components/models/CreatePromoCodes";
import CreatePost from "../components/models/CreatePostsModel";
import CreateAds from "../components/models/CreateAdsModel";
import CreateNews from "../components/models/CreateNewsModel";
import CreateDeleteOrder from "../components/models/CreateDeletePayment";
import CreateComplateOrder from "../components/models/CreateCompletePayment";
import CreateCoupone from "../components/models/CreateSomeCoupones";
import CreateCustomers from "../components/models/CreateCustoms";
import CreateGiveMoney from "../components/models/CreateGiveSomeMoney";
import CreateDeleteReview from "../components/models/CreateDeleteReviews";
import { sendEmailAll, fetchEveryone, fetchUserData, fetchBasketDevices, deleteTypes, deleteReviews, } from "../http/deviceAPI";
import CreateDeleteDevice from "../components/models/CreateDeleteDevice";
import { SendOutlined } from '@ant-design/icons';
import { Layout, Col, Card, Row, Input, Menu, Dropdown, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';
const { Header, Content, Footer } = Layout;

const Admin = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [outputVisible, setOutputVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [typeDeleteVisible, setTypeDeleteVisible] = useState(false)
    const [brandDeleteVisible, setBrandDeleteVisible] = useState(false)
    const [postVisible, setPostVisible] = useState(false)
    const [newsVisible, setNewsVisible] = useState(false)
    const [adsVisible, setAdsVisible] = useState(false)
    const [deleteOrder, setDeleteOrder] = useState(false)
    const [coupones, setCoupones] = useState(false)
    const [givemoney, setGiveMoney] = useState(false)
    const [customers, setCustomers] = useState(false)
    const [deleteReview, setDeleteReview] = useState(false)
    const [complateOrder, setComplateOrder] = useState(false)
    const [collectionVisible, setCollectionVisible] = useState(false)
    const [collectionDeleteVisible, setCollectionDeleteVisible] = useState(false)
    const [theme, setTheme] = useState('')
    const [message, setMessage] = useState('')
    const [varios, setVarios] = useState(0)
    const [subject, setSubject] = useState('')
    const [img, setImg] = useState('')
    const [emailuser, setEmailuser] = useState('')
    const [userInfoData, setUserInfoData] = useState()
    const [userInfoBasket, setUserInfoBasket] = useState()
    const [findUserId, setFindUserId] = useState('')
    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const [place, setPlace] = useState('')
    const [money, setMoney] = useState()
    const [birthday, setBirthday] = useState('')
    const [gender, setGender] = useState('')
    
    const [promoCodeDeleteVisible, setPromoCodeDeleteVisible] = useState(false)
    const [commentDeleteVisible, setCommentDeleteVisible] = useState(false)
    const [deviceDeleteVisible, setDeviceDeleteVisible] = useState(false)
    const [dataDevice, setDataDevice] = useState('')
    
    const [userId, setUserId] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [updatedAt, setUpdatedAt] = useState('')
    const [ex, setEx] = useState(0)

    useEffect(() => {
        fetchEveryone().then(data => setAllUsers(data)).finally(() => setLoading(false))
    }, [])

    const getUserData = async () => {
        try {
        let datauser = fetchUserData(findUserId)
        setUserInfoData(datauser)
            userInfoData.then(function(value){
                try{
                let basketuser = fetchBasketDevices(value['userId'])
                setUserInfoBasket(basketuser) 
                console.log(`Okey`);
                console.log(userInfoBasket)
            } catch {
                alert('Попробуй снова')
            }
            })
            } catch {
                alert('Ты подтвердил свои действия - нажми на кнопку "найти" снова чтобы найти данные об пользователе')
            }
    }

    const test = async () => {
        try {
        userInfoData.then(function(value){
            try {
            setId(value['id'])
            setName(value['name'])
            setEmail(value['email'])
            setPassword(value['password'])
            setImage(value['img'])
            setPlace(value['role'])
            setMoney(value['money'])
            setBirthday(value['birthday'])
            setGender(value['gender'])
            setUserId(value['userId'])
            setCreatedAt(value['createdAt'])
            setUpdatedAt(value['updatedAt'])
            console.log(`Okey`);
        } catch {
            alert('Пользовальские данные найдены')
        }
        })
        userInfoBasket.then(function(val){
            let a = val.map(f => {
                return f.name
            })
            setDataDevice(a)
            
        })
        return setOutputVisible(true)
    } catch { 
        alert("Пользователь не имеет информации")
    }}

    const menu = (
        <Menu>
          <Menu.Item key="1" onClick={() => setVarios(0)} icon={<SendOutlined />}>
            Отправить одному
          </Menu.Item>
          <Menu.Item key="2"  onClick={() => setVarios(1)} icon={<SendOutlined />}>
            Отправить всем
          </Menu.Item>
          <Menu.Item key="3"  onClick={() => setVarios(2)} icon={<SendOutlined />}>
            Отправить подписчикам
          </Menu.Item>
        </Menu>
      );


    const confirm = async () => {
        console.log(allUsers)
        setEx(1)
        alert('Теперь ты можешь отправить письмо!')
    }

    const sendCodeEmail = async () => {
        if (ex === 1) { 
            const formData = new FormData()
            formData.append('varios', varios)
            formData.append('subject', subject)
            formData.append('theme', theme)
            formData.append('message', message)
            formData.append('img', img)
            formData.append('emailuser', emailuser)
            sendEmailAll(formData)
            alert('Успешно!')  
        } else {
            alert('Сначала нажмите кнопку "подтвердить", а затем отправляй')
        }     
    }

    if (loading) {
        return <Spinner animation={'grow'}/>
      } 

    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content>
            <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={4}>
                    <Col span={20}>
                    <h1 style={{paddingTop: 40, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 40, color: '#FFFFFF'}}>{'Админ панель'}</h1>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 10, color: '#FFFFFF'}}>Добро пожаловать, администратор!</h1>
                    </Col>
                    <Col span={22}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 15}}>
                            <Col span={20} offset={1} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'white'}}>Добавить что-нибудь</h1>
                            </Col>
                            <Col span={20} offset={1}>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setTypeVisible(true)}>
                                    Добавить тип</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setCoupones(true)}>
                                    Добавить купон</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeviceVisible(true)}>
                                    Добавить услугу</Button>
                                
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={22}>
                        <Card style={{background: '#ffffff', borderRadius: 15, marginBottom: 15}}>
                            <Col span={20} offset={1} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'black'}}>Удалить что-нибудь</h1>
                            </Col>
                            <Col span={20} offset={1}>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setTypeDeleteVisible(true)}>
                                    Удалить тип</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeviceDeleteVisible(true)}>
                                    Удалить услугу</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeleteOrder(true)}>
                                    Удалить платеж</Button>
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={22}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 15}}>
                            <Col span={20} offset={1} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'white'}}>Продакшен</h1>
                            </Col>
                            <Col span={20} offset={1}>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setCustomers(true)}>
                                    Исполнители</Button> 
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setGiveMoney(true)}>
                                    Деньги</Button> 
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeleteReview(true)}>
                                    Отзывы</Button> 
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setComplateOrder(true)}>Заказы</Button>  
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={22}>
                        <Card style={{background: '#ffffff', borderRadius: 15}}>
                            <Col span={20} style={{textAlign: 'center'}} offset={1}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'black'}}>Что-то еще</h1>
                            </Col>
                            <Col span={20} offset={1}>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setCommentDeleteVisible(true)}>Комментарии</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setPromoCodeDeleteVisible(true)}>Промокоды</Button> 
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setAdsVisible(true)}>Реклама</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setPostVisible(true)}>Блог</Button>  
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setNewsVisible(true)}>Новости</Button> 
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={20}>
                        <h1 style={{paddingTop: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: '#FFFFFF'}}>Работа с пользователями</h1>
                    </Col>
                    <Col span={22}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15}}>
                            <Col span={20} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: '#FFFFFF'}}>Отправить письмо пользователям</h1>
                            </Col>
                            <Col span={20}>
                                <Row className='d-flex justify-content-center align-items-center'>
                                    <Col offset={2} span={20} style={{justifyContent: 'center'}}>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твой объект *</h4>
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={subject} onChange={e => setSubject(e.target.value)} placeholder="Твой объект" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твоя тема *</h4>
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={theme} onChange={e => setTheme(e.target.value)} placeholder="Твоя тема" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твое сообщение *</h4>        
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={message} onChange={e => setMessage(e.target.value)} placeholder="Твое сообщение" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твоя картинка (URL) *</h4>    
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={img} onChange={e => setImg(e.target.value)} placeholder="Твоя картинка (URL)" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Пользователь (Email) *</h4>    
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={emailuser} onChange={e => setEmailuser(e.target.value)} placeholder="Пользователь (Email)" />
                                            <Dropdown.Button style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: '#FFFFFF'}} overlay={menu}>
                                            Выбери тип: 
                                            </Dropdown.Button>
                                        </Col>
                                        <Col offset={2}>
                                            <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={sendCodeEmail}>Отправить</Button>
                                            <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={confirm}>Подтвердить</Button>
                                        </Col>
                                </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={20}>
                        <h1 style={{paddingTop: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: '#FFFFFF'}}>Найти информацию об пользователях</h1>
                    </Col>
                    <Col span={22}>
                        <Card style={{background: '#ffffff', borderColor: '#ffffff', borderRadius: 15}}>
                            <Col span={22} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'black'}}>Найти информацию</h1>
                            </Col>
                            <Col span={20}>
                                <Row className='d-flex justify-content-center align-items-center'>
                                    <Col offset={2} span={20} style={{justifyContent: 'center'}}>
                                        <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}>Пользователь ID *</h4>
                                        <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={findUserId} onChange={e => setFindUserId(e.target.value)} placeholder="User id" />
                                    </Col>
                                    <Col offset={2}>
                                        <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={getUserData}>Найти</Button>
                                        <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={test}>Проверить данные</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={20}>
                        <h1 style={{paddingTop: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: '#FFFFFF'}}>Все пользователи</h1>
                    </Col>
                    <Col span={22}>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15}}>
                            <Col span={22} style={{textAlign: 'center'}}>
                            <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: '#FFFFFF'}}>Пользователи</h1>
                        </Col>
                <Col span={20} offset={1}>
                    <Row className='d-flex justify-content-between align-items-center'>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>ID</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>EMAIL</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>ROLE</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>CREATED_AT</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>UPDATED_AT</h4>
                    </Row>
                    {allUsers.map(u => 
                        <Space className='d-flex justify-content-between'>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>{u.id}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>{u.email}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>{u.role}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>{u.createdAt}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>{u.updatedAt}</h4>
                        </Space>
                        
                    )}
                    </Col>
                </Card>
            </Col>
            
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDeleteTypeDevice show={typeDeleteVisible} onHide={() => setTypeDeleteVisible(false)}/>
            
            <CreateDeleteDevice show={deviceDeleteVisible} onHide={() => setDeviceDeleteVisible(false)}/>
            <CreateDeleteComment show={commentDeleteVisible} onHide={() => setCommentDeleteVisible(false)}/>
            <CreatePromoCode show={promoCodeDeleteVisible} onHide={() => setPromoCodeDeleteVisible(false)}/>
            <CreatePost show={postVisible} onHide={() => setPostVisible(false)}/>
            <CreateAds show={adsVisible} onHide={() => setAdsVisible(false)}/>
            
            <CreateNews show={newsVisible} onHide={() => setNewsVisible(false)}/>
            <CreateDeleteOrder show={deleteOrder} onHide={() => setDeleteOrder(false)}/>
            <CreateComplateOrder show={complateOrder} onHide={() => setComplateOrder(false)}/>
            <CreateCoupone show={coupones} onHide={() => setCoupones(false)}/>
           
            <CreateCustomers show={customers} onHide={() => setCustomers(false)}/>
            <CreateGiveMoney show={givemoney} onHide={() => setGiveMoney(false)}/>
            <CreateDeleteReview show={deleteReview} onHide={() => setDeleteReview(false)}/>
            <CreateOutput id={id} name={name} money={money} dataDevice={dataDevice} email={email} password={password} img={image} place={place} birthday={birthday} gender={gender} userId={userId} createdAt={createdAt} updatedAt={updatedAt} show={outputVisible} onHide={() => setOutputVisible(false)}/>
            </Col>
            </Row>
            </Content>
            }
            {isMobile &&
            <Content>
            <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col>
                    <Col span={20} offset={1}>
                    <h1 style={{paddingTop: 40, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 27, color: '#FFFFFF'}}>{'Админ панель'}</h1>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>Добро пожаловать, администратор!</h1>
                    </Col>
                    <Col>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 15}}>
                            <Col  style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'white'}}>Добавить что-нибудь</h1>
                            </Col>
                            <Col>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setTypeVisible(true)}>
                                    Добавить тип</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setCoupones(true)}>
                                    Добавить купон</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeviceVisible(true)}>
                                    Добавить услугу</Button>
                                
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{background: '#ffffff', borderRadius: 15, marginBottom: 15}}>
                            <Col span={20} offset={1} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'black'}}>Удалить что-нибудь</h1>
                            </Col>
                            <Col >
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setTypeDeleteVisible(true)}>
                                    Удалить тип</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeviceDeleteVisible(true)}>
                                    Удалить услугу</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeleteOrder(true)}>
                                    Удалить платеж</Button>
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 15}}>
                            <Col  style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'white'}}>Продакшен</h1>
                            </Col>
                            <Col>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setComplateOrder(true)}>Заказы</Button>   
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setCustomers(true)}>
                                    Исполнители</Button> 
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setGiveMoney(true)}>
                                    Деньги</Button> 
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setDeleteReview(true)}>
                                    Отзывы</Button> 
                                
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{background: '#ffffff', borderColor: '#ffffff', borderRadius: 15}}>
                            <Col span={20} style={{textAlign: 'center'}} offset={1}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'black'}}>Что-то еще</h1>
                            </Col>
                            <Col>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setCommentDeleteVisible(true)}>Комментарии</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setPromoCodeDeleteVisible(true)}>Промокоды</Button> 
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setAdsVisible(true)}>Реклама</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setPostVisible(true)}>Блог</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={() => setNewsVisible(true)}>Новости</Button> 
                            </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={20} offset={1}>
                        <h1 style={{paddingTop: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 20, color: '#FFFFFF'}}>Работа с пользователями</h1>
                    </Col>
                    <Col>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15}}>
                            <Col span={20} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: '#FFFFFF'}}>Отправить письмо пользователям</h1>
                            </Col>
                            <Col span={20}>
                                <Row className='d-flex justify-content-center align-items-center'>
                                    <Col offset={2} span={20} style={{justifyContent: 'center'}}>
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твой предмет *</h4>
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={subject} onChange={e => setSubject(e.target.value)} placeholder="Твой предмет" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твоя тема *</h4>
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={theme} onChange={e => setTheme(e.target.value)} placeholder="Твоя тема" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твое сообщение *</h4>        
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={message} onChange={e => setMessage(e.target.value)} placeholder="Твое сообщение" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Твоя картинка (URL) *</h4>    
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={img} onChange={e => setImg(e.target.value)} placeholder="Твоя картинка (URL)" />
                                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Пользователь (Email) *</h4>    
                                            <Input style={{borderRadius: 4, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10}} value={emailuser} onChange={e => setEmailuser(e.target.value)} placeholder="Пользователь (Email)" />
                                            <Dropdown.Button style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, color: 'black'}} overlay={menu}>
                                            Выбери тип: 
                                            </Dropdown.Button>
                                        </Col>
                                        <Col offset={1} style={{marginTop: 20}}>
                                            <Space >
                                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={sendCodeEmail}>Отправить</Button>
                                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={confirm}>Подтвердить</Button>
                                            </Space>
                                        </Col>
                                </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={20} offset={1}>
                        <h1 style={{paddingTop: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 20, color: '#FFFFFF'}}>Найти информацию об пользователях</h1>
                    </Col>
                    <Col>
                        <Card style={{background: '#FFFFFF', borderColor: '#FFFFFF', borderRadius: 15}}>
                            <Col span={20} style={{textAlign: 'center'}}>
                                <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 20, color: 'black'}}>Найти информацию</h1>
                            </Col>
                            <Col span={20}>
                                <Row className='d-flex justify-content-center align-items-center'>
                                    <Col offset={2} span={20} style={{justifyContent: 'center'}}>
                                        <h4 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: 'black'}}>Пользователь ID *</h4>
                                        <Input style={{borderRadius: 4, height: 50, fontWeight: 300, fontSize: 14, marginBottom: 10}} value={findUserId} onChange={e => setFindUserId(e.target.value)} placeholder="User id" />
                                    </Col>
                                    <Col offset={1} style={{marginTop: 20}}>
                                        <Space>
                                            <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={getUserData}>Найти</Button>
                                            <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 50, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={test}>Проверить данные</Button>
                                        </Space>
                                    </Col>
                                </Row>
                            </Col>
                        </Card>
                    </Col>
                    <Col span={20} offset={1}>
                        <h1 style={{paddingTop: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 20, color: '#FFFFFF'}}>Все пользователи</h1>
                    </Col>
                    <Col>
                        <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15}}>
                            <Col span={20} style={{textAlign: 'center'}}>
                            <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 20, color: '#FFFFFF'}}>Пользователи</h1>
                        </Col>
                <Col span={20} offset={1}>
                    <Row className='d-flex justify-content-between align-items-center'>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF'}}>ID</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF'}}>EMAIL</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF'}}>ROLE</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF'}}>CREATED_AT</h4>
                        <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 10, paddingBottom: 10, color: '#FFFFFF'}}>UPDATED_AT</h4>
                    </Row>
                    {allUsers.map(u => 
                        <Space className='d-flex justify-content-between'>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 10, color: '#FFFFFF'}}>{u.id}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 10, color: '#FFFFFF'}}>{u.email}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 10, color: '#FFFFFF'}}>{u.role}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 10, color: '#FFFFFF'}}>{u.createdAt}</h4>
                            <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 7, paddingBottom: 10, color: '#FFFFFF'}}>{u.updatedAt}</h4>
                        </Space>
                        
                    )}
                    </Col>
                </Card>
            </Col>
            
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDeleteTypeDevice show={typeDeleteVisible} onHide={() => setTypeDeleteVisible(false)}/>
            
            <CreateDeleteDevice show={deviceDeleteVisible} onHide={() => setDeviceDeleteVisible(false)}/>
            <CreateDeleteComment show={commentDeleteVisible} onHide={() => setCommentDeleteVisible(false)}/>
            <CreatePromoCode show={promoCodeDeleteVisible} onHide={() => setPromoCodeDeleteVisible(false)}/>
            <CreatePost show={postVisible} onHide={() => setPostVisible(false)}/>
            <CreateNews show={newsVisible} onHide={() => setNewsVisible(false)}/>
            <CreateAds show={adsVisible} onHide={() => setAdsVisible(false)}/>
            <CreateCoupone show={coupones} onHide={() => setCoupones(false)}/>
            <CreateDeleteOrder show={deleteOrder} onHide={() => setDeleteOrder(false)}/>
            <CreateComplateOrder show={complateOrder} onHide={() => setComplateOrder(false)}/>
            <CreateCustomers show={customers} onHide={() => setCustomers(false)}/>
            
            <CreateGiveMoney show={givemoney} onHide={() => setGiveMoney(false)}/>
            
            <CreateDeleteReview show={deleteReview} onHide={() => setDeleteReview(false)}/>
            <CreateOutput id={id} name={name} dataDevice={dataDevice} email={email} password={password} img={image} place={place} birthday={birthday} gender={gender} userId={userId} createdAt={createdAt} updatedAt={updatedAt} show={outputVisible} onHide={() => setOutputVisible(false)}/>
            </Col>
            </Row>
            </Content>
            }
        </Layout>
    )
}

export default Admin;