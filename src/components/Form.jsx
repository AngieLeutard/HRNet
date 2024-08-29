import { useState } from "react";

import "../index.scss"
import states from "../states.json";
import saveEmployee from "../saveEmployee"

function Form() {

    const [data, setData] = useState("");

    return (
        <form className="form_wrapper">
            <label className="form_label" htmlFor="first-name">First Name</label>
            <input className="form_input" type="text" id="first-name" />

            <label className="form_label" htmlFor="last-name">Last Name</label>
            <input className="form_input" type="text" id="last-name" />

            <label className="form_label" htmlFor="date-of-birth">Date of Birth</label>
            <input className="form_input" id="date-of-birth" type="text" ></input>

            <label className="form_label" htmlFor="start-date">Start Date</label>
            <input className="form_input" id="start-date" type="text" ></input>

            <fieldset className="address">
                    <legend className="form_label">Address</legend>

                    <label className="form_label" htmlFor="street">Street</label>
                    <input className="form_input" id="street" type="text" />

                    <label className="form_label" htmlFor="city">City</label>
                    <input className="form_input" id="city" type="text" />

                    <label className="form_label" htmlFor="state">State</label>
                    <select className="form_select" name="state" id="state">
                        {states.map((state) => <option key={state.name} value={state.value} >{state.name}</option>)}
                    </select>

                    <label className="form_label" htmlFor="zip-code">Zip Code</label>
                    <input className="form_input" id="zip-code" type="number" />
            </fieldset>

            <label className="form_label" htmlFor="department">Department</label>
                <select className="form_select" name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            <button type="submit" value="Save" className="form_button" >Save</button>
        </form>
    )
}

export default Form