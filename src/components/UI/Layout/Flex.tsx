type FlexProps = {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial';
  justifyContents?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'initial';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  text?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const Flex = (props: FlexProps) => {
  const { flexDirection, alignItems, justifyContents, children, style, className, wrap, text } = {
    ...props
  };

  const FLEX_STYLE = {
    display: 'flex',
    flexDirection: flexDirection,
    flexWrap: wrap,
    alignItems: alignItems,
    justifyContent: justifyContents,
    textAlign: text,
    ...style
  };

  return (
    <div style={{ ...FLEX_STYLE }} className={className}>
      {children}
    </div>
  );
};
