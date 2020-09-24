// Input.js
import React from "react";
import clsx from "clsx"

export default function Input(props) {
const {className, type='text', ...rest} = props
const classes = clsx(className, 'ui-textfield')
return <input className={classes} type={type} {...rest} />;
}