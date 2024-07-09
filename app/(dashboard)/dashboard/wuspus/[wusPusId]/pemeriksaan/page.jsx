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
    { title: 'Wus Pus', link: '/dashboard/wuspus' },
    { title: 'Catat Pemeriksaan', link: '/dashboard/wuspus/pemeriksaan' }
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4">
        <div className="flex-1 space-y-4 p-5">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading title={`Catat Pemeriksaan Data Wus Pus`} description="" />
          </div>
          <Separator />

          <div className="grid grid-cols-4 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal">Tanggal</Label>
              <Input type="text" id="tanggal" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tb">LILA</Label>
              <Input type="text" id="tb" />
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
