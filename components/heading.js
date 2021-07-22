import cn from "classnames";

export default function Heading({ children, className, isLarge }) {
  const classes = cn(
    {
      "text-6xl font-extrabold mb-12": isLarge,
      "text-2xg mb-6": !isLarge,
    },
    "flex items-center justify-center",
    className
  );
  return <h1 className={classes}>{children}</h1>;
}
