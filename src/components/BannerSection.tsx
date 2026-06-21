import { Maximize2 } from "lucide-react";
import type { BannerConfig } from "../types";

type BannerSectionProps = {
  config: BannerConfig;
};

function GoogleDriveMark() {
  return (
    <span className="drive-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M8.1 3.5h7.8l6.1 10.6h-7.8L8.1 3.5Z" fill="#fbbc04" />
        <path d="M2 14.1 8.1 3.5l3.9 6.8-6.1 10.2L2 14.1Z" fill="#34a853" />
        <path d="M5.9 20.5 9.8 14h12.2l-3.9 6.5H5.9Z" fill="#4285f4" />
      </svg>
    </span>
  );
}

export function BannerSection({ config }: BannerSectionProps) {
  const hasPreview = Boolean(config.previewImage);
  const hasFullImage = Boolean(config.fullImage);
  const hasProjectFiles = Boolean(config.externalLink);

  return (
    <section className="section banner-section" id="banner" aria-labelledby="banner-title">
      <div className="section__header banner-section__header">
        <p className="section__eyebrow">Graduation Banner</p>
        <div className="banner-title-row">
          <h2 id="banner-title">Presentation board</h2>
          {hasProjectFiles ? (
            <a className="button button--primary banner-drive-button" href={config.externalLink} target="_blank" rel="noreferrer">
              <GoogleDriveMark />
              View project files
            </a>
          ) : null}
        </div>
      </div>

      <div className="banner-panel">
        <div className="banner-preview">
          {hasPreview ? (
            <img src={config.previewImage} alt="Preview of MAZAR graduation banner" loading="lazy" />
          ) : (
            <div className="banner-preview__placeholder" aria-label="Banner preview pending">
              <span>MAZAR</span>
              <strong>Presentation board</strong>
            </div>
          )}
          {hasFullImage ? (
            <a
              className="gallery__fullscreen banner-preview__fullscreen"
              href={config.fullImage}
              target="_blank"
              rel="noreferrer"
              aria-label="Open full-resolution presentation board"
            >
              <Maximize2 size={18} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
