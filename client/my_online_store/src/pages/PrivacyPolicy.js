import React, {useState} from "react";
import {useMediaQuery} from 'react-responsive'
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { useHistory } from "react-router-dom";
import { createNewsletterSub } from "../http/deviceAPI";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import { UserOutlined, InstagramOutlined, createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';
import aboutus from "../assets/castel.jpg";
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
const { Header, Content, Footer } = Layout;

const PrivacyPolicyPage = () => {
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
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 50, paddingBottom: 10, color: '#FFFFFF'}}>Политика конфиденциальности</h1>
                    </Col>
            <Col span={20}>
                <h4 style={{paddingTop:20, fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>1. General provisions</h4>

1.1 This Personal Data Processing Policy (hereinafter referred to as the Policy) is aimed at protecting the rights and freedoms of individuals whose personal data is processed by the Site Administration (hereinafter referred to as the Operator).<br/><br/>


1.2 The Policy has been developed in accordance with Clause 2, Part 1, Article 18.1 of Federal Law No. 152-FZ of 27.07.2006 "On Personal Data" (hereinafter — the Federal Law "On Personal Data").<br/><br/>


1.3 The Policy contains information subject to disclosure in accordance with Part 1 of Article 14 of the Federal Law "On Personal Data" and is a publicly available document posted on the Operator's website - https://playstation.com/privacy<br/><br/>


1.4 Operator's contact details:<br/><br/>

- Email address: supper-store-samurai@mail.ru<br/>

- Website address: playstation.com<br/>


1.5 This Policy applies to all information posted on the website at playstation.com (hereinafter referred to as the Website), information about the User, as well as in relation to the personal data of the Operator's employees, its contractors and other subjects of personal data, information about which is processed by the Operator.<br/><br/>


1.6 Any use of the Site means the User's unconditional Consent to this Policy and the terms of processing of his personal data specified therein.<br/><br/>


In case of disagreement with these terms, the User must refrain from using the Site and in no case provide the Operator with his personal data.

<br/><br/><br/>

<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>2. Terms and definitions used</h4>

2.1 personal data - any information relating directly or indirectly to a specific or identifiable individual (subject of personal data);<br/><br/>

2.2 operator - an individual who independently or jointly with other persons organizes and (or) performs the processing of personal data, as well as determines the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data;<br/><br/>


2.3 personal data processing - any action (operation) or set of actions (operations) performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data;<br/><br/>


2.4 provision of personal data - actions aimed at disclosure of personal data to a certain person or a certain circle of persons;<br/><br/>


2.5 destruction of personal data - actions as a result of which it becomes impossible to restore the content of personal data in the personal data information system and (or) as a result of which the material carriers of personal data are destroyed;<br/><br/>


2.6 blocking of personal data - temporary termination of processing of personal data (except in cases where processing is necessary to clarify personal data);<br/><br/>


2.7. user – any individual who is on the Site and performs any actions on it, including purchasing goods or receiving services, filling out a feedback form or otherwise entering into a relationship with the Operator (e-mail, etc.). The User is the subject of personal data.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>3. Purposes of personal data processing</h4>

3.1 The Operator processes personal data for the following purposes:<br/><br/>


3.1.1 for the performance of the contract, the party to which is either the beneficiary or the guarantor, according to which is the subject of personal data;<br/><br/>


3.1.2 to conclude a contract on the initiative of the personal data subject or a contract under which the personal data subject will be the beneficiary or guarantor;<br/><br/>


3.1.3 to achieve the goals stipulated by an international agreement of the Russian Federation or a law, to perform and fulfill the functions, powers and duties assigned to the Operator by the legislation of the Russian Federation.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>4. Legal basis of personal data processing</h4>

4.1 The legal basis for the processing of personal data is:<br/><br/>


4.1.1 The legislation of the Russian Federation in the field of personal data based on the Constitution of the Russian Federation and international treaties of the Russian Federation and consisting of the Federal Law "On Personal Data" and other federal laws defining the cases and features of personal data processing;<br/><br/>


4.1.2 Consent to the processing of personal data, which the User provides by accepting this Policy or signing it in writing when concluding contracts with the Operator;<br/><br/>


4.1.3 This Policy;<br/><br/>


4.1.4. The User Agreement of the Site.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>5. Categories of personal data subjects and composition of personal data</h4>

5.1 The categories of personal data subjects whose personal data are processed by the Operator include:<br/><br/>

5.1.1 individuals who are in labor and civil relations with the Operator;<br/><br/>


5.1.2 individuals who are in labor and civil relations with the Operator's counterparties;<br/><br/>


5.1.3 personal data subjects who purchase goods or receive services on the Website.<br/><br/>


5.2 For all categories of personal data subjects, personal data is processed by the Operator within the framework of legal relations with the Operator regulated by the Civil Code of the Russian Federation and the Labor Code of the Russian Federation<br/><br/>


5.3 For all categories of personal data subjects, personal data is processed by the Operator, with the consent of the personal data subjects provided, either in writing or when performing certain actions on the Site, including ordering a callback and (or) sending a message to the Operator's email address specified in clause 1.6. of the Policy.<br/><br/>


5.4 The Operator processes the following personal data of personal data subjects:<br/><br/>

5.4.1 Surname, first name, patronymic;<br/>

5.4.2 Email;<br/>

5.4.3. Other information specified by the subject of personal data on the Website;<br/>

5.4.4. Data automatically transmitted to the Operator during the visit and use of the Site using the software installed on the User's device, including: IP address, information from cookies, information about the user's browser (or other program that accesses the Site), access time, the address of the requested page and others.<br/><br/>


5.5 The Operator may process other personal data directly necessary to fulfill the purposes of personal data processing and provided by the User.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>6. Terms of processing and storage of personal data</h4>

6.1 The Operator processes and stores personal data until the operator achieves the goals of personal data processing or until it is no longer necessary to achieve these goals.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>7. Information about the processing of personal data</h4>

7.1 The Operator processes personal data on a lawful and fair basis in order to perform the functions, powers and duties assigned by law, exercise the rights and legitimate interests of the Operator, Operator employees and third parties.<br/><br/>


7.2 The Operator receives personal data directly from the subjects of personal data.<br/><br/>


7.3 The Operator processes personal data in automated and non-automated ways, using computer technology and without the use of such means.<br/><br/>


7.4 Personal data processing activities include collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion and destruction.<br/><br/>


7.5 Databases of information containing personal data of citizens of the Russian Federation are located on the territory of the Russian Federation.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>8. Information about the security of personal data</h4>

8.1 The Operator appoints a person responsible for organizing the processing of personal data to perform the duties provided for by the Federal Law "On Personal Data" and the regulatory legal acts adopted in accordance with it.<br/><br/>


8.2 The Operator applies a set of legal, organizational and technical measures to ensure the security of personal data to ensure the confidentiality of personal data and their protection from unlawful actions:<br/><br/>

8.2.1 provides unrestricted access to the Policy, a copy of which is posted on the Website;<br/><br/>

8.2.2 develops local acts in compliance with the Policy;<br/><br/>

8.2.3 familiarizes its employees with the provisions of the legislation on personal data, as well as with the Policy and other local acts that are adopted for its implementation;<br/><br/>


8.2.4 allows employees to access personal data processed in the Operator's information system, as well as to their material carriers only for the performance of work duties;<br/><br/>


8.2.5 establishes rules for access to personal data processed in the Operator's information system, and also ensures registration and accounting of all actions with them;<br/><br/>


8.2.6 assesses the harm that may be caused to personal data subjects in case of violation of the Federal Law "On Personal Data", the ratio of the specified harm and the measures taken by the Operator aimed at ensuring the fulfillment of the obligations provided for by the specified federal law;<br/><br/>


8.2.7 identifies threats to the security of personal data during their processing in the Operator's information system;<br/><br/>


8.2.8 applies organizational and technical measures and uses information protection tools necessary to achieve the established level of personal data security;<br/><br/>


8.2.9 detects the facts of unauthorized access to personal data and takes measures to respond, including the recovery of personal data modified or destroyed as a result of unauthorized access to them;<br/><br/>


8.2.10 assesses the effectiveness of the measures taken to ensure the security of personal data prior to the commissioning of the Operator's information system;<br/><br/>


8.2.11 performs internal control over the compliance of personal data processing with the Federal Law "On Personal Data", regulatory legal acts adopted in accordance with them, personal data protection requirements, Policies and other local acts, including control over the measures taken to ensure the security of personal data and their level of security during processing in the Operator's information system.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>9. Rights of personal data subjects</h4>

9.1 The subject of personal data has the right to:<br/><br/>

9.1.1 to receive personal data related to this subject and information related to their processing;<br/><br/>


9.1.2 to clarify, block or destroy his personal data if they are incomplete, outdated, inaccurate, illegally obtained or are not necessary for the stated purpose of processing;<br/><br/>


9.1.3 to revoke his consent to the processing of personal data;<br/><br/>


9.1.4 to protect their rights and legitimate interests, including compensation for damages and compensation for moral damage in court;<br/><br/>


9.1.5 to appeal the actions or omissions of the Operator to the authorized body for the protection of the rights of personal data subjects or in court.<br/><br/>


9.2 In order to exercise their rights and legitimate interests, personal data subjects have the right to contact the Operator or send a request in person or with the help of a representative, including by e-mail.<br/><br/>


9.3 The request must contain the information specified in Parts 3, 7 of Article 14 of the Federal Law "On Personal Data" and must be sent to the email address specified in clause 1.6. of the Policy.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>10. Final provisions</h4>

10.1. The Operator has the right to make changes to this Policy without the User's consent.<br/><br/>


10.2. The new version of the Policy comes into force from the moment of its publication on the Website, unless otherwise provided by the new version of the Policy.<br/><br/>


10.3. All suggestions or questions regarding this Policy should be sent to the email address specified in clause 1.6. of the Policy.<br/><br/>


10.4. The current Policy is posted on the Website page at: http://playstation.com/privacy<br/><br/>


10.5. An integral part of this Policy is the Consent to the processing of personal data posted on the Website.<br/><br/>


This Policy applies directly and is interrelated with the User Agreement posted on the Site.</h4>
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
                        <h1 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, paddingBottom: 10, color: '#FFFFFF'}}>Политика конфиденциальности</h1>
                    </Col>
            <Col span={20}>
            <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
            <h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>1. General provisions</h4>

