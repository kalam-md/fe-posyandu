import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/posyandu-tables/client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { posyandus } from '@/constants/data';

const breadcrumbItems = [{ title: 'Posyandu', link: '/dashboard/posyandu' }];
export default function page() {
  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex-1 p-4 pt-6 space-y-4 md:p-8">
          <BreadCrumb items={breadcrumbItems} />
          <UserClient data={posyandus} />
        </div>
      </ScrollArea>
    </>
  );
}
