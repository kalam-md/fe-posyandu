import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/bayi-tables/client';
import { bayis } from '@/constants/data';

const breadcrumbItems = [{ title: 'Bayi/Balita', link: '/dashboard/bayi' }];
export default function page() {
  return (
    <>
      <div className="flex-1 p-4 pt-6 space-y-4 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={bayis} />
      </div>
    </>
  );
}
