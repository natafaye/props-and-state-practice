import React from 'react'
import Contact from './Contact'

export default function ContactList() {
    return (
        <React.Fragment>
            <div className="row mb-3">
                <div className="col text-end">
                    <button className="btn btn-danger btn-lg">Delete All</button>
                </div>
            </div>
            <div className="row">
                CONTACTS HERE
            </div>
        </React.Fragment>
    )
}
