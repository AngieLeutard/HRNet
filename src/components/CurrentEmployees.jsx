import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import employees from "../employees.json"


function EmployeeTable () {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const filteredEmployees = employees.filter(employee =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageCount = Math.ceil(filteredEmployees.length / itemsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const displayEmployees = filteredEmployees.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div id="employee-div" className="table_container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search_input"
            />
            <table className="table_wrapper">
                <thead>
                    <tr className="col_wrapper">
                        <th className='col_style' scope="col">First Name</th>
                        <th className='col_style' scope="col">Last Name</th>
                        <th className='col_style' scope="col">Start Date</th>
                        <th className='col_style' scope="col">Department</th>
                        <th className='col_style' scope="col">Date of Birth</th>
                        <th className='col_style' scope="col">Street</th>
                        <th className='col_style' scope="col">City</th>
                        <th className='col_style' scope="col">State</th>
                        <th className='col_style' scope="col">Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {displayEmployees.map((employee, index) => (
                        <tr key={index} className="col_wrapper2">
                            <td className='col_style'>{employee.firstName}</td>
                            <td className='col_style'>{employee.lastName}</td>
                            <td className='col_style'>{employee.startDate}</td>
                            <td className='col_style'>{employee.department}</td>
                            <td className='col_style'>{employee.dateOfBirth}</td>
                            <td className='col_style'>{employee.street}</td>
                            <td className='col_style'>{employee.city}</td>
                            <td className='col_style'>{employee.state}</td>
                            <td className='col_style'>{employee.zipCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default EmployeeTable;