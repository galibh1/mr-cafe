export default function Contact() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-14">
      <h1 className="font-serif text-[52px] leading-none text-black/80">Contact Us</h1>
      <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-black/60">
        Working contact page. Next we can match Figma exactly (map section, contact cards, etc.).
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          <h3 className="font-serif text-[28px] text-black/75">Get in touch</h3>

          <div className="mt-5 space-y-3 text-[15px] text-black/65">
            <div>
              <span className="font-semibold text-black/70">Phone:</span>{" "}
              <a className="underline underline-offset-4" href="tel:+3025550107122">
                (+302) 555-0107-122
              </a>
            </div>
            <div>
              <span className="font-semibold text-black/70">Email:</span>{" "}
              <a className="underline underline-offset-4" href="mailto:hello@mrcafe.com">
                hello@mrcafe.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-black/70">Hours:</span> 08:00am - 10:00pm
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          <h3 className="font-serif text-[28px] text-black/75">Message</h3>

          <form className="mt-5 grid gap-4">
            <input
              className="h-12 rounded-md border border-black/10 bg-white px-4 text-[14px] text-black/70 outline-none"
              placeholder="Your name"
            />
            <input
              className="h-12 rounded-md border border-black/10 bg-white px-4 text-[14px] text-black/70 outline-none"
              placeholder="Your email"
            />
            <textarea
              className="min-h-[140px] rounded-md border border-black/10 bg-white px-4 py-3 text-[14px] text-black/70 outline-none"
              placeholder="Write your message..."
            />
            <button
              type="button"
              className="h-12 rounded-md bg-[#8C6A2A] text-[14px] font-semibold text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
