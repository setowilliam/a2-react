import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            employeesModel: [],
            filterString: ""
		}
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        axios.get("https://teams-api.herokuapp.com/employees")
        .then((res) => {
            this.setState({employeesModel: _.cloneDeep(res.data)});
            ReactDOM.render(this.refreshEmployeeRows(res.data), document.getElementById('employees-table'));
        })
        .catch(err => {
            console.log("Unable to get Employees");
        })
    }

    onInputChange(event) {
		let val = event.target.value
		this.setState({filterString: val})
		let filteredEmployees = this.state.employeesModel.filter(employee => {
			let fName = employee.FirstName.toLowerCase().includes(val.toLowerCase())
			let lName = employee.LastName.toLowerCase().includes(val.toLowerCase())
			let pName = employee.Position.PositionName.toLowerCase().includes(val.toLowerCase())
			
			return fName || lName || pName
		})
        ReactDOM.render(this.refreshEmployeeRows(filteredEmployees), document.getElementById('employees-table'))
    }

    refreshEmployeeRows(employees) {
        return (
            <div>

                {employees.map((employee) => {
                    return (
                        <div className="row body-row" data-id={employee._id} key={employee._id} onClick={this.showModal}>
                            <div className="col-xs-4 body-column">
                                {employee.FirstName}
                            </div>
                            <div className="col-xs-4 body-column">
                                {employee.LastName}
                            </div>
                            <div className="col-xs-4 body-column">
                                {employee.Position.PositionName}
                            </div>
                        </div>
                    )
                })}

            </div>  
        )
    }
    
    render() {
        return (
            <div className="container">
                <input type="text" className="form-control" placeholder="Search for Employees" id="employee-search" onChange={this.onInputChange}/>
                <div className="row">
                    <div className="container bootstrap-header-table">
                        <div className="row header-row">
                            <div>
                                <div className="col-xs-4 header-column">First Name</div>
                                <div className="col-xs-4 header-column">Last Name</div>
                                <div className="col-xs-4 header-column">Position</div>
                            </div>
                        </div>
                        <div className="row body-rows" id="employees-table">
                            <div className="loader"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;