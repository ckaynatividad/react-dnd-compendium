export async function getApi() {
  const resp = await fetch("https://www.dnd5eapi.co/api/");
  const data = await resp.json();
  return data;
}

// export async function getMagicItems() {
//   const resp = await fetch("https://www.dnd5eapi.co/api/magic-items");
//   const data = await resp.json();
//   return data.results;
// }

export async function getMagicItem(item) {
  const resp = await fetch(`https://www.dnd5eapi.co/api/magic-items/${item}`);
  const data = await resp.json();
  return data;
}

// export async function getClasses() {
//   const resp = await fetch("https://www.dnd5eapi.co/api/classes");
//   const data = await resp.json();
//   return data.results;
// }

export async function getClass(classItem) {
  const resp = await fetch(`https://www.dnd5eapi.co/api/classes/${classItem}`);
  const data = await resp.json();
  return data;
}

export async function getSubclasses() {
  const resp = await fetch("https://www.dnd5eapi.co/api/subclasses");
  const data = await resp.json();
  return data;
}

export async function getSubclass(subclass) {
  const resp = await fetch(
    `https://www.dnd5eapi.co/api/subclasses/${subclass}`
  );
  const data = await resp.json();
  return data;
}