1.1 This Personal Data Processing Policy (hereinafter referred to as the Policy) is aimed at protecting the rights and freedoms of individuals whose personal data is processed by the Site Administration (hereinafter referred to as the Operator).<br/><br/>


1.2 The Policy has been developed in accordance with Clause 2, Part 1, Article 18.1 of Federal Law No. 152-FZ of 27.07.2006 "On Personal Data" (hereinafter — the Federal Law "On Personal Data").<br/><br/>


1.3 The Policy contains information subject to disclosure in accordance with Part 1 of Article 14 of the Federal Law "On Personal Data" and is a publicly available document posted on the Operator's website - https://playstation.com/privacy<br/><br/>


1.4 Operator's contact details:<br/><br/>

- Email address: supper-store-samurai@mail.ru<br/>

- Website address: playstation.com<br/>


1.5 This Policy applies to all information posted on the website at playstation.com (hereinafter referred to as the Website), information about the User, as well as in relation to the personal data of the Operator's employees, its contractors and other subjects of personal data, information about which is processed by the Operator.<br/><br/>


1.6 Any use of the Site means the User's unconditional Consent to this Policy and the terms of processing of his personal data specified therein.<br/><br/>


In case of disagreement with these terms, the User must refrain from using the Site and in no case provide the Operator with his personal data.

