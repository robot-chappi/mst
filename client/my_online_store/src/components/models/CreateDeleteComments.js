import React, {useContext, useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive'
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {deleteComments, fetchAllComments, findOneComment} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { Col, Card, Input, Alert, message, Menu, Space
    //    Button, Space, Image, Select, Rate
    } from 'antd';

const CreateDeleteComment = observer(({show, onHide}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const [allComments, setAllComments] = useState([])
    const [deleteB, setDeleteB] = useState()
    const [nameComment, setNameComment] = useState('')
    const [ratingCommant, setRatingCommant] = useState('')
    const [textComment, setTextComment] = useState('')
    const [foudComment, setFoudComment] = useState([])
    const [ex, setEx] = useState(0)
    const [visibleAlert, setVisibleAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')

    // useEffect(() => {
    //     fetchComments().then(data => {
    //         setAllComments(data.rows)
    //     })
    // }, [])
    useEffect(() => {
        fetchAllComments(null).then(data => setAllComments(data))
    }, [])

    const deleteItem = () => {
        deleteComments(deleteB)
        message.success('Успешно удален!')
        onHide()
    }

    const find = () => {
        findOneComment(nameComment, ratingCommant, textComment).then(data => setFoudComment(data))
        setEx(1)
    }

    const check = () => {
        if (ex === 1) {
        console.log(foudComment)
        try {
            foudComment.map(f => {
                setAlertText(`Комментарий ID: ${f.id}`)
                setAlertType('success')
                setVisibleAlert(true)
                return setTimeout(() => {setVisibleAlert(false)}, 4000)
            })
    } catch {
            setAlertText(`Коментарий не найден`)
            setAlertType('error')
            setVisibleAlert(true)
            return setTimeout(() => {setVisibleAlert(false)}, 4000)  
        }
    } else {
        setAlertText('Сначала нажмите кнопку "подтвердить", а затем добавляйте данные')
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
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 26, color: '#FFFFFF'}}>Найти, удалить комментарий</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "#1F1F1F", borderColor: "#1F1F1F"}}>
                <Col>
                    <Form>
                        <Col>
                            <Card style={{background: '#292929', borderColor: '#292929', borderRadius: 15, marginBottom: 20}}>
                                <Col style={{marginBottom: 20}}>
                                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Удалить это</h4>
                                </Col>
                                <Col>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Комментарий ID *</h4>
                                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={deleteB} onChange={e => setDeleteB(e.target.value)} placeholder="Введи ID комментария" />
                <Col style={{marginBottom: 20}}>
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 22, color: '#FFFFFF'}}>Найти ID комментария</h4>
                </Col>
                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Имя автора *</h4>
                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={nameComment} onChange={e => setNameComment(e.target.value)} placeholder="Введи имя автора" />
                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Рейтинг комментария*</h4>
                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={ratingCommant} onChange={e => setRatingCommant(e.target.value)} placeholder="Введи рейтинг комментария" />
                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Текст комментария *</h4>
                <Input style={{borderRadius: 15, height: 50, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, marginBottom: 10, marginTop: 7, borderWidth: 2, fontWeight: 600, color: 'black'}} value={textComment} onChange={e => setTextComment(e.target.value)} placeholder="Введи текст комментария" />
                {visibleAlert&& 
                        <Alert message={alertText} type={alertType} />
                        }
                <Col style={{marginBottom: 20}}>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={find}>Найти</Button>
                    <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={check}>Проверить</Button>
                </Col>
                <Row>
                    <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>Выбрать комментарий: </h4>
                </Row>
                <Col>
                    {isDesktopOrLaptop &&
                    <Row>
                            <Row md={6}>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ID</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ИМЯ</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>РЕЙТИНГ</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ТЕКСТ</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>УСЛГ_ID</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>USER_ID</h4>
                            </Row>
                            {allComments.map(comment => 
                            // <Col key={device.id} onClick={() => setDeleteB(device.id)}>
                            <Row key={comment.id} md={6} onClick={() => setDeleteB(comment.id)}>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.id}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.name}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.rating}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.text}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.deviceId}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.userId}</h4>
                            </Row>
                                    )}
                    </Row>
                    }
                    {isMobile &&
                    <Row>
                            <Space className='d-flex' style={{justifyContent: 'space-between'}}>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ID</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ИМЯ</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>РЕЙТИНГ</h4>
                                <h4 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 13, paddingBottom: 10, color: '#FFFFFF'}}>ТЕКСТ</h4>
                            </Space>
                            {allComments.map(comment => 
                            // <Col key={device.id} onClick={() => setDeleteB(device.id)}>
                            <Row key={comment.id} md={4} onClick={() => setDeleteB(comment.id)}>
                                <Space className='d-flex' style={{justifyContent: 'space-between'}}>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.id}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.name}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.rating}</h4>
                                <h4 style={{paddingTop: 5, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 12, paddingBottom: 5, color: '#FFFFFF'}}>{comment.text}</h4>
                                </Space>
                            </Row>
                                    )}
                    </Row>
                    }
                </Col>
                <Row>
                    <h4 style={{paddingTop: 15, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 15, paddingBottom: 10, color: '#FFFFFF'}}>{`Выбрать ID комментария: ${deleteB}`}</h4>
                </Row>
                    </Col>
                </Card>
                </Col>
                </Form>
                </Col>
            </Modal.Body>
            <Modal.Footer style={{background: "#292929", borderColor: "#292929"}}>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={onHide}>Закрыть</Button>
                <Button style={{background: '#0072CE', color: 'white', borderRadius: 30, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 14, width: 150, height: 40, borderColor: '#0072CE', marginRight: 10}} className="mt-2" onClick={deleteItem}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDeleteComment;