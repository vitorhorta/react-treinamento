import React, {Component} from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import '../App.css';
class DebugBox extends Component {
    render() {
        if(!this.props.view) return null;
        return (
            <div>
                <Grid>
                    <Row>
                      <Col xs={2} md={2}>
                        <h3>Component</h3>
                        <h4>{this.props.view}</h4>
                      </Col>
                      <Col xs={1} md={1}>
                        <div className="triangle"></div>
                      </Col>
                      <Col xs={2} md={2}>
                         <h3>View Method</h3>
                         <h4>{this.props.viewMethod}</h4>
                       </Col>
                      <Col xs={1} md={1}>
                        <div className="triangle"></div>
                      </Col>
                      <Col xs={2} md={2}>
                         <h3>Action Method</h3>
                         <h4>{this.props.actionMethod}</h4>
                      </Col>
                      <Col xs={1} md={1}>
                        <div className="triangle"></div>
                      </Col>
                      <Col xs={2} md={2}>
                         <h3>Reducer Case</h3>
                         <h4>{this.props.reducerCase}</h4>
                      </Col>
                    </Row>
                  </Grid>

            </div>
        );
    }
}

export default (DebugBox);
