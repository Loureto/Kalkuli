"use client";

import { clientComponent } from "@/components";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       main
//     </main>
//   );
// }

const HomePage = clientComponent(
  import("@/modules").then((mod) => mod.HomePage)
);
export default HomePage;
