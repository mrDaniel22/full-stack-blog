import { SignUp } from "@clerk/react";
import React from "react";

function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-[calc(130vh-20px)]">
      <SignUp signInUrl="/login" />
    </div>
  );
}

export default RegisterPage;
