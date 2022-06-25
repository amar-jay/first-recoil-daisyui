/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "media.istockphoto.com"],
  },
};

// module.exports = {
//   experimental: {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "i.picsum.photos",
//           port: "",
//           pathname: "/300/200/**",
//         },
//       ],
//     },
//   },
// };

module.exports = nextConfig;
