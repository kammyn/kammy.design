export function BackgroundAura() {
  return (
    <div aria-hidden className="site-background">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/daybg.png"
        alt=""
        className="site-background__image site-background__image--day"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/nightbg.png"
        alt=""
        className="site-background__image site-background__image--night"
      />
    </div>
  );
}
