// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", "G-2FPY3JZ5WH", {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const handleResumeClick = () => {
  window.gtag("event", "page_view", {
    page_title: "Resume",
    page_location: "https://christiancodes.io/resume",
    page_path: "/resume",
    send_to: "G-2FPY3JZ5WH",
  });
};
