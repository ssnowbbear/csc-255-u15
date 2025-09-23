import type { RequestEvent } from '@sveltejs/kit';
export declare const sessionCookieName = "auth-session";
export declare function generateSessionToken(): string;
export declare function createSession(token: string, userId: string): Promise<table.Session>;
export declare function validateSessionToken(token: string): Promise<{
    session: any;
    user: any;
}>;
export type SessionValidationResult = Awaited<ReturnType<typeof validateSessionToken>>;
export declare function invalidateSession(sessionId: string): Promise<void>;
export declare function setSessionTokenCookie(event: RequestEvent, token: string, expiresAt: Date): void;
export declare function deleteSessionTokenCookie(event: RequestEvent): void;
//# sourceMappingURL=auth.d.ts.map