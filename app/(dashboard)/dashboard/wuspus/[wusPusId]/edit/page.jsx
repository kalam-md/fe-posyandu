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
    { title: 'Wus Pus', link: '/dashboard/wuspus' },
    { title: 'Edit', link: '/dashboard/wuspus/edit' }
  ];
  return (
    <div className="flex-1 space-y-4 p-4">
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-5">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading title={`Edit Data Wus Pus`} description="" />
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
              <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
              <Input
                type="text"
                id="tanggal_lahir"
                placeholder="Tanggal lahir"
              />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tempat">Tempat Lahir</Label>
              <Input type="text" id="tempat" placeholder="Tempat lahir" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="goldar">Golongan Darah</Label>
              <Input type="text" id="goldar" placeholder="Golongan darah" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama_ayah">Nama Ayah</Label>
              <Input type="text" id="nama_ayah" placeholder="Nama ayah" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama_ibu">Nama Ibu</Label>
              <Input type="text" id="nama_ibu" placeholder="Nama ibu" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="alamat">Alamat</Label>
              <Input type="text" id="alamat" placeholder="Alamat" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="telp">No Telepon</Label>
              <Input type="text" id="telp" placeholder="No telepon" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="kia">Buku KIA</Label>
              <Input type="text" id="kia" placeholder="Buku KIA" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="status">Status Pernikahan</Label>
              <Input type="text" id="status" placeholder="Status pernikahan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="dasawisma">Kelompok Dasa Wisma</Label>
              <Input
                type="text"
                id="dasawisma"
                placeholder="Kelompok dasa wisma"
              />
            </div>

            <Button>Edit</Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
