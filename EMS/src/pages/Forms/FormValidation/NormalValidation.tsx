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
    Button
} from 'reactstrap';

import { AvForm, AvField } from "availity-reactstrap-validation"

const NormalValidation = () => {
    return (
        <React.Fragment>
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
                                        <Label htmlFor="validationCustom01">Category</Label>
                                        {/* <AvField
                                            name="category"
                                            placeholder="Enter Category"
                                            type="text"
                                            errorMessage="Enter Category"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom01"
                                        /> */}

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
                                        <select className="form-select">
                                            <option>Select Role</option>
                                            <option>HR</option>
                                            <option>Marketing</option>
                                            <option>Clark</option>
                                            <option>Agreeculture</option>
                                            <option>Finence</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom03">City</Label>
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
                            <Row>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom01">Medium</Label>
                                        <AvField
                                            name="medium"
                                            placeholder="Enter Medium"
                                            type="text"
                                            errorMessage="Enter Medium"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom01"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom02">Exam Number</Label>
                                        <AvField
                                            name="examNumber"
                                            placeholder="Exam Number"
                                            type="text"
                                            errorMessage="Enter Exam Number"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom02"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom03">Priority Number</Label>
                                        <AvField
                                            name="priorityNumber"
                                            placeholder="Enter Priority Number"
                                            type="text"
                                            errorMessage=" Please provide a valid Priority Number."
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom03"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom01">Advertisement Number</Label>
                                        <AvField
                                            name="advertisementNumber"
                                            placeholder="Advertisement Number"
                                            type="text"
                                            errorMessage="Enter Advertisement Number"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom01"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom02">Advertisement Year</Label>
                                        <AvField
                                            name="advertisementYear"
                                            placeholder="Advertisement Year"
                                            type="text"
                                            errorMessage="Enter Advertisement Year"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom02"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom03">Vacancy</Label>
                                        <AvField
                                            name="vacancy"
                                            placeholder="Enter Vacancy"
                                            type="text"
                                            errorMessage=" Please provide a valid Vacancy."
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom03"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom01">Number of registrations(Part 1)</Label>
                                        <AvField
                                            name="reg1"
                                            placeholder="Enter Number of registrations(Part 1)"
                                            type="text"
                                            errorMessage="Enter Number of registrations(Part 1)"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom01"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom02">Number of registrations(Part 2)</Label>
                                        <AvField
                                            name="reg2"
                                            placeholder="Number of registrations(Part 2)"
                                            type="text"
                                            errorMessage="Enter Number of registrations(Part 1)"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom02"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom03">Exam Date</Label>
                                        <AvField
                                            name="examDate"
                                            placeholder="Enter Exam Date"
                                            type="text"
                                            errorMessage=" Please provide a valid Exam Date."
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom03"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>

                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom04">Total Marks(Part 1)</Label>
                                        <AvField
                                            name="state"
                                            placeholder="Enter Total Marks(Part 1)"
                                            type="text"
                                            errorMessage="Please provide a valid Total Marks(Part 1)"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom04"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom05">Total Marks(Part 2)</Label>
                                        <AvField
                                            name="zip"
                                            placeholder="Enter Total Marks(Part 2)"
                                            type="text"
                                            errorMessage=" Please provide a Total Marks(Part 2)"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom05"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom01">Exam Paper</Label>
                                        <AvField
                                            name="reg1"
                                            placeholder="Enter Exam Paper Number"
                                            type="text"
                                            errorMessage="Enter Exam Paper"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom01"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom02">Appeared Number</Label>
                                        <AvField
                                            name="reg2"
                                            placeholder="Enter Appeared Number"
                                            type="text"
                                            errorMessage="Enter Appeared Number"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom02"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom03">KYC Completed?</Label>
                                        <AvField
                                            name="examDate"
                                            placeholder="Is KYC Completed"
                                            type="text"
                                            errorMessage=" Is KYC Completed"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom03"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Label htmlFor="validationCustom03">Rearks</Label>
                                    <textarea
                                        placeholder='Enter Remarks'
                                        id="basicpill-address-input"
                                        className="form-control"
                                        rows={4}
                                    ></textarea>
                                </Col>


                                <Col md="6">
                                    <Label htmlFor="validationCustom03">Chairman Remarks</Label>
                                    <textarea
                                        id="basicpill-address-input"
                                        placeholder='Enter Remarks'
                                        className="form-control"
                                        rows={4}
                                    ></textarea>
                                </Col>
                            </Row>
                            <br />
                            <Button color="primary" type="submit">
                                Create Exam
                            </Button>
                        </AvForm>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default NormalValidation;