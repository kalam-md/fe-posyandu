import BreadCrumb from '@/components/breadcrumb';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { BellRing, Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import React from 'react';

export default function Page() {
  const breadcrumbItems = [
    { title: 'Bayi/Balita', link: '/dashboard/bayi' },
    { title: 'Riwayat Pengukuran', link: '/dashboard/bayi/riwayat-pengukuran' }
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4">
        <div className="flex-1 space-y-4 p-5">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <Heading
              title={`Riwayat Pengukuran Data Bayi/Balita`}
              description=""
            />
          </div>
          <Separator />

          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-2 w-full">
              <CardHeader>
                <CardTitle>02/07/2024</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4 ">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-none">
                      Pengukuran
                    </p>
                    <div className="flex justify-between gap-4">
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold">BB</p>
                        <p>3.0 KG</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold">TB</p>
                        <p>60 CM</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold">Cara Pengukuran</p>
                        <p>Terlentang</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-md border p-4 ">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-none">
                      Imunisasi
                    </p>
                    <div className="mt-2 flex justify-between gap-4">
                      <div className="text-xs text-muted-foreground">
                        <p>HBO, POLIO, DPT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-md border p-4 ">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-none">
                      Pelayanan
                    </p>
                    <div className="mt-2 flex justify-between gap-4">
                      <div className="text-xs text-muted-foreground">
                        <p className="flex items-center gap-2">
                          IMD <Check className="h-4 w-4" />
                        </p>
                        <p className="flex items-center gap-2">
                          Asi Ekslusif IMD <Check className="h-4 w-4" />
                        </p>
                        <p className="flex items-center gap-2">
                          VIT A Bulan Februari IMD <Check className="h-4 w-4" />
                        </p>
                        <p>VIT A Bulan Agustus</p>
                        <p>PMT</p>
                        <p>Diare</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2 w-full">
              <CardHeader>
                <CardTitle>04/07/2024</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4 ">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-none">
                      Pengukuran
                    </p>
                    <div className="flex justify-between gap-4">
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold">BB</p>
                        <p>3.0 KG</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold">TB</p>
                        <p>60 CM</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold">Cara Pengukuran</p>
                        <p>Terlentang</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-md border p-4 ">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-none">
                      Imunisasi
                    </p>
                    <div className="mt-2 flex justify-between gap-4">
                      <div className="text-xs text-muted-foreground">
                        <p>HBO, POLIO, DPT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-md border p-4 ">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-none">
                      Pelayanan
                    </p>
                    <div className="mt-2 flex justify-between gap-4">
                      <div className="text-xs text-muted-foreground">
                        <p className="flex items-center gap-2">
                          IMD <Check className="h-4 w-4" />
                        </p>
                        <p className="flex items-center gap-2">
                          Asi Ekslusif IMD <Check className="h-4 w-4" />
                        </p>
                        <p className="flex items-center gap-2">
                          VIT A Bulan Februari IMD <Check className="h-4 w-4" />
                        </p>
                        <p>VIT A Bulan Agustus</p>
                        <p>PMT</p>
                        <p>Diare</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
