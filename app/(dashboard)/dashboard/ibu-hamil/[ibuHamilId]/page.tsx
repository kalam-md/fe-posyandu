import BreadCrumb from '@/components/breadcrumb';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import React from 'react';

export default function Page() {
  const breadcrumbItems = [
    { title: 'Ibu Hamil', link: '/dashboard/ibu-hamil' },
    { title: 'Tambah', link: '/dashboard/ibu-hamil/tambah' }
  ];
  return (
    <div className="flex-1 p-4 space-y-4">
      <ScrollArea className="h-full">
        <div className="flex-1 p-5 space-y-4">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading
              title={`Tambah Data Ibu Hamil`}
              description=""
            />
          </div>
          <Separator />
          
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nik">NIK</Label>
              <Input type="text" id="nik" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama">Nama</Label>
              <Input type="text" id="nama" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal_daftar">Tanggal Daftar</Label>
              <Input type="text" id="tanggal_daftar" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hari_pertama_haid">Hari Pertama Haid</Label>
              <Input type="text" id="hari_pertama_haid" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="taksiran_persalinan">Taksiran Persalinan</Label>
              <Input type="text" id="taksiran_persalinan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tempat_lahir">Tempat Lahir</Label>
              <Input type="text" id="tempat_lahir" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
              <Input type="text" id="tanggal_lahir" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pendidikan_terakhir">Pendidikan Terakhir</Label>
              <Input type="text" id="pendidikan_terakhir" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pekerjaan">Pekerjaan</Label>
              <Input type="text" id="pekerjaan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="alamat">Alamat</Label>
              <Input type="text" id="alamat" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="telepon">No Telepon</Label>
              <Input type="text" id="telepon" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="golongan_darah">Golongan Darah</Label>
              <Input type="text" id="golongan_darah" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pembiayaan">Pembiayaan</Label>
              <Input type="text" id="pembiayaan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="no_jkn">No JKN</Label>
              <Input type="text" id="no_jkn" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="faskes_tingkat1">Faskes Tingkat 1</Label>
              <Input type="text" id="faskes_tingkat1" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="faskes_rujukan">Faskes Rujukan</Label>
              <Input type="text" id="faskes_rujukan" />
            </div>

          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <Button>Simpan</Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
