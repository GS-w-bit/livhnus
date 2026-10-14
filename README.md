# LIVHNUS website: Liverpool Head & Neck Ultrasound Course

Static HTML/CSS/vanilla-JS site for GitHub Pages (custom domain: livhnus.com). No framework, backend or database.

Built from the Canva design (Liv_HNUS.pdf) and logo (png.png). Fonts are Montserrat and Questrial (self-hosted from
`assets/fonts`, SIL Open Font Licence, so no request goes to Google Fonts). Brand colours are in `:root` in `assets/css/styles.css`.

## Preview locally
```
python3 -m http.server 8000
```
Open http://localhost:8000/. Pages: `/`, `/about/`, `/course-information/`, `/programme/`, `/testimonials/`, `/register/`, `/contact/`, `/privacy-policy/`.

## Settings still to supply (dashed "Need this: ..." labels on the site)
Search the project for `Need this` to find every remaining placeholder.
- **Google Form links:** edit `assets/js/config.js` (registration, enquiry, testimonial; optional Google reviews and WhatsApp). Until set, each form area shows a placeholder notice instead of a broken link. Use the normal form link ending in `/viewform`; the script adds `embedded=true`. Set `embedForms:false` to show a link only.
- **Testimonials:** add approved entries manually in `testimonials/index.html` (see the comment in the file). Only publish names/roles/photos with permission.
- **About:** further qualifications and verified achievements for Dr Sharma.
- **Course information:** intended audience, eligibility, cancellation/refund policy.
- **Programme:** prerequisites, if any.
- **Registration page:** any further steps after submission.
- **Privacy policy:** confirm purposes, retention, data controller and legal wording (currently a draft).
- **Professional disclaimer:** none shown. Add to the footer in `build` pages if the owner wants one.

## Content to confirm (found in the Canva PDF)
- The signature reads "Dr Gaj Sharma"; the faculty card reads "Dr Gajraj Sharma". The site uses the latter.
- Dr M Lofthouse appears in the Day 2 timetable but not in the faculty list. Dr A Camenzuli is in the faculty list but not the timetable.
- Day 2 has no session between 13:45 and 14:00. The 11:00 and 11:30 "Metastatic neck" sessions are identical in the source.
- Sessions marked "tbc" in the source (neck anatomy speaker, new techniques speaker, course dinner venue) are shown as tbc.
- "Surgical faculty" (item 10) and "Dr N Roland, Consultant Head & Neck Surgeon" (item 13) are copied as supplied.
- Two empty "Dr." faculty cards in the Canva design are not reproduced.
- The portrait supplied is only 211x285 px. A larger photo would look sharper.
- The Canva "Gallery" page was "Coming soon" and is not included. Add it later if wanted.
- The illustration used behind "Our mission" in Canva is not included (licence unknown).
- Spelling fixed from the source: "preparation", "Faculty", "consists of".

## Structured data
`Organization` (home) and `Event` with the two fee offers (course information) use only details from the Canva design. Update or remove the Event block after the course dates pass.

## Deploy (preview first)
1. Push to a GitHub repo. Settings > Pages > Deploy from branch `main`, folder `/ (root)`.
2. Test on the `github.io` preview URL. (`404.html` uses root-absolute asset paths, so its styling only loads correctly on the custom domain.)
3. After owner approval only: add custom domain `livhnus.com`. Inspect existing DNS first and keep email (MX) records. Add GitHub's A/AAAA records for the apex and a CNAME for `www`, then enable HTTPS.
4. Verify in Google Search Console and submit `https://livhnus.com/sitemap.xml`.
Do not take down the existing Canva site until the new one is approved.

## Notes
- Google Form iframes cannot auto-size. Heights are set in CSS (`.form-embed iframe`); a direct fallback link is always shown. Test on a phone.
- No analytics are included. Add only if approved, and update the privacy policy.
