import { handleOpenMap1, handleOpenMap2, handleOpenMap3 } from '../hooks/OpenLoc'

const Button = () => {
  return (
    <>
      <div>
        <button onClick={handleOpenMap1}>open1</button>
        <button onClick={handleOpenMap2}>open2</button>
        <button onClick={handleOpenMap3}>open3</button>
      </div>
    </>
  )
}

export default Button
