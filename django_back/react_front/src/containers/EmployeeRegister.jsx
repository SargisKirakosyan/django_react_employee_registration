import React, { useEffect, useState } from "react";
import AddEmployeeModal from "../components/AddEmployeeModal";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function EmployeeRegister() {
    const [employeeList, setEmployeeList] = useState([]);
    const [modal, setModal] = useState(false);
    const [employee, setEmployee] = useState({
        employee_name: "",
        email: "",
        employee_document: "",
        employee_phone_number: "",
    });

    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () => {
        axios
            .get("http://localhost:8000/api/employees/")
            .then((res) => setEmployeeList(res.data))
            .catch((err) => console.log(err));
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleSubmit = (employeeInfo) => {
        toggleModal();

        if (employeeInfo.id) {
            axios
                .put(`http://localhost:8000/api/employees/${employeeInfo.id}/`, employeeInfo)
                .then((res) => refreshList());
            return;
        }
        axios
            .post("http://localhost:8000/api/employees/", employeeInfo)
            .then((res) => refreshList());
    };

    const handleDelete = (employeeInfo) => {
        axios
            .delete(`http://localhost:8000/api/employees/${employeeInfo.id}/`)
            .then((res) => refreshList());
    };

    const addEmployee = () => {
        const info = {
            employee_name: "",
            employee_email: "",
            employee_document: "",
            employee_phone_number: "",
        };
        setEmployee(info);
        setModal(!modal);
    };

    const editEmployee = (info) => {
        setEmployee(info);
        setModal(!modal);
    };

    const renderEmployees = () => {
        return employeeList.map((e) => (
            <tr key={uuidv4()}>
                <th key={uuidv4()} scope="row">
                    {e.id}
                </th>
                <td key={uuidv4()}>{e.employee_name}</td>
                <td key={uuidv4()}>{e.employee_email}</td>
                <td key={uuidv4()}>{e.employee_document}</td>
                <td key={uuidv4()}>{e.employee_phone_number}</td>
                <td key={uuidv4()}>{e.employee_registration_date}</td>
                <td key={uuidv4()}>
                    <button
                        key={uuidv4()}
                        className="btn btn-secondary"
                        onClick={() => editEmployee(e)}
                    >
                        Update
                    </button>
                </td>
                <td key={uuidv4()}>
                    <button
                        key={uuidv4()}
                        className="btn btn-danger"
                        onClick={() => handleDelete(e)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <main className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="page-header">Employees</h3>
                        </div>
                        <div className="col-md-4">
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => addEmployee()}
                            >
                                Add Employee
                            </button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Document</th>
                                    <th scope="col">Phone number</th>
                                    <th scope="col">Registration date</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>{renderEmployees()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
            {modal ? (
                <AddEmployeeModal
                    employeeInfo={employee}
                    toggleModal={toggleModal}
                    onSubmit={handleSubmit}
                />
            ) : null}
        </main>
    );
}
