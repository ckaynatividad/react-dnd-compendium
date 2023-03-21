export async function getApi() {
  const resp = await fetch("https://www.dnd5eapi.co/api/");
  const data = await resp.json();
  return data;
}

export async function getMagicItem(item = "") {
  const resp = await fetch(`https://www.dnd5eapi.co/api/magic-items/${item}`);
  const data = await resp.json();
  return item ? data : data.results;
}

export async function getClass(classItem = "") {
  const resp = await fetch(`https://www.dnd5eapi.co/api/classes/${classItem}`);
  const data = await resp.json();
  return classItem ? data : data.results;
}

export async function getSubclass(subclass = "") {
  const resp = await fetch(
    `https://www.dnd5eapi.co/api/subclasses/${subclass}`
  );
  const data = await resp.json();
  return subclass ? data : data.results;
}

export async function getProficiencies(prof = "") {
  const resp = await fetch(`https://www.dnd5eapi.co/api/proficiencies/${prof}`);
  const data = await resp.json();
  return prof ? data : data.results;
}

export async function getRaces(race = "") {
  const resp = await fetch(`https://www.dnd5eapi.co/api/races/${race}`);
  const data = await resp.json();
  return race ? data : data.results;
}
