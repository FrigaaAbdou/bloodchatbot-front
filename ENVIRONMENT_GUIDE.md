# Frontend Environment Guide

This project expects environment variables to be provided via files named `.env`, `.env.local`, or your hosting platform's configuration UI. For Vite builds, only variables prefixed with `VITE_` are exposed to the browser at compile time.

## Required Variables

| Variable | Description | Example |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Base URL for the backend chat API. Use a full origin (including protocol and port). Defaults to `http://localhost:3000` if not set. | `https://api.example.com` |

## Sample `.env.local`

```bash
# URL of the Express backend
VITE_API_BASE_URL="https://api.example.com"
```

> ⚠️ Do not commit `.env`, `.env.local`, or other files containing secrets. Add them to `.gitignore` and configure them in your deployment platform (Vercel/Netlify/etc.) through environment settings.

## Sensitive Files to Ignore

Ensure the following files are ignored by Git in your frontend repository:

- `.env`
- `.env.local`
- `.env.*.local`
- `*.env`

These files may contain API URLs or tokens that should not be exposed publicly.

## Deployment Notes

1. Configure `VITE_API_BASE_URL` in your hosting environment before building.
2. Rebuild the frontend whenever `.env` values change (Vite only embeds them at build time).
3. Never expose confidential values that do not start with `VITE_`; Vite will strip them and they are not available in the browser bundle.
