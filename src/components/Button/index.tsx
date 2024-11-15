import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, formValid, onClick }: IButtonProps) => {
  return <ButtonContainer disabled={!formValid} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
