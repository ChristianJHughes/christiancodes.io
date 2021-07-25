import cn from "classnames";

// This is dumb.
export default function Heading({ children, className, isLarge, isLarger }) {
  const classes = cn(
    {
      "text-4xl sm:text-6xl font-extrabold mb-8": isLarge,
      "text-7xl sm:text-6xl font-extrabold mb-8": isLarger,
      "text-2xg mb-6": !isLarge,
    },
    "flex items-center justify-center",
    className
  );
  return <h1 className={classes}>{children}</h1>;
}
