"use client";

import { redirect } from "next/navigation";

function DashboardBtn() {
  return (
    <button
      onClick={() => {
        redirect("/app/dashboard");
      }}
      className="bg-black text-white px-4 py-2 rounded-lg font-medium "
    >
      Dashboard
    </button>
  );
}

export default DashboardBtn;
