import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../index.scss";
import states from "../states.json";
import initialEmployees from "../employees.json";
import Modal from '../components/Modal'

function Form() {
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem("employees");
        return savedEmployees ? JSON.parse(savedEmployees) : initialEmployees;
    });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(""); 
    const [startDate, setStartDate] = useState(""); 
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState(states[0].value);
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState("Sales");
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !dateOfBirth || !startDate || !street || !city || !zipCode) {
            setErrorMessage("Please fill out all fields.");
            return; 
        }

        const newEmployee = {
            id: uuidv4(),
            firstName,
            lastName,
            dateOfBirth, 
            startDate,   
            street,
            city,
            state,
            zipCode,
            department,
        };

        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);

        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setStartDate("");
        setStreet("");
        setCity("");
        setState(states[0].value);
        setZipCode("");
        setDepartment("Sales");
        setIsModalOpen(true);
        setErrorMessage(""); 
    };

    return (
        <>
            <form className="form_wrapper" onSubmit={handleSubmit}>
                {errorMessage && <p className="error_message">{errorMessage}</p>}
                <label className="form_label" htmlFor="first-name">First Name</label>
                <input
                    className="form_input"
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="form_label" htmlFor="last-name">Last Name</label>
                <input
                    className="form_input"
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label className="form_label" htmlFor="date-of-birth">Date of Birth</label>
                <input
                    className="form_input"
                    type="date"
                    id="date-of-birth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <label className="form_label" htmlFor="start-date">Start Date</label>
                <input
                    className="form_input"
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <fieldset className="address">
                    <legend className="form_label">Address</legend>
                    <label className="form_label" htmlFor="street">Street</label>
                    <input
                        className="form_input"
                        id="street"
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                    <label className="form_label" htmlFor="city">City</label>
                    <input
                        className="form_input"
                        id="city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label className="form_label" htmlFor="state">State</label>
                    <select
                        className="form_select"
                        name="state"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        {states.map((state) => (
                            <option key={state.name} value={state.value}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                    <label className="form_label" htmlFor="zip-code">Zip Code</label>
                    <input
                        className="form_input"
                        id="zip-code"
                        type="number"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </fieldset>
                <label className="form_label" htmlFor="department">Department</label>
                <select
                    className="form_select"
                    name="department"
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                >
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <button type="submit" value="Save" className="form_button">
                    Save
                </button>
            </form>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default Form;
