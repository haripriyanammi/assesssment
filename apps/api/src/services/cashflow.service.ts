import { prisma } from "../config/db";

export const getCashOutflow = async () => {
  const payments = await prisma.payment.groupBy({
    by: ["paymentDate"],
    _sum: { amount: true },
    orderBy: {
      paymentDate: "asc",
    },
  });

  return payments.map((p:any) => ({
    date: p.paymentDate,
    amount: p._sum.amount || 0,
  }));
};

