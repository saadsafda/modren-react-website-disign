import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { SpecialistAd } from "../../components/specialistAd";
import { TopSection } from "./topSection";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  // totalNumCartItems: selectCartItemsCount(state),
});

export function HomePage(props) {
  const { currentUser } = useSelector(mapState);

  return (
    <PageContainer>
      {currentUser && [
        <>
          {/* <Navbar /> */}
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </>,
      ]}
      {!currentUser && [
        <>
          <TopSection />
          <InnerPageContainer>
            <Marginer direction="vertical" margin="5em" />
            <SpecialistAd />
            <Marginer direction="vertical" margin="5em" />
          </InnerPageContainer>
        </>,
      ]}
    </PageContainer>
  );
}
