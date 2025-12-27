import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  widthClassName?: string;
};

export function ModalImage({ open, onClose, src, alt, widthClassName = "w-[900px]" }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Dialog"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`relative ${widthClassName} max-w-[95vw]`}>
        <button
          type="button"
          aria-label="Close dialog"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full bg-white/80 text-black shadow-soft hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
        >
          ✕
        </button>

        <img src={src} alt={alt} className="h-auto w-full rounded-2xl shadow-card" draggable={false} />
      </div>
    </div>
  );
}
