import Loading from '@/common/Loading';
import { toPersianNumbersWithComma } from '@/utils/toPersianNumbers';

function CartSummary({ payDetail }) {
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;

  return (
    <div className="border px-2 py-4 rounded-xl">
      <p className="mb-4 font-bold">اطلاعات پرداخت</p>
      <div className="mb-4 flex items-center justify-between">
        <span>جمع کل</span>
        <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span>تخفیف</span>
        <span>{toPersianNumbersWithComma(totalOffAmount)} - </span>
      </div>
      <div className="mb-6 flex items-center justify-between font-bold">
        <span>مبلغ قابل پرداخت</span>
        <span>{toPersianNumbersWithComma(totalPrice)}</span>
      </div>
      <div>
        <button className="btn btn--primary w-full">ثبت سفارش</button>
      </div>
    </div>
  );
}
export default CartSummary;
