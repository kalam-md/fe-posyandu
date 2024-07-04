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
    { title: 'Melahirkan', link: '/dashboard/ibu-hamil/melahirkan' }
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 p-4 space-y-4">
        <div className="flex-1 p-5 space-y-4">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading title={`Data Melahirkan Ibu Hamil`} description="" />
          </div>
          <Separator />

          <div className="grid grid-cols-4 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama">Nama Ibu</Label>
              <Input type="text" id="nama" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tanggal">Tanggal Persalinan</Label>
              <Input type="text" id="tanggal" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="usia">Usia Kehamilan</Label>
              <Input type="text" id="usia" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="penolong">Penolong Persalinan</Label>
              <Input type="text" id="penolong" />
            </div>
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="tempat">Tempat Persalinan</Label>
              <Input type="text" id="tempat" />
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Keadaan Ibu
            </label>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sehat
                </label>
              </div>
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sakit
                </label>
              </div>
            </div>

            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Status Ibu
            </label>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Hidup
                </label>
              </div>
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Meninggal
                </label>
              </div>
            </div>

            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Keadaan Bayi
            </label>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sehat
                </label>
              </div>
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sakit
                </label>
              </div>
            </div>

            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Status Bayi
            </label>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Hidup
                </label>
              </div>
              <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Meninggal
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Button className="mt-2">Simpan</Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
