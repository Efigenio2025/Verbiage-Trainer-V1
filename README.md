# Verbiage-Trainer-V1

## Overview
This Next.js project renders the Ramp Verbiage Trainer sign-in experience.

## Configuring authorized users
Set the `NEXT_PUBLIC_AUTHORIZED_USERS` environment variable to a comma-separated list of Ramp employee IDs that should have access to the trainer. For local development, create a `.env.local` file in the project root:

```
NEXT_PUBLIC_AUTHORIZED_USERS=1234,5678,9012
```

The UI will validate submitted employee IDs against this allowlist and display whether access is granted.

## Development scripts
- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production build locally
- `npm run lint` – lint the project
