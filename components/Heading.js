import cn from "classnames";

export default function Heading({ isLarge }) {
  const classes = cn({
    "text-9xl": isLarge,
    "text-lg": !isLarge,
  });
  return <h1 className={classes}>Christian Hughes</h1>;
}
