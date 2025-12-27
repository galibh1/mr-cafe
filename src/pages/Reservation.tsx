export default function Reservation() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-14">
      <h1 className="font-serif text-[52px] leading-none text-black/80">Reservation</h1>
      <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-black/60">
        This is a real reservation form (working UI). If you want it to submit somewhere,
        tell me your preferred backend (or we can store locally for now).
      </p>

      <div className="mt-10 max-w-[760px] rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <form className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-black/70">Full Name</span>
            <input
              className="h-12 rounded-md border border-black/10 bg-white px-4 text-[14px] text-black/70 outline-none"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-black/70">Phone</span>
            <input
              className="h-12 rounded-md border border-black/10 bg-white px-4 text-[14px] text-black/70 outline-none"
              placeholder="+1 555 000 0000"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-black/70">Date</span>
            <input
              type="date"
              className="h-12 rounded-md border border-black/10 bg-white px-4 text-[14px] text-black/70 outline-none"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-black/70">Time</span>
            <input
              type="time"
              className="h-12 rounded-md border border-black/10 bg-white px-4 text-[14px] text-black/70 outline-none"
            />
          </label>

          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-medium text-black/70">Notes</span>
            <textarea
              className="min-h-[120px] rounded-md border border-black/10 bg-white px-4 py-3 text-[14px] text-black/70 outline-none"
              placeholder="Any requests..."
            />
          </label>

          <button
            type="button"
            className="md:col-span-2 h-12 rounded-md bg-[#8C6A2A] text-[14px] font-semibold text-white"
          >
            Book Your Table
          </button>
        </form>
      </div>
    </div>
  );
}
