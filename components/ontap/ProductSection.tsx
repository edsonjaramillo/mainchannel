interface ProductSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const ProductSection = ({ title, children, ...other }: ProductSectionProps) => (
  <div className='product__section' {...other}>
    <h2 className='product__subheader'>{title}</h2>
    {children}
  </div>
);

export default ProductSection;
