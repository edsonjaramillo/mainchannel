import { type VariantProps, cva } from 'class-variance-authority';

import { Heading } from './Heading';
import { Responsive } from './Responsive';
import { Text } from './Text';
import { cn } from './lib/tw';

export const sectionVariants = cva('py-16 md:py-24', {
  variants: {
    background: {
      primary: 'bg-grayscale-50',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: { background: 'transparent' },
});

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sectionVariants> {
  header: string;
  headerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subheader?: string;
}

export const Section: React.FC<SectionProps> = ({
  headerAs = 'h2',
  header,
  subheader,
  className,
  background,
  children,
  ...props
}) => {
  const classes = cn(sectionVariants({ background }), className);
  return (
    <section {...props} className={classes}>
      <Responsive>
        <div className="mb-9 flex flex-col items-center gap-5 md:gap-6 lg:mb-14">
          <Heading as={headerAs}>{header}</Heading>
          {subheader && (
            <Text as="p" align="center" textColor="gray" className="max-w-md md:max-w-xl md:text-lg lg:max-w-2xl">
              {subheader}
            </Text>
          )}
        </div>
        {children}
      </Responsive>
    </section>
  );
};
