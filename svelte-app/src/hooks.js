import { deLocalizeUrl } from '$lib/paraglide/runtime';
export const reroute = (request) => deLocalizeUrl(request.url).pathname;
//# sourceMappingURL=hooks.js.map