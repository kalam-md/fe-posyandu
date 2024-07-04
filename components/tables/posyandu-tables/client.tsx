'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Posyaandu } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import { Card, CardContent } from '@/components/ui/card';

interface PosyanduClientProps {
  data: Posyaandu[];
}

export const UserClient: React.FC<PosyanduClientProps> = ({ data }) => {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Posyandu`}
          description=""
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/posyandu/tambah`)}
        >
          <Plus className="w-4 h-4 mr-2" /> Tambah Data Kegiatan Posyandu
        </Button>
      </div>
      <Separator />

      <div className="w-full px-8">
        <div className="flex gap-x-2">
          <div className="flex-1 h-[650px] w-full">
            <Calendar
              className="flex w-full h-full"
              classNames={{
                months:
                  "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                month: "space-y-4 w-full flex flex-col",
                table: "w-full h-full border-collapse space-y-1",
                head_row: "",
                row: "w-full mt-2",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
