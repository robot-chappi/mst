import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import { Row } from "react-bootstrap";
import {Context} from "../index";
import { List, Card, Col } from 'antd';
import {useMediaQuery} from 'react-responsive'

const BrandBar = observer(() => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const {devices} = useContext(Context)
    return (
        <Col>
        {isDesktopOrLaptop && 
            <Row  style={{marginLeft: 150,}}>
                {devices.brands.map(brand => 
                    <Card key={brand.id} style={{width: 150, height: 67, cursor: 'pointer',  background: 'white', textAlign: 'center', marginRight: 5, borderRadius: 15}} onClick={() => devices.setSelectedBrand(brand)} border={brand.id === devices.selectedBrand.id ? 'danger' : 'light'}>
                        <h4 style={{fontWeight: 600, fontSize: 15, fontFamily: 'Poppins'}}>{brand.name}</h4>
                    </Card>
                    )}
            </Row>
        }
        {isMobile && 
        <Row>
            {devices.brands.map(brand => 
                <Card className="d-flex" key={brand.id} style={{width: 40, height: 56, cursor: 'pointer', background: 'white', borderRadius: 15, justifyContent: 'center'}} onClick={() => devices.setSelectedBrand(brand)} border={brand.id === devices.selectedBrand.id ? 'danger' : 'light'}>
                    <h1 style={{fontWeight: 600, fontSize: 6, fontFamily: 'Poppins'}}>{brand.name}</h1>
                </Card>
                )}
            </Row>
        }
        </Col>
    )
})

export default BrandBar;