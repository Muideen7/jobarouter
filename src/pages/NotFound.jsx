import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Oops! Page not found.</h2>

      <p>
        We apologize, but it seems the page you're looking for doesn't exist or
        may have been moved. Let's get you back on track!
      </p>

      <p>
        You can return to the <Link to="/">Homepage</Link> or try searching for
        what you need using our navigation menu.
      </p>
    </div>
  );
}
