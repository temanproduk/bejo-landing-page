const PLAY_PACKAGE = "com.temanproduk.bejo";

/**
 * Play Store link for a given spot on the site.
 *
 * Google forwards whatever sits in `referrer` to the Install Referrer API, so
 * the campaign data survives the install and shows up in Play Console. The
 * value has to be a single encoded query string, not separate params.
 */
export function playUrl(placement: string): string {
  const referrer = new URLSearchParams({
    utm_source: "bejo_landing",
    utm_medium: "website",
    utm_campaign: "install_app",
    utm_content: placement,
  }).toString();

  return (
    `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}` +
    `&referrer=${encodeURIComponent(referrer)}`
  );
}

/** Default install link, used where no more specific placement applies. */
export const PLAY_URL = playUrl("umum");

/** Where brands start a voice-ad campaign. */
export const BRAND_CTA_URL = "https://jo.temanproduk.com";
