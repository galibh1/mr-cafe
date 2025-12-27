export default function About() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-14">
      <h1 className="font-serif text-[52px] leading-none text-black/80">About Us</h1>
      <p className="mt-5 max-w-[780px] text-[15px] leading-7 text-black/60">
        MR. CAFE is a cozy place for great coffee, fresh pastries, and warm conversations.
        This page is now a real working route (not an image). Next we can match the exact
        About layout from your Figma.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          <h3 className="font-serif text-[26px] text-black/75">Quality Beans</h3>
          <p className="mt-3 text-[14px] leading-7 text-black/55">
            Freshly roasted beans with rich aroma and balanced flavor.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          <h3 className="font-serif text-[26px] text-black/75">Fresh Bakes</h3>
          <p className="mt-3 text-[14px] leading-7 text-black/55">
            Daily bakes inspired by classic pastry techniques.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          <h3 className="font-serif text-[26px] text-black/75">Warm Space</h3>
          <p className="mt-3 text-[14px] leading-7 text-black/55">
            A calm atmosphere to read, work, or meet friends.
          </p>
        </div>
      </div>
    </div>
  );
}
