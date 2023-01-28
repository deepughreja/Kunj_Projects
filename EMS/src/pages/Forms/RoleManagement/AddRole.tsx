import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    FormGroup,
    Label,
    Input,
    Button,
    Container
} from 'reactstrap';
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { AvForm, AvField } from "availity-reactstrap-validation"

const AddRole = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Forms" breadcrumbItem="Insert Role Record" />
                <Col xl={11}>
                    <Card>
                        {/* <CardHeader>
                        <h4 className="card-title">React Validation - Normal</h4>
                        <p className="card-title-desc"></p>
                    </CardHeader> */}
                        <CardBody>
                            <AvForm className="needs-validation">
                                <Row>
                                    <Col md="4">
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom02">Category</Label>
                                            <select className="form-select">
                                                <option>Select Category</option>
                                                <option>Technical</option>
                                                <option>Non Technical</option>
                                                <option>Departmental</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom02">Role</Label>
                                            <AvField
                                                name="role"
                                                placeholder="Enter Role"
                                                type="text"
                                                errorMessage="Enter Role"
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom02"
                                            />
                                        </FormGroup>
                                    </Col>


                                </Row>
                                <Row>
                                    <Col md="4">
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom03">Vacancy</Label>
                                            <AvField
                                                name="examType"
                                                placeholder="Exam Type"
                                                type="text"
                                                errorMessage="Please provide a valid exam type."
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom03"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <br />
                                <Button color="primary" type="submit">
                                    Add Role
                                </Button>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        </React.Fragment>
    );
}

export default AddRole;