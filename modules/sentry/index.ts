import * as Sentry from "@sentry/nextjs";

Sentry.init({
  enabled: true,
  // NOTE: Use your DSN. Both release and environment can be hardcoded
  // release: <process.env.sentryRelease>,
  // environment: <process.env.targetEnvironment>,
  // dsn: <process.env.dsn>,
  tracesSampleRate: 0.0001,
  sampleRate: 1,
  allowUrls: [
    // NOTE: Use your base domain or omit
    // /https?:\/\/create\.roblox\.com/,
  ],
  denyUrls: [
    // NOTE: Used to explicitly removing errors from chrome extensions
    /extensions\//i,
    /^chrome(-extensions?)?:\/\//i
  ],
  beforeSend: (event, _) => {
    // NOTE(jcountryman, 03/16/2023): See
    // https://github.com/getsentry/sentry-javascript/pull/3842
    // and https://github.com/getsentry/sentry-javascript/issues/3147.
    // Anonymous  values are ignored by `allowUrls` and `denyUrls`
    // if they're in the last frame. However, if they are in all frames, this
    // error should be dropped (i.e. likely a web extension or browser issues instead)
    const frames = (event.exception?.values || [])[0]?.stacktrace?.frames;
    if (
      frames?.every(
        (frame) =>
          !frame.filename ||
          frame.filename === "<anonymous>" ||
          frame.filename === "[native code]"
      )
    ) {
      return null;
    }
    return event;
  }
});
