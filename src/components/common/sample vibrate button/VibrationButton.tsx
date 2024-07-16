
interface ButtonProps {
    label: string
    onClick: (setVibrationError: React.Dispatch<React.SetStateAction<boolean>>) => void;
    ClassName: string
    setVibrationError: React.Dispatch<React.SetStateAction<boolean>>
}

const VibrationButton: React.FC<ButtonProps> = ({ label, onClick, ClassName, setVibrationError }) => {
  return (
    <>
      <button onClick={() => onClick(setVibrationError)} className={ClassName}>{label}</button>
    </>
  )
}

export default VibrationButton
