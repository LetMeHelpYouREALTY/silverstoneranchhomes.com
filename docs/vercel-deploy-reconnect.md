# Vercel Deploy Reconnect (Required After GitHub Org Transfer)

**Site:** https://www.silverstoneranchhomes.com  
**Vercel project:** [silverstoneranchhomes.com](https://vercel.com/janet-duffys-projects/silverstoneranchhomes.com)  
**Project ID:** `prj_OuvKZgtynEsc3OfkRx2SLEKIo1lj`  
**Team ID:** `team_EIbjFXaDDtGMTweb5Hvo3CG3`

## Problem

`main` includes Calendly + SEO updates, but production still serves a **December 2025** deployment (`dpl_BHPeFDG1wg3Jy3MvbLRiyaAJrvna`).

Cause: the GitHub repo moved to **LetMeHelpYouREALTY/silverstoneranchhomes.com**, while Vercel’s last successful deploy metadata still references **DrJanDuffy**. The Git webhook no longer fires on merge.

## Fastest fix (recommended)

1. Open [Vercel → silverstoneranchhomes.com → Settings → Git](https://vercel.com/janet-duffys-projects/silverstoneranchhomes.com/settings/git)
2. **Disconnect** the stale Git connection (if it shows DrJanDuffy or errors)
3. **Connect** to `LetMeHelpYouREALTY/silverstoneranchhomes.com` → branch `main`
4. Go to [Deployments](https://vercel.com/janet-duffys-projects/silverstoneranchhomes.com/deployments)
5. Click **Redeploy** on latest `main`, or push an empty commit to trigger a build

## Verify Calendly is live

After deploy completes, check:

- https://www.silverstoneranchhomes.com/contact — should show **Schedule Time With Dr. Duffy** (not “Send a Message” form)
- Page source includes `assets.calendly.com` and `Schedule Your Silverstone Ranch Consultation`
- Floating **Schedule time with me** badge bottom-right

## Optional: GitHub Actions fallback

The workflow in `.github/workflows/vercel-production.yml` already pins the live org/project IDs and uses Vercel CLI `47.2.2+` (`amondnet/vercel-action@v25` ships CLI 25 and is rejected by the current API).

Required repository secret:

| Secret | Value |
|--------|--------|
| `VERCEL_TOKEN` | From [Vercel Account → Tokens](https://vercel.com/account/tokens) |

Pushes to `main` then deploy via Actions. Org/project IDs are hardcoded because stale `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` secrets after the GitHub org transfer previously failed with “Project not found”.

## Manual CLI deploy

```bash
npx vercel link   # project: silverstoneranchhomes.com
npx vercel deploy --prod
```

Requires `vercel login` on your machine.
