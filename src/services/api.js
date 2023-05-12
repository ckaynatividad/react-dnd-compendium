const BASE_API_PATH = "https://www.dnd5eapi.co/api";

export async function getApi() {
  const resp = await fetch(`${BASE_API_PATH}`);
  const data = await resp.json();
  return data;
}

export async function getMagicItem(item = "") {
  const resp = await fetch(`${BASE_API_PATH}/magic-items/${item}`);
  const data = await resp.json();
  return item ? data : data.results;
}

export async function getClass(classItem = "") {
  const resp = await fetch(`${BASE_API_PATH}/classes/${classItem}`);
  const data = await resp.json();
  return classItem ? data : data.results;
}

export async function getSubclass(subclass = "") {
  const resp = await fetch(`${BASE_API_PATH}/subclasses/${subclass}`);
  const data = await resp.json();
  return subclass ? data : data.results;
}

export async function getProficiencies(prof = "") {
  const resp = await fetch(`${BASE_API_PATH}/proficiencies/${prof}`);
  const data = await resp.json();
  return prof ? data : data.results;
}

export async function getRaces(race = "") {
  const resp = await fetch(`${BASE_API_PATH}/races/${race}`);
  const data = await resp.json();
  return race ? data : data.results;
}

export async function getEqCategories(category = "") {
  const resp = await fetch(`${BASE_API_PATH}/equipment-categories/${category}`);
  const data = await resp.json();
  return category ? data : data.results;
}