<br/><br/><br/>

<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>2. Terms and definitions used</h4>

2.1 personal data - any information relating directly or indirectly to a specific or identifiable individual (subject of personal data);<br/><br/>

2.2 operator - an individual who independently or jointly with other persons organizes and (or) performs the processing of personal data, as well as determines the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data;<br/><br/>


2.3 personal data processing - any action (operation) or set of actions (operations) performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data;<br/><br/>


2.4 provision of personal data - actions aimed at disclosure of personal data to a certain person or a certain circle of persons;<br/><br/>


2.5 destruction of personal data - actions as a result of which it becomes impossible to restore the content of personal data in the personal data information system and (or) as a result of which the material carriers of personal data are destroyed;<br/><br/>


2.6 blocking of personal data - temporary termination of processing of personal data (except in cases where processing is necessary to clarify personal data);<br/><br/>


2.7. user – any individual who is on the Site and performs any actions on it, including purchasing goods or receiving services, filling out a feedback form or otherwise entering into a relationship with the Operator (e-mail, etc.). The User is the subject of personal data.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>3. Purposes of personal data processing</h4>

3.1 The Operator processes personal data for the following purposes:<br/><br/>


3.1.1 for the performance of the contract, the party to which is either the beneficiary or the guarantor, according to which is the subject of personal data;<br/><br/>


