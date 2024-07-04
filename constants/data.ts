import { Icons } from '@/components/icons';
import { NavItem, SidebarNavItem } from '@/types';

export type Bayi = {
  id: number;
  nik: string;
  nama_bayi: string;
  slug: string;
  tanggal_lahir: string;
  verified: boolean;
  tempat_lahir: string;
};

export const bayis: Bayi[] = [
  {
    id: 1,
    nik: '320142112',
    nama_bayi: 'Jenaka',
    slug: 'jenaka',
    tanggal_lahir: '01/07/2024',
    verified: false,
    tempat_lahir: 'Bogor'
  },
  {
    id: 2,
    nik: '320142112',
    nama_bayi: 'Evaa',
    slug: 'evaa',
    tanggal_lahir: '13/03/2024',
    verified: true,
    tempat_lahir: 'Subang'
  },
  {
    id: 3,
    nik: '320201313',
    nama_bayi: 'Chandra',
    slug: 'chandra',
    tanggal_lahir: '01/06/2024',
    verified: true,
    tempat_lahir: 'Bandung'
  },
];

export type IbuHamil = {
  id: number;
  nik: string;
  nama: string;
  slug: string;
  tanggal_daftar: string;
  verified: boolean;
  hari_pertama_haid: string;
  taksiran_persalinan: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  pendidikan_terakhir: string;
  pekerjaan: string;
  alamat: string;
  telepon: string;
  golongan_darah: string;
  pembiayaan: string;
  no_jkn: string;
  faskes_tingkat1: string;
  faskes_rujukan: string;
};

export const ibuHamils: IbuHamil[] = [
  {
    id: 1,
    nik: '320142112',
    nama: 'Siti',
    slug: 'siti',
    tanggal_daftar: '12-07-2024',
    verified: true,
    hari_pertama_haid: '01-07-2024',
    taksiran_persalinan: '02-02-2025',
    tempat_lahir: 'Subang',
    tanggal_lahir: '12-07-2002',
    pendidikan_terakhir: 'SMA',
    pekerjaan: 'Ibu Rumah Tangga',
    alamat: 'Jl. Otistan 1 No. 20',
    telepon: '0988923',
    golongan_darah: 'A',
    pembiayaan: 'Cash',
    no_jkn: '12345',
    faskes_tingkat1: 'Faskes 1',
    faskes_rujukan: 'Faskes Rujukan',
  },
  {
    id: 2,
    nik: '320143213',
    nama: 'Putri',
    slug: 'putri',
    tanggal_daftar: '15-07-2024',
    verified: true,
    hari_pertama_haid: '05-07-2024',
    taksiran_persalinan: '05-02-2025',
    tempat_lahir: 'Bandung',
    tanggal_lahir: '10-05-1995',
    pendidikan_terakhir: 'S1',
    pekerjaan: 'Karyawan Swasta',
    alamat: 'Jl. Braga No. 15',
    telepon: '08123456789',
    golongan_darah: 'B',
    pembiayaan: 'BPJS',
    no_jkn: '67890',
    faskes_tingkat1: 'Faskes 2',
    faskes_rujukan: 'Faskes Rujukan 2',
  },
  {
    id: 3,
    nik: '320144324',
    nama: 'Ani',
    slug: 'ani',
    tanggal_daftar: '20-07-2024',
    verified: true,
    hari_pertama_haid: '10-07-2024',
    taksiran_persalinan: '10-02-2025',
    tempat_lahir: 'Cirebon',
    tanggal_lahir: '20-03-1998',
    pendidikan_terakhir: 'D3',
    pekerjaan: 'Pegawai Negeri',
    alamat: 'Jl. Kartini No. 12',
    telepon: '08567891234',
    golongan_darah: 'O',
    pembiayaan: 'Asuransi',
    no_jkn: '98765',
    faskes_tingkat1: 'Faskes 3',
    faskes_rujukan: 'Faskes Rujukan 3',
  }
];

export type WusPus = {
  id: number;
  nik: string;
  nama: string;
  slug: string;
  tanggal_lahir: string;
  verified: boolean;
  golongan_darah: string;
  nama_ibu: string;
  nama_ayah: string;
  telepon: string;
  alamat: string;
  buku_kia: string;
  status_pernikahan: string;
  kelompok_dasawisma: string;
};

export const wusPus: WusPus[] = [
  {
    id: 1,
    nik: '320142112',
    nama: 'Rahmat',
    slug: 'rahmat',
    tanggal_lahir: '01/07/2024',
    verified: true,
    golongan_darah: "A",
    nama_ibu: "Siti",
    nama_ayah: "Rohman",
    telepon: "0877929",
    alamat: "Pujasera",
    buku_kia: "Ya",
    status_pernikahan: "Nikah",
    kelompok_dasawisma: "Ya",
  },
  {
    id: 2,
    nik: '320143213',
    nama: 'Lina',
    slug: 'lina',
    tanggal_lahir: '15/05/2024',
    verified: true,
    golongan_darah: 'B',
    nama_ibu: 'Dewi',
    nama_ayah: 'Hendra',
    telepon: '08123456789',
    alamat: 'Jl. Merdeka No. 5',
    buku_kia: 'Tidak',
    status_pernikahan: 'Belum Nikah',
    kelompok_dasawisma: 'Ya',
  },
  {
    id: 3,
    nik: '320144324',
    nama: 'Anisa',
    slug: 'anisa',
    tanggal_lahir: '20/03/2023',
    verified: true,
    golongan_darah: 'O',
    nama_ibu: 'Ani',
    nama_ayah: 'Budi',
    telepon: '08567891234',
    alamat: 'Jl. Kartini No. 12',
    buku_kia: 'Ya',
    status_pernikahan: 'Cerai',
    kelompok_dasawisma: 'Tidak',
  }
];

export type Posyaandu = {
  id: number;
  tanggal_kegiatan: string;
  jumlah_kader_lelaki_hadir: string;
  jumlah_kader_perempuan_hadir: string;
  jumlah_plkb_lelaki_hadir: string;
  jumlah_plkb_perempuan_hadir: string;
  jumlah_tenaga_medis_lelaki_hadir: string;
  jumlah_tenaga_medis_perempuan_hadir: string;
};

export const posyandus: Posyaandu[] = [
  {
    id: 1,
    tanggal_kegiatan: "12-07-2024",
    jumlah_kader_lelaki_hadir: "2",
    jumlah_kader_perempuan_hadir: "2",
    jumlah_plkb_lelaki_hadir: "1",
    jumlah_plkb_perempuan_hadir: "1",
    jumlah_tenaga_medis_lelaki_hadir: "3",
    jumlah_tenaga_medis_perempuan_hadir: "3",
  },
];

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Bayi Balita',
    href: '/dashboard/bayi',
    icon: 'baby',
    label: 'bayi'
  },
  {
    title: 'Ibu Hamil',
    href: '/dashboard/ibu-hamil',
    icon: 'users',
    label: 'ibu-hamil'
  },
  {
    title: 'Wus Pus',
    href: '/dashboard/wuspus',
    icon: 'heartHandshake',
    label: 'wus-pus'
  },
  {
    title: 'Posyaandu',
    href: '/dashboard/posyandu',
    icon: 'stethoscope',
    label: 'posyandu'
  }
];
