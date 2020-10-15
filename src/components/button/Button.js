import React from 'react';

export default function Button(props) {
    return (
        <button type={props.type} className={props.class}>{props.value}</button>
    );

}