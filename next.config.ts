import type { NextConfig } from 'next';

let userConfig: Partial<NextConfig> | undefined = undefined;

import { existsSync } from 'fs';
import { join } from 'path';

try {
  const userConfigPath = join(process.cwd(), 'v0-user-next.config.mjs');
  if (existsSync(userConfigPath)) {
    // Use dynamic import with .then() to avoid top-level await
    import(userConfigPath).then(mod => {
      userConfig = mod.default;
    }).catch(() => {
      // ignore error
    });
  }
} catch (e) {
  // ignore error
}

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  trailingSlash: true,
  output: 'export',
  devIndicators: {
    buildActivity: false,
  },
  productionBrowserSourceMaps: false,
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
    'date-fns': {
      transform: 'date-fns/{{member}}',
    },
  },
};


mergeConfig(nextConfig, userConfig);

function mergeConfig(
  nextConfig: NextConfig,
  userConfig: Partial<NextConfig> | undefined
): void {
  if (!userConfig) return;

  for (const key in userConfig) {
    const nextValue = nextConfig[key as keyof NextConfig];
    const userValue = userConfig[key as keyof NextConfig];

    if (
      typeof nextValue === 'object' &&
      nextValue !== null &&
      !Array.isArray(nextValue) &&
      typeof userValue === 'object' &&
      userValue !== null &&
      !Array.isArray(userValue)
    ) {
      nextConfig[key as keyof NextConfig] = {
        ...nextValue,
        ...userValue,
      };
    } else {
      nextConfig[key as keyof NextConfig] = userValue as any;
    }
  }
}

export default nextConfig;
