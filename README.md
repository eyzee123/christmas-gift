# Christmas Surprise Invitation

A luxury, mobile-first interactive Christmas gift invitation built with Next.js, TypeScript, Tailwind CSS, and Motion. The gift box opens to reveal the supplied invitation image.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- Replace `public/images/christmas-invitation.jpeg` to use a different invitation image. Keep the same filename, or update the image path in `src/components/ChristmasGift.tsx`.
- Edit the opening and reveal text in `src/components/ChristmasGift.tsx`.
- Adjust colors, layout, and gift styling in `src/app/globals.css`.

The invitation currently uses the supplied image exactly as uploaded. The date is not separately hard-coded in the website because the year was not specified in the artwork.

## Deploy to Vercel

1. Create a new GitHub repository and push this project.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as Next.js.
4. Use `npm install` as the install command and `npm run build` as the build command (Vercel usually detects these automatically).
5. Click **Deploy**.
6. Share the generated `*.vercel.app` URL with the recipient.

No database, environment variables, or server-side API are required.

## Notes

- The invitation opens only after the visitor clicks the gift or the open button.
- The revealed image can be tapped to view it larger; tap outside or press Escape to close.
- Background music is intentionally not included. Browsers generally block autoplay audio until a visitor interacts, and no music file was supplied.
