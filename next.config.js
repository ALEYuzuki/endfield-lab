/** @type {import("next").NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  experimental: { reactCompiler: false },
  webpack: (config, ctx) => {
    const isDev = !!(ctx && ctx.dev);
    // 安定化: 開発時はメモリキャッシュに
    if (isDev) config.cache = { type: "memory" };

    // @ をプロジェクトルートに割り当て
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
};

module.exports = nextConfig;