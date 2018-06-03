import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import RefreshEmployeeRows from './RefreshEmployeeRows';

class InitializeEmployeesModel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeesModel: []
        }
    }

    componentDidMount() {
        axios.get("https://teams-api.herokuapp.com/employees")
        .then((res) => {
            this.setState({employeesModel: _.cloneDeep(res.data)});
            ReactDOM.render(<RefreshEmployeeRows employees={this.state.employeesModel}/>, document.getElementById('employees-table'));
        })
        .catch(err => {
            console.log("Unable to get Employees");
            //showGenericModal("Error", "Unable to get Employees")
        })
    }

    componentWillUnmount() {
        //TODO: destroy employeesModel
    }

    render() {
        return(
            <div></div>
            
        )
    }

}

export default InitializeEmployeesModel;