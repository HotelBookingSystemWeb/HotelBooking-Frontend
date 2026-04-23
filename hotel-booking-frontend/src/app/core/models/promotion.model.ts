export interface Promotion {
  id: number;
  title: string;
  description?: string;
  discountPercentage: number;
  promoCode?: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}