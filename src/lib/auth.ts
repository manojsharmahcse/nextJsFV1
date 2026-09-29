// Replace with Auth.js / Clerk / your own session logic.
export type Session = { user: { id: string; name: string; email: string } } | null;

export async function getSession(): Promise<Session> {
  // TODO: read the session cookie and return the user
  // Temporary stub so the dashboard is viewable while developing:
  return { user: { id: "1", name: "Demo User", email: "demo@example.com" } };
}
