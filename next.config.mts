import type { NextConfig } from 'next';

let userConfig: Partial<NextConfig> | undefined = undefined;

import { existsSync } from 'fs';
import { join } from 'path';

try {
  const userConfigPath = join(process.cwd(), 'v0-user-next.config.mjs');
  if (existsSync(userConfigPath)) {
    userConfig = (await import(userConfigPath)).default;
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
