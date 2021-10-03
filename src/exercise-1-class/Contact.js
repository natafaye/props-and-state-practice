import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-4 offset-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">FIRST NAME HERE</h5>
                            <h6 class="card-subtitle mb-2 text-muted">LAST NAME HERE</h6>
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
            </div>
        )
    }
}
