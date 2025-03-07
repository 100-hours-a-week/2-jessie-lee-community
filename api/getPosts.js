export async function getPosts() {
  try {
    const response = await fetch("../../data/posts.json");
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("게시글을 불러오는 중 오류가 발생했습니다:", error);
  }
}
