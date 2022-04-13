import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Countdown from "./components/Countdown";

function App() {
	const [splashScreenShowing, setSplashScreenShowing] = useState(true);
	const [countdown, setCountdown] = useState(5);
	const [countdownRunning, setCountdownRunning] = useState(false);

	// Show the splash screen for 5 seconds
	useEffect(() => {
		const splashScreenTimer = window.setTimeout(() => {
			setSplashScreenShowing(false);
		}, 5000);

		return () => window.clearTimeout(splashScreenTimer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Start the countdown
	useEffect(() => {
		if (splashScreenShowing && !countdownRunning) {
			return;
		}
		const handleCountdown = window.setInterval(() => {
			setCountdown((countdown) => countdown - 1);
		}, 1000);

		if (countdown === 0) {
			setCountdownRunning(false);
			clearInterval(handleCountdown);
		}

		return () => window.clearInterval(handleCountdown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countdown, splashScreenShowing, countdownRunning]);

	// Show the countdown
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
