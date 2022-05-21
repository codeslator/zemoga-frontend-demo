import { FC, MouseEventHandler } from 'react'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  icon?: any;
  text?: string;
  color?: string;
  onClick?: () => void | MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ type, icon, text, color, onClick }) => {
  return (
    <button
      type={type}
      className={`w-full h-10 ${color ? color : ''} flex justify-center items-center lg:py-10`}
      onClick={Boolean(onClick) ? onClick : undefined}
    >
      {Boolean(icon) && (
        <img src={icon} alt={text} className="lg:w-8 lg:h-8" />
      )}
      <span className={text ? 'block' : 'hidden'}>{text}</span>
    </button>
  );
};

export default Button;