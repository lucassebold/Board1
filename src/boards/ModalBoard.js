// import { Formik, Field, Form } from "formik";
import React, { useImperativeHandle, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Checkbox, Form } from "semantic-ui-react";

const initialState = {
  modal: { open: false }
};

const ModalBoard = React.forwardRef((props, ref) => {
  const [state, setState] = useState(initialState);
  const [boardName, setBoardName] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [boardsData, setBoardsData] = useState([]);

  const { modal } = state;
  const show = () => {
    setState((prev) => ({
      ...prev,
      modal: { open: true }
    }));
  };

  const hide = () => {
    setState({ ...initialState });
  };

  const boardNameOnchange = (e) => {
    setBoardName(e.target.value);
  };

  const isFavoriteOnchange = (e) => {
    setIsFavorite(!isFavorite);
  };

  // const createBoard = () => {
  //   const newBoard = [
  //     {
  //       name: boardName,
  //       isFavorite
  //     }

  //   ];
  //   props.setBoardData([...props.boardData, ...newBoard]);
  //   console.log([props.boardData, ...newBoard]);
  // };

  const getBoards = async () => {
    const response = await fetch(`/boards?_sort=id&_order=desc`);
    const data = await response.json();
    setBoardsData(data);
    console.log(boardsData, "esse");
  };
  getBoards();
  const createBoard = async () => {
    const newBoard = [
      {
        name: boardName,
        isFavorite
      }
    ];
    const response = await fetch("/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBoard)
    });

    const data = await response.json();

    props.setBoardData([data, ...boardsData]);
  };

  useImperativeHandle(ref, () => ({ show: show, hide: hide }));

  return (
    <Modal
      show={modal.open}
      onHide={hide}
      className="modal-tabs modal__task modal-zindex"
    >
      <Modal.Body>
        {/* <div>
          <Formik
            initialvalues={{
              name: "",
              isFavorite: 0
            }}
            render={renderFormik}
          />
        </div> */}
        <div>
          <Form className="create-form">
            <Form.Field>
              <label>Nome</label>
              <input
                name="name"
                placeholder="Jane"
                onChange={boardNameOnchange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="checkbox"
                name="isFavorite"
                onChange={isFavoriteOnchange}
              />
            </Form.Field>
            <button onClick={getBoards} type="submit">
              Criar
            </button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
});

export default ModalBoard;
