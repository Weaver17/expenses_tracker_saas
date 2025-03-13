"use server";

import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addExpense(formData: FormData) {
  // authentication check
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const user = getUser();

  await prisma.expense.create({
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
      creatorId: (await user).id,
    },
  });

  revalidatePath("/app/dashboard");
}

// yet to be added
export async function editExpense(formData: FormData, id: number) {
  // authentication check
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await prisma.expense.update({
    where: {
      id: id,
    },
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
    },
  });

  revalidatePath("/app/dashboard");
}

export async function deleteExpense(id: number) {
  // authentication check
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await prisma.expense.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/app/dashboard");
}
