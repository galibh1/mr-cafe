import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import herocup from "../assets/herocup.png";
import shakeImg from "../assets/glutcup.png";

import group91 from "../assets/Group 91.png";
import group132 from "../assets/Group 132.png";
import group154 from "../assets/Group 154.png";
import frame12 from "../assets/Frame 12.png";

import foodLamb from "../assets/food-lamb.png";
import foodPizza from "../assets/food-pizza.png";
import foodBurger from "../assets/food-burger.png";

type Quote = {
  text: string;
  author: string;
};

type Product = {
  id: string;
  name: string;
  desc: string;
  img: string;
  priceLabel: string;
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1200px] px-4">{children}</div>;
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-[34px] leading-tight text-[#2A241F] md:text-[42px]">{title}</h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-[820px] text-[13px] leading-6 text-black/55 md:text-[14px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function PromoImageCard({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-black shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
      <img src={image} alt={alt} className="h-[280px] w-full object-cover md:h-[300px]" draggable={false} />
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_16px_35px_rgba(0,0,0,0.08)]">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-[#B2872B] px-3 py-1 text-[12px] font-semibold text-white">
            {product.priceLabel}
          </span>
          <div className="text-[13px] text-[#B2872B]">★★★★★</div>
        </div>

        <div className="mt-5 grid place-items-center">
          <img
            src={product.img}
            alt={product.name}
            className="h-[170px] w-auto object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.18)]"
            draggable={false}
          />
        </div>

        <h3 className="mt-4 text-center font-serif text-[22px] text-black/80">{product.name}</h3>
        <p className="mt-2 text-center text-[13px] leading-6 text-black/50">{product.desc}</p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-[13px]">
            <span className="font-semibold text-[#B2872B]">10%</span>{" "}
            <span className="text-black/55">Off for new Customer</span>
          </p>
          <button className="rounded-md bg-[#B2872B] px-4 py-2 text-[12px] font-semibold text-white hover:brightness-95">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function FoodCard({ title, img, priceLabel }: { title: string; img: string; priceLabel: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white px-6 pb-6 pt-5 shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-[#B2872B] px-4 py-2 text-[12px] font-semibold text-white">{priceLabel}</span>
          <button className="rounded-md border border-black/10 bg-white px-5 py-2 text-[12px] text-black/55">
            ★★★★★
          </button>
        </div>

        <div className="mt-5 grid place-items-center">
          <img
            src={img}
            alt={title}
            className="h-[170px] w-auto object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.18)]"
            draggable={false}
          />
        </div>

        <h3 className="mt-4 text-center font-serif text-[20px] text-black/80">{title}</h3>
        <p className="mt-2 text-center text-[12px] leading-6 text-black/50">
          Espresso, Milk, Ice and Choice of Flavor(s) - 20oz
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-[12px]">
            <span className="font-semibold text-[#B2872B]">10%</span>{" "}
            <span className="text-black/55">Off for new Customer</span>
          </p>
          <button className="rounded-md bg-[#B2872B] px-4 py-2 text-[12px] font-semibold text-white hover:brightness-95">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [idx, setIdx] = useState(0);
  const q = quotes[idx] ?? quotes[0];

  return (
    <section className="relative bg-white py-16">
      <Container>
        <div className="mx-auto max-w-[880px] text-center">
          <div className="relative">
            <div className="absolute -left-10 -top-10 text-[90px] leading-none text-black/10 md:-left-16 md:-top-14">
              “
            </div>
            <div className="absolute -bottom-16 -right-10 text-[90px] leading-none text-black/10 md:-right-16">
              ”
            </div>
            <p className="mx-auto max-w-[760px] font-serif text-[28px] leading-tight text-[#2A241F] md:text-[34px]">
              {q.text}
            </p>
          </div>

          <div className="mt-6 grid place-items-center gap-2">
            <div className="text-[32px]">☕</div>
            <div className="text-[12px] font-semibold tracking-[0.22em] text-black/50">{q.author}</div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to quote ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === idx ? "bg-[#B2872B]" : "bg-black/15 hover:bg-black/25"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({ title }: { title: string }) {
  // FIX: Use glutcup.png for ALL category cards (no sprite slicing).
  return (
    <div className="group rounded-2xl bg-white shadow-[0_14px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="h-[260px] w-full bg-white" />
        <div className="absolute inset-0 grid place-items-center">
          <img
            src={shakeImg}
            alt={title}
            draggable={false}
            className="h-[210px] w-auto object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.18)]"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5" />
      </div>

      <div className="-mt-10 pb-6 text-center">
        <div className="inline-flex rounded-full bg-white/90 px-6 py-2 font-serif text-[18px] text-black/70 shadow">
          {title}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const quotes: Quote[] = useMemo(
    () => [
      {
        text: "Coffee Is A Way Of Stealing Time Which Should By Rights Belong To Your Older Self.",
        author: "MR. CAFE",
      },
      {
        text: "Behind Every Successful Person Is A Substantial Amount Of Coffee.",
        author: "MR. CAFE",
      },
      {
        text: "Life Happens. Coffee Helps.",
        author: "MR. CAFE",
      },
    ],
    []
  );

  const popular: Product[] = useMemo(
    () => [
      {
        id: "iced-latte",
        name: "Iced Latte Vertical",
        desc: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
        img: shakeImg,
        priceLabel: "$ 5",
      },
      {
        id: "skinny-latte",
        name: "Skinny Latte",
        desc: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
        img: shakeImg,
        priceLabel: "$ 5",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        desc: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
        img: shakeImg,
        priceLabel: "$ 5",
      },
    ],
    []
  );

  return (
    <div>
      {/* HERO */}
      <section className="bg-[#F6EFE6] pt-10">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-[12px] tracking-widest text-black/50">A Best Café House</p>
              <h1 className="mt-3 font-serif text-[54px] leading-[0.95] text-[#2A241F]">
                Start Your Day With
                <br />
                Morning Coffee
              </h1>

              <div className="mt-5 flex flex-wrap gap-2 text-[12px] text-black/55">
                <span>Colombian Arabica</span>
                <span className="opacity-40">•</span>
                <span>Coffee</span>
                <span className="opacity-40">•</span>
                <span>Ethiopian acidic coffee</span>
              </div>

              <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-black/60">
                We love the idea of indulging in your health, and every item on our menu is full of lush, organic
                ingredients, bright flavor and beautiful color.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/coffee"
                  className="rounded-md bg-[#B2872B] px-8 py-3 text-[14px] font-semibold text-white hover:brightness-95"
                >
                  Get Yours Now
                </Link>
                <Link
                  to="/reservation"
                  className="rounded-md border border-black/15 bg-white/60 px-8 py-3 text-[14px] font-semibold text-black/70 hover:bg-white"
                >
                  Reservation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-0 top-4 hidden h-[420px] w-[420px] rounded-full border-[10px] border-black/90 md:block" />
              <img src={herocup} alt="Hero cup" className="relative mx-auto w-[420px]" draggable={false} />
            </div>
          </div>
        </Container>
      </section>

      {/* QUOTE */}
      <QuoteCarousel quotes={quotes} />

      {/* FEATURE / PROMO CARDS */}
      <section className="bg-[#F6EFE6] pb-14 pt-10">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <PromoImageCard image={group91} alt="Promo" />
            <PromoImageCard image={group91} alt="Promo" />
            <PromoImageCard image={group91} alt="Promo" />
          </div>
        </Container>
      </section>

      {/* GLUTEN FREE */}
      <section className="bg-[#F6EFE6] pb-20 pt-2">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-[44px] leading-tight text-[#2A241F]">We’re A Dedicated Gluten-Free Café.</h2>
              <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-black/60">
                But you’d never know if we didn’t mention it. You see, our creations redefine what gluten-free means.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-block rounded-md bg-[#B2872B] px-8 py-3 text-[14px] font-semibold text-white hover:brightness-95"
              >
                Read More
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 hidden h-[150px] w-[150px] rounded-full border border-black/25 md:block" />
              <img
                src={shakeImg}
                alt="Gluten free"
                className="mx-auto h-[380px] rounded-md border border-black/10 bg-white p-3"
                draggable={false}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* POPULAR COFFEE */}
      <section className="bg-[#F6EFE6] pb-20">
        <Container>
          <SectionTitle title="Our Most Popular Coffee" />
          <div className="mt-10 rounded-3xl bg-white/70 p-10 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
            <div className="grid gap-6 md:grid-cols-3">{popular.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          </div>
        </Container>
      </section>

      {/* FOODS FOR FOODIES */}
      <section className="bg-[#F6EFE6] pb-24">
        <Container>
          <SectionTitle
            title="Our Foods for Foodies"
            subtitle="We Collect The Best Quality Of Ingredients From Market. With The Best Execution We Provide Our Guest Fresh & Very Delicious Food."
          />

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <FoodCard title="Platter Of Grilled Lamb" img={foodLamb} priceLabel="$ 5" />
            <FoodCard title="Round Pizza" img={foodPizza} priceLabel="$ 5" />
            <FoodCard title="Burger And Potato Fries" img={foodBurger} priceLabel="$ 5" />
            <FoodCard title="Platter Of Grilled Lamb" img={foodLamb} priceLabel="$ 5" />
            <FoodCard title="Round Pizza" img={foodPizza} priceLabel="$ 5" />
            <FoodCard title="Burger And Potato Fries" img={foodBurger} priceLabel="$ 5" />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex rounded-md bg-[#B2872B] px-10 py-3 text-[14px] font-semibold text-white hover:brightness-95"
            >
              See All
            </Link>
          </div>
        </Container>
      </section>

      {/* CATEGORY (FIXED: glutcup for all cards) */}
      <section className="bg-[#F6EFE6] pb-24">
        <Container>
          <SectionTitle title="Our Category" />

          <div className="mt-12 space-y-12">
            <div>
              <div className="mb-5 text-[14px] font-semibold text-black/60">Coffee</div>
              <div className="grid gap-8 md:grid-cols-3">
                <CategoryCard title="Espresso" />
                <CategoryCard title="Latte" />
                <CategoryCard title="Capuccino" />
              </div>
            </div>

            <div>
              <div className="mb-5 text-[14px] font-semibold text-black/60">Food</div>
              <div className="grid gap-8 md:grid-cols-3">
                <CategoryCard title="Meat Lovers" />
                <CategoryCard title="Sides" />
                <CategoryCard title="Chicken Items" />
              </div>
            </div>

            <div>
              <div className="mb-5 text-[14px] font-semibold text-black/60">Drinks</div>
              <div className="grid gap-8 md:grid-cols-3">
                <CategoryCard title="Frozen Lemonade" />
                <CategoryCard title="Smoothies" />
                <CategoryCard title="Protein Shakes" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VIDEO STRIP */}
      <section className="bg-[#F6EFE6] pb-24">
        <Container>
          <img src={group132} alt="Video strip" className="w-full rounded-3xl" draggable={false} />
        </Container>
      </section>

      {/* REST + OPENING HOURS */}
      <section className="bg-[#F6EFE6] pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
              <h3 className="font-serif text-[22px] text-black/80">Rest, Relax & Revive!</h3>
              <p className="mt-3 text-[14px] leading-7 text-black/60">
                At Vertical People Coffee From All Around To Rest, Relax And Revive With Good Coffee, Good Company And
                Great Food!
              </p>
              <div className="mt-8 text-[40px]"></div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
              <h3 className="font-serif text-[22px] text-black/80">Did Someone Say “Coffee”</h3>
              <p className="mt-3 text-[14px] leading-7 text-black/60">
                We Offer Some Of The Best Locally Roasted Coffee Using Brazilian Santos® Beans. Enjoy Dark, Blonde,
                Jamaican, Italian & Decaf Blends.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
              <img src={group154} alt="Opening hours" className="w-full" draggable={false} />
              <div className="p-6">
                <Link
                  to="/reservation"
                  className="inline-flex w-full justify-center rounded-md bg-[#B2872B] px-6 py-3 text-[14px] font-semibold text-white hover:brightness-95"
                >
                  Book Your Table
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-[40px] leading-tight text-[#2A241F]">What Our Customer Say</h2>
              <div className="mt-8 rounded-2xl bg-[#F6EFE6] p-8">
                <p className="text-[14px] leading-7 text-black/70">
                  I Like The Coffee But A Little Expensive To Recommend To Friends. Can Buy Acceptable Equivalent In
                  Waitrose For Half The Price
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-[14px] font-semibold text-black/70">Esther Howard</div>
                    <div className="mt-1 text-[12px] text-black/45">★★★★★ · Verified Customer</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="h-2 w-2 rounded-full bg-black/15" />
                  ))}
                  <span className="h-2 w-2 rounded-full bg-[#B2872B]" />
                </div>
              </div>
            </div>

            <div className="grid place-items-center">
              <img src={frame12} alt="Customer section art" className="w-full max-w-[520px]" draggable={false} />
            </div>
          </div>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#F6EFE6] py-16">
        <Container>
          <div className="rounded-3xl bg-white p-10 shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
            <div className="text-center">
              <h2 className="font-serif text-[34px] text-[#2A241F]">Want To Hear Coffee News From Us?</h2>
            </div>

            <div className="mx-auto mt-8 flex max-w-[680px] flex-col gap-3 sm:flex-row">
              <input
                placeholder="Your Email Address"
                className="h-11 flex-1 rounded-md border border-black/15 bg-white px-4 text-[14px] outline-none focus:border-[#B2872B]"
              />
              <button className="h-11 rounded-md bg-[#B2872B] px-8 text-[14px] font-semibold text-white hover:brightness-95">
                Subscribe
              </button>
            </div>

            <div className="mx-auto mt-4 flex max-w-[680px] items-start gap-2 text-[12px] text-black/50">
              <input type="checkbox" className="mt-1" />
              <p>Please Read The Coffee Address Personal Data Processing Policy Items.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
