import error_sticker from "../icons/error_sticker.png";
import { Link, useLocation } from "react-router-dom";

export default function Error() {
  const { state: errMessage } = useLocation();

  return (
    <div className="column">
      <h1 className="error">{errMessage}</h1>
      <img src={error_sticker} alt="error" className="error__img" />
      <Link to="/" className="button">
        Go back
      </Link>
    </div>
  );
}
