export interface ExitRequest {
  id: string;
  userId: string;
  nama: string;
  tujuan: string;
  tanggal: string;
  status: 'pending' | 'approved';
}
