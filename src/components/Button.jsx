
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button
     className={`flex justify-center items-center py-4 border font-montserrat px-7 text-lg leading-none  rounded-full
     ${fullWidth && 'w-full'}
     ${backgroundColor ?`${backgroundColor} ${textColor} ${borderColor}`:
      'bg-coral-red text-white border-coral-red'}`}
    >
        {label}
       { iconURL && <img 
            src={iconURL} 
            alt="arrow right icon" 
            className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button