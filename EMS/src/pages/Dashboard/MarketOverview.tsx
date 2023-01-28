import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import OverviewCharts from "./OverviewCharts";

const MarketOverview = () => {
  return (
    <React.Fragment>
      <Col xl={8}>
        <Card>
          <CardBody>
            <div className="d-flex flex-wrap align-items-center mb-4">
              <h5 className="card-title me-2">Exam Overview</h5>
              <div className="ms-auto">
                <div>
                  <button type="button" className="btn btn-soft-primary btn-sm">
                    ALL
                  </button>
                  <button
                    type="button"
                    className="btn btn-soft-secondary btn-sm"
                  >
                    1M
                  </button>
                  <button
                    type="button"
                    className="btn btn-soft-secondary btn-sm"
                  >
                    6M
                  </button>
                  <button
                    type="button"
                    className="btn btn-soft-secondary btn-sm active"
                  >
                    1Y
                  </button>
                </div>
              </div>
            </div>

            <Row className="align-items-center">
              <Col xl={8}>
                <div>
                  <div id="market-overview" className="apex-charts">
                    <OverviewCharts />
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className="p-4">
                  <div className="mt-0">
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title rounded-circle bg-soft-light text-dark font-size-16">
                          1
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="font-size-16">Mathematics</span>
                      </div>

                      <div className="flex-shrink-0">
                        <span className="badge rounded-pill badge-soft-success font-size-12 fw-medium">
                          +89.5%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title rounded-circle bg-soft-light text-dark font-size-16">
                          2
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="font-size-16">Physics</span>
                      </div>

                      <div className="flex-shrink-0">
                        <span className="badge rounded-pill badge-soft-success font-size-12 fw-medium">
                          +82.3%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title rounded-circle bg-soft-light text-dark font-size-16">
                          3
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="font-size-16">Chamistry</span>
                      </div>

                      <div className="flex-shrink-0">
                        <span className="badge rounded-pill badge-soft-success font-size-12 fw-medium">
                          +82.3%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <Link to="/invoices-list" className="btn btn-primary w-100">
                      View Details{" "}
                      <i className="mdi mdi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default MarketOverview;
