export interface Booking {
  id: number;
  bookingNumber: string;
  userId: number;
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  totalAmount: number;
  status: string;
}