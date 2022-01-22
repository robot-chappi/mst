import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addBrand = () => {
        const formData = new FormData()
        formData.append('name', value)
        formData.append('img', file)
        createBrand(formData).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 600, fontFamily: 'Poppins', fontSize: 26, color: '#FFFFFF'}}>Add a brand</h1> 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>

                        <Col style={{marginLeft: 10}}>
                            <h4 style={{paddingTop: 10, fontWeight: 600, fontFamily: 'Poppins', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Brand name *</h4>
                            <Input style={{background: '#292929', borderRadius: 15, height: 50, fontWeight: 300, fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: '#FFFFFF'}} value={value} onChange={e => setValue(e.target.value)} placeholder="Enter the brand name" />
                            <h4 style={{paddingTop: 10, fontWeight: 600, fontFamily: 'Poppins', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Brand image *</h4>
                            <Form.Control
                            style={{color: '#FFFFFF'}}
                                type="file"
                                onChange={selectFile}
                            />
                        </Col>
                        </Card>
                        </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Close</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;