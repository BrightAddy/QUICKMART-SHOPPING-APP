// Minimal API config stub for frontend-only projects.
// This file intentionally contains no backend addresses or flags.

export function setApiBase(_base: string) {
  // no-op in frontend-only mode
}

export function setOfflineMode(_on: boolean) {
  // no-op in frontend-only mode
}

export function apiUrl(_path: string) {
  return '';
}

export default {
  setApiBase,
  setOfflineMode,
  apiUrl,
};
