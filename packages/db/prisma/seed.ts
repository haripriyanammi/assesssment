import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();


async function main() {
  console.log(" Seeding database...");

  // Path to JSON file
const filePath = path.join(__dirname, "data", "Analytics_Test_Data.json");

  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);

  for (const item of json) {
    // -------------------------------
    // ✅ 1. Create Vendor
    // -------------------------------
    const vendorName = item.vendor?.value?.name?.value || "Unknown Vendor";
    const vendorCategory = item.vendor?.value?.category?.value || null;

    const vendor = await prisma.vendor.create({
      data: {
        name: vendorName,
        category: vendorCategory,
      },
    });

    // -------------------------------
    // ✅ 2. Create Invoice
    // -------------------------------
    const invoice = await prisma.invoice.create({
      data: {
        invoiceNumber: item.header?.value?.invoiceNumber?.value || `INV-${Date.now()}`,
        vendorId: vendor.id,
        customerName: item.customer?.value?.name?.value || null,
        issueDate: item.header?.value?.invoiceDate?.value
          ? new Date(item.header.value.invoiceDate.value)
          : null,
        dueDate: item.header?.value?.dueDate?.value
          ? new Date(item.header.value.dueDate.value)
          : null,
        status: item.summary?.value?.status?.value || "Unknown",
        totalAmount: item.summary?.value?.invoiceTotal?.value || 0,
      },
    });

    // -------------------------------
    // ✅ 3. Create Line Items
    // -------------------------------
    const items =
      item.lineItems?.value?.items?.value ||
      item.lineItems?.value?.items ||
      [];

    for (const li of items) {
      await prisma.lineItem.create({
        data: {
          invoiceId: invoice.id,
          description: li.description?.value || null,
          category: li.category?.value || null,
          quantity: li.quantity?.value || 0,
          unitPrice: li.unitPrice?.value || 0,
          amount: li.totalPrice?.value || 0,
        },
      });
    }

    // -------------------------------
    // ✅ 4. Create Payment
    // -------------------------------
    const payment = item.payment?.value;
    if (payment && payment.paymentDate?.value) {
      await prisma.payment.create({
        data: {
          invoiceId: invoice.id,
          amount: payment.amount?.value || 0,
          paymentDate: new Date(payment.paymentDate.value),
          method: payment.method?.value || null,
          status: payment.status?.value || null,
        },
      });
    }
  }

  console.log("✅ Seeding completed!");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
