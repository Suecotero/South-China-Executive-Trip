# Private pre-trip questionnaire

This repo now includes a private, single-client onboarding questionnaire for Daniel Bradtke for the Sept 18–24, 2026 Shenzhen + Guilin / Yangshuo trip.

## Route
- Private URL: /welcome/daniel-8f3k2q
- The page is hidden from navigation and includes a noindex / nofollow meta tag.

## Netlify setup
Set these environment variables in Netlify:
- RESEND_API_KEY

## Resend steps
1. Create a Resend account and add your domain.
2. Verify the sinocircuit.net domain in Resend.
3. Ensure DNS records for SPF and DKIM are present for the domain.
4. Use the from address onboarding@sinocircuit.net.

## Notes
- Passport numbers are only included in the email to Matias.
- Answers are autosaved in browser localStorage and cleared after a successful submission.
