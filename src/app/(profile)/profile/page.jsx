'use client';

import { useGetUser } from '@/hooks/useAuth';
import { toLocalDateStringShort } from '@/utils/toLocalDate';
import PaymentTable from './payments/PaymentTable';
function Profile() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h1>{user.name} خوش آمدی</h1>
      <p>
        <span>تاریخ پیوستن:</span>
        <span>{toLocalDateStringShort(user.createdAt)}</span>
      </p>
      <div className="border rounded-xl  mt-8">
        <div className="p-4 flex items-center justify-between">
          <h2 className="font-bold text-xl">آخرین سفارشات کاربر</h2>
          <Link className="text-primary-900 font-bold" href="/profile/payments">
            مشاهده همه سفارشات
          </Link>
        </div>
        <PaymentTable
          payments={payments
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 3)}
        />
      </div>
    </div>
  );
}

export default Profile;
