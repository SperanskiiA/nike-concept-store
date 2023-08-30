const Button = ({ label, iconUrl, outlined, fullWidth }) => {
    return (
        <button
            className={`flex items-center px-5 py-3 justify-center rounded-2xl gap-2 leading-none text-lg  font-montserrat ${
                outlined
                    ? 'bg-transparent border-slate-gray text-slate-gray border-2'
                    : 'border-coral-red bg-coral-red text-white'
            } ${fullWidth && 'w-full'}`}
        >
            {label && <span className="align-center">{label}</span>}
            {iconUrl && (
                <img className="ml-2 rounded-full w-5 h-5" src={iconUrl} />
            )}
        </button>
    )
}

export default Button
