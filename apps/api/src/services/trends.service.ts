import {prisma} from "../config/db";


export const getInvoiceTrends = async () => {
  const monthlyData = await prisma.invoice.groupBy({
    by: ["issueDate"],
    _count: { id: true },
    _sum: { totalAmount: true },
    orderBy: { issueDate: "asc" },
  });

  // Format into month/year
  return monthlyData.map((item: any) => ({
  month: item.issueDate ? item.issueDate.toISOString().slice(0, 7) : "Unknown",
  invoiceCount: item._count.id,
  totalSpend: item._sum.totalAmount || 0,
}));

};
