"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>; // cannot use this directly because it's client side features
}
