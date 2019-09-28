import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
class FooterComponent extends Component{
  render(){
    return (
              <div className="footer">
                  <Container>
                    <Row>
                      <Col xs="4"><a href="">About</a></Col>
                      <Col xs="4"><a href="">The Network</a></Col>
                      <Col xs="4"><a href="">Get help</a></Col>
                    </Row>
                    <Row>
                      <Col xs="4"><a href="https://www.scholarsatrisk.org/about/">Mission and History</a></Col>
                      <Col xs="4"><a href="https://www.scholarsatrisk.org/the-network/">Partner Networks</a></Col>
                      <Col xs="4"><a href="https://www.scholarsatrisk.org/get-help/">Application for Assistance</a></Col>
                    </Row>
                    <Row>
                      <Col xs="4"><a href="https://www.scholarsatrisk.org/scholars-at-risk-europe/">Geo-location</a></Col>
                      <Col xs="4"><a href="https://www.scholarsatrisk.org/sar-sections/">SAR Sections</a></Col>
                      <Col xs="4"><a href="https://www.scholarsatrisk.org/scholar-resources/">Ressources</a></Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="12"><p>SAR©2019. All Rights Reserved.</p></Col>
                    </Row>
                  </Container>
                </div>
    )
  }
}
export default FooterComponent;