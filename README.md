# dweb.net — Upload Guide (v3, flat files)

This version puts **all files in the repo root** (no `assets/` folder) so you can select them all when uploading in GitHub.

## Files to upload (drag all of these into the repo root)
index.html
styles.css
script.js
logo-horizontal.png
team.jpg
favicon-32.png
favicon-64.png
favicon-180.png
favicon-512.png
favicon.ico

## Contact Form (Formspree)
1) Go to https://formspree.io/ and create a form (free tier is fine).  
2) Copy your form ID (looks like `xrgvwdje`).  
3) Open `script.js` and replace `YOUR_FORM_ID` with your ID.  
4) Commit the change and test the form on your site.

## GitHub Pages
Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: /(root).  
Custom domain: `www.dweb.net` (no protocol, no slash). Turn on Enforce HTTPS after the cert appears.
