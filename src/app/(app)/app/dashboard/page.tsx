import ExpensesForm from "@/components/expenses-form";
import ExpensesList from "@/components/expenses-list";
import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function page() {
  // authentication check
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

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

  const expenses = await prisma.expense.findMany({
    where: {
      creatorId: user.id,
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>
      <div className="w-full max-w-[600px] mx-auto ">
        <ExpensesList expenses={expenses} />
        <ExpensesForm />
      </div>
    </div>
  );
}

export default page;
