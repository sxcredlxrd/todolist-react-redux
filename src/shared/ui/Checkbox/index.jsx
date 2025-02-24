
const Checkbox = ({checked, onChange, className, text, id, disabled}) => {
    return (
        <>
            <input id={id} className={className} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
            <label htmlFor={id} className="peer-checked:line-through text-color-1 font-normal">{text}</label>
        </>
    );
};

export default Checkbox;