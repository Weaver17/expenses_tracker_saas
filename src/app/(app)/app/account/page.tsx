import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function page() {
  // authentication check
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  // get user info
  const user = await getUser();

  // authorization check
  // const membership = await prisma.membership.findFirst({
  //   where: {
  //     userId: user.id,
  //   },
  // });
  // if (!membership || membership.status !== "active") {
  //   return redirect("/");
  // }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white ">Account</h1>

      <p className="text-white mt-2">
        Logged in as: <span className="font-bold">{user.email}</span>
      </p>
    </div>
  );
}

export default page;
