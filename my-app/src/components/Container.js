import React from "react";
import clsx from 'clsx';

export default function Container(props) {
    const {className, children, ...rest} = props;
    const classes = clsx(className, 'ui-container')
    return <div className={classes} {...rest}>{children}</div>;
}