import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import { Card, Image, Rate, Button } from 'antd';

const Pages = observer(() => {
    const {devices} = useContext(Context)
    const pageCount = Math.ceil(devices.totalCount / devices.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Row md={6} className='pagination' style={{paddingTop: 40}}>
            {pages.map(page =>
                <Button
                    style={{borderRadius: 10, width: '7%', background: 'white', fontWeight: 600, fontFamily: 'Poppins', fontSize: 16, textAlign: 'center', color: 'black', marginRight: 6, paddingLeft: 9}}
                    key={page}
                    onClick={() => devices.setPage(page)}
                >
                    {page}
                </Button>
                
            )}
        </Row>
    );
});

export default Pages;