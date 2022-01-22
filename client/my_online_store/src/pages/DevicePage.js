import React, {useState, useEffect, useContext} from "react";
import {useMediaQuery} from 'react-responsive'
import {  Dropdown, Form, Spinner } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../index";
import CreatePayOneDevice from "../components/models/CreatePaymentOneDevice";
import { fetchOneDevice, addToCard, addComment, fetchComments, fetchUserData, fetchTypeOne, updateRating, fetchBrandOne } from "../http/deviceAPI";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, CUSTOMER, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import jwt_decode from "jwt-decode";
import { observer } from "mobx-react-lite";
import FooterMobile from "../components/FooterMobile";
import FooterComputer from "../components/FooterPC";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, message, Rate} from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Option } = Select;

const DevicePage = observer(() => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [device, setDevice] = useState({info: []})
    const [loading, setLoading] = useState(true)
    const {user} = useContext(Context)
    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)
    const [ratingDB, setRatingDB] = useState([])
    const [text, setText] = useState('')
    const [brand, setBrand] = useState([])
    const [type, setType] = useState([])
    const [userData, setUserData] = useState([])
    const [commentsAll, setComment] = useState([])
    const [ex, setEx] = useState(0)
    const {id} = useParams()
    const [payVisible, setPayVisible] = useState(false)
    const history = useHistory()
    let idd = jwt_decode(localStorage.getItem('token'))
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
        fetchUserData(idd.id).then(data => setUserData(data))
    }, [])

    useEffect(() => {
        fetchBrandOne(id).then(data => setBrand(data))
        fetchTypeOne(id).then(data => setType(data))
        fetchComments(id).then(data => setComment(data)).finally(() => setLoading(false))
    }, [])

    

    const confirm = (name) => {
        if (name === 'Anonim') {
            setEx(0)
            alert("Ты не сможешь опубликовать комментарий! \n\nСначала добавь информацио о себе в профиле!")
        } else {
        let ratingCount = []
        for (const f of commentsAll) {
            ratingCount.push(f.rating)
        }
        setRatingDB(ratingCount)
        console.log(ratingDB)
        setEx(1)
        setName(userData.name)
        
        alert('Ты подтвердил свои действия - ты можешь опубликовать комментарий')
    }
    }

    const addCard = () => {
        let idd = jwt_decode(localStorage.getItem('token'))
        const formData = new FormData()
        formData.append('basketId', idd.id)
        formData.append('deviceId', id)
        addToCard(formData)
        message.success('Продукт успешно добавлен в корзину!')
    }

    const addCommentUser = () => {
        if (ex === 1) {
        let ratingFinally = Math.trunc(ratingDB.reduce((sum, el) => sum + el, 0) / ratingDB.length)
        
        let idd = jwt_decode(localStorage.getItem('token'))
        const formData = new FormData()
        const formDataRating = new FormData()
        formData.append('name', name)
        formData.append('rating', `${rating}`)
        formData.append('img', userData.img)
        formData.append('text', text)
        formData.append('deviceId', id)
        formData.append('userId', idd.id)
        formDataRating.append('rating', ratingFinally)
        formDataRating.append('id', device.id)
        addComment(formData)
        updateRating(formDataRating)
        message.success('Коммент был успешно опубликован!\nОбнови страницу чтобы увидеть его')
        } else {
            message.error("Нажми сначала на 'подтвердить', а затем уже публикуй комментарий")
        }
    }


    const copy = () => {
        const deviceOne = device.name
        const url = document.location.href
        navigator.clipboard.writeText(`Хей, бро, смотри что я нашел на сайте студии MST!\n\n Да это же ${deviceOne}! \nПриятная цена и качество! \n\n Просто глянь: ${url}`)
        .then(() => {
            console.log(url)
            message.success("Скопированно")
        })
        .catch(err => {
            console.log('Something went wrong', err);
            message.error("Что-то пошло не по плану")
        });
    }

    const account = 
        {name: 'Anonim', email: 'None', img: 'bf13872b-7632-4822-b2c9-20a5022bedf2.jpg', place: 'None', birthday: 'None', gender: 'None'}


    if(userData === null) {  
        setUserData(account)
    }

    if (loading) {
        return <Spinner animation={'grow'}/>
      }

    console.log(device)
    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content >
            <Col>
                <Col style={{position: 'relative'}}>
                    <img style={{position: 'relative'}} width='100%' src={process.env.REACT_APP_API_URL + device.imgBig}/>
                </Col>
                <Col style={{position: 'absolute', left: 70, bottom: 80}}>
                        <Space>
                                <Col style={{marginRight: 10}}>
                                    <img style={{borderRadius: 15}} width={270} height={270} src={process.env.REACT_APP_API_URL + device.img}/>
                                </Col>
                                <Col>
                                
                                    <div style={{ fontWeight: 700, fontSize: 50, color: 'white', paddingLeft: 10, fontFamily: 'IBM Plex Mono'}}>{device.name}</div>
                                    <div style={{paddingLeft: 20, paddingBottom: 10}}>
                                        <Rate style={{fontSize: 37}} value={device.rating} />
                                    </div>
                                    <h2 style={{ fontWeight: 700, fontSize: 25, color: 'white', paddingLeft: 20, fontFamily: 'IBM Plex Mono'}}>Тип: {type.name}</h2>
                                    
                                    <Space style={{marginTop: 10}}>
                                        <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 15, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 16, width: 200, height: 50}} onClick={addCard}>Добавить в корзину</Button>
                                        <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 15, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 16, width: 190, height: 50}} onClick={() => setPayVisible(true)}>Купить | РУБ: {device.price}</Button>
                                        <a onClick={copy} style={{marginLeft: 10}}><ShareAltOutlined style={{fontSize: 25, color: 'white'}}/></a>
                                    </Space>
                                </Col>

                        </Space>

                </Col>
            </Col>
        </Content>
        }
            {isDesktopOrLaptop &&
            <Content style={{marginLeft: 70}}>

                    <h1 style={{paddingTop: 10, paddingBottom: 20, fontWeight: 700, fontSize: 50, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Описание: <hr/></h1>

                <Col>
                    <h4 style={{paddingTop:20, fontSize: 23, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>{device.description}</h4>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content style={{marginLeft: 70, marginBottom: 50}}>
                <CreatePayOneDevice basket={device} show={payVisible} onHide={() => setPayVisible(false)}/> 
                <Col className="d-flex flex-column" style={{fontFamily: 'Poppins'}}>
                        <h1 style={{paddingTop: 30, paddingBottom: 5, fontWeight: 700, fontSize: 40, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Дополнительная информация: <hr/></h1>
                        {device.info.map((info, index) =>
                            <Row className="mt-4" key={info.id} style={{ padding: 10, fontSize: 23, color: 'white'}}>
                                <Space>
                                    <h4 style={{marginRight: 4, fontSize: 23, color: 'white', fontWeight: 700, fontFamily: 'IBM Plex Mono'}}>{info.title}:</h4>
                                    <h4 style={{ fontSize: 22, color: 'white', fontWeight: 700, fontFamily: 'IBM Plex Mono'}}>{info.description}</h4>
                                </Space>
                            </Row>
                        )}
                    </Col>
                <h1 style={{paddingTop: 30, fontFamily: 'IBM Plex Mono', paddingBottom: 10, fontWeight: 700, fontSize: 40, color: '#FFFFFF'}}>Комментарии: <hr/></h1>
                <Card className="d-flex flex-column" style={{fontFamily: 'Poppins', paddingBottom: 30, width: 700, background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 30}}>  
                    <Form>
                        <Dropdown  className="mt-2 mb-2">
                            <Dropdown.Toggle style={{background: '#0072CE', borderColor: '#0072CE', fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{`Выбери оценку: ${rating}`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                    onClick={() => setRating(1)}
                                    >
                                        {1}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(2)}
                                    >
                                        {2}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(3)}
                                    >
                                        {3}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(4)}
                                    >
                                        {4}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(5)}
                                    >
                                        {5}
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            value={text}
                            style={{fontFamily: 'IBM Plex Mono', fontWeight: 700}}
                            onChange={e => setText(e.target.value)}
                            className="mt-3"
                            placeholder="Твой комментарий"
                        />
                    </Form>
                    <div style={{marginTop: 20}}>
                        <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 17, width: 300, height: 50, marginRight: 5}} onClick={confirm}>Подтвердить</Button>
                        <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 17, width: 300, height: 50}} onClick={addCommentUser}>Опубликовать</Button>
                    </div>
                    </Card>
                    {commentsAll.map((cat) =>
                        <Card className="d-flex flex-column" style={{fontFamily: 'IBM Plex Mono', background: '#292929', borderColor: '#292929', width: '100%', borderRadius: 15, marginTop: 10, marginBottom: 10}} key={cat.id}>
                            <div style={{fontSize: 25, fontWeight: 700, color: "#FFFFFF"}}>
                                <Space><img style={{height: 50, width: 50, borderRadius: 30}} onClick={() => history.push(CUSTOMER + '/' + cat.userId)} src={process.env.REACT_APP_API_URL + cat.img}/>{cat.name}</Space>
                            </div>
                            <div style={{fontSize: 17, paddingBottom: 5, fontWeight: 700, paddingTop: 5, color: "#FFFFFF"}}>
                                Оценка: {cat.rating}
                            </div>
                            <div style={{fontSize: 20, paddingBottom: 30, fontWeight: 700, color: "#FFFFFF"}}>
                                {cat.text}
                            </div>
                        </Card>
                        )}
            </Content>
            }
            {isMobile &&
            <Content >
            <Col>
                <Col style={{position: 'relative'}}>
                    <img style={{position: 'relative'}} width='100%' src={process.env.REACT_APP_API_URL + device.imgBig}/>
                </Col>
                <Col style={{position: 'absolute', left: 10, bottom: -75}}>
                        <Space>
                                <Col style={{marginRight: 5}}>
                                    <img style={{borderRadius: 15}} width={110} height={110} src={process.env.REACT_APP_API_URL + device.img}/>
                                </Col>
                                <Col>
                                
                                    <div style={{ fontWeight: 700, fontSize: 20, color: 'white', paddingLeft: 10, fontFamily: 'IBM Plex Mono'}}>{device.name}</div>
                                    <div style={{paddingLeft: 20, paddingBottom: 10}}>
                                        <Rate style={{fontSize: 15}} value={device.rating} />
                                    </div>
                                    <h2 style={{ fontWeight: 700, fontSize: 10, color: 'white', paddingLeft: 20, fontFamily: 'IBM Plex Mono'}}>Тип: {type.name}</h2>
                                    
                                    <Space style={{marginTop: 10}}>
                                        <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 15, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 10, width: 100, height: 30}} onClick={addCard}>В корзину</Button>
                                        <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 15, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 10, width: 100, height: 30}} onClick={() => setPayVisible(true)}>Купить|{device.price}р</Button>
                                        <a onClick={copy} style={{marginLeft: 1, }}><ShareAltOutlined style={{fontSize: 15, color: 'white'}}/></a>
                                    </Space>
                                </Col>

                        </Space>

                </Col>
            </Col>
        </Content>
        }
        {isMobile &&
            <Content style={{marginLeft: 12, marginTop: 100}}>

                    <h1 style={{paddingTop: 10, fontWeight: 700, fontSize: 20, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Описание: <hr/></h1>

                <Col>
                    <h4 style={{fontSize: 10, fontFamily: 'IBM Plex Mono', paddingBottom: 10, color: '#FFFFFF', fontWeight: 700}}>{device.description}</h4>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content style={{marginLeft: 12, marginBottom: 30}}>
                <CreatePayOneDevice basket={device} show={payVisible} onHide={() => setPayVisible(false)}/>
                <Col>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontSize: 20, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Дополнительная информация: <hr/></h1>
                    </Col>
                <Col className="d-flex flex-column" style={{fontFamily: 'IBM Plex Mono'}}>
                            {device.info.map((info, index) =>
                                <Row key={info.id} style={{ padding: 5, fontSize: 14}}>
                                    <Space>
                                        <h4 style={{marginRight: 4, fontSize: 10, color: 'white', fontWeight: 700}}>{info.title}:</h4>
                                        <h4 style={{ fontSize: 10, color: 'white', fontWeight: 700}}>{info.description}</h4>
                                    </Space>
                                </Row>
                            )}
                        </Col>
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontSize: 20, color: '#FFFFFF', fontFamily: 'IBM Plex Mono'}}>Комментарии: <hr/></h1>
                    <Form>
                        <Dropdown  className="mt-2 mb-2">
                            <Dropdown.Toggle style={{background: '#0072CE', borderColor: '#0072CE', height: 35, width: 170, fontSize: 14, fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{`Выбери оценку: ${rating}`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item
                                    onClick={() => setRating(1)}
                                    >
                                        {1}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(2)}
                                    >
                                        {2}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(3)}
                                    >
                                        {3}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(4)}
                                    >
                                        {4}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={() => setRating(5)}
                                    >
                                        {5}
                                    </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                        style={{height: 35, fontFamily: 'IBM Plex Mono', fontWeight: 700}}
                            value={text}

                            onChange={e => setText(e.target.value)}
                            className="mt-3"
                            placeholder="Твой комментарий"
                        />
                    </Form>
                    <div style={{marginTop: 20}}>
                        <Space>
                            <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 12, width: 110, height: 30}} onClick={confirm}>Подтвердить</Button>
                            <Button style={{ background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 12, width: 150, height: 30}} onClick={addCommentUser}>Опубликовать</Button>
                        </Space>
                    </div>
                    <div  style={{marginTop: 30}} >
                    {commentsAll.map((cat) =>
                        <Card className="d-flex flex-column" style={{fontFamily: 'IBM Plex Mono', background: '#292929', borderColor: '#292929', width: '100%', borderRadius: 15, marginTop: 5, marginBottom: 5, height: 115}} key={cat.id}>
                            <div style={{fontSize: 16, fontWeight: 700, color: '#FFFFFF'}}>
                            <Space><img style={{height: 40, width: 40, borderRadius: 30}} onClick={() => history.push(CUSTOMER + '/' + cat.userId)} src={process.env.REACT_APP_API_URL + cat.img}/>{cat.name}</Space>
                            </div>
                            <div style={{fontSize: 12, paddingTop: 5, paddingBottom: 5, fontWeight: 700, color: '#FFFFFF'}}>
                                Оценка: {cat.rating}
                            </div>
                            <div style={{fontSize: 10, paddingBottom: 30, fontWeight: 700, color: '#FFFFFF'}}>
                                {cat.text}
                            </div>
                        </Card>
                        )}
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
})

export default DevicePage;