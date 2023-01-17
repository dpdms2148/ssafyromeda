import "nes.css/css/nes.min.css";
import "./button.css";

const MyButton = ({ text, type, onClick }) => {
  // btnType은 필요한 종류에 따라서 바꾸면 됨 (+ css 함께 수정)
  const btnType = ["English", "Korean"].includes(type) ? type : "default";
  return (
    <div>
      <div className={["MyButton", `MyButton_${btnType}`].join(" ")}>
        <button type="button" class="nes-btn is-primary" onClick={onClick}>
          {text}
        </button>
      </div>
    </div>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;