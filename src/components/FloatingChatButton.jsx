import { MessageCircle } from "lucide-react";

export function FloatingChatButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 text-2xl text-white shadow-[0_30px_60px_-25px_rgba(225,29,72,0.55)] ring-4 ring-white/20 transition hover:scale-105 hover:shadow-[0_36px_75px_-30px_rgba(225,29,72,0.65)] focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200 animate-pulse-soft hover:animate-none sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="Ouvrir le chat Dona"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={1.8} />
    </button>
  );
}
