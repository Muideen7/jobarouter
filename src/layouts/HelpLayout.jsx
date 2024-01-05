import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Welcome to Website Help</h2>
      <p>
        Welcome to our website help section! We're here to ensure you have a
        smooth and enjoyable experience navigating our platform. If you have any
        questions or need assistance, we're just a click away.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}