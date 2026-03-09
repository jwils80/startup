# GitHub Starter Tutorial: Toolchain Setup for New Builders

This tutorial only handles setup.

Goal: create one GitHub repository named `github-startup`, clone it locally, and complete a fully authenticated first push from VS Code.

No HTML, CSS, or development experience is required.

After setup is complete, you can move to one of the build tracks:
- Week 8 Personal Dashboard
- Project #5 Research Dashboard

---

## What You'll Finish

By the end, you will have:
- a GitHub repository named `github-startup`
- a local clone in `Documents/GitHub/github-startup`
- VS Code connected to your GitHub account
- Antigravity pointed at that local folder
- one commit pushed from VS Code as a setup check
- a temporary GitHub Pages URL proving deployment works
- optional addendums for Codex, Claude Code, and GitHub CLI auth if needed

---

## Step 0: Start Here First (Required)

Before you begin Step 1, create your own copy of this tutorial repo so you can track progress.

1. Create a GitHub account (if needed).
2. Open this starter repository.
3. In the repository header row (same row as **Star**), click **Use this template**.
4. Create a new repository under your own account.
5. Continue this tutorial from your new repository copy.

> Do **not** click the green **Code** button for this step.
> If **Use this template** is missing, make sure you are signed in and viewing desktop layout.
>
> Progress checkboxes and issue closing should happen in your own repo copy, not the original starter repo.

---

## Choose Your Tracking Mode

### Track A (Recommended): Generated Issues

- Open the **Actions** tab in your own repo.
- Run **Initialize Tutorial Issues**.
- It creates issues from required steps (`docs/steps/`) and optional addendums (`docs/addendums/`).
- Complete and close each issue as you go.

### Track B (Optional): File-Based Steps + Progress Tracker

- Read each step file in `docs/steps/`.
- Create one issue from the **Tutorial Progress Tracker** issue template.
- Check off progress in that single tracker issue.

---

## Required Setup Steps

- [ ] [Step 1: Create Your Account and Tutorial Copy](docs/steps/01-account-and-template.md)
- [ ] [Step 2: Create Local Repo Folder and Install VS Code](docs/steps/02-install-tools.md)
- [ ] [Step 3: Link VS Code to GitHub](docs/steps/03-link-vscode-to-github.md)
- [ ] [Step 4: Clone `github-startup` in VS Code Source Control](docs/steps/04-clone-repo-locally.md)
- [ ] [Step 5: Link Antigravity to `github-startup`](docs/steps/05-link-antigravity.md)
- [ ] [Step 6: Authorize GitHub Extension and Push](docs/steps/06-authorize-github-extension-and-push.md)
- [ ] [Step 7: Deploy `github-startup` to GitHub Pages](docs/steps/07-deploy-temporary-pages.md)
- [ ] [Step 8: Choose Your Project Path](docs/steps/08-choose-project-path.md)

## Optional Addendums

- [ ] [Addendum A (Optional): Link Codex to `github-startup`](docs/addendums/addendum-a-link-codex.md)
- [ ] [Addendum B (Optional): Link Claude Code to `github-startup`](docs/addendums/addendum-b-link-claude-code.md)
- [ ] [Addendum C (Optional): Log In to GitHub CLI (`gh`)](docs/addendums/addendum-c-github-cli-login.md)

---

## Project Paths After Setup

Once setup is complete, choose one:

- **Personal Dashboard**
  - Repo: <https://github.com/sicxz/wk8-link-dashboard-assignment>
  - Issues: <https://github.com/sicxz/wk8-link-dashboard-assignment/issues>
- **Research Dashboard for Project 2**
  - Repo: <https://github.com/sicxz/project5-research-dashboard-assignment>
  - Issues: <https://github.com/sicxz/project5-research-dashboard-assignment/issues>

Note: The Week 8 URL includes `link-dashboard` from earlier naming. In this tutorial we call it **Personal Dashboard**.

---

## Need Help?

- If a tool cannot see files, confirm you opened `Documents/GitHub/github-startup`.
- If VS Code cannot clone from GitHub, re-check Step 3 sign-in.
- If push fails with `failed to authenticate`, run `git config --global credential.helper`.
- If helper is `store`, run `git config --global --unset credential.helper` and try push again.
- If terminal tools cannot authenticate, run `gh auth login` (see Addendum C).
- If GitHub Pages does not update immediately, wait 2-5 minutes and hard refresh.

---

## Why GitHub?

From real-world AI development workflows, GitHub is the fastest way to get running because it gives you one shared source of truth for your code.

- Your repository is the handoff point between you and AI tools.
- You get version history, rollback, and clear change tracking by default.
- You can deploy quickly with GitHub Pages and share a working URL.
- You can switch between Antigravity, Codex, and Claude Code without changing your core workflow.

---

Small setup wins now make every project easier later.
