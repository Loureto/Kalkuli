"use client";

import { MdEmail, MdLock } from "react-icons/md";

const styles = {
  icon_default: "text-gray-500 pointer-events-none",
};

export const Icons = {
  MdEmail: () => <MdEmail className={styles.icon_default} />,
  MdLock: () => <MdLock className={styles.icon_default} />,
};
