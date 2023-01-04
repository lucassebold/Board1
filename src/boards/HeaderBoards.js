import { MdOutlineControlPoint } from "react-icons/md";
import styled from "styled-components";

const Header = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(31, 116, 255);
    cursor: pointer;
    .icon {
      color: #fff;
    }
  }
`;

const HeaderBoards = ({ openModalCreate }) => {
  return (
    <Header>
      <a href="/#" onClick={openModalCreate}>
        <MdOutlineControlPoint className="icon" />
      </a>
    </Header>
  );
};

export default HeaderBoards;
