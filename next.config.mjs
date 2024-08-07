/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       "remotePatterns" : [
        {
            "hostname": "img.clerk.com"
        },
        {
            "hostname": "lh3.googleusercontent.com"
        },
        {
            "hostname": "cdn.discordapp.com"
        },
        {
            "hostname": "drive.google.com"
        }
       ]
    }
};

export default nextConfig;
