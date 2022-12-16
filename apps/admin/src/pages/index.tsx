import { useEffect } from "react";

export default function AdminHome() {
  useEffect(() => {
    localStorage.getItem("@moico/cafe24/auth-info");
  }, []);

  return <div>Admin Home</div>;
}
