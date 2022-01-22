import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Spinner, Button} from "react-bootstrap";
import {sendEmailCodeForChangePassword} from "../../http/deviceAPI";
import { updateUserPassword } from '../../http/userAPI';
import { useHistory } from "react-router-dom";
import { Context } from "../../index";
import {observer} from "mobx-react-lite";
import {SHOP_ROUTE} from "../../utils/consts";
import { Col, Card, Input, Alert, message
    //    Button, Space, Image, Select, Rate
    } from 'antd';


const CreateChangePassword = observer(({show, onHide}) => {
    const [code, setCode] = useState()
    const [password, setPassword] = useState('')
    const [hideCode, setHideCode] = useState()
    const {user} = useContext(Context)
    const history = useHistory()
    const [ex, setEx] = useState(0)
    const [exx, setExx] = useState(0)
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    let emailusers = localStorage.getItem('emailUser')
    let paswordusers = localStorage.getItem('passwordUser')

    const confirm = () => {
    setHideCode(Math.floor(Math.random() * 999999999))
    setEx(1)
    console.log(hideCode)
    console.log(emailusers)
    }


    const sendCodeEmail = async () => {
        if (ex === 1) { 
            console.log(hideCode)
            const formData = new FormData()
            formData.append('email', emailusers)
            formData.append('code', hideCode)
            sendEmailCodeForChangePassword(formData)
            setAlertText('The code has been sent! Check your Email and write your code above')
            setAlertType('success')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)

        } else {
            setAlertText("Click on 'confirm' first, and then the code will be sent")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }     
    }                                                                                               

    const handleCode = async () => {
        if (ex === 1) {
            if (code == hideCode) {
                setExx(1)
                setAlertText("Yay! You can change your password!")
                setAlertType('success')
                setVisibleAlert(true)
                setTimeout(() => {setVisibleAlert(false)}, 4000)
            } else {
                setAlertText("Opss... Your code is not similar to the one in the message\nTry again")
                setAlertType('error')
                setVisibleAlert(true)
                setTimeout(() => {setVisibleAlert(false)}, 4000)
            }
        } else {
            setAlertText("Click on 'confirm' first, and then the code will be sent")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }
    }

    const changeUserPassword = async () => {
        if (exx === 1) {
            const formDataTwo = new FormData()
            formDataTwo.append('email', emailusers)
            formDataTwo.append('password', password)
            await updateUserPassword(formDataTwo)
            
            message.success({
                content: 'Your password was change!',
                className: 'custom-class',
                style: {
                  marginTop: '6vh',
                },
              });
            onHide()
        } else {
            setAlertText("Opss... You can't change your password until you enter the correct code above. Try again")
            setAlertType('error')
            setVisibleAlert(true)
            setTimeout(() => {setVisibleAlert(false)}, 4000)
        }
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header style={{background: "#292929", borderColor: "#292929"}}>
                <Modal.Title >
                    <h1 style={{paddingTop: 10, fontWeight: 600, fontFamily: 'Poppins', fontSize: 26, color: '#FFFFFF'}}>Change your password</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <h3 style={{paddingTop: 10, fontWeight: 600, fontFamily: 'Poppins', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>What needs to be done?</h3>
                                <h3 style={{paddingTop: 5, fontWeight: 300, fontFamily: 'Poppins', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'1. Enter your email on the main authentication screen and then go here'}</h3>
                                <h3 style={{paddingTop: 5, fontWeight: 300, fontFamily: 'Poppins', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'2. Click on the "Confirm" button (to confirm the action)'}</h3>
                                <h3 style={{paddingTop: 5, fontWeight: 300, fontFamily: 'Poppins', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'3. Click on the "Send the code" button (to send the code to your email)'}</h3> 
                                <h3 style={{paddingTop: 5, fontWeight: 300, fontFamily: 'Poppins', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'4. Get the code and write it in the input field and click the "Check the code" button'}</h3>
                                <h3 style={{paddingTop: 5, fontWeight: 300, fontFamily: 'Poppins', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'5. If you entered the correct code, then you can enter your new password in a special line'}</h3> 
                                <h3 style={{paddingTop: 5, fontWeight: 300, fontFamily: 'Poppins', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'6. Enter a strong password'}</h3> 
                                <h3 style={{paddingTop: 5, fontWeight: 300, fontFamily: 'Poppins', fontSize: 14, paddingBottom: 5, color: '#FFFFFF'}}>{'7. Click on the "Change" button and log in to your account again'}</h3> 
                            </Card>
                        {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                        </Col>
                            <Col>
                                <h4 style={{paddingTop: 20, fontWeight: 600, fontFamily: 'Poppins', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Write the code here</h4>
                                <Input style={{background: '#292929', borderRadius: 15, height: 50, fontWeight: 300, fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: '#FFFFFF'}} value={code} onChange={e => setCode(e.target.value)} placeholder="Write your code here" />
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={handleCode}>Check the code</Button>
                            </Col>
                            <Col style={{marginTop: 20}}>
                                <h4 style={{paddingTop: 10, fontWeight: 600, fontFamily: 'Poppins', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Write the new password here</h4>
                                <Input style={{background: '#292929', borderRadius: 15, height: 50, fontWeight: 300, fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: '#FFFFFF'}} value={password} onChange={e => setPassword(e.target.value)} placeholder="Write your new password here" />
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={confirm}>Confirm</Button>
                                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2"  onClick={sendCodeEmail}>Send the code</Button>
                            </Col>

                    </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Close</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={changeUserPassword}>Change</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateChangePassword;