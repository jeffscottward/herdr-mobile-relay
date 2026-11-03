import type { PlaywrightTestOptions, PlaywrightWorkerOptions } from '@playwright/test';

// Every Chromium project uses the installed Google Chrome stable build instead
// of Playwright's bundled Chromium, which lags Chrome stable security fixes.
// Where it is missing, install Google Chrome stable: `bun x playwright install
// chrome` on Ubuntu, Debian, macOS and Windows, or Google's package on other
// Linux distributions (it installs to /opt/google/chrome/chrome).
// Playwright launches Chromium without its sandbox unless chromiumSandbox is
// set, so the sandbox is turned on explicitly.
export const systemChrome = {
  channel: 'chrome',
  launchOptions: { chromiumSandbox: true },
} satisfies Partial<PlaywrightTestOptions & PlaywrightWorkerOptions>;
