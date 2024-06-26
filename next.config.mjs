/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       "remotePatterns" : [
        {
            "hostname": "img.clerk.com"
        },
        {
            "hostname": "lh3.googleusercontent.com"
        }
       ]
    }
};

export default nextConfig;
