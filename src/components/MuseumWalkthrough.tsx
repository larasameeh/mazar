type MuseumWalkthroughProps = {
  videoId: string;
};

export function MuseumWalkthrough({ videoId }: MuseumWalkthroughProps) {
  return (
    <section className="section walkthrough-section" id="walkthrough" aria-labelledby="walkthrough-title">
      <div className="section__header section__header--wide">
        <p className="section__eyebrow">Museum Walkthrough</p>
        <h2 id="walkthrough-title">Museum Walkthrough</h2>
      </div>

      <div className="walkthrough-frame">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="MAZAR museum walkthrough video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
