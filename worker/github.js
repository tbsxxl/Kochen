// Mehrere Dateien in einem Commit auf GitHub anlegen (Git-Data-API).
// Braucht ein Fine-grained Token mit „Contents: Read and write“ nur für dieses Repository.

export class GitHub {
  constructor(token, repo, branch, base){
    this.base = base || "https://api.github.com";
    this.token = token;
    this.repo = repo;
    this.branch = branch || "main";
  }

  async api(path, init = {}){
    const res = await fetch(`${this.base}/repos/${this.repo}${path}`, {
      ...init,
      headers: {
        "Authorization": `Bearer ${this.token}`,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "tobis-kochbuch-worker",
        ...(init.body ? { "Content-Type": "application/json" } : {})
      }
    });
    if(res.status === 404 && init.allow404) return null;
    if(!res.ok){
      let msg = "";
      try{ msg = (await res.json()).message || ""; }catch{}
      throw new Error(`GitHub ${res.status}${msg ? ": " + msg : ""}`);
    }
    return res.status === 204 ? null : res.json();
  }

  async exists(path){
    const r = await this.api(`/contents/${encodeURI(path)}?ref=${encodeURIComponent(this.branch)}`, { allow404: true });
    return !!r;
  }

  // files: [{ path, content (base64) }]
  async commit(files, message){
    const ref = await this.api(`/git/ref/heads/${encodeURIComponent(this.branch)}`);
    const parent = ref.object.sha;
    const parentCommit = await this.api(`/git/commits/${parent}`);
    const tree = [];
    for(const f of files){
      const blob = await this.api(`/git/blobs`, { method: "POST", body: JSON.stringify({ content: f.content, encoding: "base64" }) });
      tree.push({ path: f.path, mode: "100644", type: "blob", sha: blob.sha });
    }
    const newTree = await this.api(`/git/trees`, { method: "POST", body: JSON.stringify({ base_tree: parentCommit.tree.sha, tree }) });
    const commit = await this.api(`/git/commits`, { method: "POST", body: JSON.stringify({ message, tree: newTree.sha, parents: [parent] }) });
    await this.api(`/git/refs/heads/${encodeURIComponent(this.branch)}`, { method: "PATCH", body: JSON.stringify({ sha: commit.sha }) });
    return commit.sha;
  }
}
