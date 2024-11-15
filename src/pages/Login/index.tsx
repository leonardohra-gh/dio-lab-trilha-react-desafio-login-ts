import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { loginSchema } from "./schema";
import { defaultValues, IFormLogin } from "./types";

const Login = () => {

  const {
    control,
    formState: { errors, isValid }
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: defaultValues,
    reValidateMode: "onChange"
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input 
            control={control} 
            name="email" 
            placeholder="Email" 
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input 
            control={control} 
            name="password" 
            placeholder="Senha" 
            type="password"
            errorMessage={errors.password?.message}/>
          <Spacing />
          <Button title="Entrar" formValid={isValid} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
