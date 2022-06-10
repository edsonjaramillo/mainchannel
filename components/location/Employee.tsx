import { EmployeeType } from '@/lib/graphcms/types';
import { BlurImage } from '@/components/index';

const Employee = ({ name, image, position }: EmployeeType) => (
  <div className='employee'>
    <div className='employee__image'>
      <BlurImage src={image.url} layout='fill' objectFit='cover' alt={`Portrait of ${name}`} />
    </div>
    <span className='employee__name'>{name}</span>
    <span>{position}</span>
  </div>
);

export default Employee;
