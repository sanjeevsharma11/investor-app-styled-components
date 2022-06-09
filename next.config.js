/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: process.env.NEXT_APP_BACKEND_URL,
    GOOGLE_CLIENT_ID: process.env.NEXT_APP_GOOGLE_CLIENT_ID,
    FACEBOOK_APP_ID: process.env.NEXT_APP_FACEBOOK_APP_ID,
    TRUECALLER_PARTNER_KEY: process.env.NEXT_APP_TRUECALLER_PARTNER_KEY,
    NEXT_APP_GOOGLE_SECRET: process.env.NEXT_APP_GOOGLE_SECRET,
    NEXT_APP_GOOGLE_REFRESH_TOKEN: process.env.NEXT_APP_GOOGLE_REFRESH_TOKEN,
    NEXT_APP_SMART_API_KEY: process.env.NEXT_APP_SMART_API_KEY,
    NEXT_APP_ZERODHA_API_KEY: process.env.NEXT_APP_ZERODHA_API_KEY,
    NEXT_APP_CASHFREE_PAYMENT_URL: process.env.NEXT_APP_CASHFREE_PAYMENT_URL,
    NEXT_APP_BACKEND_URL: process.env.NEXT_APP_BACKEND_URL,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: [
      'prod-iwt-bucket.s3.ap-south-1.amazonaws.com',
      'dev-investwithtribe.s3.ap-south-1.amazonaws.com',
      'lh3.googleusercontent.com'
    ],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

module.exports = nextConfig
