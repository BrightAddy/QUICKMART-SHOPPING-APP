// apiClient stubbed to remove all network usage for a frontend-only project.
// This returns resolved promises so existing imports keep working but no
// network requests are performed.

export type FetchOptions = any;

export async function apiFetch(path: string, options: FetchOptions = {}) {
  // small artificial delay to mimic async behavior
  await new Promise((res) => setTimeout(res, 50));
  // return a generic successful response
  return { ok: true, data: {} };
}

export default { apiFetch };
