import { useEffect } from "react";

export default function AdminHome() {
  useEffect(() => {
    const authInfo = localStorage.getItem("@moico/cafe24/auth-info");
    console.log(authInfo);
  }, []);

  return <div>Admin Home</div>;
}
