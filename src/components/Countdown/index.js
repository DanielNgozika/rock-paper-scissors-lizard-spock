import React from "react";
import styles from "./style.module.css";

const Countdown = ({ timer }) => {
	return (
		<div className={styles.countdown}>
			<span className={styles.timer}>{timer}</span>
		</div>
	);
};

export default Countdown;
