import React, {useContext} from 'react';
import {useMediaQuery} from 'react-responsive'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { List, Card, Col } from 'antd';
import { Row } from 'react-bootstrap';

const TypeBar = observer(() => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const {devices} = useContext(Context)
    return (
        <Col>
        {isDesktopOrLaptop && 
            <List>
                {devices.types.map(type =>
                    <Card
                        style={{cursor: 'pointer',  fontSize: 15,  color: 'black',  background: 'white', fontFamily: 'Poppins', fontWeight: 600, marginTop: 10, textAlign: 'center', borderRadius: 15}}
                        active={type.id === devices.selectedType.id}
                        onClick={() => devices.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}
                    </Card>
                )}
            </List>
        }
        {isMobile && 
            <Row>
                {devices.types.map(type =>
                <Card className="d-flex" key={type.id} style={{width: 40, height: 56, background: 'white', borderRadius: 15, justifyContent: 'center'}} onClick={() => devices.setSelectedType(type)} active={type.id === devices.selectedType.id} border={type.id === devices.selectedType.id ? 'danger' : 'light'}>
                    <h1 style={{fontWeight: 600, fontSize: 7, fontFamily: 'Poppins'}}>{type.name}</h1>
                </Card>
                )}
            </Row>
        }
        </Col>
    );
});

export default TypeBar;