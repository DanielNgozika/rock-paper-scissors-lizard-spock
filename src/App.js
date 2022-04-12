import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Countdown from "./components/Countdown";

function App() {
	const [splashScreenShowing, setSplashScreenShowing] = useState(true);
	const [countdown, setCountdown] = useState(5);
	const [countdownRunning, setCountdownRunning] = useState(false);

	const hideSplashScreen = () =>
		setTimeout(() => {
			setSplashScreenShowing(false);
		}, 5000);

	const handleCountdown = () =>
		setInterval(() => {
			console.log(`---counting---`);
			setCountdown((countdown) => countdown - 1);
		}, 1000);

	useEffect(() => {
		hideSplashScreen();

		return () => {
			clearTimeout(hideSplashScreen);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (countdown === 0) {
			setCountdownRunning(false);
			clearInterval(handleCountdown);
		}

		if (!splashScreenShowing && countdownRunning) {
			handleCountdown();
		}

		return () => {
			clearInterval(handleCountdown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countdown, splashScreenShowing, countdownRunning]);

	useEffect(() => {
		if (!splashScreenShowing) {
			setCountdownRunning(true);
		}
	}, [splashScreenShowing]);

	return (
		<div>
			{splashScreenShowing && <SplashScreen />}
			{countdownRunning && <Countdown timer={countdown} />}
		</div>
	);
}

export default App;
