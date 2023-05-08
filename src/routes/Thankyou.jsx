import MainTitle from "../components/MainTitle";
import { Link } from "react-router-dom";
export default function Thankyou() {
  return (
    <div className="container">
      <MainTitle text="Thank You for Contacting Me!" />
      <Link to="/">
        <button className="publish">Go Back</button>
      </Link>
    </div>
  );
}
