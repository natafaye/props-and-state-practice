import React from 'react'

export default function Contact() {
    return (
        <div className="col-md-6 col-xl-3 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">FIRST NAME HERE</h5>
                    <h6 class="card-subtitle text-muted">LAST NAME HERE</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <span className="text-muted">Phone: </span>PHONE HERE
                    </li>
                    <li class="list-group-item">
                        <span className="text-muted">Address: </span>ADDRESS HERE
                    </li>
                </ul>
            </div>
        </div>
    )
}
