import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";

const StyledWrapper = styled.div`
  background: "#0554fe";
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  p {
    margin: 1rem;
  }
`;

const preNav = () => {
  return (
    <StyledWrapper>
      <a href="/login">
        <BsPersonCircle size={15} />
      </a>
      <a href="/admin">
        <MdAdminPanelSettings size={15} />
      </a>
    </StyledWrapper>
  );
};
export default preNav;
