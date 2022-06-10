import { DetailType } from '@/lib/graphcms/types';

const ProductTable = (details: DetailType) => (
  <table className='product__table'>
    <tbody>
      <TableRow title='ABV' value={`${details.abv}%`} />
      <TableRow title='IBU' value={details.ibu} />
      <TableRow title='Flavors' value={details.flavors} />
    </tbody>
  </table>
);

interface ProductTableRowProps {
  title: string;
  value: number | string;
}

const TableRow = ({ title, value }: ProductTableRowProps) => (
  <tr className='product__tr'>
    <th className='product__th' scope='row'>
      {title}
    </th>
    <td>{value}</td>
  </tr>
);

export default ProductTable;
