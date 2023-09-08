[![CI & CD](https://github.com/EscalaFacil/admin/actions/workflows/firebase-rules-merge.yml/badge.svg)](https://github.com/EscalaFacil/admin/actions/workflows/firebase-rules-merge.yml)

## Requirements
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Authentication
Authenticate with Firebase using your Google account by running the following command:
```bash
firebase login
```

## Docs
- [Firestore Rules](https://firebase.google.com/docs/rules)

## Deploy
Run the file `deploy.sh` or run the following command:
```bash
firebase deploy --only firestore:rules
```