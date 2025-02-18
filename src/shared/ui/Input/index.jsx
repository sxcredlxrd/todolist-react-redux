
const Input = ({ onChange, className, placeholder, value}) => {
    return (
        <input onChange={onChange} className={className} placeholder={placeholder} value={value}/>
    );
};

export default Input;