import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

type ButtonProps = {};

const buttonStyles = cva();

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> { }

const Button: React.FC<Props> = (props) => {

    let content = (
        <div className={buttonStyles()}></div>
    );

    return content;
};

export default Button;