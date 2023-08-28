import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input(
    {
        Icon,
        onChange,
        value,
        backgroundColor,
        placeholder,
        height,
        changePlaceHolderColor,
        width,
        required,
        type,
        name,
    },
    ref,
) {
    const customContainerStyle = {
        backgroundColor: backgroundColor,
        height: height,
        width: width,
    };

    const customInputStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <div className={styles.container} style={customContainerStyle}>
            {Icon && Icon}
            <input
                type={type ? type : 'text'}
                required={required}
                placeholder={placeholder}
                value={
                    value !== '/images/coming-soon.png' && value !== '0,00'
                        ? value
                        : ''
                }
                onChange={(e) => onChange(e)}
                style={customInputStyle}
                className={changePlaceHolderColor && styles.inputTag}
                name={name}
                ref={ref && name === 'title' ? ref : null}
            />
        </div>
    );
});

export default Input;
