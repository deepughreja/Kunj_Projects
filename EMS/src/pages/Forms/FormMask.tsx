import React from "react";
import MetaTags from "react-meta-tags";
import {
  Row,
  Col,
  Form,
  Label,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

// Form Mask
import InputMask from "react-input-mask";

const FormMask = () => {
  const ISBN1 = (props: any) => (
    <InputMask
      mask="999-99-999-9999-99-9"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const ISBN2 = (props: any) => (
    <InputMask
      mask="999 99 999 9999 99 9"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const ISBN3 = (props: any) => (
    <InputMask
      mask="999/99/999/9999/99/9"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const IPV4 = (props: any) => (
    <InputMask
      mask="999.999.999.999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const IPV6 = (props: any) => (
    <InputMask
      mask="****:****:****:*:***:****:****:****"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const TAX = (props: any) => (
    <InputMask
      mask="99-9999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const Phone = (props: any) => (
    <InputMask
      mask="(999) 999-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const Currency = (props: any) => (
    <InputMask
      mask="$ 999,999,999.99"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const Date1 = (props: any) => (
    <InputMask
      mask="99/99/9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  const Date2 = (props: any) => (
    <InputMask
      mask="99-99-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    ></InputMask>
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Mask | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Form" breadcrumbItem="Form Mask" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Example</CardTitle>
                  <Row>
                    <Col md="6">
                      <div className="p-20">
                        <Form action="#">
                          <div className="mb-4">
                            <Label>ISBN 1</Label>
                            <ISBN1 />
                            <span className="font-13 text-muted">
                              e.g "999-99-999-9999-9"
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>ISBN 2</Label>
                            <ISBN2 />
                            <span className="font-13 text-muted">
                              999 99 999 9999 9
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>ISBN 3</Label>
                            <ISBN3 />
                            <span className="font-13 text-muted">
                              999/99/999/9999/9
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>IPV4</Label>
                            <IPV4 />
                            <span className="font-13 text-muted">
                              192.168.110.310
                            </span>
                          </div>
                          <div className="mb-0">
                            <Label>IPV6</Label>
                            <IPV6 />
                            <span className="font-13 text-muted">
                              4deg:1340:6547:2:540:h8je:ve73:98pd
                            </span>
                          </div>
                        </Form>
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="p-20">
                        <Form action="#">
                          <div className="mb-4">
                            <Label>Tax ID</Label>
                            <TAX />
                            <span className="font-13 text-muted">
                              99-9999999
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>Phone</Label>
                            <Phone />
                            <span className="font-13 text-muted">
                              (999) 999-9999
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>Currency</Label>
                            <Currency />
                            <span className="font-13 text-muted">
                              $ 999,999,999.99
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>Date</Label>
                            <Date1 />
                            <span className="font-13 text-muted">
                              dd/mm/yyyy
                            </span>
                          </div>
                          <div className="mb-0">
                            <Label>Date 2</Label>
                            <Date2 />
                            <span className="font-13 text-muted">
                              dd-mm-yyyy
                            </span>
                          </div>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormMask;
