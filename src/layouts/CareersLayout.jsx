import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Welcome to Our Careers Section</h2>
      <p>
        Discover exciting career opportunities that match your skills and
        aspirations. We strive to connect talented individuals with rewarding
        career paths in various industries.
      </p>
      
      <Outlet />
    </div>
  );
}