import { useEffect, useMemo, useState } from "react";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: "Coffee" | "Food" | "Drinks";
};

type Collection = {
  id: string;
  name: string;
  items: MenuItem[];
  createdAt: string;
};

function uid(prefix = "id") {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function useLocalStorageState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => safeJsonParse<T>(localStorage.getItem(key), initial));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value, null, 2));
  }, [key, value]);

  return [value, setValue] as const;
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-semibold tracking-wide text-black/55">{children}</div>;
}

export default function Collections() {
  const [collections, setCollections] = useLocalStorageState<Collection[]>("mr-cafe.collections", [
    {
      id: "demo",
      name: "Home Page Picks",
      createdAt: new Date().toISOString(),
      items: [
        { id: uid("item"), name: "Iced Latte", price: 5, category: "Coffee" },
        { id: uid("item"), name: "Round Pizza", price: 8, category: "Food" },
        { id: uid("item"), name: "Smoothie", price: 6, category: "Drinks" },
      ],
    },
  ]);

  const [activeId, setActiveId] = useState<string>(() => collections[0]?.id ?? "");
  const active = useMemo(() => collections.find((c) => c.id === activeId) ?? collections[0], [collections, activeId]);

  // Keep activeId valid when deleting.
  useEffect(() => {
    if (!collections.length) return;
    if (!collections.some((c) => c.id === activeId)) setActiveId(collections[0].id);
  }, [collections, activeId]);

  const [newName, setNewName] = useState("");
  const [itemDraft, setItemDraft] = useState<Omit<MenuItem, "id">>({ name: "", price: 5, category: "Coffee" });

  const jsonPreview = useMemo(() => JSON.stringify(collections, null, 2), [collections]);

  function createCollection() {
    const name = newName.trim() || `Untitled ${collections.length + 1}`;
    const next: Collection = { id: uid("col"), name, items: [], createdAt: new Date().toISOString() };
    setCollections((prev) => [next, ...prev]);
    setActiveId(next.id);
    setNewName("");
  }

  function renameCollection(id: string, name: string) {
    setCollections((prev) => prev.map((c) => (c.id === id ? { ...c, name } : c)));
  }

  function removeCollection(id: string) {
    setCollections((prev) => prev.filter((c) => c.id !== id));
  }

  function addItem() {
    if (!active) return;
    const name = itemDraft.name.trim();
    if (!name) return;

    const nextItem: MenuItem = { id: uid("item"), ...itemDraft, name, price: Number(itemDraft.price) || 0 };
    setCollections((prev) =>
      prev.map((c) => (c.id === active.id ? { ...c, items: [nextItem, ...c.items] } : c))
    );
    setItemDraft({ name: "", price: 5, category: "Coffee" });
  }

  function updateItem(itemId: string, patch: Partial<Omit<MenuItem, "id">>) {
    if (!active) return;
    setCollections((prev) =>
      prev.map((c) =>
        c.id === active.id
          ? {
              ...c,
              items: c.items.map((it) => (it.id === itemId ? { ...it, ...patch } : it)),
            }
          : c
      )
    );
  }

  function removeItem(itemId: string) {
    if (!active) return;
    setCollections((prev) =>
      prev.map((c) => (c.id === active.id ? { ...c, items: c.items.filter((it) => it.id !== itemId) } : c))
    );
  }

  function replaceFromJson(raw: string) {
    const parsed = safeJsonParse<Collection[]>(raw, []);
    if (!Array.isArray(parsed)) return;
    setCollections(parsed);
  }

  async function copyJson() {
    await navigator.clipboard.writeText(jsonPreview);
  }

  function downloadJson() {
    const blob = new Blob([jsonPreview], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mr-cafe.collections.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-14">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif text-[44px] leading-none text-black/80">JSON Collections</h1>
          <p className="mt-3 max-w-[820px] text-[14px] leading-7 text-black/60">
            Create, edit and persist structured JSON data (localStorage). This is intentionally built like a real
            admin panel: reusable helpers, clean state updates, and export/import.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={copyJson} title="Copy JSON to clipboard">
            Copy JSON
          </Button>
          <Button onClick={downloadJson} title="Download JSON file">
            Download
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr]">
        {/* LEFT: collection list */}
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[22px] text-black/80">Collections</h2>
            <div className="text-xs text-black/45">{collections.length} total</div>
          </div>

          <div className="mt-5 flex gap-3">
            <Input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New collection name"
            />
            <Button onClick={createCollection}>Add</Button>
          </div>

          <div className="mt-6 space-y-2">
            {collections.map((c) => {
              const isActive = c.id === active?.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-[#B2872B] bg-[#B2872B]/10"
                      : "border-black/10 bg-white/60 hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-[14px] font-semibold text-black/75">{c.name}</div>
                      <div className="mt-1 text-[12px] text-black/45">{c.items.length} items</div>
                    </div>
                    <div className="text-[12px] text-black/40">→</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 border-t border-black/10 pt-5">
            <Label>Import JSON</Label>
            <p className="mt-2 text-xs leading-6 text-black/50">
              Paste a JSON array of collections to replace the current state.
            </p>
            <textarea
              className="mt-3 h-[140px] w-full rounded-xl border border-black/15 bg-white/70 p-3 text-xs outline-none focus:border-[#B2872B]"
              placeholder="[ { id, name, items: [...] } ]"
              onBlur={(e) => {
                const raw = e.currentTarget.value.trim();
                if (raw) replaceFromJson(raw);
              }}
            />
          </div>
        </Card>

        {/* RIGHT: editor */}
        <div className="space-y-8">
          <Card>
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <Label>Collection name</Label>
                <div className="mt-2">
                  <Input
                    value={active?.name ?? ""}
                    onChange={(e) => active && renameCollection(active.id, e.target.value)}
                    placeholder="Collection name"
                  />
                </div>
                <div className="mt-3 text-xs text-black/45">
                  ID: <span className="font-mono">{active?.id ?? "-"}</span>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => active && removeCollection(active.id)}
                disabled={!active || collections.length <= 1}
                title={collections.length <= 1 ? "Keep at least one collection" : "Delete collection"}
              >
                Delete
              </Button>
            </div>

            <div className="mt-8 grid gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/10 md:grid-cols-3">
              <div className="md:col-span-2">
                <Label>Item name</Label>
                <Input
                  value={itemDraft.name}
                  onChange={(e) => setItemDraft((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. Cappuccino"
                />
              </div>

              <div>
                <Label>Price</Label>
                <Input
                  inputMode="decimal"
                  value={String(itemDraft.price)}
                  onChange={(e) => setItemDraft((p) => ({ ...p, price: Number(e.target.value) }))}
                />
              </div>

              <div className="md:col-span-2">
                <Label>Category</Label>
                <select
                  className="mt-0.5 h-10 w-full rounded-xl border border-black/15 bg-white/70 px-3 text-sm outline-none focus:border-[#B2872B]"
                  value={itemDraft.category}
                  onChange={(e) =>
                    setItemDraft((p) => ({ ...p, category: e.target.value as MenuItem["category"] }))
                  }
                >
                  <option>Coffee</option>
                  <option>Food</option>
                  <option>Drinks</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button className="w-full" onClick={addItem}>
                  Add item
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="font-serif text-[22px] text-black/80">Items</h2>
            {active?.items.length ? (
              <div className="mt-5 space-y-3">
                {active.items.map((it) => (
                  <div
                    key={it.id}
                    className="grid gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/10 md:grid-cols-[1fr_120px_160px_90px]"
                  >
                    <div>
                      <Label>Name</Label>
                      <Input value={it.name} onChange={(e) => updateItem(it.id, { name: e.target.value })} />
                    </div>
                    <div>
                      <Label>Price</Label>
                      <Input
                        inputMode="decimal"
                        value={String(it.price)}
                        onChange={(e) => updateItem(it.id, { price: Number(e.target.value) || 0 })}
                      />
                    </div>
                    <div>
                      <Label>Category</Label>
                      <select
                        className="mt-0.5 h-10 w-full rounded-xl border border-black/15 bg-white/70 px-3 text-sm outline-none focus:border-[#B2872B]"
                        value={it.category}
                        onChange={(e) => updateItem(it.id, { category: e.target.value as MenuItem["category"] })}
                      >
                        <option>Coffee</option>
                        <option>Food</option>
                        <option>Drinks</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <Button variant="outline" className="w-full" onClick={() => removeItem(it.id)}>
                        Remove
                      </Button>
                    </div>

                    <div className="md:col-span-4">
                      <div className="text-xs text-black/40">
                        id: <span className="font-mono">{it.id}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-black/55">No items yet—add your first one above.</p>
            )}
          </Card>

          <Card>
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-[22px] text-black/80">Live JSON</h2>
              <div className="text-xs text-black/45">Auto-saved</div>
            </div>
            <pre className="mt-4 max-h-[420px] overflow-auto rounded-2xl bg-[#1f1f1f] p-4 text-xs text-white/90">
              {jsonPreview}
            </pre>
          </Card>
        </div>
      </div>
    </div>
  );
}
