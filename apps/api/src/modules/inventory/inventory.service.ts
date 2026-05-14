import { Injectable } from "@nestjs/common";

@Injectable()
export class InventoryService {
  stock() {
    return [
      { sku: "NX-LAP-001", name: "Engineering laptops", warehouse: "Tashkent A", quantity: 84, status: "healthy" },
      { sku: "NX-BRC-044", name: "Barcode scanners", warehouse: "Tashkent B", quantity: 18, status: "low" },
      { sku: "NX-SRV-010", name: "Server parts", warehouse: "Samarkand", quantity: 32, status: "healthy" }
    ];
  }
}

