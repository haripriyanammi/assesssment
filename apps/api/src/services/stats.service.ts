// src/services/stats.service.ts
import {prisma} from "../config/db";

export const getStats = async () => {
  // Total Spend (sum of all invoice amounts)
  const totalSpend = await prisma.invoice.aggregate({
    _sum: { totalAmount: true },
  });

  // Total Invoices Processed
  const totalInvoices = await prisma.invoice.count();

  // Average Invoice Value
  const avgInvoiceValue = await prisma.invoice.aggregate({
    _avg: { totalAmount: true },
  });

  // Documents Uploaded (if you want, use line items count or payments count)
  const documentsUploaded = await prisma.lineItem.count();

  return {
    totalSpendYTD: totalSpend._sum.totalAmount || 0,
    totalInvoicesProcessed: totalInvoices,
    documentsUploaded,
    avgInvoiceValue: avgInvoiceValue._avg.totalAmount || 0,
  };
};
