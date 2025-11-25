import Login from "@/components/LoginForm";
import React, { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Login />
    </Suspense>
  );
}