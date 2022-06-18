import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddEmployeeModal(props) {
    const { toggleModal, onSubmit } = props;
    const [employee, setEmployee] = useState(props.employeeInfo);

    const handleChange = (e) => {
        let { name, value } = e.target;

        const employeeInfo = { ...employee, [name]: value };

        setEmployee(employeeInfo);
    };

    return (
        <Modal show={true} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="employee-name">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="employee-name"
                            name="employee_name"
                            value={employee.employee_name}
                            onChange={handleChange}
                            placeholder="Please enter your name"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="employee-email">Email</Form.Label>
                        <Form.Control
                            type="text"
                            id="employee-email"
                            name="employee_email"
                            value={employee.employee_email}
                            onChange={handleChange}
                            placeholder="Please enter your email"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="employee-document">
                            Document
                        </Form.Label>
                        <Form.Control
                            type="text"
                            id="employee-document"
                            name="employee_document"
                            value={employee.employee_document}
                            onChange={handleChange}
                            placeholder="Please enter your document"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="employee-phone">
                            Phone number
                        </Form.Label>
                        <Form.Control
                            type="text"
                            id="employee-phone"
                            name="employee_phone_number"
                            value={employee.employee_phone_number}
                            onChange={handleChange}
                            placeholder="Please enter your phone number"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => onSubmit(employee)}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
