import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";

import background from "../../assets/images/background-login.jpg";
import logoInter from "../../assets/images/Inter-orange.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const handleToSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <Wrapper>
      <Background image={background} />
      <Card width="403px">
        <img src={logoInter} alt="logo inter" />

        <InputContainer>
          <Input placeholder="EMAIL" />
          <Input placeholder="SENHA" type="password" />
        </InputContainer>

        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>
            Entrar
          </Button>
          <p>
            Ainda não é cadastrado? <Link to="/signup">Cadastre-se Já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
}
