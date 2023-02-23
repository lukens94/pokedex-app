import style from './Button.module.scss';
import { IButtonProps } from './Button.props';

export const Button = (props: IButtonProps) => {
  const { text, color = 'green', handleClick } = props;

  return (
    <button className={`${style['Button']} ${style[`Button--${color}`]}`} onClick={handleClick}>
      {text}
    </button>
  );
};
