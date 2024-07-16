
interface ButtonProps {
    label: string
    onClick: (Vibraterror: React.Dispatch<React.SetStateAction<boolean>>) => void;
    ClassName: string
    VibrateError: React.Dispatch<React.SetStateAction<boolean>>
}

const VibrationButton: React.FC<ButtonProps> = ({ label, onClick, ClassName, VibrateError }) => {
  return (
    <>
      <button onClick={() => onClick(VibrateError)} className={ClassName}>{label}</button>
    </>
  )
}

export default VibrationButton
