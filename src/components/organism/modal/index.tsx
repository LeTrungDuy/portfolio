import "./index.scss";

interface IModal {
  open: boolean;
}

const Modal = ({ open }: IModal) => {
  return (
    <div className={`portfolio-modal ${open ? "open" : ""}`}>
      <div className="portfolio-modal__content"></div>
    </div>
  );
};

export default Modal;
