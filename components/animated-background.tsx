"use client"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -right-1/3 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-amber-600/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
