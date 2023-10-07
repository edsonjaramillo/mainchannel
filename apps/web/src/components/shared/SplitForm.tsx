import { Responsive } from 'ui/src/Responsive';

type SplitFormProps = { form: React.ReactNode; children?: React.ReactNode };
export default function SplitForm({ form, children }: SplitFormProps) {
  return (
    <Responsive>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>{form}</div>
        <div className="flex min-h-[20rem] flex-col justify-center rounded bg-grayscale-800">
          <div className="m-auto flex  max-w-[85%] flex-col gap-4">{children}</div>
        </div>
      </div>
    </Responsive>
  );
}
