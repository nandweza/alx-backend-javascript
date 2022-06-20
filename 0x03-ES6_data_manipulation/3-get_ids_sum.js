export default function getStudentIdsSum(arrObj) {
  return arrObj.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
