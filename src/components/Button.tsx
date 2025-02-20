export interface ButtonProps {
    variant: 'primary' | 'secondary';
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
}

const variantStyles = {
    "primary": 'bg-purple-500 text-white hover:bg-purple-600',
    "secondary": 'bg-purple-200 text-purple-600 hover:bg-purple-300'
};

const defaultStyles = 'rounded-md flex font-light items-center';

const sizeStyles = {
    "sm": 'px-2 py-1',
    "md": 'px-4 py-2',
    "lg": 'px-6 py-3'
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size || 'md']}`}
            onClick={props.onClick}
        >
            {props.startIcon} <div className="px-1"></div>{props.text} {props.endIcon}
        </button>
    );
};