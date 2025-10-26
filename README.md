# dweb.net — GitHub Pages + GoDaddy

This site is a fast, single‑page static site. Hosting on GitHub Pages is free; you only pay GoDaddy for the domain.

## Edit
- Update copy in `index.html` (company name, sections, etc.).
- Twitter link lives in the header/footer (`https://twitter.com/dwebnet` — replace if needed).
- Contact email is `bob@dweb.net`.

## Deploy to GitHub Pages (free)
1. Create a new GitHub repository (public is simplest). Name doesn’t matter.
2. Upload these files to the repo’s root and commit to the **main** branch.
3. Go to **Settings → Pages**:  
   - **Source**: *Deploy from a branch*  
   - **Branch**: `main` — **/ (root)**  
   GitHub will publish at `https://<username>.github.io/<repo>/`

## Connect your custom domain (dweb.net) in GitHub
1. In **Settings → Pages**, under **Custom domain**, enter **www.dweb.net** and save. Enable **Enforce HTTPS** once the certificate is ready.
   - GitHub will create a `CNAME` file automatically that points to `www.dweb.net`.
2. (Optional) Also add **dweb.net** (apex) in the same box so both `www` and apex work.

## Set DNS in GoDaddy
Open your domain’s DNS (GoDaddy → Domains → dweb.net → DNS). Add or edit these records:

- **CNAME** (for the `www` subdomain)  
  - **Type**: CNAME  
  - **Host/Name**: `www`  
  - **Value/Points to**: `<your‑username>.github.io`  
  - **TTL**: 1 hour (or default)

- **A** records (for apex domain `dweb.net`)  
  Create **four** A records pointing to GitHub Pages’ IPs:  
  - `185.199.108.153`  
  - `185.199.109.153`  
  - `185.199.110.153`  
  - `185.199.111.153`

> After DNS propagates (usually minutes to a couple of hours), `https://www.dweb.net` should serve the site. If you also added the apex, `https://dweb.net` will work too. Keep **Enforce HTTPS** on.

## Local Preview
Open `index.html` directly, or run:  
```
python -m http.server
```
Then visit `http://localhost:8000`.

## Notes
- Because this is GitHub Pages (static hosting), forms require a third‑party service. This template uses mailto links to `bob@dweb.net`.
- If you later want form handling without a backend, consider Formspree or Netlify Forms (which would require hosting on Netlify).
