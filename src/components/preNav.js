import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";

const StyledWrapper = styled.div`
  background-color: #0554fe;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    margin: 0.25rem;
  }
`;

const preNav = () => {
  return (
    <StyledWrapper>
      <a href="/login">
        <BsPersonCircle size={20} color="white" />
      </a>
      <a href="/admin">
        <MdAdminPanelSettings size={20} color="white" />
      </a>
    </StyledWrapper>
  );
};
export default preNav;
