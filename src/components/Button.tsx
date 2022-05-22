import { FC, MouseEventHandler } from 'react'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  icon?: any;
  text?: string;
  color?: string;
  onClick?: () => void | MouseEventHandler;
  fullWidth?: boolean;
  classes?: string;
  iconClasses?: string;
}

const Button: FC<ButtonProps> = ({ type, icon, text, color, onClick, fullWidth, classes, iconClasses }) => {
  return (
    <button
      type={type}
      className={`${fullWidth && 'w-full'} min-h-10 ${color && color} flex justify-center items-center ${classes && classes}`}
      onClick={Boolean(onClick) ? onClick : undefined}
    >
      {Boolean(icon) && (
        <img src={icon} alt={text} className={iconClasses} />
      )}
      <span className={`${text ? 'block' : 'hidden'} flex`}>{text}</span>
    </button>
  );
};

export default Button;