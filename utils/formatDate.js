export function formatDate(dateString) {
  const date = new Date(dateString.replace(" ", "T")); // 문자열을 Date 객체로 변환

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
