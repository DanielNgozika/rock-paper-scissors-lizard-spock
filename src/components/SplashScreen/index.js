import React from "react";
import Logo from "../../assests/logo.jpg";
import styles from "./style.module.css";

const SplashScreen = () => {
	return (
		<div className={styles.splashScreen}>
			<img src={Logo} alt="logo" />
		</div>
	);
};

export default SplashScreen;
