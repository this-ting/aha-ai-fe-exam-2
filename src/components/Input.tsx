import { Input as BaseInput, InputProps } from '@mui/base/Input';

const INPUT_STYLE =
  'border-2 border-greyWhite focus:outline-none focus:border-tutorOrange bg-transparent rounded-md p-4 text-sm';

export default function Input(props: InputProps) {
  return (
    <BaseInput
      slotProps={{
        input: { className: INPUT_STYLE, onChange: props.onChange },
      }}
    />
  );
}
//
