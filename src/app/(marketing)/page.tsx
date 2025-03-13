import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#c98f5d] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="https://bytegrad.com/course-assets/youtube/expensestracker/preview.png"
        alt="Expenses Tracker Dashboard Preview"
        width={700}
        height={472}
      />

      <div>
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Track Your <span className=" font-extrabold">Expenses</span> With Ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use ExpensesTracker to track your expenses. Get lifetime access for
          $99.
        </p>
        <div className="mt-10 space-x-3 ">
          <LoginLink className="bg-black text-white py-2 px-4 rounded-lg font-medium ">
            Login
          </LoginLink>
          <RegisterLink className="bg-black/50 text-white py-2 px-4 rounded-lg font-medium ">
            Register
          </RegisterLink>
        </div>
      </div>
    </div>
  );
}
