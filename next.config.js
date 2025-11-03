/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is stable in Next.js 14, no experimental flag needed
  
  // Windows-specific optimizations for path length issues
  distDir: '.next',
  
  // Optimize webpack for Windows
  webpack: (config, { isServer }) => {
    // Increase max path length handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // Optimize chunk splitting for Windows
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Create smaller chunks to avoid long paths
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
        },
      },
    }
    
    return config
  },
  
  // Improve build reliability on Windows
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 