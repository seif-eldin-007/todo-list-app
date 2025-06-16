import env from "@/config/env";

/**
 * A higher-order function to protect API routes in a development environment.
 * It checks for a 'dev' search parameter and validates it against a secret code.
 * @param {Function} handler The original API route handler.
 * @returns {Function} The wrapped handler with authentication logic.
 */
export function withDevAuth(handler) {
  return async function (request, ...args) {
    const { searchParams } = new URL(request.url);
    const devCode = searchParams.get("dev");

    // In production, this check is skipped, and the original handler is called.
    if (env.ENV === 'production') {
      return handler(request, ...args);
    }

    // In development, we require the secret code.
    if (devCode !== env.DEV_SECRET_CODE) {
      return new Response("Unauthorized: Correct 'dev' secret code is required.", { status: 401 });
    }

    return handler(request, ...args);
  };
}
