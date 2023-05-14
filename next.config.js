const serverStatic = require("serve-static");

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)\\.(jpg|jpeg|png|svg|gif|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=5184000, immutable",
          },
        ],
      },
    ];
  },
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
