// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "12월의 시작" },
  { "number": 2, "message": "메시지를 입력하세요!" },
  { "number": 3, "message": "메시지를 입력하세요!" },
  { "number": 4, "message": "메시지를 입력하세요!" },
  { "number": 5, "message": "메시지를 입력하세요!" },
  { "number": 6, "message": "메시지를 입력하세요!" },
  { "number": 7, "message": "메시지를 입력하세요!" },
  { "number": 8, "message": "메시지를 입력하세요!" },
  { "number": 9, "message": "메시지를 입력하세요!" },
  { "number": 10, "message": "메시지를 입력하세요!" },
  { "number": 11, "message": "메시지를 입력하세요!" },
  { "number": 12, "message": "메시지를 입력하세요!" },
  { "number": 13, "message": "메시지를 입력하세요!" },
  { "number": 14, "message": "메시지를 입력하세요!" },
  { "number": 15, "message": "메시지를 입력하세요!" },
  { "number": 16, "message": "메시지를 입력하세요!" },
  { "number": 17, "message": "메시지를 입력하세요!" },
  { "number": 18, "message": "메시지를 입력하세요!" },
  { "number": 19, "message": "메시지를 입력하세요!" },
  { "number": 20, "message": "메시지를 입력하세요!" },
  { "number": 21, "message": "메시지를 입력하세요!" },
  { "number": 22, "message": "메시지를 입력하세요!" },
  { "number": 23, "message": "메시지를 입력하세요!" },
  { "number": 24, "message": "메시지를 입력하세요!" }
];