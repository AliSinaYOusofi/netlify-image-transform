/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "peppy-profiterole-58b1ee.netlify.app",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
