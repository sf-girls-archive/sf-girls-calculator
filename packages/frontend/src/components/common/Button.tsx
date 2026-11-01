import { FC, MouseEvent } from 'react';

type ButtonProps = {
  animate?: boolean;
  children?: JSX.Element;
  className?: string;
  color?:
    | 'plain'
    | 'transparent'
    | 'light'
    | 'dark'
    | 'black'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  disabled?: boolean;
  effect?: 'bounce' | 'bounceIn' | 'fadeIn' | 'pound' | 'pulse' | 'ping' | 'loading';
  ariaLabel?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  text?: string;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'right' | 'left';
  variant?: 'outline' | 'close';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = ({
  animate,
  children,
  className,
  color,
  disabled,
  effect,
  ariaLabel,
  size,
  text,
  tooltip,
  tooltipPosition,
  variant,
  onClick
}) => {
  const getButtonClassNames = (): string => {
    const classNames = [];

    if (animate) {
      classNames.push('btn-animated');

      if (effect) {
        classNames.push('animated', effect);
      }
    }

    if (color) {
      classNames.push(`btn-${color}`);
    }

    if (disabled) {
      classNames.push('btn--disabled');
    }

    if (size) {
      classNames.push(`btn-${size}`);
    }

    if (tooltip) {
      classNames.push('tooltip');
    }

    if (tooltipPosition) {
      classNames.push(`tooltip--${tooltipPosition}`);
    }

    if (variant) {
      if (variant === 'close') {
        classNames.push('btn-close', 'u-pull-right');
      } else {
        classNames.push(variant);
      }
    }

    return classNames.join(' ');
  };

  const buttonClassNames = getButtonClassNames();

  return (
    <button
      className={`${buttonClassNames} ${className ?? ''}`}
      disabled={disabled}
      onClick={onClick}
      data-tooltip={tooltip}
      aria-label={ariaLabel}
    >
      {text && text}
      {children && children}
    </button>
  );
};
