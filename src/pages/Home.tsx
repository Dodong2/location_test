
import MainContainer from "../components/common/MainContainer"
import VibrationButton from "../components/common/sample vibrate button/VibrationButton"
import { handleVibrate } from "../utils/VibrationFunction"

const Home = () => {

  return (
    <>
    <MainContainer>
        <VibrationButton label="click to vibrate" onClick={handleVibrate}></VibrationButton>
      </MainContainer>
    </>
  )
}

export default Home
