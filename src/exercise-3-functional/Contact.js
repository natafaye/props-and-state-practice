import React from 'react'

export default function Contact() {
    return (
        <div className="col-md-6 col-xl-3 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">FIRST NAME HERE</h5>
                    <h6 className="card-subtitle text-muted">LAST NAME HERE</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="text-muted">Phone: </span>PHONE HERE
                    </li>
                    <li className="list-group-item">
                        <span className="text-muted">Address: </span>ADDRESS HERE
                    </li>
                    <li className="list-group-item text-end">
                        <button className="btn btn-danger">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
