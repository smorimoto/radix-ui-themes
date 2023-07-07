'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { checkboxPropDefs } from './checkbox.props';
import { extractMarginProps, withMarginProps, withBreakpoints } from '../helpers';
import { CheckIcon } from '../icons';

import type { PropsWithoutRefOrColor, MarginProps, GetPropDefTypes } from '../helpers';

type CheckboxElement = React.ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxOwnProps = GetPropDefTypes<typeof checkboxPropDefs>;
interface CheckboxProps
  extends Omit<PropsWithoutRefOrColor<typeof CheckboxPrimitive.Root>, 'children'>,
    MarginProps,
    CheckboxOwnProps {}
const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    style,
    size = checkboxPropDefs.size.default,
    variant = checkboxPropDefs.variant.default,
    color = checkboxPropDefs.color.default,
    highContrast = checkboxPropDefs.highContrast.default,
    radius = checkboxPropDefs.radius.default,
    ...checkboxProps
  } = marginRest;
  return (
    <span
      data-radius={radius}
      className={classNames(
        'rui-CheckboxRoot',
        withBreakpoints(size, 'size'),
        withMarginProps(marginProps),
        className
      )}
      style={style}
    >
      <CheckboxPrimitive.Root
        data-accent-scale={color}
        {...checkboxProps}
        ref={forwardedRef}
        className={classNames('rui-reset-button rui-CheckboxButton', `variant-${variant}`, {
          'high-contrast': highContrast,
        })}
      >
        <CheckboxPrimitive.Indicator className="rui-CheckboxIndicator">
          <CheckIcon width={undefined} height={undefined} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </span>
  );
});
Checkbox.displayName = 'Checkbox';

export { Checkbox };
