type FormSectionProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  htmlfor: string;
  label: string;
};

export const FormSection = (props: FormSectionProps) => {
  const { children, style, className, htmlfor, label } = { ...props };

  const SECTION_STYLE = {
    ...style
  };

  return (
    <div style={{ ...SECTION_STYLE }} className={className}>
      <FormLabel htmlfor={htmlfor} label={label} />
      {children}
    </div>
  );
};

const FormLabel = ({ htmlfor, label }: { htmlfor: string; label: string }) => {
  return (
    <label htmlFor={htmlfor} style={{ margin: 10 }}>
      {label}
    </label>
  );
};