3.1.2 to conclude a contract on the initiative of the personal data subject or a contract under which the personal data subject will be the beneficiary or guarantor;<br/><br/>


3.1.3 to achieve the goals stipulated by an international agreement of the Russian Federation or a law, to perform and fulfill the functions, powers and duties assigned to the Operator by the legislation of the Russian Federation.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>4. Legal basis of personal data processing</h4>

4.1 The legal basis for the processing of personal data is:<br/><br/>


4.1.1 The legislation of the Russian Federation in the field of personal data based on the Constitution of the Russian Federation and international treaties of the Russian Federation and consisting of the Federal Law "On Personal Data" and other federal laws defining the cases and features of personal data processing;<br/><br/>


4.1.2 Consent to the processing of personal data, which the User provides by accepting this Policy or signing it in writing when concluding contracts with the Operator;<br/><br/>


4.1.3 This Policy;<br/><br/>


4.1.4. The User Agreement of the Site.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>5. Categories of personal data subjects and composition of personal data</h4>

5.1 The categories of personal data subjects whose personal data are processed by the Operator include:<br/><br/>

5.1.1 individuals who are in labor and civil relations with the Operator;<br/><br/>


5.1.2 individuals who are in labor and civil relations with the Operator's counterparties;<br/><br/>


5.1.3 personal data subjects who purchase goods or receive services on the Website.<br/><br/>


5.2 For all categories of personal data subjects, personal data is processed by the Operator within the framework of legal relations with the Operator regulated by the Civil Code of the Russian Federation and the Labor Code of the Russian Federation<br/><br/>


5.3 For all categories of personal data subjects, personal data is processed by the Operator, with the consent of the personal data subjects provided, either in writing or when performing certain actions on the Site, including ordering a callback and (or) sending a message to the Operator's email address specified in clause 1.6. of the Policy.<br/><br/>


5.4 The Operator processes the following personal data of personal data subjects:<br/><br/>

5.4.1 Surname, first name, patronymic;<br/>

5.4.2 Email;<br/>

5.4.3. Other information specified by the subject of personal data on the Website;<br/>

5.4.4. Data automatically transmitted to the Operator during the visit and use of the Site using the software installed on the User's device, including: IP address, information from cookies, information about the user's browser (or other program that accesses the Site), access time, the address of the requested page and others.<br/><br/>


5.5 The Operator may process other personal data directly necessary to fulfill the purposes of personal data processing and provided by the User.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>6. Terms of processing and storage of personal data</h4>

6.1 The Operator processes and stores personal data until the operator achieves the goals of personal data processing or until it is no longer necessary to achieve these goals.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>7. Information about the processing of personal data</h4>

7.1 The Operator processes personal data on a lawful and fair basis in order to perform the functions, powers and duties assigned by law, exercise the rights and legitimate interests of the Operator, Operator employees and third parties.<br/><br/>


7.2 The Operator receives personal data directly from the subjects of personal data.<br/><br/>


7.3 The Operator processes personal data in automated and non-automated ways, using computer technology and without the use of such means.<br/><br/>


