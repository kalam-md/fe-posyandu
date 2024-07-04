'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { IbuHamil } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

interface IbuHamilsClientProps {
  data: IbuHamil[];
}

export const UserClient: React.FC<IbuHamilsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Ibu Hamil (${data.length})`}
          description=""
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/ibu-hamil/tambah`)}
        >
          <Plus className="w-4 h-4 mr-2" /> Tambah Data Ibu Hamil
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
