export interface Room {
  id: number;
  roomNumber: string;
  pricePerNight: number;
  capacity: number;
  hotelId: number;
  isAvailable: boolean;
}