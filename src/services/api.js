export async function getMagicItems() {
  const resp = await fetch("https://www.dnd5eapi.co/api/magic-items");
  const data = await resp.json();
  return data.results;
}

export async function getMagicItem(item) {
  const resp = await fetch(`https://www.dnd5eapi.co/api/magic-items/${item}`);
  const data = await resp.json();
  return data;
}

export async function getClasses() {
  const resp = await fetch("https://www.dnd5eapi.co/api/classes");
  const data = await resp.json();
  return data.results;
}
