import React, { useContext, useState } from "react";
import {useMediaQuery} from 'react-responsive'
import { Context } from "..";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE, BASKET_ROUTE, USER_ACCOUNT, SEARCH_SOMETHING, CUSTOMERS } from "../utils/consts";
import { observer } from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import logoSite from '../assets/mst.png'
import { Layout, Card, Form, Input, Button, Row, Space, Col, Menu, Image} from 'antd';
import { UserOutlined, StarOutlined, LoginOutlined, ShoppingOutlined, MenuOutlined, ShopOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;



const NavBar = observer(() => {
    const [visibleMenu, setVisibleMenu] = useState(false)
    const [colorOne, setColorOne] = useState("#1F1F1F");
    const [colorTwo, setColorTwo] = useState("#1F1F1F");
    const [colorThree, setColorThree] = useState("#1F1F1F");
    const [colorFour, setColorFour] = useState("#1F1F1F");
    const [colorFive, setColorFive] = useState("#1F1F1F");
    const [colorSix, setColorSix] = useState("#1F1F1F");
    const [colorSeven, setColorSeven] = useState("#1F1F1F");
    const [colorEight, setColorEight] = useState("#1F1F1F");
    const [colorNine, setColorNine] = useState("#1F1F1F");
    const [colorTen, setColorTen] = useState("#1F1F1F");
    const [colorElevan, setColorElevan] = useState("#1F1F1F");
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const onOff = () => {
        try {
        if (visibleMenu == true) {
            setVisibleMenu(false)
        }
        if (visibleMenu == false) {
            setVisibleMenu(true)
        }
    } catch {
        console.log('Error')
    }
    }

    return (
        
        <Layout>
            {isDesktopOrLaptop &&
            <Header className="header" style={{background: '#1F1F1F', minWidth: 1224}}>
                <Space className='d-flex' style={{justifyContent: 'space-between'}}>
                    <Row>
                        <div className="logo">
                            <NavLink style={{color: '#73777D', textDecoration: 'none',  fontSize: 16, fontFamily: 'Poppins', fontWeight: 600}} to={SHOP_ROUTE}>
                                <img
                                style={{paddingBottom: 8}}
                                width={70}
                                height={70}
                                src={logoSite}/></NavLink>
                                    </div>
                    </Row>
                <Row>
                    
                    {user.isAuth ? 
                    <Col>
                    {isDesktopOrLaptop &&
                        <Space style={{color: 'white', background: '#1F1F1F'}}>
                            
                            <Row onClick={() => history.push(ABOUT_US_ROUTE)} style={{background: '#1F1F1F', marginRight: 30}}><h4 onMouseEnter={() => setColorOne('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorOne('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorOne}`, borderRadius: 15, width: 100, paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 17,  marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 600}}>О нас</h4></Row >
                            <Row onClick={() => history.push(FAQ_ROUTE)} style={{background: '#1F1F1F', marginRight: 30}}><h4 onMouseEnter={() => setColorTwo('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorTwo('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorTwo}`, borderRadius: 15, width: 100, paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 17,  marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 600}}>{"Блог"}</h4></Row >
                            <Row onClick={() => history.push(CUSTOMERS)} style={{background: '#1F1F1F', marginRight: 30}}><h4 onMouseEnter={() => setColorThree('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorThree('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorThree}`, borderRadius: 15, width: 110, paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 17,  marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 600}}>Исполнители</h4></Row >
                            <Row onClick={() => history.push(PRIVACY_POLICY_ROUTE)} style={{background: '#1F1F1F', marginRight: 30}}><h4 onMouseEnter={() => setColorFour('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorFour('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorFour}`, borderRadius: 15, width: 110, paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 17,  marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 600}}>Гарантии</h4></Row >
                            <Row onClick={() => history.push(REFUND_POLICY_ROUTE)} style={{background: '#1F1F1F', marginRight: 30}}><h4 onMouseEnter={() => setColorFive('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorFive('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorFive}`, borderRadius: 15, width: 100, paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 17,  marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 600}}>{"Новости"}</h4></Row >
                            
                            <Row style={{background: '#1F1F1F'}} onClick={() => logOut()}><h4 onMouseEnter={() => setColorSix('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorSix('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorSix}`, borderRadius: 15, width: 32, paddingTop: 5, paddingBottom: 7, textAlign: 'center', fontSize: 15, marginLeft: 150, marginRight: 30}}><LoginOutlined style={{ fontSize: '20px' }}/></h4></Row >
                            <Row style={{background: '#1F1F1F'}} onClick={() => history.push(SEARCH_SOMETHING)}><h4 onMouseEnter={() => setColorSeven('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorSeven('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorSeven}`, borderRadius: 15, width: 32, paddingTop: 5, paddingBottom: 7, textAlign: 'center', fontSize: 15, marginRight: 30}}><UnorderedListOutlined style={{ fontSize: '20px' }}/></h4></Row >
                            <Row style={{background: '#1F1F1F'}} onClick={() => history.push(BASKET_ROUTE)}><h4 onMouseEnter={() => setColorEight('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorEight('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorEight}`, borderRadius: 15, width: 32, paddingTop: 5, paddingBottom: 7, textAlign: 'center', fontSize: 15, marginRight: 30}}><ShoppingOutlined style={{ fontSize: '20px' }}/></h4></Row >
                            <Row style={{background: '#1F1F1F'}} onClick={() => history.push(USER_ACCOUNT)}><h4 onMouseEnter={() => setColorNine('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorNine('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorNine}`, borderRadius: 15, width: 32, paddingTop: 5, paddingBottom: 7, textAlign: 'center', fontSize: 15, marginRight: 30}}><UserOutlined style={{ fontSize: '20px' }}/></h4></Row >
                            <Row style={{background: '#1F1F1F'}} onClick={() => history.push(ADMIN_ROUTE)}><h4 onMouseEnter={() => setColorTen('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorTen('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorTen}`, borderRadius: 15, width: 32, paddingTop: 5, paddingBottom: 7, textAlign: 'center', fontSize: 15, marginRight: 30 }}><StarOutlined style={{ fontSize: '20px' }}/></h4></Row >
                            
                        </Space>
}
                    </Col>
                        :
                        <Menu theme="dark" mode="horizontal" style={{color: 'red'}}>
                            <Menu.Item key="1" style={{background: '#1F1F1F',  fontFamily: 'Poppins', fontWeight: 600}} onClick={() => history.push(LOGIN_ROUTE)}>
                                <label className='control-label'>
                                    <h4 onMouseEnter={() => setColorElevan('rgba(1, 1, 1, 0.3)')} onMouseLeave={() => setColorElevan('#1F1F1F')} style={{color: "#FFFFFF", background: `${colorElevan}`, borderRadius: 15, width: 70, paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 15, marginTop: 5, fontFamily: 'Poppins', fontWeight: 600}}>Login</h4>
                                </label>
                            </Menu.Item>
                        </Menu>
                    }
                </Row>
                </Space>
            </Header>
            } 
            {isMobile && 
                 <Header className="header" style={{background: '#1F1F1F', width: 375}}>
                 <Space className='d-flex' style={{justifyContent: 'space-between'}}>
                     <Row>
                         <div className="logo">
                             <NavLink style={{color: '#1F1F1F', textDecoration: 'none',  fontSize: 16, fontFamily: 'Poppins', fontWeight: 600}} to={SHOP_ROUTE}>
                                 <img width={50} height={50}
                                
                                 src={logoSite}/></NavLink>
                                     </div>
                     </Row>
                 <Row>
                     {user.isAuth ? 

                     <Col>
                     
                     <Menu theme="light" mode="horizontal">
                        <SubMenu style={{background: '#1F1F1F'}} key="SubMenu" title={<MenuOutlined style={{color: '#FFFFFF'}}/>}>
                        <Col style={{background: '#1F1F1F'}} >
                            <Space key='spac' style={{paddingTop: 10, background: '#1F1F1F'}}>
                                <Menu.Item key="6" style={{background: '#1F1F1F'}} onClick={() => history.push(SHOP_ROUTE)}><h4 style={{color: '#FFFFFF', fontSize: 15}}><ShopOutlined style={{ color: '#FFFFFF', fontSize: '20px' }}/></h4></Menu.Item >
                                <Menu.Item key="10" style={{background: '#1F1F1F'}} onClick={() => history.push(SEARCH_SOMETHING)}><h4 style={{color: '#FFFFFF', fontSize: 15}}><UnorderedListOutlined style={{ color: '#FFFFFF', fontSize: '20px' }}/></h4></Menu.Item >
                                <Menu.Item key="8" style={{background: '#1F1F1F'}} onClick={() => history.push(USER_ACCOUNT)}><h4 style={{color: '#FFFFFF', fontSize: 15}}><UserOutlined style={{ color: '#FFFFFF', fontSize: '20px' }}/></h4></Menu.Item >
                                <Menu.Item key="7" style={{background: '#1F1F1F'}} onClick={() => history.push(BASKET_ROUTE)}><h4 style={{color: '#FFFFFF', fontSize: 15}}><ShoppingOutlined style={{ color: '#FFFFFF', fontSize: '20px' }}/></h4></Menu.Item >
                                <Menu.Item key="6" style={{background: '#1F1F1F'}} onClick={() => logOut()}><h4 style={{color: '#FFFFFF', fontSize: 15}}><LoginOutlined style={{ color: '#FFFFFF', fontSize: '20px' }}/></h4></Menu.Item >
                                <Menu.Item key="9" style={{background: '#1F1F1F'}} onClick={() => history.push(ADMIN_ROUTE)}><h4 style={{color: '#FFFFFF', fontSize: 15, }}><StarOutlined style={{ color: '#FFFFFF', fontSize: '20px' }}/></h4></Menu.Item >
                            </Space>
                            <Col style={{background: '#1F1F1F'}}>
                                <Menu.Item key="1" onClick={() => history.push(ABOUT_US_ROUTE)} style={{background: '#1F1F1F'}}><h4 style={{color: '#FFFFFF', fontSize: 17,  marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 700, paddingRight: 250}}>О нас</h4></Menu.Item >
                                <Menu.Item key="2" onClick={() => history.push(FAQ_ROUTE)} style={{background: '#1F1F1F'}}><h4 style={{color: '#FFFFFF', fontSize: 17, marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{"Блог"}</h4></Menu.Item >
                                <Menu.Item key="3" onClick={() => history.push(CUSTOMERS)} style={{background: '#1F1F1F'}}><h4 style={{color: '#FFFFFF', fontSize: 17, marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 700}}>Исполнители</h4></Menu.Item >
                                <Menu.Item key="4" onClick={() => history.push(PRIVACY_POLICY_ROUTE)} style={{background: '#1F1F1F'}}><h4 style={{color: '#FFFFFF', fontSize: 17, marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 700}}>Гарантии</h4></Menu.Item >
                                <Menu.Item key="5" onClick={() => history.push(REFUND_POLICY_ROUTE)} style={{background: '#1F1F1F'}}><h4 style={{color: '#FFFFFF', fontSize: 17, marginTop: 5, fontFamily: 'IBM Plex Mono', fontWeight: 700}}>{"Новости"}</h4></Menu.Item >
                            </Col>
                        </Col>
                            </SubMenu> 
                    </Menu>   
                     
                     </Col>
                         :
                         <Col style={{background: '#1F1F1F'}}>
                            <Menu theme="dark" mode="inline" style={{color: '#16181B', background: '#1F1F1F'}}>
                                <Menu.Item key="1" style={{background: '#1F1F1F',  fontFamily: 'Poppins', fontWeight: 600}} onClick={() => history.push(LOGIN_ROUTE)}>
                                    <label style={{background: '#1F1F1F'}} className='control-label'>
                                        <h4 style={{color: '#FFFFFF', fontSize: 15, marginTop: 5, fontFamily: 'Poppins', fontWeight: 600}}>Login</h4>
                                    </label>
                                </Menu.Item>
                            </Menu>
                         </Col>
                     }
                 </Row>
                 </Space>
             </Header>   
            }
        </Layout>
    );
});

export default NavBar;