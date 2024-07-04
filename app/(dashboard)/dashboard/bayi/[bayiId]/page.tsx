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
    { title: 'Bayi/Balita', link: '/dashboard/bayi' },
    { title: 'Tambah', link: '/dashboard/bayi/create' }
  ];
  return (
    <div className="flex-1 p-4 space-y-4">
      <ScrollArea className="h-full">
        <div className="flex-1 p-5 space-y-4">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading
              title={`Tambah Data Bayi/Balita`}
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
              <Label htmlFor="nama_bayi">Nama Bayi</Label>
              <Input type="text" id="nama_bayi" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
              <Input type="text" id="tanggal_lahir" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="jk">Jenis Kelamin</Label>
              <Input type="text" id="jk" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bb">Berat Badan</Label>
              <Input type="text" id="bb" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="akte">No Akte</Label>
              <Input type="text" id="akte" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="goldar">Golongan Darah</Label>
              <Input type="text" id="goldar" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama_ayah">Nama Ayah</Label>
              <Input type="text" id="nama_ayah" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama_ibu">Nama Ibu</Label>
              <Input type="text" id="nama_ibu" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="alamat">Alamat</Label>
              <Input type="text" id="alamat" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="telp">No Telepon</Label>
              <Input type="text" id="telp" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="kia">Buku KIA</Label>
              <Input type="text" id="kia" />
            </div>

            <Button>Simpan</Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
