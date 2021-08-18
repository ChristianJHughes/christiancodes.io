import Heading from "components/heading";
import Link from "components/link";
import PropTypes from "prop-types";

export default function PostPreview({ meta }) {
  return (
    <div className="mb-6">
      <Heading level={3} size="sm">
        <Link href={`/blog/${meta.slug}`}>{meta.title}</Link>
      </Heading>
      <p className="font-regular dark:text-gray-200">{meta.description}</p>
    </div>
  );
}

PostPreview.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }),
};
