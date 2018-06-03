import React, { Component } from 'react';

class RefreshEmployeeRows extends Component {

    render() {
        return (
            <div>

                {this.props.employees.map((employee) => {
                    return (
                        <div className="row body-row" data-id={employee._id} key={employee._id}>
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
}

export default RefreshEmployeeRows;