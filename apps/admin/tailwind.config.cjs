/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@moico/tailwind-config")],
  theme: {
    extend: {
      colors: {
        "moico-gray-100": "#F3F4F7",
        "moico-gray-900": "#6B6C73",
        "moico-blue-100": "#57A2F8",
      },
    },
  },
};
