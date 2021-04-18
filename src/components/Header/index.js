import React from "react";
import HeaderMenu from "./HeaderMenu";
import { getPage } from "utils/url";
import { withRouter } from "react-router-dom";
import Icon, { IconNames } from "components/Icons";
import theme from "config/theme";
import {
  Container,
  ContentWrapper,
  HeaderTitle,
  InfoContainer,
  LogOutButton,
} from "./styled";

const Header = ({ location }) => {
  const currentPage = getPage(location.pathname);

  return (
    <Container>
      <ContentWrapper>
        <HeaderTitle>{"REACT"}</HeaderTitle>
        <InfoContainer>
          <HeaderMenu active={currentPage} />
        </InfoContainer>
      </ContentWrapper>
    </Container>
  );
};

export default withRouter(Header);
