import React, {useState} from "react";
import {useMediaQuery} from 'react-responsive'
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { useHistory } from "react-router-dom";
import { createNewsletterSub } from "../http/deviceAPI";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';
import aboutus from "../assets/personal.jpg";
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
const { Header, Content, Footer } = Layout;

const PersonalDataPage = () => {
    const [newsletter, setNewsletter] = useState('')
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const history = useHistory()
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });

    const newsletterSub = async () => {
        const formData = new FormData()
        formData.append('email', newsletter)
        createNewsletterSub(formData)
        message.success('You have subscribed to the newsletter!')
    }

    return (
        <Layout style={{background: "#1F1F1F"}}>
            {isDesktopOrLaptop &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={aboutus}/>
                </Col>
            </Content>
            }
            {isDesktopOrLaptop &&
            <Content>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={4}>
                    <Col span={20}>
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 50, paddingBottom: 10, color: '#FFFFFF'}}>Персональные данные</h1>
                    </Col>
            <Col span={20}>
                <h4 style={{paddingTop:20, fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>Consent to the processing of personal data</h4>

Acting freely, of his own free will and in his own interest, the subject of personal data (hereinafter referred to as the User) confirms his legal capacity and gives his consent to the Site Administration (hereinafter referred to as the Operator) to process his personal data with the following conditions:<br/><br/>


1. Consent to the processing of personal data is provided by the User through registration on the website steampay.com (hereinafter also the Website). The Operator processes the following personal data of the User:<br/><br/>

Last name, first name, patronymic;<br/>
Email;<br/>
Other information specified by the subject of personal data on the Website.<br/>
The data that is automatically transmitted to the Operator during the visit and use of the Site using the software installed on the User's device is also processed, including: IP address, information from cookies, information about the user's browser (or other program that accesses the site), access time, the address of the requested page, and others.<br/><br/>


The Operator may also process other personal data that is directly necessary to fulfill the purposes of personal data processing.<br/><br/>


2. Consent to the processing of personal data is provided by the User in one of the following ways:<br/><br/>

a) by filling out the feedback form on the Website;<br/>

c) by accepting the User Agreement and for the purposes of its execution.<br/><br/>


3. Consent is given to the processing of personal data that are not special or biometric.<br/><br/>


4. Personal data is not publicly available.<br/><br/>


5. The Operator processes personal data for the following purposes:<br/><br/>

5.1. for the execution of the contract, the party to which is either the beneficiary or the guarantor, according to which is the subject of personal data;<br/>

5.2. to conclude a contract on the initiative of the personal data subject or a contract under which the personal data subject will be the beneficiary or guarantor;<br/>

5.3. to achieve the goals stipulated by an international agreement of the Russian Federation or a law, to perform and fulfill the functions, powers and duties assigned to the Operator by the legislation of the Russian Federation.<br/><br/>


6. The Operator's actions for processing personal data include collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion and destruction.<br/><br/>


7. The legal grounds for processing the User's personal data, as well as other issues related to the processing of personal data by the Operator, are reflected in the document entitled Personal Data Processing Policy (hereinafter referred to as the Policy), located on the Operator's Website at: https://steampay.com/privacy, with which the User has read and with the provisions of which he agrees in full. Thus, the User's consent to the processing of personal data is specific, informed and conscious.<br/><br/>


8. The Operator processes and stores personal data until the operator achieves the goals of personal data processing or until it is no longer necessary to achieve these goals.<br/><br/>


9. The processing of personal data may be terminated at the request of the User or his representative in the manner specified in the Policy. The storage of personal data recorded on paper is carried out in accordance with Federal Law No. 125-FZ On Archival Affairs in the Russian Federation and other regulatory legal acts in the field of archival affairs and archival storage.<br/><br/>


10. If the User or his representative withdraws consent to the processing of personal data, the Operator has the right to continue processing personal data without the User's consent if there are grounds specified in paragraph 2, Part 1 of Article 6, Part 2 of Article 10 and Part 2 of Article 11 of Federal Law No. 152-FZ on Personal Data of 27.07.2006.<br/><br/>


