import React, {useEffect, useState} from 'react';
import { Carousel, Col, Image } from 'antd';
import { observer } from "mobx-react-lite";
import {useMediaQuery} from 'react-responsive'
import { fetchAds } from '../http/deviceAPI';


const CarouselBarTwo = observer(() => { 
    const [adsData, setAdsData] = useState([])
    const adsType = 'above'
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    const contentStyle = {
        height: '260px',
        color: '#fff',
        lineHeight: '260px',
        textAlign: 'center',
        background: '#364d79',
      };

    useEffect(() => {
        fetchAds(adsType).then(data => setAdsData(data))
    }, [])

    return(
        <Col>
        {isDesktopOrLaptop &&
            <Carousel autoplay>
                {adsData.map(adv => 
            <div>
                <Image                  
                src={process.env.REACT_APP_API_URL + adv.img}
                    />
            </div>
                )}
            </Carousel>
        }
        {isMobile &&
            <Carousel style={{width: 375}} autoplay>
                {adsData.map(adv => 
            <div key={adv.id}>
                <Image   
                width={375}               
                src={process.env.REACT_APP_API_URL + adv.img}
                    />
            </div>
                )}
            </Carousel>
        }
        </Col>

)});
export default CarouselBarTwo;