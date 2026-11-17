 "use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Expand, Gift, Heart, Sparkles, X } from "lucide-react";

type Stage = "closed" | "opening" | "revealed";

export default function ChristmasGift() {
  const [stage, setStage] = useState<Stage>("closed");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (stage !== "opening") return;
    const timer = window.setTimeout(() => setStage("revealed"), 1550);
    return () => window.clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openGift = () => {
    if (stage === "closed") setStage("opening");
  };

  return (
    <main className="experience">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" aria-hidden="true" />

      <header className="topline">
        <span className="topline-mark"><Sparkles size={13} /> A LITTLE CHRISTMAS MAGIC</span>
        <span className="topline-year">A GIFT FOR YOU</span>
      </header>

      <AnimatePresence mode="wait">
        {stage !== "revealed" ? (
          <motion.section
            key="welcome"
            className={`welcome-stage ${stage === "opening" ? "is-opening" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.55 }}
            aria-live="polite"
          >
            <div className="eyebrow"><span /> A CHRISTMAS SURPRISE <span /></div>
            <h1>A little something<br /><em>just for you.</em></h1>
            <p className="intro">A special Christmas gift is waiting to be unwrapped.</p>

            <button
              type="button"
              className="gift-button"
              onClick={openGift}
              disabled={stage === "opening"}
              aria-label="Open your Christmas gift"
            >
              <div className="gift-scene">
                <div className="gift-halo" />
                <div className="gift-spark spark-a">✦</div>
                <div className="gift-spark spark-b">✧</div>
                <div className="gift-spark spark-c">✦</div>
                <div className="gift-box">
                  <div className="gift-lid">
                    <div className="lid-ribbon" />
                    <div className="bow">
                      <span className="bow-loop bow-left" />
                      <span className="bow-loop bow-right" />
                      <span className="bow-knot" />
                    </div>
                  </div>
                  <div className="gift-body">
                    <div className="body-ribbon" />
                    <div className="gift-front-shine" />
                  </div>
                </div>
                <div className="gift-shadow" />
              </div>
              <span className="tap-hint">{stage === "opening" ? "UNWRAPPING YOUR SURPRISE…" : "TAP THE GIFT TO OPEN"}</span>
            </button>

            <button className="open-link" type="button" onClick={openGift} disabled={stage === "opening"}>
              <Gift size={15} strokeWidth={1.7} />
              {stage === "opening" ? "Please wait…" : "Open your gift"}
            </button>
            <p className="personal-note">From Kuya Moyie, Ate Anne &amp; Calix</p>
          </motion.section>
        ) : (
          <motion.section
            key="reveal"
            className="reveal-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="reveal-heading"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="eyebrow"><span /> THE SURPRISE IS YOURS <span /></div>
              <h2>Merry Christmas, <em>Ella.</em></h2>
              <p>Your Christmas getaway awaits.</p>
            </motion.div>

            <motion.div
              className="invitation-frame"
              initial={{ opacity: 0, y: 38, scale: 0.94, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.2, 0.75, 0.25, 1] }}
            >
              <div className="frame-corner corner-tl" />
              <div className="frame-corner corner-tr" />
              <div className="frame-corner corner-bl" />
              <div className="frame-corner corner-br" />
              <button
                className="invitation-image-button"
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label="View invitation larger"
              >
                <Image
                  src="/images/christmas-invitation.jpeg"
                  alt="Christmas invitation for Ms. Ella Ege to an overnight getaway at Pearl Farm Beach Resort, Davao, December 5 to 6."
                  width={1170}
                  height={1260}
                  priority
                  className="invitation-image"
                  sizes="(max-width: 700px) 90vw, 620px"
                />
                <span className="image-expand"><Expand size={15} /> VIEW FULL SIZE</span>
              </button>
            </motion.div>

            <motion.div
              className="reveal-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.7 }}
            >
              <Heart size={14} fill="currentColor" />
              <span>RELAX · UNWIND · BE TOGETHER</span>
              <Heart size={14} fill="currentColor" />
            </motion.div>
            <motion.p
              className="reveal-signature"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.7 }}
            >
              
            </motion.p>
            <button className="replay-link" type="button" onClick={() => setStage("closed")}>
              Replay the surprise
            </button>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="site-footer">
        <span>MADE WITH LOVE</span>
        <span className="footer-star">✦</span>
        <span>A CHRISTMAS TO REMEMBER</span>
      </footer>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Full-size Christmas invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close full-size invitation"
            >
              <X size={22} />
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.92, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src="/images/christmas-invitation.jpeg"
                alt="Full-size Christmas invitation"
                width={1170}
                height={1260}
                className="lightbox-image"
                sizes="95vw"
              />
            </motion.div>
            <span className="lightbox-hint">TAP OUTSIDE OR PRESS ESC TO CLOSE</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}