import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" tabindex="-1" role="dialog" id="genericModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title"></h4>
                        </div>
                        <div className="modal-body"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;