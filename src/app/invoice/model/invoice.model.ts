export type InvoiceItem = {
	name: string;
	count: number;
	price: number;
};
export type Invoice = {
	items: InvoiceItem[];
};
