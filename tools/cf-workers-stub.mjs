// Ersatz für das Modul „cloudflare:workers“, damit Node den Worker laden kann (GitHub-Check, lokale Tests).
// Aufruf: node --import ./tools/cf-workers-stub.mjs …  — Cloudflare/Wrangler nutzen das echte Modul.
import { register } from "node:module";
const stub = "export class DurableObject{constructor(ctx,env){this.ctx=ctx;this.env=env}}";
register("data:text/javascript," + encodeURIComponent(`
export async function resolve(spec, ctx, next){
  if(spec === "cloudflare:workers") return { url: "data:text/javascript,${encodeURIComponent(stub)}", shortCircuit: true };
  return next(spec, ctx);
}`));
