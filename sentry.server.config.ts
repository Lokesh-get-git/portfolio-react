// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://011bc126efa76e077f9b59edc84dc116@o4507951729410048.ingest.us.sentry.io/4507962181025792",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
});
