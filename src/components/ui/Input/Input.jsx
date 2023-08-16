import styles from './Input.module.css';

export default function Input({Icon, onChange, value, backgroundColor, placeholder, height, changePlaceHolderColor, width}) {

  const customContainerStyle = {
    backgroundColor: backgroundColor,
    height: height,
    width: width
  }

  const customInputStyle = {
    backgroundColor: backgroundColor,
  }

  return (
    <div className={styles.container} style={customContainerStyle}>
        {Icon && Icon}
        <input
            type="text"
            required
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            style={customInputStyle}
            className={changePlaceHolderColor && styles.inputTag}
        />
    </div>
  )
}
