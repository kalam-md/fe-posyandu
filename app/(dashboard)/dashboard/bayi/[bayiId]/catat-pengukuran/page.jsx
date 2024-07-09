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
    { title: 'Bayi/Balita', link: '/dashboard/bayi' },
    { title: 'Catat Pengukuran', link: '/dashboard/bayi/catat-pengukuran' }
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4">
        <div className="flex-1 space-y-4 p-5">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading
              title={`Catat Pengukuran Data Bayi/Balita`}
              description=""
            />
          </div>
          <Separator />

          <div className="grid grid-cols-2 gap-4">
            <div className="w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama_bayi">Nama Bayi</Label>
              <Input type="text" id="nama_bayi" />
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

            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Pengukuran Cara Terlentang
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Pengukuran Cara Berdiri
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
                HBO
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                DPT-HB 1
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                DPT-HB 2
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                DPT-HB 3
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                CAMPAK
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                BCG
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                POLIO 1
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                POLIO 2
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                POLIO 3
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                POLIO 4
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                IPV
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
                IMD
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                ASI EKSLUSIF
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                VIT A BULAN FEBRUARI
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                VIT A BULAN AGUSTUS
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                DICATAT DI BUKU KIA
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                PMT
              </label>
            </div>
            <div className="flex w-full max-w-sm items-center gap-1.5 space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                DIARE
              </label>
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
