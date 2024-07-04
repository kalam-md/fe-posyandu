'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { WusPus } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

interface WusPusClientProps {
  data: WusPus[];
}

export const UserClient: React.FC<WusPusClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Wus Pus (${data.length})`}
          description=""
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/wuspus/tambah`)}
        >
          <Plus className="w-4 h-4 mr-2" /> Tambah Data Wus Pus
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
