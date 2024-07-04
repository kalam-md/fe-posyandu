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
    { title: 'Posyandu', link: '/dashboard/posyandu' },
    { title: 'Tambah', link: '/dashboard/posyandu/create' }
  ];
  return (
    <div className="flex-1 p-4 space-y-4">
      <ScrollArea className="h-full">
        <div className="flex-1 p-5 space-y-4">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading
              title={`Tambah Kegiatan Data Posyandu`}
              description=""
            />
          </div>
          <Separator />
          
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal_kegiatan">Tanggal Kegiatan</Label>
              <Input type="text" id="tanggal_kegiatan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="kader">Jumlah Kader Laki-laki yang Hadir</Label>
              <Input type="text" id="kader" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="kader_perempuan">Jumlah Kader Perempuan yang Hadir</Label>
              <Input type="text" id="kader_perempuan" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="plkb">Jumlah PLKB Laki-laki yang Hadir</Label>
              <Input type="text" id="plkb" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="plkb_cewe">Jumlah PLKB Perempuan yang Hadir</Label>
              <Input type="text" id="plkb_cewe" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nakes">Jumlah Tenaga Medis Laki-laki yang Hadir</Label>
              <Input type="text" id="nakes" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nakes_cewe">Jumlah Tenaga Medis Perempuan yang Hadir</Label>
              <Input type="text" id="nakes_cewe" />
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
