import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/wuspus-tables/client';
import { wusPus } from '@/constants/data';

const breadcrumbItems = [{ title: 'Wus Pus', link: '/dashboard/wuspus' }];
export default function page() {
  return (
    <>
      <div className="flex-1 p-4 pt-6 space-y-4 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={wusPus} />
      </div>
    </>
  );
}
