import React from "react";
import {useMediaQuery} from 'react-responsive'
import { Col } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from '../utils/consts'
import { Card, Image, Rate, Space, Button } from 'antd';

const DeviceItem = ({device}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const history = useHistory()
    return (
        <Col>
            {isDesktopOrLaptop && 
            <Col md={3} className='mt-3' >
                <div style={{width: 210, height: 363, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 700, borderRadius: 15, paddingTop: 5, background: '#292929'}}>
                    <div className="d-flex align-items-center">
                        <Image width={210} height={210} style={{borderRadius: 15,}}  src={process.env.REACT_APP_API_URL + device.img}/>
                    </div>
                    <div style={{fontWeight: 600, fontSize: 18, color: '#FFFFFF', paddingLeft: 5, paddingTop: 5}} className="mt-1 d-flex justify-content-between align-items-center">
                    <div>{device.name}</div>
                    </div>
                    <div className="d-flex align-items-center" style={{marginLeft: 5}}>
                            <Space><Rate style={{fontSize: 17}} value={device.rating} /></Space>
                    </div>
                    <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                        <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 16, width: 198, height: 36, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>РУБ: {device.price}</Button>
                    </div>
                </div>
            </Col>
            }
            {isMobile && 
            <Col md={3} className='mt-3'>
                <div style={{width: 110, color: 'black', cursor: 'pointer', fontFamily: 'IBM Plex Mono', fontSize: 16, fontWeight: 700, borderRadius: 15,  background: '#292929', height: 224}}>
                    <div className="d-flex align-items-center">
                        <Image width={110} height={110} style={{borderRadius: 15,}} src={process.env.REACT_APP_API_URL + device.img}/>
                    </div>
                    <div style={{fontWeight: 600, fontSize: 12, color: '#FFFFFF', paddingTop: 5}} className=" d-flex justify-content-between align-items-center">
                    <div>{device.name}</div>
                    </div>
                    <div className="d-flex align-items-center">
                            <Space><Rate style={{fontSize: 12}} value={device.rating} /></Space>
                        </div>
                    <div className="d-flex align-items-center" style={{marginTop: 10, justifyContent: 'center'}}>
                        <Button style={{background: '#0072CE', borderColor: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'IBM Plex Mono', fontWeight: 700, fontSize: 10, width: 110, height: 26, textAlign: 'center'}} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>РУБ: {device.price}</Button>
                    </div>
                </div>
            </Col>
            }
        </Col>
    )
}

export default DeviceItem;