// //sample Vibration function
// export const handleVibrate = () => {
//     if (navigator.vibrate) {
//         navigator.vibrate(1000)
//     } else {
//         console.log('Vibration API is not supported by this device.')
//     }
// }
export const handleVibrate = () => {
    console.log('handleVibration called');
    if (navigator.vibrate) {
      // Vibrate for 200ms
      navigator.vibrate(200);
      console.log('Vibration triggered');
    } else {
      console.log('Vibration API is not supported by this device.');
    }
  };