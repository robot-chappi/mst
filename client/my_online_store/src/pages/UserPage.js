import React, {useState, useEffect} from "react";
import {useMediaQuery} from 'react-responsive'
import { Spinner } from "react-bootstrap";
import CreateUserInformation from "../components/models/CreateUserInfo";
import CreateOneReview from "../components/models/CreateReview";
import { fetchUserData, createNewsletterSub, fetchOneUserBackground, fetchReviews, createReviews } from "../http/deviceAPI";
import { observer } from "mobx-react-lite";
import { useParams, useHistory } from "react-router-dom";
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, message} from 'antd';
import { EditOutlined, } from '@ant-design/icons';

import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
import { CUSTOMER } from "../utils/consts";
const { Header, Content, Footer } = Layout;


const UserOnePage = observer(() => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [review, setReview] = useState(false)
    const [userData, setUserData] = useState([])
    const [backgroundUserPage, setBackgroundUserPage] = useState([])
    const [allReviews, setAllReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        fetchOneUserBackground(id).then(data => setBackgroundUserPage(data))
        fetchReviews(id).then(data => setAllReviews(data))
        fetchUserData(id).then(data => setUserData(data)).finally(() => setLoading(false))
    }, [])

    const Helper = () => {
        console.log(userData)
    }


    
    if (loading) {
        return <Spinner animation={'grow'}/>
      } 

    if(userData.role == 0) { 
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
                
               <Col style={{position: 'absolute', left: 630, bottom: 280}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 65, paddingBottom: 10, color: '#FFFFFF'}}>АККАУНТ ЗАКАЗЧИКА</h1>
               </Col>
                
           </Content>
           }
            {isDesktopOrLaptop &&
           <Content className='center-block' style={{minHeight: 600}}>
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
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Заказчик</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col> 
                   </Row>          
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
               <Col style={{position: 'absolute', left: 90, bottom: 610}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>АККАУНТ ЗАКАЗЧИКА</h1>
               </Col>
           </Content>
           }
           {isMobile &&
           <Content className='center-block' style={{minHeight: 600}}>
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
                           <h1 style={{fontSize: 15, paddingBottom: 4, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Заказчик</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 7, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col>
                   </Row>             
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
               <Col style={{position: 'absolute', left: 630, bottom: 280}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 65, paddingBottom: 10, color: '#FFFFFF'}}>АККАУНТ ИСПОЛНИТЕЛЯ</h1>
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
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Исполнитель</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Рейтинг: {userData.rating}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col> 
                   </Row>           
               </Col>
               <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>
                   <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setReview(true)}><EditOutlined /></Button>                  
                   
                   <CreateOneReview customerId={userData.userId} show={review} onHide={() => setReview(false)}/>
               </div>
               <Col style={{marginTop: 20}}>
               <h1 style={{paddingTop: 10, fontWeight: 700, textAlign: 'center', fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 10, color: '#FFFFFF'}}>Мои отзывы</h1>  
               <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                        {allReviews.map((cat) =>
                                    <Card className="d-flex flex-column" style={{fontFamily: 'IBM Plex Mono', background: '#292929', borderColor: '#292929', width: 400, borderRadius: 15, marginTop: 10, marginBottom: 10}} key={cat.id}>
                                        <div style={{fontSize: 25, fontWeight: 700, color: "#FFFFFF"}}>
                                            <Space><img style={{height: 50, width: 50, borderRadius: 30}}  src={process.env.REACT_APP_API_URL + cat.img}/>{cat.name}</Space>
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
               <Col style={{position: 'absolute', left: 90, bottom: 610}}>
                   <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 20, paddingBottom: 10, color: '#FFFFFF'}}>АККАУНТ ИСПОЛНИТЕЛЯ</h1>
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
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Статус: Исполнитель</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Рейтинг: {userData.rating}</h1>
                           <h1 style={{fontSize: 15, paddingBottom: 4, paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', color: '#FFFFFF'}}>Персональный код: {userData.personalCode}</h1>
                       </Col>
                   </Row>             
               </Col>
               <div style={{textAlign: 'center', paddingTop: 25, fontFamily: 'Poppins', marginRight: 15}}>
                    <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 14, width: 50, height: 50, paddingBottom: 8, marginRight: 5}} onClick={() => setReview(true)}><EditOutlined /></Button>
               
                   <CreateOneReview customerId={userData.userId} show={review} onHide={() => setReview(false)}/>

               </div>
               <Col style={{marginTop: 20}}>
                    <h1 style={{paddingTop: 10, fontWeight: 700, textAlign: 'center', fontFamily: 'IBM Plex Mono', fontSize: 26, paddingBottom: 10, color: '#FFFFFF'}}>Мои отзывы</h1>  
                    <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                        {allReviews.map((cat) =>
                                    <Card  className="d-flex flex-column" style={{fontFamily: 'IBM Plex Mono', background: '#292929', borderColor: '#292929', width: 300, borderRadius: 15, marginTop: 10, marginBottom: 10}} key={cat.id}>
                                        <div style={{fontSize: 25, fontWeight: 700, color: "#FFFFFF"}}>
                                            <Space><img style={{height: 50, width: 50, borderRadius: 30}}  src={process.env.REACT_APP_API_URL + cat.img}/>{cat.name}</Space>
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

export default UserOnePage;