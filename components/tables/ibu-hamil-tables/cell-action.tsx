'use client';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { IbuHamil } from '@/constants/data';
import { BarChart, CalendarCheck2, Edit, History, MessageCircle, MoreHorizontal, Ruler, Trash, View, } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: IbuHamil;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Aksi</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => router.push(`/dashboard/ibu-hamil/${data.slug}/detail`)}>
            <View className="w-4 h-4 mr-2" /> Detail
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/dashboard/ibu-hamil/${data.slug}/edit`)}>
            <Edit className="w-4 h-4 mr-2" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/dashboard/ibu-hamil/${data.slug}/melahirkan`)}>
            <CalendarCheck2 className="w-4 h-4 mr-2" /> Melahirkan
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/dashboard/ibu-hamil/${data.slug}/catat-pengukuran`)}>
            <Ruler className="w-4 h-4 mr-2" /> Catat Pengukuran
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/dashboard/ibu-hamil/${data.slug}/riwayat-pengukuran`)}>
            <History className="w-4 h-4 mr-2" /> Riwayat Pengukuran
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/dashboard/ibu-hamil/${data.slug}/laporkan-meninggal`)}>
            <MessageCircle className="w-4 h-4 mr-2" /> Laporkan Meninggal
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="w-4 h-4 mr-2" /> Hapus
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
