export default function QuoteSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <p className="mb-6 text-2xl font-serif italic text-black/80">
          “Coffee Is A Way Of Stealing Time Which Should By Rights Belong To Your Older Self.”
        </p>

        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl">☕</span>
          <span className="text-sm font-medium tracking-wide text-black/60">
            — MR. CAFE
          </span>
        </div>
      </div>
    </section>
  );
}
