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
    { title: 'Detail', link: '/dashboard/ibu-hamil/detail' }
  ];
  return (
    <div className="flex-1 space-y-4 p-4">
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-5">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading title={`Detail Data Ibu Hamil`} description="" />
          </div>
          <Separator />

          <div className="grid grid-cols-3 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nik">NIK</Label>
              <Input type="text" id="nik" placeholder="Nik" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama">Nama</Label>
              <Input type="text" id="nama" placeholder="Nama" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal_daftar">Tanggal Daftar</Label>
              <Input
                type="text"
                id="tanggal_daftar"
                placeholder="Tanggal daftar"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hari_pertama_haid">Hari Pertama Haid</Label>
              <Input
                type="text"
                id="hari_pertama_haid"
                placeholder="Hari pertama haid"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="taksiran_persalinan">Taksiran Persalinan</Label>
              <Input
                type="text"
                id="taksiran_persalinan"
                placeholder="Taksiran persalinan"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tempat_lahir">Tempat Lahir</Label>
              <Input type="text" id="tempat_lahir" placeholder="Tempat lahir" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
              <Input
                type="text"
                id="tanggal_lahir"
                placeholder="Tanggal lahir"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pendidikan_terakhir">Pendidikan Terakhir</Label>
              <Input
                type="text"
                id="pendidikan_terakhir"
                placeholder="Pendidikan terakhir"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pekerjaan">Pekerjaan</Label>
              <Input type="text" id="pekerjaan" placeholder="Pekerjaan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="alamat">Alamat</Label>
              <Input type="text" id="alamat" placeholder="Alamat" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="telepon">No Telepon</Label>
              <Input type="text" id="telepon" placeholder="No telepon" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="golongan_darah">Golongan Darah</Label>
              <Input
                type="text"
                id="golongan_darah"
                placeholder="Golongan darah"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pembiayaan">Pembiayaan</Label>
              <Input type="text" id="pembiayaan" placeholder="Pembiayaan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="no_jkn">No JKN</Label>
              <Input type="text" id="no_jkn" placeholder="No JKN" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="faskes_tingkat1">Faskes Tingkat 1</Label>
              <Input
                type="text"
                id="faskes_tingkat1"
                placeholder="Faskes tingkat 1"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="faskes_rujukan">Faskes Rujukan</Label>
              <Input
                type="text"
                id="faskes_rujukan"
                placeholder="Faskes rujukan"
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-3 gap-4">
            <Button>Simpan</Button>
          </div> */}
        </div>
      </ScrollArea>
    </div>
  );
}
