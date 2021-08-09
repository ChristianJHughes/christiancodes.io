import cn from "classnames";
import NextLink from "next/link";
import PropTypes from "prop-types";

export default function Link({
  ariaLabel,
  className,
  children,
  href,
  subtle,
  size,
}) {
  const isInternal = /^\/(?!\/)/.test(href);

  const classes = cn(
    {
      "text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-500 font-semibold":
        !subtle,
      "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-400":
        subtle,
      "text-sm": size === "sm",
    },
    className
  );
  if (isInternal) {
    return (
      <NextLink href={href}>
        <a className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      </NextLink>
    );
  }
  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

Link.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  subtle: PropTypes.bool,
  size: PropTypes.oneOf(["sm"]),
};

Link.defaultProps = {
  subtle: false,
};
