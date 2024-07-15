import React from "react"

interface ButtonProps {
    label: string
    onClick: () => void
}

const VibrationButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}

export default VibrationButton
