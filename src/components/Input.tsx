import { Input as BaseInput, InputProps } from '@mui/base/Input';

const INPUT_STYLE =
  'border-2 border-white50 focus:outline-none focus:border-tutorOrange bg-transparent rounded-md p-4 text-sm';

export default function Input({ onChange, placeholder }: InputProps) {
  return (
    <BaseInput
      slotProps={{
        input: { className: INPUT_STYLE, onChange, placeholder },
      }}
    />
  );
}
//
