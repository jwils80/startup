# Step 6: Authorize GitHub Extension and Push

## Goal
Make sure VS Code GitHub authentication is complete, then perform your first successful push.

## Instructions
1. In VS Code, open your `github-startup` folder.
2. Click the **Accounts** icon (top-right).
3. Confirm your GitHub account is signed in.
4. If you are not signed in, click **Sign in with GitHub** and complete browser authorization.
5. Open `README.md` and add one line: `Setup check completed.`
6. Save the file.
7. Open **Source Control**.
8. Enter commit message: `Setup check`.
9. Click **Commit**.
10. Click **Sync Changes** (or **Push**).
11. If prompted, complete any browser authorization for Git Credential Manager or VS Code, then return to VS Code.
12. Open your `github-startup` repo on GitHub and confirm the new line appears in `README.md`.

## Troubleshooting
- If push fails with `failed to authenticate`, check the global helper:
  - `git config --global credential.helper`
- If it returns `store`, unset it so macOS/VS Code can use native credential flow:
  - `git config --global --unset credential.helper`
- If you are pushing from terminal/CLI tools, log in to GitHub CLI:
  - `gh auth login`

## Checklist
- [ ] I confirmed GitHub sign-in from the VS Code **Accounts** menu.
- [ ] I committed and pushed from VS Code.
- [ ] I completed any first-push browser authorization prompt.
- [ ] I confirmed the pushed change on github.com.
- [ ] I know the credential helper fix if auth fails.
