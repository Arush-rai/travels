/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Good for most hosting, including Webspace/Kit
  trailingSlash: true,  // Optional: for static hosting compatibility
  images: {
    unoptimized: true,  // If you are using static export or your host doesn't support Next.js image optimization
  },
  // basePath: '', // Uncomment and set if your site is in a subdirectory
};

export default nextConfig;
