const foods = [
  { name: "Round Pizza", desc: "Cheese, sauce, and fresh toppings.", price: 35 },
  { name: "Burger & Potato Fries", desc: "Juicy burger with crispy fries.", price: 28 },
  { name: "Grilled Lamb Platter", desc: "Tender lamb with sides.", price: 40 },
];

export default function FoodMenu() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-14">
      <h1 className="font-serif text-[52px] leading-none text-black/80">Food Menu</h1>
      <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-black/60">
        This is a working route so the navbar doesn’t break. Next, we can build your full
        Figma menu layout (grid cards / categories / etc.).
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {foods.map((f) => (
          <div
            key={f.name}
            className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-[26px] text-black/75">{f.name}</h3>
              <div className="rounded-md bg-[#8C6A2A] px-3 py-1 text-sm font-semibold text-white">
                ${f.price}
              </div>
            </div>
            <p className="mt-3 text-[14px] leading-7 text-black/55">{f.desc}</p>

            <button className="mt-6 w-full rounded-md bg-[#8C6A2A] py-2 text-sm font-semibold text-white">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
