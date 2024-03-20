/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import clsx from 'clsx';
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from '@mui/base/Button';
import { openSans } from '@/styles/fonts';

interface ButtonProps extends BaseButtonProps {
  variant: 'outlined' | 'contained' | 'normal';
}

const NORMAL_BUTTON_STYLE =
  'bg-white text-black rounded py-3.5 px-3 uppercase font-bold text-sm border hover:bg-transparent hover:text-white hover:border-white';
const OUTLINED_BUTTON_STYLE =
  'bg-transparent text-white rounded-[20px] py-2 px-2.5 capitalize font-semibold text-xs border hover:bg-white hover:text-black hover:border-white';
const CONTAINED_BUTTON_STYLE =
  'bg-white text-black rounded-[20px] py-2 px-2.5 capitalize font-semibold text-xs border hover:bg-transparent hover:text-white hover:border-white';

function NormalButton(props: BaseButtonProps) {
  return (
    <BaseButton
      {...props}
      slotProps={{ root: { className: NORMAL_BUTTON_STYLE } }}
    />
  );
}

function OutlinedButton(props: BaseButtonProps) {
  return (
    <BaseButton
      {...props}
      slotProps={{
        root: {
          className: clsx(OUTLINED_BUTTON_STYLE, openSans.className),
        },
      }}
    />
  );
}

function ContainedButton(props: BaseButtonProps) {
  return (
    <BaseButton
      {...props}
      slotProps={{
        root: {
          className: clsx(CONTAINED_BUTTON_STYLE, openSans.className),
        },
      }}
    />
  );
}

export default function Button(props: ButtonProps) {
  switch (props.variant) {
    case 'outlined':
      return <OutlinedButton {...props} />;
    case 'contained':
      return <ContainedButton {...props} />;
    default:
      return <NormalButton {...props} />;
  }
}
