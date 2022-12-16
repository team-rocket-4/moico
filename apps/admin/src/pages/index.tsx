import { useEffect } from "react";

export default function AdminHome() {
  useEffect(() => {
    localStorage.getItem("@cafe24/auth-info");
  }, []);

  return <div>Admin Home</div>;
}
