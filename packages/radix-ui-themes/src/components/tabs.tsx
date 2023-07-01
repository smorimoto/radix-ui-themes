'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tabsListSizeDefault } from './tabs.props';
import { extractMarginProps, withMarginProps, withBreakpoints } from '../helpers';

import type { TabsListSize } from './tabs.props';
import type { MarginProps, Responsive } from '../helpers';

type TabsRootElement = React.ElementRef<typeof TabsPrimitive.Root>;
interface TabsRootProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    MarginProps {}
const TabsRoot = React.forwardRef<TabsRootElement, TabsRootProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...rootProps } = marginRest;
  return (
    <TabsPrimitive.Root
      {...rootProps}
      ref={forwardedRef}
      className={classNames('rui-TabsRoot', withMarginProps(marginProps), className)}
    />
  );
});
TabsRoot.displayName = 'TabsRoot';

type TabsListElement = React.ElementRef<typeof TabsPrimitive.List>;
interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  size?: Responsive<TabsListSize>;
}
const TabsList = React.forwardRef<TabsListElement, TabsListProps>((props, forwardedRef) => {
  const { className, size = tabsListSizeDefault, ...listProps } = props;
  return (
    <TabsPrimitive.List
      {...listProps}
      ref={forwardedRef}
      className={classNames('rui-TabsList', withBreakpoints(size, 'size'), className)}
    />
  );
});
TabsList.displayName = 'TabsList';

type TabsTriggerElement = React.ElementRef<typeof TabsPrimitive.Trigger>;
interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}
const TabsTrigger = React.forwardRef<TabsTriggerElement, TabsTriggerProps>(
  (props, forwardedRef) => {
    const { className, children, ...triggerProps } = props;
    return (
      <TabsPrimitive.Trigger
        {...triggerProps}
        ref={forwardedRef}
        className={classNames('rui-reset-button', 'rui-TabsTrigger', className)}
      >
        <span className="rui-TabsTriggerInner">{children}</span>
        <span className="rui-TabsTriggerInnerHidden">{children}</span>
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

type TabsContentElement = React.ElementRef<typeof TabsPrimitive.Content>;
interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}
const TabsContent = React.forwardRef<TabsContentElement, TabsContentProps>(
  (props, forwardedRef) => (
    <TabsPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={classNames('rui-TabsContent', props.className)}
    />
  )
);
TabsContent.displayName = 'TabsContent';

const Tabs = Object.assign(
  {},
  {
    Root: TabsRoot,
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
  }
);

export { Tabs, TabsRoot, TabsList, TabsTrigger, TabsContent };
