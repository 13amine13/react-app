import React from "react";
import styles from "../Styles/register.module.css";

const MyInput = (props) => {
  React.useEffect(() => {
    console.log(props);
  });

  return (
    <div>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles.input}
        type={props.type}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={(e) => props.onchange(e)}
      />
    </div>
  );
};

export default MyInput;
