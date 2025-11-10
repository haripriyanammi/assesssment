import { prisma } from "../config/db";

export const getTopVendors = async () => {
  const vendors = await prisma.vendor.findMany({
    select: {
      id: true,
      name: true,
      invoices: {
        select: {
          totalAmount: true,
        },
      },
    },
  });

  return vendors
    .map((v: any) => ({
      id: v.id,
      name: v.name,
      totalSpend: v.invoices.reduce(
        (sum: number, inv: any) => sum + (inv.totalAmount || 0),
        0
      ),
    }))
    .sort((a: any, b: any) => b.totalSpend - a.totalSpend)
    .slice(0, 10);
};
