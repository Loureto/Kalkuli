"use client";

import { clientComponent } from "@/components";

const LoginPage = clientComponent(
  import("@/modules").then((mod) => mod.LoginPage)
);

export default LoginPage;
