import * as React from 'react';
import {
    Button as MButton,
    ButtonProps
} from '@material-ui/core';


const Button:React.FC<ButtonProps> = (props) => {
    const {children, ...restProps} = props;
    return (
        <MButton
            {...restProps}
        >
            {children}
        </MButton>
    )
}

export default Button;