import React from "react";
import clsx from "clsx"

export default function Link(props) {
    const {children, className, ...rest} = props;
    const classes = clsx (className, 'ui-link')

    return <a className={classes} {...rest}>{children}</a>;
}