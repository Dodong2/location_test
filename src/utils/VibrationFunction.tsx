//sample Vibration function
export const handleVibrate = (setVibrationError: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (navigator.vibrate) {
        navigator.vibrate(200)
        setVibrationError(false)
    } else {
        setVibrationError(true)
    }
}

