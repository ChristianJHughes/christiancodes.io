import cn from "classnames";

export default function Heading({ children, isLarge }) {
  const classes = cn(
    {
      "text-6xl font-extrabold": isLarge,
      "text-lg": !isLarge,
    },
    "mb-12 flex items-center justify-center"
  );
  return <h1 className={classes}>{children}</h1>;
}
