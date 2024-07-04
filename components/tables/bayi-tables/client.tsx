'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Bayi } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

interface BayisClientProps {
  data: Bayi[];
}

export const UserClient: React.FC<BayisClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Bayi/Balita (${data.length})`}
          description=""
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/bayi/tambah`)}
        >
          <Plus className="w-4 h-4 mr-2" /> Tambah Data Bayi/Balita
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
