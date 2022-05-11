import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
        closeButton
      >
        <Modal.Title
          style={{ color: "#4BA4F0", fontWeight: "600" }}
          id="contained-modal-title-vcenter"
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>{props.content}</div>
      </Modal.Body>
      <Modal.Footer>
        {props.button ? (
          <Button
            onClick={props.onHide}
            style={{
              marginBottom: "10px",
              backgroundColor: "#4BA4F0",
              borderRadius: "20px",
              color: "white",
              fontWeight: "600",
            }}
          >
            {props.button}
          </Button>
        ) : (
          ""
        )}
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
