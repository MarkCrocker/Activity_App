import React from 'react'
import { Link } from 'react-router-dom';

export default function Buttons() {
    return (
        <div className="post-buttons">
            <Link to="/feed">
            <button className="black-btn large">CANCEL</button>
            </Link>
            <button className="blue-btn large">SUBMIT</button>
        </div>
    )
}
