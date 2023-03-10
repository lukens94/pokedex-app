import style from './InputText.module.scss';
import { InputTextProps } from './InputText.props';

export const InputText = (props: InputTextProps) => {
  const { label, placeholder } = props;

  return (
    <div>
      {!!label && <label htmlFor="inputSearch">{label}</label>}
      <input
        type="text"
        className={style.InputText}
        id="inputSearch"
        name="inputSearch"
        placeholder={placeholder}
      />
    </div>
  );
};
