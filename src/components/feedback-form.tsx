"use client";

import { useState, type FormEvent } from "react";

import styles from "./feedback-form.module.css";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FEEDBACK_FORM_ID;
const SUBMISSION_KEY = "portfolio-feedback-submitted-at";

type SubmitState = "idle" | "sending" | "success" | "error";

const ratings = [1, 2, 3, 4, 5] as const;

export function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [opinionLength, setOpinionLength] = useState(0);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const opinion = String(formData.get("opinion") ?? "").trim();
    const gotcha = String(formData.get("_gotcha") ?? "");
    const anonymous = formData.get("anonymous") === "on";
    const previousSubmittedAt = Number(window.localStorage.getItem(SUBMISSION_KEY));

    if (!rating) {
      setSubmitState("error");
      setMessage("전체적인 인상을 별점으로 선택해 주세요.");
      return;
    }

    if (opinion.length < 10) {
      setSubmitState("error");
      setMessage("종합 의견은 10자 이상 남겨 주세요.");
      return;
    }

    if (previousSubmittedAt) {
      setSubmitState("error");
      setMessage("이 브라우저에서는 이미 의견을 남겼습니다. 고맙습니다.");
      return;
    }

    if (gotcha) {
      setSubmitState("success");
      setMessage("의견을 보내주셔서 고맙습니다.");
      return;
    }

    if (anonymous) {
      formData.set("name", "익명");
    }

    if (!FORM_ID) {
      setSubmitState("error");
      setMessage("피드백 전송 설정을 준비 중입니다.");
      return;
    }

    setSubmitState("sending");
    setMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.localStorage.setItem(SUBMISSION_KEY, String(Date.now()));
        setSubmitState("success");
        setMessage("의견을 보내주셔서 고맙습니다. 작성자에게만 전달됩니다.");
        form.reset();
        setRating(0);
        setIsAnonymous(false);
        setOpinionLength(0);
        return;
      }

      if (response.status === 429) {
        setMessage("요청이 많습니다. 잠시 후 다시 시도해 주세요.");
      } else {
        setMessage("전송하지 못했습니다. 잠시 후 다시 시도해 주세요.");
      }

      setSubmitState("error");
    } catch {
      setSubmitState("error");
      setMessage("네트워크를 확인한 뒤 다시 시도해 주세요.");
    }
  }

  return (
    <section id="feedback" className={styles.section}>
      <div className={styles.intro}>
        <p className="eyebrow">피드백</p>
        <h2>포트폴리오를 보셨다면,<br />한마디 남겨주세요.</h2>
        <p className={styles.description}>좋았던 점과 아쉬웠던 점 모두 괜찮습니다. 남겨주신 내용은 웹사이트에 공개되지 않고 작성자에게만 전달됩니다.</p>
        <p className={styles.notice}>같은 브라우저에서는 한 번만 보낼 수 있습니다.</p>
      </div>

      {submitState === "success" ? (
        <div className={styles.complete}>
          <span className="material-symbols-outlined">check_circle</span>
          <h3>의견을 받았습니다.</h3>
          <p>{message}</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.ratingField}>
            <div>
              <p className={styles.label}>전체적인 인상 <em>필수</em></p>
              <p className={styles.hint}>별 하나부터 다섯 개까지 선택해 주세요.</p>
            </div>
            <div className={styles.ratingOptions}>
              {ratings.map((value) => (
                <label key={value} className={`${styles.ratingOption} ${value <= rating ? styles.isActive : ""}`}>
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    checked={rating === value}
                    onChange={() => setRating(value)}
                  />
                  <span className="material-symbols-outlined">{value <= rating ? "star" : "star_border"}</span>
                  <span>{value}점</span>
                </label>
              ))}
            </div>
          </div>

          <div className={`${styles.field} ${styles.nameField}`}>
            <label>
              <span className={styles.label}>이름 또는 닉네임 <em>선택</em></span>
              <input
                name="name"
                type="text"
                maxLength={30}
                placeholder="이름 또는 닉네임"
                autoComplete="name"
                disabled={isAnonymous}
              />
            </label>
            <label className={styles.anonymousOption}>
              <input name="anonymous" type="checkbox" checked={isAnonymous} onChange={(event) => setIsAnonymous(event.target.checked)} />
              <span>익명으로 보내기</span>
            </label>
          </div>

          <div className={styles.fieldGrid}>
            <label className={styles.field}>
              <span className={styles.label}>인상 깊었던 부분 <em>선택</em></span>
              <textarea name="impressive" maxLength={500} rows={5} placeholder="예: 프로젝트 설명이 한눈에 들어왔어요." />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>개선하면 좋을 부분 <em>선택</em></span>
              <textarea name="improvement" maxLength={500} rows={5} placeholder="예: 기술적인 고민을 조금 더 보고 싶어요." />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>종합 의견 <em>필수</em></span>
            <textarea
              name="opinion"
              required
              minLength={10}
              maxLength={1000}
              rows={6}
              placeholder="포트폴리오를 보고 느낀 점을 자유롭게 남겨주세요."
              onChange={(event) => setOpinionLength(event.target.value.length)}
            />
            <small className={styles.count}>{opinionLength} / 1000</small>
          </label>

          <label className={styles.gotcha}>
            웹사이트
            <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </label>

          {submitState === "error" && <p className={styles.message}>{message}</p>}

          <button className={styles.submit} type="submit" disabled={submitState === "sending"}>
            {submitState === "sending" ? "의견 보내는 중..." : "피드백 보내기"}
            <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </form>
      )}
    </section>
  );
}
