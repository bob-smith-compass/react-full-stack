import React from 'react'

export default function Fragment(props) {
    return (
        <React.Fragment>
            <h3>Fragment</h3>
            <select name="" id="">
                <option value="A">{props.name}</option>
                <option value="B">B</option>
            </select>
        </React.Fragment>
    )
}
