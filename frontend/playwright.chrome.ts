import type { PlaywrightTestOptions, PlaywrightWorkerOptions } from '@playwright/test';

// Every Chromium project uses the installed Google Chrome stable build instead
// of Playwright's bundled Chromium, which lags Chrome stable security fixes.
// Install it with `bun x playwright install chrome` where it is missing.
// Playwright launches Chromium without its sandbox unless chromiumSandbox is
// set, so the sandbox is turned on explicitly.
export const systemChrome = {
  channel: 'chrome',
  launchOptions: { chromiumSandbox: true },
} satisfies Partial<PlaywrightTestOptions & PlaywrightWorkerOptions>;
