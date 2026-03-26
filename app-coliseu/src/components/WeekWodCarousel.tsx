"use client";

import Link from "next/link";
import { hapticSelect } from "@/lib/haptic";
import { useEffect, useRef } from "react";

interface WodDay {
  date: string;
  dayLabel: string;
  isToday: boolean;
  isRest: boolean;
  title: string;
  tags: string[];
}

interface WeekWodCarouselProps {
  wods: WodDay[];
  selectedDate: string;
}

/**
 * Carrossel horizontal de WODs da semana.
 * Auto-centraliza o dia selecionado e inclui navegação por setas e haptic feedback.
 */
export default function WeekWodCarousel({ wods, selectedDate }: WeekWodCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (selectedRef.current && scrollRef.current) {
      selectedRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [selectedDate]);

  const scrollBy = (direction: "left" | "right") => {
    hapticSelect();
    scrollRef.current?.scrollBy({ left: direction === "left" ? -120 : 120, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", margin: "0 0 16px" }}>
      {/* Seta Esquerda */}
      <button
        onClick={() => scrollBy("left")}
        style={{
          position: "absolute", left: "4px", top: "50%", transform: "translateY(-50%)",
          zIndex: 10, background: "rgba(14,14,14,0.8)", border: "1px solid var(--border-glow)",
          color: "var(--text-dim)", width: "24px", height: "24px",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", backdropFilter: "blur(4px)",
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>chevron_left</span>
      </button>

      {/* Seta Direita */}
      <button
        onClick={() => scrollBy("right")}
        style={{
          position: "absolute", right: "4px", top: "50%", transform: "translateY(-50%)",
          zIndex: 10, background: "rgba(14,14,14,0.8)", border: "1px solid var(--border-glow)",
          color: "var(--text-dim)", width: "24px", height: "24px",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", backdropFilter: "blur(4px)",
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>chevron_right</span>
      </button>

      {/* Lista Rolável */}
      <div
        ref={scrollRef}
        style={{
          display: "flex", overflowX: "auto", gap: "8px",
          padding: "4px 32px", scrollbarWidth: "none",
        }}
      >
        {wods.map((wod) => {
          const isSelected = wod.date === selectedDate;
          const dateObj = new Date(wod.date + "T00:00:00Z");
          const dayNum = dateObj.getUTCDate();
          const month = dateObj.toLocaleDateString("pt-BR", { month: "short", timeZone: "UTC" });

          return (
            <Link
              key={wod.date}
              href={`/app?date=${wod.date}`}
              ref={isSelected ? (selectedRef as React.Ref<HTMLAnchorElement>) : undefined}
              onClick={hapticSelect}
              style={{
                textDecoration: "none", flexShrink: 0,
                display: "flex", flexDirection: "column", alignItems: "center",
                padding: "12px 14px", minWidth: "72px",
                background: isSelected ? "var(--red)" : wod.isToday ? "rgba(227,27,35,0.08)" : "var(--surface-lowest)",
                border: isSelected ? "1px solid var(--red)" : wod.isToday ? "1px dashed rgba(227,27,35,0.3)" : "1px solid var(--border-glow)",
                color: isSelected ? "#fff" : "var(--text-muted)",
                transition: "all 0.15s ease",
              }}
            >
              <span style={{ fontSize: "8px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: isSelected ? "rgba(255,255,255,0.7)" : "var(--text-dim)", marginBottom: "6px" }}>
                {wod.dayLabel}
              </span>
              <span className="font-display" style={{ fontSize: "22px", lineHeight: 1, fontWeight: 900, color: isSelected ? "#fff" : wod.isToday ? "var(--red)" : "var(--text)" }}>
                {wod.isRest ? "🛡" : dayNum}
              </span>
              <span style={{ fontSize: "7px", color: isSelected ? "rgba(255,255,255,0.6)" : "var(--text-dim)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {month}
              </span>
              {!wod.isRest && (
                <span style={{ fontSize: "7px", fontWeight: 700, marginTop: "6px", letterSpacing: "0.05em", color: isSelected ? "rgba(255,255,255,0.8)" : "var(--text-dim)", textTransform: "uppercase", maxWidth: "60px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {wod.title}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
