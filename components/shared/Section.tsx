type BackgroundColors =
  | 'section--bg--primary'
  | 'section--bg--secondary-100'
  | 'section--bg--secondary-200'
  | 'section--bg--secondary-300'
  | 'section--bg--grayscale-100'
  | 'section--bg--grayscale-200'
  | 'section--bg--grayscale-300'
  | 'section--bg--grayscale-400'
  | 'section--bg--grayscale-500'
  | 'section--bg--grayscale-600'
  | 'section--bg--grayscale-700'
  | 'section--bg--grayscale-800'
  | 'section--bg--grayscale-900';

type TextColors =
  | 'section--text--primary'
  | 'section--text--secondary-100'
  | 'section--text--secondary-200'
  | 'section--text--secondary-300'
  | 'section--text--secondary-400'
  | 'section--text--grayscale-100'
  | 'section--text--grayscale-200'
  | 'section--text--grayscale-300'
  | 'section--text--grayscale-400'
  | 'section--text--grayscale-500'
  | 'section--text--grayscale-600'
  | 'section--text--grayscale-700'
  | 'section--text--grayscale-800'
  | 'section--text--grayscale-900';

interface SectionProps {
  id?: string;
  header?: string;
  textcolor?: TextColors;
  color?: BackgroundColors;
  width?: string;
  children?: React.ReactNode;
}

const Section = ({ id, children, header, textcolor, width, color }: SectionProps) => {
  const responsive = width ? width : 'responsive-width';
  return (
    <>
      <section className={`section ${color}`} id={id}>
        <div className={`section__content ${responsive}`}>
          <div className='section__contentgrid'>
            {header && <h2 className={`section__header ${textcolor}`}>{header}</h2>}
            {children}
          </div>
        </div>
      </section>
    </>
  );
};
export default Section;
