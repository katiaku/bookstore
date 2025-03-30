interface FormButtonProps {
    onClick: () => void;
    label: string;
    className?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
    onClick,
    label,
    className,
}) => {
    return (
        <button
            className={`mt-4 rounded-full bg-orange-400 px-4 py-[.6rem] font-semibold text-blue-950 ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default FormButton;
