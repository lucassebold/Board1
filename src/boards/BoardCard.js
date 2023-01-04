import { useState } from "react";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 15px 50px;
  .board-box {
    display: flex;
    flex-direction: column;
    background-color: rgb(243, 245, 248);
    border-radius: 10px;
  }
  .board-image {
    height: 130px;
    background-color: rgb(31, 116, 255);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .board-information {
    height: 100px;
    .top-items {
      margin-top: 10px;
    }
    .bottom-items {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BoardCard = ({ boardData }) => {
  return (
    <Board>
      {boardData.map((item) => {
        return (
          <div className="board-box">
            <div className="board-image">{item.image}</div>
            <div className="board-information">
              <div className="top-items">
                <span className="board-name">{item.name}</span>
              </div>
              <div className="bottom-items">
                {/* <Icon name={item.iconLeft} color="#333" /> */}
                <MdFavorite className="icon" />
              </div>
            </div>
          </div>
        );
      })}
    </Board>
  );
};

export default BoardCard;
