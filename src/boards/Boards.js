import { useRef, useState } from "react";
import BoardCard from "./BoardCard";
import HeaderBoards from "./HeaderBoards";
import ModalBoard from "./ModalBoard";
import data from "./data";

const Boards = () => {
  const [boardData, setBoardData] = useState(data);
  let _modalBoard = useRef();

  const openModalCreate = () => {
    _modalBoard.current.show();
  };

  return (
    <div>
      <HeaderBoards openModalCreate={openModalCreate} />
      <BoardCard boardData={boardData} />
      <ModalBoard
        ref={_modalBoard}
        boardData={boardData}
        setBoardData={setBoardData}
      />
    </div>
  );
};

export default Boards;
