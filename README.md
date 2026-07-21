# Private pre-trip questionnaire

This repo now includes a private, single-client onboarding questionnaire for Daniel Bradtke for the Sept 18–24, 2026 Shenzhen + Guilin / Yangshuo trip.

## Route
- Private URL: /welcome/daniel-8f3k2q
- The page is hidden from navigation and includes a noindex / nofollow meta tag.

## Netlify setup
Set these environment variables in Netlify:
- SMTP_HOST
- SMTP_PORT
- SMTP_SECURE
- SMTP_USER
- SMTP_PASS

Use the credentials for the existing Namecheap Private Email mailbox on the sinocircuit.net domain.

- Port 465 uses SSL and should be configured with `SMTP_SECURE=true`.
- Port 587 uses STARTTLS and should be configured with `SMTP_SECURE=false`.

## Notes
- Passport numbers are only included in the email to Matias.
- Answers are autosaved in browser localStorage and cleared after a successful submission.
