import React, { Component } from 'react';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <input type="text" className="form-control" placeholder="Search for Employees" id="employee-search" />
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;