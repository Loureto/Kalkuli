"use client";

import { clientComponent } from "@/components";

const CreateAccountPage = clientComponent(
  import("@/modules").then((mod) => mod.CreateAccountPage)
);

export default CreateAccountPage;
