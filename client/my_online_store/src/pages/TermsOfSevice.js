import React, {useState} from "react";
import {useMediaQuery} from 'react-responsive'
import { Layout, Col, Card,  Input, Button, Row, Space, Image, Select, Rate, message} from 'antd';
import { useHistory } from "react-router-dom";
import { createNewsletterSub } from "../http/deviceAPI";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_US_ROUTE, FAQ_ROUTE, TERMS_OF_SERVICE_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE} from "../utils/consts";
import {  createFromIconfontCN, } from '@ant-design/icons';
import aboutus from "../assets/garden.jpg";
import FooterComputer from "../components/FooterPC";
import FooterMobile from "../components/FooterMobile";
const { Header, Content, Footer } = Layout;

const Terms = () => {
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
                        <h1 style={{paddingTop: 10, fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 50, paddingBottom: 10, color: '#FFFFFF'}}>Соглашения</h1>
                    </Col>
            <Col span={20}>
                <h4 style={{paddingTop:20, fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>Terms and definitions</h4>

Site administration - PLAYSTATION STORE (playstation.com)<br/>
Email: supper-store-samurai@mail.ru<br/><br/>

Acceptance – full and unconditional acceptance of the agreement by the User by performing actions to accept its provisions using the website service (ticking the appropriate box)<br/><br/>

The agreement is a public offer of the Site Administration to conclude a license agreement for the purchase of Goods remotely.<br/><br/>

User - a person who has access to the Site via the Internet. The user can be a fully capable individual.<br/><br/>

Product - licenses (activation keys) of computer games, and other "digital" products, information about which is contained on the Website.<br/><br/>

An order is a User's request to receive a Product, executed in accordance with the requirements of the Site.<br/><br/>

Website – an Internet site located on the Internet at http://playstation.com/<br/><br/>

The parties are the User and the Site Administration.

<br/><br/><br/>

<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>1. SUBJECT OF THE AGREEMENT</h4>

1.1. The Administration of the Site on a reimbursable basis provides the User with the opportunity to use the services of the site to purchase Goods for personal interests.<br/><br/>


1.2. Any information provided on the Website is for reference purposes. To clarify the properties and characteristics of the Product, the User should contact the site Administration.<br/><br/>


1.3. The site administration is not the copyright holder (owner) Of the Goods and carries out only the sale of the Goods.<br/><br/>


1.4. The site Administration may offer a Product that has not yet been put on sale. Such a Product is issued as a pre-order.<br/><br/>

The Website indicates the deadline for the sale of such Goods. The specified period may be changed on the basis of information received from the copyright holder (owner) Product.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>2. THE ORDER OF THE GOODS</h4>

2.1. In order to purchase the Product selected by the User, the User is obliged to use the methods offered on the Website.<br/><br/>

2.2. Delivery of the Goods is carried out immediately after receipt of payment, except in some cases when the user's Order needs additional verification by the Site Administration. The list of reasons why the Order is sent for manual processing is formed by the site Administration.<br/><br/>

2.3. Before ordering the Goods, the User is obliged to familiarize himself with the terms of delivery, payment for the Goods, the characteristics of the Goods, by clicking on the active links on the Website.<br/><br/>

2.4. When placing an Order, the User must specify the email address to which the Goods will be delivered.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>3. PAYMENT FOR THE GOODS</h4>

3.1. The Product is paid for before its transfer to the User in full.<br/><br/>

3.2. Settlements of the Parties take place in a non-cash form by using the software and hardware of the Site through the payment system.<br/><br/>

3.3. The goods can be paid in cash, currency, electronic means of payment, cryptocurrency, as well as in any other way presented on the Website.<br/><br/>

3.4. When making a payment, a commission of a certain payment system (bank, mobile operator, etc.) may be provided. This commission is paid by the User.<br/><br/>

3.5. On the territory of Russia, payments are made through the NGO "ORP".
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>4. RETURN OF THE GOODS</h4>

4.1. The User has the right to refuse to order the Goods until the moment of payment.<br/><br/>

4.2. It is impossible to refuse the Goods after payment, since the license keys have individually defined characteristics and cannot be used after their activation by third parties.<br/><br/>

4.3. If the refund is made due to the inability of the Site Administration to fulfill its obligations, the funds are sent to the WebMoney account, unless another method of refund is provided on the Site or is not determined by the agreement of the Parties.<br/><br/>

4.4. In case of return of the Goods by the User, only the amount of money paid for the Goods will be refunded. Expenses related to commissions of third parties (payment aggregators, agents, banks, intermediaries, etc.) for the transfer and (or) refund of funds may be deducted from this amount.<br/><br/>

4.5. The User agrees that the refund can be carried out by third parties acting on behalf of the Site Administration, while the User is obliged to accept the execution proposed by such a third party.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>5. RIGHTS TO USE THE PRODUCT</h4>

5.1. The rights to use the Product are granted to the User on the basis of a non-exclusive license. The product is not sold, but is provided to the User for use under the conditions defined by this section.<br/><br/>

5.2. Unless otherwise follows from the content of the license, the license is granted for a period established by the manufacturer, licensor or the Site Administration.<br/><br/>

5.3. The User has the right to use the Product only for personal, home, family viewing by reproducing it. Other methods of use are not allowed.<br/><br/>

5.4. The term "sale of Goods" is used in the text of this Agreement solely for convenience, should be understood as the issuance of a limited right to use a license and cannot be regarded as alienation of the exclusive right to the Goods.<br/><br/>

5.5. Unless otherwise follows from the content of the license, the license can be used only on the territory of the Russian Federation, CIS, Ukraine.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>6. RIGHTS AND OBLIGATIONS OF THE PARTIES</h4>

6.1. The Site Administration has the right to assign and/or transfer its rights and obligations arising from its relationship with the User to third parties.<br/><br/>

6.2. The Site Administration may provide discounts and bonuses to the User. Their types, accrual rules and conditions of receipt are indicated on the website in the sections "Bonus", "Promo code" and "Discount".<br/><br/>

6.3. The site administration may change discounts and bonuses, as well as the rules for their accrual and conditions of receipt unilaterally.<br/><br/>

6.4. The User undertakes to use the purchased Goods exclusively for personal, home, family purposes, as well as for purposes not related to the implementation of commercial activities.<br/><br/>

6.5. The site administration is responsible for the operability of the activation key. The publisher or developer is responsible for the technical problems of the game.<br/><br/>

6.6 The Site is provided on an "as is" basis, that is, without guarantees of quality and suitability for any express or implied purposes.
The site administration does not guarantee that the Site will work continuously and error-free. In case of errors and malfunctions, the site Administration undertakes to eliminate them as soon as possible.<br/><br/>

6.7. Neither Party bears any responsibility to the other Party for lost profits or other indirect losses, regardless of whether such a Party could have foreseen the possibility of causing such losses to the other Party in a particular situation or not.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>7. OTHER CONDITIONS</h4>

7.1. If you have any questions, the User has the right to contact the Site Administration through the feedback form on the "Account" page<br/><br/>

7.2. All disputes and disagreements arising between the Parties during the execution of this Agreement are resolved through negotiations.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>8. CONFIDENTIALITY</h4>

8.1. Any personal information transmitted by the Parties to each other is confidential information.<br/><br/>

8.2. The User agrees to the terms, purposes and procedure for processing personal data on the terms of the Personal Data Processing Policy, and also gives his Consent to the processing of personal data
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>9. INTELLECTUAL PROPERTY</h4>

9.1. The exclusive right to the Site belongs to the Site Administration.<br/><br/>

9.2. Exclusive rights to the Goods belong to their copyright holders.<br/><br/>

9.3. The User is obliged to use the Product only for personal non-commercial purposes.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>10. VIOLATION OF THE TERMS OF THE AGREEMENT</h4>

10.1. The Site Administration has the right to terminate and/or block access to the Site without prior notice to the User if the User has violated this Agreement or the terms of use of the Site contained in other documents, as well as in the event of termination of the Site or due to a technical malfunction or problem.<br/><br/>

10.2. The Site Administration is not responsible to the User or third parties for the termination of access to the Site in case of violation by the User of any provision of this Agreement or other document containing the terms of use of the Site.<br/><br/>

10.3. The Administration has the right to cancel purchases and cumulative discount in case of suspicion that the customer is not a consumer and orders goods for the needs related to the implementation of entrepreneurial activity.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>11. COMMENTS</h4>

11.1. It is prohibited to make multiple purchases and wholesale purchases of Goods. The quantity allowed for purchase is determined by the Administration individually for each Product. For non-compliance with this requirement, the user's account will be blocked without warning from the Administration. Without the risk of account blocking, it is possible to purchase only TWO copies of one Product.<br/><br/>

11.2. It is prohibited to insult and express any other disrespect to the Users of the site and the Administration of the site, including its employees and other authorized persons.<br/><br/>

11.3. It is forbidden to discuss the prices of Goods.<br/><br/>

11.4. Links to any other websites and other resources containing similar information are prohibited.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 30, paddingBottom: 10}}>12. FINAL PROVISIONS</h4>

12.1. By entering into this Agreement, the User guarantees that he has full legal capacity and legal capacity, and has the right to enter into this Agreement.<br/><br/>

12.2. In case of disagreements between the Parties, the information that is recorded using the technical means of the Site shall prevail in resolving such disagreements.<br/><br/>

12.3. The Parties undertake to inform each other about any fact of unauthorized disclosure of information to third parties.<br/><br/>

12.5. The current Agreement is posted on the Website page at: http://playstation.com/agreement<br/><br/>

12.6. The integral parts of this Agreement, which the User unconditionally accepts (accepts) at the conclusion of the Agreement are:<br/>

Consent to the processing of personal data posted on the Website at:<br/>
playstation.com/privacy<br/>
Personal Data Processing Policy posted on the website:<br/>
playstation.com/personal-data</h4>
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
                        <h1 style={{fontWeight: 700, fontFamily: 'IBM Plex Mono', fontSize: 30, paddingBottom: 10, color: '#FFFFFF'}}>Соглашения</h1>
                    </Col>
            <Col span={20}>
            <h4 style={{paddingTop:20, fontSize: 14, fontWeight: 700, fontFamily: 'IBM Plex Mono', paddingBottom: 40, color: '#FFFFFF'}}>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>Terms and definitions</h4>

Site administration - PLAYSTATION STORE (playstation.com)<br/>
Email: supper-store-samurai@mail.ru<br/><br/>

Acceptance – full and unconditional acceptance of the agreement by the User by performing actions to accept its provisions using the website service (ticking the appropriate box)<br/><br/>

The agreement is a public offer of the Site Administration to conclude a license agreement for the purchase of Goods remotely.<br/><br/>

User - a person who has access to the Site via the Internet. The user can be a fully capable individual.<br/><br/>

Product - licenses (activation keys) of computer games, and other "digital" products, information about which is contained on the Website.<br/><br/>

An order is a User's request to receive a Product, executed in accordance with the requirements of the Site.<br/><br/>

Website – an Internet site located on the Internet at http://playstation.com/<br/><br/>

The parties are the User and the Site Administration.

<br/><br/><br/>

<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>1. SUBJECT OF THE AGREEMENT</h4>

1.1. The Administration of the Site on a reimbursable basis provides the User with the opportunity to use the services of the site to purchase Goods for personal interests.<br/><br/>


1.2. Any information provided on the Website is for reference purposes. To clarify the properties and characteristics of the Product, the User should contact the site Administration.<br/><br/>


1.3. The site administration is not the copyright holder (owner) Of the Goods and carries out only the sale of the Goods.<br/><br/>


1.4. The site Administration may offer a Product that has not yet been put on sale. Such a Product is issued as a pre-order.<br/><br/>

The Website indicates the deadline for the sale of such Goods. The specified period may be changed on the basis of information received from the copyright holder (owner) Product.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>2. THE ORDER OF THE GOODS</h4>

2.1. In order to purchase the Product selected by the User, the User is obliged to use the methods offered on the Website.<br/><br/>

2.2. Delivery of the Goods is carried out immediately after receipt of payment, except in some cases when the user's Order needs additional verification by the Site Administration. The list of reasons why the Order is sent for manual processing is formed by the site Administration.<br/><br/>

2.3. Before ordering the Goods, the User is obliged to familiarize himself with the terms of delivery, payment for the Goods, the characteristics of the Goods, by clicking on the active links on the Website.<br/><br/>

2.4. When placing an Order, the User must specify the email address to which the Goods will be delivered.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>3. PAYMENT FOR THE GOODS</h4>

3.1. The Product is paid for before its transfer to the User in full.<br/><br/>

3.2. Settlements of the Parties take place in a non-cash form by using the software and hardware of the Site through the payment system.<br/><br/>

3.3. The goods can be paid in cash, currency, electronic means of payment, cryptocurrency, as well as in any other way presented on the Website.<br/><br/>

3.4. When making a payment, a commission of a certain payment system (bank, mobile operator, etc.) may be provided. This commission is paid by the User.<br/><br/>

3.5. On the territory of Russia, payments are made through the NGO "ORP".
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>4. RETURN OF THE GOODS</h4>

4.1. The User has the right to refuse to order the Goods until the moment of payment.<br/><br/>

4.2. It is impossible to refuse the Goods after payment, since the license keys have individually defined characteristics and cannot be used after their activation by third parties.<br/><br/>

4.3. If the refund is made due to the inability of the Site Administration to fulfill its obligations, the funds are sent to the WebMoney account, unless another method of refund is provided on the Site or is not determined by the agreement of the Parties.<br/><br/>

4.4. In case of return of the Goods by the User, only the amount of money paid for the Goods will be refunded. Expenses related to commissions of third parties (payment aggregators, agents, banks, intermediaries, etc.) for the transfer and (or) refund of funds may be deducted from this amount.<br/><br/>

4.5. The User agrees that the refund can be carried out by third parties acting on behalf of the Site Administration, while the User is obliged to accept the execution proposed by such a third party.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>5. RIGHTS TO USE THE PRODUCT</h4>

5.1. The rights to use the Product are granted to the User on the basis of a non-exclusive license. The product is not sold, but is provided to the User for use under the conditions defined by this section.<br/><br/>

5.2. Unless otherwise follows from the content of the license, the license is granted for a period established by the manufacturer, licensor or the Site Administration.<br/><br/>

5.3. The User has the right to use the Product only for personal, home, family viewing by reproducing it. Other methods of use are not allowed.<br/><br/>

5.4. The term "sale of Goods" is used in the text of this Agreement solely for convenience, should be understood as the issuance of a limited right to use a license and cannot be regarded as alienation of the exclusive right to the Goods.<br/><br/>

5.5. Unless otherwise follows from the content of the license, the license can be used only on the territory of the Russian Federation, CIS, Ukraine.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>6. RIGHTS AND OBLIGATIONS OF THE PARTIES</h4>

6.1. The Site Administration has the right to assign and/or transfer its rights and obligations arising from its relationship with the User to third parties.<br/><br/>

6.2. The Site Administration may provide discounts and bonuses to the User. Their types, accrual rules and conditions of receipt are indicated on the website in the sections "Bonus", "Promo code" and "Discount".<br/><br/>

6.3. The site administration may change discounts and bonuses, as well as the rules for their accrual and conditions of receipt unilaterally.<br/><br/>

6.4. The User undertakes to use the purchased Goods exclusively for personal, home, family purposes, as well as for purposes not related to the implementation of commercial activities.<br/><br/>

6.5. The site administration is responsible for the operability of the activation key. The publisher or developer is responsible for the technical problems of the game.<br/><br/>

6.6 The Site is provided on an "as is" basis, that is, without guarantees of quality and suitability for any express or implied purposes.
The site administration does not guarantee that the Site will work continuously and error-free. In case of errors and malfunctions, the site Administration undertakes to eliminate them as soon as possible.<br/><br/>

6.7. Neither Party bears any responsibility to the other Party for lost profits or other indirect losses, regardless of whether such a Party could have foreseen the possibility of causing such losses to the other Party in a particular situation or not.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>7. OTHER CONDITIONS</h4>

7.1. If you have any questions, the User has the right to contact the Site Administration through the feedback form on the "Account" page<br/><br/>

7.2. All disputes and disagreements arising between the Parties during the execution of this Agreement are resolved through negotiations.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>8. CONFIDENTIALITY</h4>

8.1. Any personal information transmitted by the Parties to each other is confidential information.<br/><br/>

8.2. The User agrees to the terms, purposes and procedure for processing personal data on the terms of the Personal Data Processing Policy, and also gives his Consent to the processing of personal data
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>9. INTELLECTUAL PROPERTY</h4>

9.1. The exclusive right to the Site belongs to the Site Administration.<br/><br/>

9.2. Exclusive rights to the Goods belong to their copyright holders.<br/><br/>

9.3. The User is obliged to use the Product only for personal non-commercial purposes.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>10. VIOLATION OF THE TERMS OF THE AGREEMENT</h4>

10.1. The Site Administration has the right to terminate and/or block access to the Site without prior notice to the User if the User has violated this Agreement or the terms of use of the Site contained in other documents, as well as in the event of termination of the Site or due to a technical malfunction or problem.<br/><br/>

10.2. The Site Administration is not responsible to the User or third parties for the termination of access to the Site in case of violation by the User of any provision of this Agreement or other document containing the terms of use of the Site.<br/><br/>

10.3. The Administration has the right to cancel purchases and cumulative discount in case of suspicion that the customer is not a consumer and orders goods for the needs related to the implementation of entrepreneurial activity.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>11. COMMENTS</h4>

11.1. It is prohibited to make multiple purchases and wholesale purchases of Goods. The quantity allowed for purchase is determined by the Administration individually for each Product. For non-compliance with this requirement, the user's account will be blocked without warning from the Administration. Without the risk of account blocking, it is possible to purchase only TWO copies of one Product.<br/><br/>

11.2. It is prohibited to insult and express any other disrespect to the Users of the site and the Administration of the site, including its employees and other authorized persons.<br/><br/>

11.3. It is forbidden to discuss the prices of Goods.<br/><br/>

11.4. Links to any other websites and other resources containing similar information are prohibited.
<br/><br/><br/>
<h4 style={{fontWeight: 700, color: '#FFFFFF', fontSize: 20, paddingBottom: 10}}>12. FINAL PROVISIONS</h4>

12.1. By entering into this Agreement, the User guarantees that he has full legal capacity and legal capacity, and has the right to enter into this Agreement.<br/><br/>

12.2. In case of disagreements between the Parties, the information that is recorded using the technical means of the Site shall prevail in resolving such disagreements.<br/><br/>

12.3. The Parties undertake to inform each other about any fact of unauthorized disclosure of information to third parties.<br/><br/>

12.5. The current Agreement is posted on the Website page at: http://playstation.com/agreement<br/><br/>

12.6. The integral parts of this Agreement, which the User unconditionally accepts (accepts) at the conclusion of the Agreement are:<br/>

Consent to the processing of personal data posted on the Website at:<br/>
playstation.com/privacy<br/>
Personal Data Processing Policy posted on the website:<br/>
playstation.com/personal-data</h4>
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

export default Terms;