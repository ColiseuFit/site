"use client";

/**
 * Skeleton Loader para o Dashboard Principal do Aluno.
 * Simula as seções de Perfil, XP, Stats e WOD.
 */
export default function AppSkeleton() {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "480px", margin: "0 auto", padding: "0 16px" }}>
        
        {/* Header/Profile Skeleton */}
        <div style={{ paddingTop: "28px", paddingBottom: "24px", display: "flex", gap: "16px" }}>
          <div style={{ width: "72px", height: "72px", background: "var(--surface-lowest)", border: "1px solid var(--border-glow)", animation: "pulse 1.5s infinite ease-in-out" }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: "10px", width: "80px", background: "var(--surface-low)", marginBottom: "8px", animation: "pulse 1.5s infinite ease-in-out" }} />
            <div style={{ height: "28px", width: "180px", background: "var(--surface-low)", marginBottom: "12px", animation: "pulse 1.5s infinite ease-in-out" }} />
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ height: "16px", width: "60px", background: "var(--surface-low)", animation: "pulse 1.5s infinite ease-in-out" }} />
              <div style={{ height: "16px", width: "60px", background: "var(--surface-low)", animation: "pulse 1.5s infinite ease-in-out" }} />
            </div>
          </div>
        </div>

        {/* XP Bar Skeleton */}
        <div style={{ background: "var(--surface-lowest)", height: "60px", border: "1px solid var(--border-glow)", marginBottom: "16px", animation: "pulse 1.5s infinite ease-in-out" }} />

        {/* Stats Grid Skeleton */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
          <div style={{ background: "var(--surface-lowest)", height: "100px", border: "1px solid var(--border-glow)", animation: "pulse 1.5s infinite ease-in-out" }} />
          <div style={{ background: "var(--surface-lowest)", height: "100px", border: "1px solid var(--border-glow)", animation: "pulse 1.5s infinite ease-in-out" }} />
        </div>

        {/* WOD Section Skeleton */}
        <div style={{ background: "var(--surface-lowest)", height: "400px", border: "1px solid var(--border-glow)", animation: "pulse 1.5s infinite ease-in-out" }} />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
