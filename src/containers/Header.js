import { Header } from "../components";
import * as ROUTES from "../constants/route";
import { UseAuthListener } from "../hooks";
import logo from "../logo.svg";

export default function HeaderContainer({ children, ...restProps }) {
  const auth = UseAuthListener();

  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>
          {auth.user ? "Browse" : "Sign In"}
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
