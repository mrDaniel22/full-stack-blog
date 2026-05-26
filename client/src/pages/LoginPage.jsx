import { SignIn } from "@clerk/react";
import React from "react";

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-[calc(110vh-40px)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
}

export default LoginPage;
