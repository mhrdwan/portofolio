"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
};

export default ClientWrapper;