11. This consent is an integral part of the Policy and User Agreement.</h4>
            </Col>
                    </Col>
                </Row>
            </Content>
            }
            {isMobile &&
            <Content>
                <Col style={{position: 'relative'}}>
                    <img width="100%" src={aboutus}/>
                </Col>
            </Content>
            }
            {isMobile &&
            <Content>
                <Row style={{fontSize: 25, paddingTop: 10, }}>
                    <Col span={20} offset={2}>
                    <Col span={20}>
                        <h1 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, paddingBottom: 10, color: '#FFFFFF'}}>Персональные данные</h1>
                    </Col>
            <Col span={20}>
            <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>Consent to the processing of personal data</h4>

Acting freely, of his own free will and in his own interest, the subject of personal data (hereinafter referred to as the User) confirms his legal capacity and gives his consent to the Site Administration (hereinafter referred to as the Operator) to process his personal data with the following conditions:<br/><br/>


1. Consent to the processing of personal data is provided by the User through registration on the website steampay.com (hereinafter also the Website). The Operator processes the following personal data of the User:<br/><br/>

Last name, first name, patronymic;<br/>
Email;<br/>
Other information specified by the subject of personal data on the Website.<br/>
The data that is automatically transmitted to the Operator during the visit and use of the Site using the software installed on the User's device is also processed, including: IP address, information from cookies, information about the user's browser (or other program that accesses the site), access time, the address of the requested page, and others.<br/><br/>


The Operator may also process other personal data that is directly necessary to fulfill the purposes of personal data processing.<br/><br/>


2. Consent to the processing of personal data is provided by the User in one of the following ways:<br/><br/>

a) by filling out the feedback form on the Website;<br/>

c) by accepting the User Agreement and for the purposes of its execution.<br/><br/>


3. Consent is given to the processing of personal data that are not special or biometric.<br/><br/>


4. Personal data is not publicly available.<br/><br/>


5. The Operator processes personal data for the following purposes:<br/><br/>

5.1. for the execution of the contract, the party to which is either the beneficiary or the guarantor, according to which is the subject of personal data;<br/>

5.2. to conclude a contract on the initiative of the personal data subject or a contract under which the personal data subject will be the beneficiary or guarantor;<br/>

5.3. to achieve the goals stipulated by an international agreement of the Russian Federation or a law, to perform and fulfill the functions, powers and duties assigned to the Operator by the legislation of the Russian Federation.<br/><br/>


6. The Operator's actions for processing personal data include collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion and destruction.<br/><br/>


7. The legal grounds for processing the User's personal data, as well as other issues related to the processing of personal data by the Operator, are reflected in the document entitled Personal Data Processing Policy (hereinafter referred to as the Policy), located on the Operator's Website at: https://steampay.com/privacy, with which the User has read and with the provisions of which he agrees in full. Thus, the User's consent to the processing of personal data is specific, informed and conscious.<br/><br/>


8. The Operator processes and stores personal data until the operator achieves the goals of personal data processing or until it is no longer necessary to achieve these goals.<br/><br/>


9. The processing of personal data may be terminated at the request of the User or his representative in the manner specified in the Policy. The storage of personal data recorded on paper is carried out in accordance with Federal Law No. 125-FZ On Archival Affairs in the Russian Federation and other regulatory legal acts in the field of archival affairs and archival storage.<br/><br/>


10. If the User or his representative withdraws consent to the processing of personal data, the Operator has the right to continue processing personal data without the User's consent if there are grounds specified in paragraph 2, Part 1 of Article 6, Part 2 of Article 10 and Part 2 of Article 11 of Federal Law No. 152-FZ on Personal Data of 27.07.2006.<br/><br/>


11. This consent is an integral part of the Policy and User Agreement.

</h4>
            </Col>
                    </Col>
                </Row>
            </Content>
            }
            {isDesktopOrLaptop &&
            <FooterComputer/>
            }
            {isMobile &&
            <FooterMobile/>
            }
        </Layout>
    )
}

export default PersonalDataPage;