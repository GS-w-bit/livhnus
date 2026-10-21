# LIVHNUS website: Liverpool Head & Neck Ultrasound Course

Static HTML/CSS/vanilla-JS site for GitHub Pages (custom domain: livhnus.com). No framework, backend or database.
Fonts (Montserrat, Questrial) are self-hosted in `assets/fonts` (SIL Open Font Licence). Brand colours are in `:root` in `assets/css/styles.css`.

## Pages
`/` Home, `/faculty/`, `/course-information/`, `/programme/`, `/testimonials/`, `/gallery/`, `/register/`, `/contact/`, `/terms/`, `/privacy-policy/`.
`/about/` is now just a redirect to `/faculty/` so old links keep working.

## Preview locally
```
python3 -m http.server 8000
```

## Things you will edit
- **Google Form links:** `assets/js/config.js` (registration, and later the feedback form). Leave `""` and the page shows a "coming soon" message.
- **Testimonials:** open `testimonials/index.html`, find the "HOW TO ADD A TESTIMONIAL" comment, copy the block, and delete the "coming soon" line. Only publish names/roles with permission.
- **Faculty bios and photos:** in `faculty/index.html`, each faculty card is a `<li class="fac">`. Replace the `<svg class="avatar">` with `<img>` and add a short bio paragraph.
- **Gallery:** `gallery/index.html` currently says "Coming soon".
- **Terms and privacy:** `terms/index.html` and `privacy-policy/index.html`.
- **Dates, fees, venue:** search for the text to change (for example `31 March 2027`) across the files. Also update the Event data (JSON-LD) at the top of `course-information/index.html`.

## Deploy
1. Push to a GitHub repo. Settings > Pages > Deploy from branch `main`, folder `/ (root)`.
2. Test on the `github.io` preview URL. (`404.html` uses root-absolute asset paths, so its styling only loads correctly on the custom domain.)
3. After approval only: add custom domain `livhnus.com`. Inspect existing DNS first and keep email (MX) records. Add GitHub's A/AAAA records for the apex and a CNAME for `www`, then enable HTTPS.
4. Verify in Google Search Console and submit `https://livhnus.com/sitemap.xml`.

## Notes
- Google Form iframes cannot auto-size. Heights are set in CSS (`.form-embed iframe`); a direct fallback link is always shown. Test on a phone.
- Embedded forms only work if the form does not require sign-in (no "limit to 1 response", no verified email collection, no file uploads).
- No analytics are included. If added, update the privacy policy.
