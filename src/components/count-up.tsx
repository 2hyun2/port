"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

const format = (value: number, suffix: string) => `${value.toLocaleString("ko-KR")}${suffix}`;

/**
 * 화면에 보이면 0부터 value까지 숫자를 올립니다.
 * JS가 없거나, 움직임 최소화 설정이거나, 화면을 그리지 않는 환경이면 최종값을 그대로 보여 줍니다.
 */
export function CountUp({ value, suffix = "", duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (document.visibilityState === "hidden") return;

    const showFinal = () => { element.textContent = format(value, suffix); };
    let frame = 0;
    let reported = false;
    let finishTimer = 0;
    element.textContent = format(0, suffix);

    const observer = new IntersectionObserver(([entry]) => {
      reported = true;
      if (!entry.isIntersecting) return;
      observer.disconnect();
      // 프레임이 밀리거나 멈춰도 최종값에 반드시 도달
      finishTimer = window.setTimeout(() => { cancelAnimationFrame(frame); showFinal(); }, duration + 300);
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = format(Math.round(value * (1 - Math.pow(1 - progress, 3))), suffix);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(element);

    // 관찰 결과가 아예 오지 않으면(화면을 그리지 않는 환경) 최종값 표시
    const silentTimer = window.setTimeout(() => {
      if (reported) return;
      observer.disconnect();
      showFinal();
    }, 2000);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(finishTimer);
      window.clearTimeout(silentTimer);
      showFinal();
    };
  }, [value, suffix, duration]);

  return <span ref={ref}>{format(value, suffix)}</span>;
}
