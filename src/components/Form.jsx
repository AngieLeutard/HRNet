import { useState } from "react";
import { useForm } from "react-hook-form";

import "../index.scss"

function Form() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <form className="form_wrapper" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <label className="form_label" for="first-name">First Name</label>
            <input className="form_input" type="text" id="first-name" />

            <label className="form_label" for="last-name">Last Name</label>
            <input className="form_input" type="text" id="last-name" />

            <label className="form_label" for="date-of-birth">Date of Birth</label>
            <input className="form_input" id="date-of-birth" type="text" ></input>

            <label className="form_label" for="start-date">Start Date</label>
            <input className="form_input" id="start-date" type="text" ></input>

            <fieldset class="address">
                    <legend className="form_label">Address</legend>

                    <label className="form_label" for="street">Street</label>
                    <input className="form_input" id="street" type="text" />

                    <label className="form_label" for="city">City</label>
                    <input className="form_input" id="city" type="text" />

                    <label className="form_label" for="state">State</label>
                    <select className="form_input" name="state" id="state"></select>

                    <label className="form_label" for="zip-code">Zip Code</label>
                    <input className="form_input" id="zip-code" type="number" />
            </fieldset>

            <label className="form_label" for="department">Department</label>
                <select className="form_input" name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            <button className="form_button" onclick="saveEmployee()">Save</button>
        </form>
    )
}

export default Form