import { prisma } from "../config/db";

export const getInvoices = async (search?: string) => {
  return await prisma.invoice.findMany({
    where: search
      ? {
          OR: [
            { invoiceNumber: { contains: search } },
            { status: { contains: search } },
            { vendor: { name: { contains: search } } },
          ],
        }
      : undefined,

    include: {
      vendor: true,
      lineItems: true,
      payments: true,
    },

    orderBy: { id: "desc" },
  });
};
