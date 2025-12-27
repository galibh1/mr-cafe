const drinks = [
  { name: "Espresso", desc: "Strong and rich shot of coffee.", price: 6 },
  { name: "Latte", desc: "Espresso with steamed milk.", price: 10 },
  { name: "Cappuccino", desc: "Espresso, milk, and foam.", price: 10 },
  { name: "Americano", desc: "Espresso with hot water.", price: 8 },
  { name: "Mocha", desc: "Espresso with chocolate and milk.", price: 12 },
  { name: "Iced Latte", desc: "Chilled latte served over ice.", price: 12 },
];

export default function CoffeeDrinks() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-14">
      <h1 className="font-serif text-[52px] leading-none text-black/80">Coffee & Drinks</h1>
      <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-black/60">
        A simple working menu page for now. If your Figma includes a full drinks page,
        upload/screenshot it and I’ll match it section-by-section.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {drinks.map((d) => (
          <div
            key={d.name}
            className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-[26px] text-black/75">{d.name}</h3>
              <div className="rounded-md bg-[#8C6A2A] px-3 py-1 text-sm font-semibold text-white">
                ${d.price}
              </div>
            </div>
            <p className="mt-3 text-[14px] leading-7 text-black/55">{d.desc}</p>

            <button className="mt-6 w-full rounded-md bg-[#8C6A2A] py-2 text-sm font-semibold text-white">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