7.4 Personal data processing activities include collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion and destruction.<br/><br/>


7.5 Databases of information containing personal data of citizens of the Russian Federation are located on the territory of the Russian Federation.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>8. Information about the security of personal data</h4>

8.1 The Operator appoints a person responsible for organizing the processing of personal data to perform the duties provided for by the Federal Law "On Personal Data" and the regulatory legal acts adopted in accordance with it.<br/><br/>


8.2 The Operator applies a set of legal, organizational and technical measures to ensure the security of personal data to ensure the confidentiality of personal data and their protection from unlawful actions:<br/><br/>

8.2.1 provides unrestricted access to the Policy, a copy of which is posted on the Website;<br/><br/>

8.2.2 develops local acts in compliance with the Policy;<br/><br/>

8.2.3 familiarizes its employees with the provisions of the legislation on personal data, as well as with the Policy and other local acts that are adopted for its implementation;<br/><br/>


8.2.4 allows employees to access personal data processed in the Operator's information system, as well as to their material carriers only for the performance of work duties;<br/><br/>


8.2.5 establishes rules for access to personal data processed in the Operator's information system, and also ensures registration and accounting of all actions with them;<br/><br/>


8.2.6 assesses the harm that may be caused to personal data subjects in case of violation of the Federal Law "On Personal Data", the ratio of the specified harm and the measures taken by the Operator aimed at ensuring the fulfillment of the obligations provided for by the specified federal law;<br/><br/>


8.2.7 identifies threats to the security of personal data during their processing in the Operator's information system;<br/><br/>


8.2.8 applies organizational and technical measures and uses information protection tools necessary to achieve the established level of personal data security;<br/><br/>


8.2.9 detects the facts of unauthorized access to personal data and takes measures to respond, including the recovery of personal data modified or destroyed as a result of unauthorized access to them;<br/><br/>


8.2.10 assesses the effectiveness of the measures taken to ensure the security of personal data prior to the commissioning of the Operator's information system;<br/><br/>


8.2.11 performs internal control over the compliance of personal data processing with the Federal Law "On Personal Data", regulatory legal acts adopted in accordance with them, personal data protection requirements, Policies and other local acts, including control over the measures taken to ensure the security of personal data and their level of security during processing in the Operator's information system.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>9. Rights of personal data subjects</h4>

9.1 The subject of personal data has the right to:<br/><br/>

9.1.1 to receive personal data related to this subject and information related to their processing;<br/><br/>


9.1.2 to clarify, block or destroy his personal data if they are incomplete, outdated, inaccurate, illegally obtained or are not necessary for the stated purpose of processing;<br/><br/>


9.1.3 to revoke his consent to the processing of personal data;<br/><br/>


9.1.4 to protect their rights and legitimate interests, including compensation for damages and compensation for moral damage in court;<br/><br/>


9.1.5 to appeal the actions or omissions of the Operator to the authorized body for the protection of the rights of personal data subjects or in court.<br/><br/>


9.2 In order to exercise their rights and legitimate interests, personal data subjects have the right to contact the Operator or send a request in person or with the help of a representative, including by e-mail.<br/><br/>


9.3 The request must contain the information specified in Parts 3, 7 of Article 14 of the Federal Law "On Personal Data" and must be sent to the email address specified in clause 1.6. of the Policy.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>10. Final provisions</h4>

10.1. The Operator has the right to make changes to this Policy without the User's consent.<br/><br/>


10.2. The new version of the Policy comes into force from the moment of its publication on the Website, unless otherwise provided by the new version of the Policy.<br/><br/>


10.3. All suggestions or questions regarding this Policy should be sent to the email address specified in clause 1.6. of the Policy.<br/><br/>


10.4. The current Policy is posted on the Website page at: http://playstation.com/privacy<br/><br/>


10.5. An integral part of this Policy is the Consent to the processing of personal data posted on the Website.<br/><br/>


This Policy applies directly and is interrelated with the User Agreement posted on the Site.</h4>
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

export default PrivacyPolicyPage;