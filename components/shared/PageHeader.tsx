interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => (
  <div className='pageheader'>
    <div className='pageheader__content responsive-width'>
      <h1 className='pageheader__title'>{title}</h1>
    </div>
  </div>
);
export default PageHeader;
