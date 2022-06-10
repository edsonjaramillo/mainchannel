import { Formatter } from '@/lib/Formatter';

interface PriceProps {
  title: string;
  price: number;
}

const PriceItem = ({ title, price }: PriceProps) => {
  const formatter = new Formatter();

  return (
    <div className='product__price'>
      <span>{title} - </span>
      <strong>{formatter.formatPrice(price)}</strong>
    </div>
  );
};

export default PriceItem;
