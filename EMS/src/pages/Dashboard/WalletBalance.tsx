import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import WalletPieChart from "./WalletPieChart";

const WalletBalance = () => {
    return (
        <React.Fragment>
            <Col xl={5}>
                <Card className="card-h-100">
                    <CardBody>
                        <div className="d-flex flex-wrap align-items-center mb-4">
                            <h5 className="card-title me-2">Total Exams</h5>
                            <div className="ms-auto">
                                <div>
                                    <button type="button" className="btn btn-soft-secondary btn-sm">
                                        ALL
                                    </button>
                                    <button type="button" className="btn btn-soft-primary btn-sm">
                                        1M
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm">
                                        6M
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm active">
                                        1Y
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Row className="align-items-center">
                            <div className="col-sm">
                                <div id="wallet-balance" className="apex-charts">
                                    <WalletPieChart />
                                </div>
                            </div>
                            <div className="col-sm align-self-center">
                                <div className="mt-4 mt-sm-0">
                                    <div>
                                        <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i> Mathematics</p>
                                        <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i> Physics</p>
                                        <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i> Chemistry</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default WalletBalance;