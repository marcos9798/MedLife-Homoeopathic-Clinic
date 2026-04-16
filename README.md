# MedLife Homoeopathic Clinic Website

A modern, premium, multilingual clinic website ready for static hosting (Netlify compatible).

## Included pages
- `index.html` – Landing page, services, doctor profile, appointment form, testimonials, FAQs, blog preview.
- `signup.html` – Mandatory-field patient registration with age auto-calc, GPS detect helper, and 2-step OTP simulation.
- `login.html` – Patient login via Gmail or phone, OTP step, forgot password flow.
- `admin.html` – Admin dashboard for visits, booking flow, payment status, case status updates, and blog publishing.

## Run locally
Open `index.html` in a browser (or run with any static file server).

## Deploy to Netlify
1. Push this repository to GitHub/GitLab.
2. In Netlify, click **Add new site → Import from Git**.
3. Build command: *(none required)*
4. Publish directory: `/`
5. Deploy.

## Important production note
This project currently uses `localStorage` for demo data and OTP simulation only. For real production use, integrate:
- Secure backend authentication
- Real OTP provider (SMS/Email)
- Real payment gateway/UPI intent handling
- Encrypted patient data storage and role-based admin auth
