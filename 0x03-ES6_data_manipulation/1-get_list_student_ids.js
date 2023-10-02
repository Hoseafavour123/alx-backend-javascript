export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const arrayIds = [];
    array.map((value) => {
      arrayIds.push(value.id);
    });

    return arrayIds;
  }
  return [];
}
