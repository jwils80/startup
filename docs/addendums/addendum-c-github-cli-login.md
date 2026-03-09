# Addendum C (Optional): Log In to GitHub CLI (`gh`)

## Goal
Authenticate terminal tools (including AI coding agents running in terminal context) with your GitHub account.

## Instructions
1. Run: `gh auth login`
2. Use these choices when prompted:
   - Account: `GitHub.com`
   - Protocol for Git operations: `HTTPS`
   - Authenticate Git with GitHub credentials: `Yes`
   - Authentication method: `Login with a web browser`
3. Copy the one-time code shown in terminal.
4. Open <https://github.com/login/device>.
5. Paste the code and authorize.
6. Verify with: `gh auth status -h github.com`

## Checklist
- [ ] I completed `gh auth login`.
- [ ] I authorized via `https://github.com/login/device`.
- [ ] `gh auth status -h github.com` shows I am logged in.
