import AppHeader from "@/components/app-header";
import Background from "@/components/background";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Background />

      <div className="flex flex-col gap-y-10 max-w-[1050px] mx-auto px-4 min-h-screen ">
        <AppHeader />

        {children}
      </div>
    </>
  );
}

export default Layout;
