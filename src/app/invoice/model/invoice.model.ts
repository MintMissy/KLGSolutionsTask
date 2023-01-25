export type InvoiceItem = {
	name: string;
	amount: number;
	price: number;
}
export type Invoice = {
	items: InvoiceItem[]
}