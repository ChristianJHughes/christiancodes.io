# [christiancodes.io](https://www.christiancodes.io)

The **[christiancodes.io](https://www.christiancodes.io)** website.

Built with **[Next.js 16](https://nextjs.org/)**, **[React 19](https://react.dev/)**,
and **[Tailwind CSS 4](https://tailwindcss.com/)**. Blog posts use MDX with the Pages Router.
Hosted on **[▲ Vercel](https://vercel.com/)**.

## Getting Started

[Node.js `24.x`](https://nodejs.org/en/) is required. The exact local version is
specified in `.tool-versions`.

1. Clone the repository:

   ```bash
   git clone https://github.com/ChristianJHughes/christiancodes.io.git
   cd christiancodes.io
   ```

1. Install project dependencies:

   ```bash
   npm ci
   ```

1. Start the Next.js development server:

   ```bash
   npm run dev
   ```

Congrats! The site is running locally at [http://localhost:3000](http://localhost:3000).

## Validation

Run `npm run lint` and `npm run build` before opening a pull request. Next.js 16
does not run ESLint as part of the build. Use `npm start` to preview the production build.

## Updating the resume

Replace `public/christian-hughes-resume-public.pdf` with the public resume PDF.
The `/resume` route rewrites to this file, so navigation links do not need to change.

## Dependency compatibility

ESLint stays on the latest 9.x release because `eslint-plugin-react`, used by
`eslint-config-next`, does not yet support ESLint 10.

The scoped overrides in `package.json` select patched `postcss-selector-parser`
and `minimatch` versions for Tailwind Typography and the TypeScript ESLint parser.
Remove them when those upstream packages adopt the patched versions.
