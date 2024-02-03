'use client';

import { useGetUser } from '@/hooks/useAuth';
import Loading from '@/common/Loading';
import PaymentTable from './PaymentTable';
function Payments() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1>سفارشات کاربر</h1>
      <PaymentTable payments={payments} />
    </div>
  );
}

export default Payments;
