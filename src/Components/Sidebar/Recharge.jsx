import React from 'react';

const Recharge = () => {
    return (
        <div className='container'>
            <div className="sp_dashboard_tabs sp_margin">
                <div id="walletModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Recharge Wallet</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form method="POST">
                                    <input type="hidden" name="_token" value="4QIsTTLldeyyJ4pqvi1iGUL6kFIPQsG85haWpwof" />
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Amount</label>
                                        <input type="text" className="form-control" name="amount" id="amount" placeholder="Enter Amount" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlForor="message-text" className="col-form-label">Description</label>
                                        <textarea className="form-control" id="description" name="description"></textarea>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="mb-3 btn btn-warning" data-bs-dismiss="modal">Close</button>
                                <input type="submit" className="btn btn-danger mb-3" value="Recharge" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recharge;