import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
};

type PropsWithWeight = {
  children: ReactNode;
  weight?: 'bold' | 'medium' | 'normal';
};

const FONT_WEIGHT_MAP = {
  bold: 'font-bold',
  medium: 'font-medium',
  normal: 'font-normal',
};

function Headline3({ children }: Props) {
  return <h1 className="text-5xl font-bold">{children}</h1>;
}

function Headline5({ children }: Props) {
  return <h1 className="text-2xl mb-5">{children}</h1>;
}

// has bold/regular
function Subtitle({ children, weight }: PropsWithWeight) {
  return (
    <p className={clsx('tracking-[0.15px]', weight && FONT_WEIGHT_MAP[weight])}>
      {children}
    </p>
  );
}

Subtitle.defaultProps = {
  weight: 'normal',
};

// medium/regular
function Body1({ children, weight }: PropsWithWeight) {
  return (
    <p className={clsx('tracking-[0.15px]', weight && FONT_WEIGHT_MAP[weight])}>
      {children}
    </p>
  );
}

Body1.defaultProps = {
  weight: 'normal',
};

function Body2({ children }: Props) {
  return <p className="text-sm tracking-[0.25px]">{children}</p>;
}

function Caption({ children }: Props) {
  return <p className="text-xs tracking-[0.4px]">{children}</p>;
}

export { Headline3, Headline5, Subtitle, Body1, Body2, Caption };
