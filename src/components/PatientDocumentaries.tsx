const PLAYLIST_ID = "PLu5_mp4Nk_R0TlcTOK-YBXRwMH0T48JA_";

const DOCUMENTARY_VIDEOS = [
  {
    name: "The Tummy Tuck Surgery: A Real-Life Documentary of Transformation & Healing",
    description:
      "A real patient documentary following a tummy tuck and 360-degree liposuction journey, from consultation and surgery through healing and recovery.",
    videoId: "etkaDnKVXic",
    uploadDate: "2025-07-13T20:28:43+00:00",
  },
  {
    name: "Morpheus8 Patient Experience at Dr. Sunita Aesthetics",
    description:
      "A patient conversation about choosing Morpheus8, the treatment experience, and the changes noticed during the skin-tightening journey.",
    videoId: "T4fvx0VU-yo",
    uploadDate: "2025-04-11T10:30:19+00:00",
  },
  {
    name: "Gynecomastia Surgery in Visakhapatnam: Patient Case Study",
    description:
      "A patient-focused gynecomastia surgery case study covering treatment, recovery, and the before-and-after journey with Dr. Sunita Ghanta.",
    videoId: "xglfMidbq8I",
    uploadDate: "2024-12-01T04:07:18+00:00",
  },
] as const;

const videoStructuredData = {
  "@context": "https://schema.org",
  "@graph": DOCUMENTARY_VIDEOS.map((video) => ({
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    uploadDate: video.uploadDate,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
  })),
};

export function PatientDocumentaries() {
  return (
    <section
      id="patient-documentaries"
      aria-labelledby="patient-documentaries-title"
      className="bg-cream px-6 py-[72px] lg:px-[72px] lg:py-[88px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto grid max-w-[1296px] items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
            REAL PATIENT JOURNEYS
          </p>
          <h2
            id="patient-documentaries-title"
            className="mt-2 max-w-[560px] font-serif text-[30px] leading-[1.35] text-black lg:text-[38px]"
          >
            Plastic Surgery Patient Documentaries in Visakhapatnam
          </h2>
          <p className="mt-5 max-w-[570px] font-sans text-[17px] leading-[29px] text-gray-text">
            Explore real patient case studies and documentaries about plastic surgery in
            Visakhapatnam with Dr. Sunita Ghanta. These long-form stories offer an honest look at
            consultation, treatment planning, surgery, recovery, and individual patient
            experiences.
          </p>
          <p className="mt-4 max-w-[570px] font-sans text-[15px] leading-[25px] text-gray-text">
            Watch documented journeys across procedures and aesthetic treatments to better
            understand the process before making an informed decision. Every patient experience
            is individual, and results may vary.
          </p>
          <a
            href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-[12px] bg-maroon-btn px-6 font-sans text-[15px] font-bold text-white shadow-[0_12px_24px_-12px_rgba(161,83,78,0.7)] transition-colors hover:bg-maroon"
          >
            View all patient documentaries
          </a>
        </div>

        <div className="overflow-hidden rounded-[24px] bg-black shadow-[0_28px_56px_-24px_rgba(161,83,78,0.55)]">
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}&rel=0`}
            title="Plastic surgery patient documentaries in Visakhapatnam by Dr. Sunita Ghanta"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
