import { prisma } from "../config/db";

export const getCategorySpend = async () => {
  const categories = await prisma.lineItem.groupBy({
    by: ["category"],
    _sum: { amount: true },
  });

  return categories.map((c: any) => ({
    category: c.category || "Unknown",//caterogory return or unknown
    totalSpend: c._sum.amount || 0,//sum return or 0
  }));
};
