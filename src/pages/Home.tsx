
import MainContainer from "../components/common/MainContainer"
import VibrationButton from "../components/common/sample vibrate button/VibrationButton"
import { handleVibrate } from "../utils/VibrationFunction"

const Home = () => {

  const handleVibration = () => {
    if(navigator.vibrate) {
      navigator.vibrate(1000)
    } else {
      alert('not working')
    }
  }

  return (
    <>
    <MainContainer>
        <VibrationButton label="click to vibrate" onClick={handleVibrate}></VibrationButton>
        <button onClick={handleVibration}> try </button>
      </MainContainer>
    </>
  )
}

export default Home
