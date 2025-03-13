import { addExpense } from "@/actions/actions";
import React from "react";

function ExpensesForm() {
  return (
    <form action={addExpense} className="w-full mt-8 rounded overflow-hidden ">
      <input
        className="w-full px-3 py-2 outline-none "
        type="text"
        name="description"
        placeholder="Description"
      />
      <input
        className="w-full px-3 py-2 outline-none "
        type="number"
        name="amount"
        placeholder="Amount"
      />
      <button className="w-full bg-orange-600 text-white px-2 py-2 font-bold">
        Add Expense
      </button>
    </form>
  );
}

export default ExpensesForm;
