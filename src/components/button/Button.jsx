import "./style/Button.css";

function Button({ text, action }) {
  try {
    return (
      <>
        <div className="button" onClick={action}>
          {text}
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Button;
