import { ProductItem } from '@/components/index';
import { ProductType } from '@/lib/graphcms/types';

interface ProductGridProps {
  header: string;
  products: ProductType[];
}

const ProductGrid = ({ header, products }: ProductGridProps) => (
  <div className='responsive-width'>
    <h2 className='productitem__header'>{header}</h2>
    <div className='productsgrid '>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default ProductGrid;
