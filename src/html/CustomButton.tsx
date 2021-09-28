type CustomButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export default function CustomButton({
  children,
  variant,
  ...rest
}: CustomButtonProps) {
  return (
    <div>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}
