"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** 화면에 들어온 [data-reveal] 요소에 is-revealed를 붙여 등장 애니메이션을 실행합니다. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    let reported = false;
    const observer = new IntersectionObserver(
      (entries) => {
        reported = true;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    // 화면을 그리지 않는 환경(일부 크롤러·캡처 도구)에서는 관찰이 오지 않으므로 모두 보여 줌
    const fallback = window.setTimeout(() => {
      if (reported) return;
      observer.disconnect();
      targets.forEach((target) => target.classList.add("is-revealed"));
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
