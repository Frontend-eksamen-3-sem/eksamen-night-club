// ...existing code...
/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.dummyjson.com", pathname: "/**" },
      { protocol: "http", hostname: "localhost", port: "4000", pathname: "/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "4000", pathname: "/**" },
      // tilføj uden port i tilfælde hvor port ikke matches
      { protocol: "http", hostname: "localhost", pathname: "/**" },
      { protocol: "http", hostname: "127.0.0.1", pathname: "/**" },
    ],
  },
};

export default nextConfig;
// ...existing code...
