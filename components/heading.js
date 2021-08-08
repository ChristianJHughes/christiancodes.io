import cn from "classnames";
import PropTypes from "prop-types";

export default function Heading({ children, className, size, level }) {
  const HeadingTag = `h${level}`;

  const classes = cn(
    {
      "text-3xl sm:text-6xl font-extrabold mb-8": size == "xl",
      "text-2xl font-semibold leading-snug md:leading-snug md:text-4xl mb-8":
        size == "lg",
      "text-3xl md:text-4xl mb-8 font-bold": size == "md",
      "text-xl mb-2 font-bold": size == "sm",
      "text-lg mb-2 font-bold": size == "xs",
    },
    "leading-snug",
    className
  );
  return <HeadingTag className={classes}>{children}</HeadingTag>;
}

Heading.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

Heading.defaultProps = {
  size: "md",
};
