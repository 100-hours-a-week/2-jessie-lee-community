export default function mypageView() {
  return `
    <div class="mypageWrapper">
      <h3 class="mypageTitleText">회원정보수정</h3>
      <div class="profileEditContainer">
        <p class="profileEditHelperText">프로필 사진*</p>
        <img class="profileImage" src="../../assets/sample-profile-image.jpg" />
      </div>
      <div class="profileEditContainer">
        <p class="profileEditHelperText">이메일</p>
        <p class="profileEmailText">example@gmail.com</p>
      </div>
      <div class="profileEditContainer">
        <p class="profileEditHelperText">닉네임</p>
        <input
          type="text"
          class="profileNicknameInput"
          id="profileNicknameInput"
          placeholder="닉네임을 입력하세요"
        />
        <span class="helperText" id="nicknameHelperText"></span>
      </div>
      <button type="button" class="editButton" id="editButton">수정하기</button>
      <a class="resignButton" href="">회원 탈퇴</a>
      <a class="completeButton" id="completeButton" href="../passwordEdit/passwordEdit.html"
        >수정 완료</a
      >
    </div>`;
}
