import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";
import UserCircle from "../UserCircle";
import { useNavigate } from "react-router-dom";

import logoInter from "../../assets/images/Inter-orange.png";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials="ML" />
          <div>
            <p>
              Olá. <span className="primary-color font-bold">Matheus</span>
            </p>
            <strong>22001123-1</strong>
            <br />
            <a href="#" onClick={handleLogout}>
              Sair
            </a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
