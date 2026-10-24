"use client";

import { useState } from "react";
import type { PublishingWork } from "@/lib/publishing";

const DISPLAYED_WORK_COUNT = 6;

const initialFeaturedSlugs = [
  "everybot",
  "kofulso",
  "daycus",
  "orlic",
  "kws",
  "samsung-shi",
] as const;

const excludedFeaturedSlugs = new Set(["gs-gypsum-board"]);

type DisplayablePublishingWork = PublishingWork & {
  finalUrl: string;
  thumbnail: NonNullable<PublishingWork["thumbnail"]>;
};

type PublishingArchiveProps = {
  works: readonly PublishingWork[];
  contribution: number;
};

function isDisplayableWork(work: PublishingWork): work is DisplayablePublishingWork {
  return Boolean(work.finalUrl && work.thumbnail);
}

function getDisplayableWorks(works: readonly PublishingWork[]) {
  return works.filter(isDisplayableWork).filter((work) => !excludedFeaturedSlugs.has(work.slug));
}

function getInitialWorks(works: readonly PublishingWork[]) {
  const worksBySlug = new Map(works.map((work) => [work.slug, work]));
  const selectedWorks = initialFeaturedSlugs.flatMap((slug) => {
    const work = worksBySlug.get(slug);

    return work && isDisplayableWork(work) ? [work] : [];
  });

  if (selectedWorks.length === DISPLAYED_WORK_COUNT) {
    return selectedWorks;
  }

  const additionalWorks = getDisplayableWorks(works).filter(
    (work) => !selectedWorks.some((selectedWork) => selectedWork.slug === work.slug),
  );

  return [...selectedWorks, ...additionalWorks].slice(0, DISPLAYED_WORK_COUNT);
}

function shuffleWorks<T>(works: readonly T[]) {
  const shuffledWorks = [...works];

  for (let index = shuffledWorks.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledWorks[index], shuffledWorks[randomIndex]] = [shuffledWorks[randomIndex], shuffledWorks[index]];
  }

  return shuffledWorks;
}

function getRandomWorks(works: readonly PublishingWork[], currentSlugs: readonly string[]) {
  const displayableWorks = getDisplayableWorks(works);

  if (displayableWorks.length <= DISPLAYED_WORK_COUNT) {
    return displayableWorks;
  }

  let nextWorks = shuffleWorks(displayableWorks).slice(0, DISPLAYED_WORK_COUNT);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    if (nextWorks.some((work) => !currentSlugs.includes(work.slug))) {
      return nextWorks;
    }

    nextWorks = shuffleWorks(displayableWorks).slice(0, DISPLAYED_WORK_COUNT);
  }

  return nextWorks;
}

export function PublishingArchive({
  works,
  contribution,
}: PublishingArchiveProps) {
  const [featuredWorks, setFeaturedWorks] = useState(() => getInitialWorks(works));
  const [announcement, setAnnouncement] = useState("");

  function showRandomWorks() {
    const nextWorks = getRandomWorks(works, featuredWorks.map((work) => work.slug));

    setFeaturedWorks(nextWorks);
    setAnnouncement(`다른 작업물 ${nextWorks.length}개를 표시했습니다.`);
  }

  return (
    <section id="publishing" className="home-slide publishing-section">
      <div className="home-layout-inner">
        <div className="home-intro-box publishing-intro">
          <div className="publishing-intro-copy">
            <p className="eyebrow">에이전시 작업물</p>
            <h2 id="publishing-heading">여러 기업과 기관의<br />웹사이트를 만들었습니다.</h2>
            <p className="intro-description">에이전시에서 제작한 기업과 기관, 브랜드 사이트 작업물 중 일부를 소개합니다.</p>
            <p className="publishing-contribution"><span>기여도</span><strong>{contribution}%</strong></p>
          </div>
        </div>

        <div className="publishing-actions">
          <button className="publishing-random-button" type="button" onClick={showRandomWorks}>
            <span className="material-symbols-outlined">shuffle</span>
            다른 작업물 보기
          </button>
        </div>

        <p className="publishing-status">{announcement}</p>

        <ul id="publishing-work-list" className="publishing-work-grid">
          {featuredWorks.map((work) => {
            return (
              <li key={work.slug}>
                <article className="publishing-card">
                  <a href={work.finalUrl} target="_blank" rel="noreferrer">
                    <div className="publishing-thumbnail">
                      {/* OG 이미지의 원본 비율을 유지하기 위해 Next Image 최적화를 적용하지 않습니다. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={work.thumbnail.src} alt={work.thumbnail.alt} />
                    </div>
                    <div className="publishing-card-copy">
                      <h3>{work.title}</h3>
                    </div>
                  </a>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="publishing-note">버튼을 누르면 다른 작업물 여섯 개를 무작위로 볼 수 있습니다.</p>
      </div>
    </section>
  );
}
