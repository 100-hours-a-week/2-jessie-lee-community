export async function getPostById(postId) {
  try {
    const response = await fetch("../../data/posts.json");
    const data = await response.json();
    const post = data.posts.find((p) => p.id.toString() === postId);
    if (post) {
      return post;
    } else {
      console.log("게시글을 찾을 수 없습니다.");
    }
  } catch (error) {
    console.log("게시글을 불러오는 중 오류가 발생했습니다.");
  }
}
