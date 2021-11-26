import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import navigationList from "@/config/navigationList";
import Icon from "@/components/Icon";
import { StyledHeader, StyledPCMenu, StyledBurger, StyledMbMenu } from "./style";

const Header = () => {
  const [isMobileMenuShow, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  return (
    <StyledHeader>
      <NavLink to="/">
        <Icon name="logo" width="240px" />
      </NavLink>

      {/* PC Menu */}
      <StyledPCMenu>
        <ul>
          {navigationList.map(route => (
            <li key={`pc-${route.path}`}>
              <NavLink to={route.path} activeClassName="active">
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </StyledPCMenu>

      {/* MB burger */}
      <StyledBurger>
        <Icon
          name="burger"
          width={"40px"}
          height={"40px"}
          clickHandler={() => setMobileMenu(!isMobileMenuShow)}
        />
      </StyledBurger>

      {/* MB Menu */}
      <CSSTransition
        nodeRef={mobileMenuRef}
        in={isMobileMenuShow}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <StyledMbMenu ref={mobileMenuRef}>
          <ul>
            <li className="mb-logo">
              <NavLink to="/" onClick={() => setMobileMenu(!isMobileMenuShow)}>
                <Icon name="logo" width="180px" />
              </NavLink>
              <Icon
                name="close"
                width={"40px"}
                height={"40px"}
                clickHandler={() => setMobileMenu(!isMobileMenuShow)}
              />
            </li>

            {navigationList.map(route => (
              <li key={`mb-${route.path}`}>
                <NavLink
                  to={route.path}
                  activeClassName="active"
                  onClick={() => setMobileMenu(!isMobileMenuShow)}
                >
                  {route.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </StyledMbMenu>
      </CSSTransition>
    </StyledHeader>
  );
};

export default Header;
