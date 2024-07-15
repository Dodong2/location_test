//sample Vibration function
export const handleVibrate = () => {
    if (navigator.vibrate) {
        navigator.vibrate(200)
    } else {
        console.log('Vibration API is not supported by this device.')
    }
}