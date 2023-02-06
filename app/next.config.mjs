//@ts-check
import { withNx } from '@nrwl/next/plugins/with-nx.js';
import { env } from '../packages/env/src/index.mjs';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
  },
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
  typescript: {
    ignoreBuildErrors: !!process.env.CI,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default withNx(nextConfig);
