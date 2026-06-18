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

If Git integration stays broken, add these repository secrets and use `.github/workflows/vercel-production.yml`:

| Secret | Value |
|--------|--------|
| `VERCEL_TOKEN` | From [Vercel Account → Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | `team_EIbjFXaDDtGMTweb5Hvo3CG3` |
| `VERCEL_PROJECT_ID` | `prj_OuvKZgtynEsc3OfkRx2SLEKIo1lj` |

Pushes to `main` will then deploy via Actions.

## Manual CLI deploy

```bash
npx vercel link   # project: silverstoneranchhomes.com
npx vercel deploy --prod
```

Requires `vercel login` on your machine.
