import React, {useEffect, useState} from 'react';
import { Carousel, Col, Image, Layout } from 'antd';
import { observer } from "mobx-react-lite";
import {useMediaQuery} from 'react-responsive'
import { fetchAds } from '../http/deviceAPI';

const {Content} = Layout

const CarouselBar = observer(() => { 
    const [adsData, setAdsData] = useState([])
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    useEffect(() => {
        fetchAds().then(data => setAdsData(data))
    }, [])
    console.log(adsData)
    return(
        <Col>
        {isDesktopOrLaptop && 
        <Content style={{position: 'relative'}}>
            <Col>
                <Carousel autoplay>
                {adsData.map(adv => 
                    <div style={{width: '100%'}}>
                        <img  
                        width="100%"
                        src={process.env.REACT_APP_API_URL + adv.img}
                            />
                    </div>
                )}
                </Carousel>
            </Col>
        </Content>
} 
        {isMobile && 
        <Content style={{position: 'relative'}}>
        <Col>
            <Carousel autoplay>
            {adsData.map(adv => 
                <div style={{width: '100%'}}>
                    <img  
                    width="100%"
                    src={process.env.REACT_APP_API_URL + adv.img}
                        />
                </div>
            )}
            </Carousel>
        </Col>
        </Content>
}
        </Col>

)});
export default CarouselBar;