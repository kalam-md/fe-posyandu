import BreadCrumb from '@/components/breadcrumb';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import React from 'react';

export default function Page() {
  const breadcrumbItems = [
    { title: 'Ibu Hamil', link: '/dashboard/ibu-hamil' },
    { title: 'Catat Pengukuran', link: '/dashboard/ibu-hamil/catat-pengukuran' }
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4">
        <div className="flex-1 space-y-4 p-5">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading title={`Catat Pengukuran Data Ibu Hamil`} description="" />
          </div>
          <Separator />

          <div className="grid grid-cols-6 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama">Nama Ibu</Label>
              <Input type="text" id="nama" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal">Tanggal</Label>
              <Input type="text" id="tanggal" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tb">Tinggi (CM)</Label>
              <Input type="text" id="tb" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bb">Berat (KG)</Label>
              <Input type="text" id="bb" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bb">Lila (KG)</Label>
              <Input type="text" id="bb" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hb">HB (Mg/dL)</Label>
              <Input type="text" id="hb" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="gpa">GPA</Label>
              <Input type="text" id="gpa" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Catat di KIA
              </label>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-4 gap-4">
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                TT0
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                TT1
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                TT2
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                TT3
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                TT4
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                TT5
              </label>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-4 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="ttd">TTD</Label>
              <Input type="text" id="ttd" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pmt">PMT</Label>
              <Input type="text" id="pmt" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Button className="mt-2">Simpan</Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
