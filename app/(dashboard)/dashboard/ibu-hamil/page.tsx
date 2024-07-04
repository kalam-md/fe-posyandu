import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/ibu-hamil-tables/client';
import { ibuHamils } from '@/constants/data';

const breadcrumbItems = [{ title: 'Ibu Hamil', link: '/dashboard/ibu-hamil' }];
export default function page() {
  return (
    <>
      <div className="flex-1 p-4 pt-6 space-y-4 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={ibuHamils} />
      </div>
    </>
  );
}
