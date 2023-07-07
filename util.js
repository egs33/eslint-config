/**
 * @param {{files?: string[], ignores?: string[]}} filesConfig
 * @param {*[]} sharedConfig
 * @returns {*[]}
 */
export const applyConfig = (filesConfig, sharedConfig) => sharedConfig
  .map((config) => ({
    ...config,
    ...filesConfig,
  }));
