[![Run tests and deploy Firestore Rules](https://github.com/EscalaFacil/admin/actions/workflows/workflow-merge.yml/badge.svg)](https://github.com/EscalaFacil/admin/actions/workflows/workflow-merge.yml)

## Requirements
- [Firebase CLI](https://firebase.google.com/docs/cli)
- [Java 8 or above](https://www.java.com/)
- [Node.js 18 or above](https://nodejs.org/)

## Authentication
Authenticate with Firebase using your Google account by running the following command:
```bash
firebase login
```

## Docs
- [Firestore Rules](https://firebase.google.com/docs/rules)

## Testing
Run the following command:
```bash
npm run test:rules
```

## Deploy Firestore Rules
The deployment is done automatically by GitHub Actions when a new commit is pushed to the `main` branch.

## Deploying Firestore Rules Manually
It's not advised to deploy manually, but if you need to, run the following command:
```bash
npm run deploy:rules
```