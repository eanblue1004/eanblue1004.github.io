document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('nav');
	const menuItems = document.querySelectorAll('.menu-item');

	// 1. 햄버거 버튼 클릭 시 메뉴 열기/닫기
	menuToggle.addEventListener('click', () => {
		nav.classList.toggle('active');
		// 아이콘 변경 (열렸을 때 X 모양, 닫혔을 때 햄버거 모양)
		if (nav.classList.contains('active')) {
			menuToggle.innerHTML = '✕';
			menuToggle.style.fontSize = '24px';
		} else {
			menuToggle.innerHTML = '☰';
			menuToggle.style.fontSize = '28px';
		}
	});

	// 2. 모바일 메뉴에서 서브메뉴 아코디언 동작 처리
	menuItems.forEach(item => {
		const btn = item.querySelector('.menu-btn');
		const submenu = item.querySelector('.submenu');
		
		// 서브메뉴가 있는 메뉴 버튼을 클릭했을 때만 작동
		if (btn && submenu) {
			btn.addEventListener('click', (e) => {
				// 현재 화면이 모바일 크기(850px 이하)일 때만 작동
				if (window.innerWidth <= 850) {
					e.preventDefault(); // # 링크 이동 방지
					
					// 다른 열려있는 서브메뉴를 닫음 (아코디언 형태)
					menuItems.forEach(otherItem => {
						if (otherItem !== item) {
							otherItem.classList.remove('active');
						}
					});
					
					// 선택한 메뉴의 서브메뉴 토글
					item.classList.toggle('active');
				}
			});
		}
	});

	// 3. 서브메뉴 내부 링크 클릭 시 모바일 창 자동으로 닫기
	const submenuLinks = document.querySelectorAll('.submenu a');
	submenuLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (window.innerWidth <= 850) {
				nav.classList.remove('active');
				menuToggle.innerHTML = '☰';
			}
		});
	});
	
	 // ==========================================
        // 💡 모든 "도입 문의하기" 버튼을 작동시키는 스크립트
        // ==========================================
        const inquiryButtons = document.querySelectorAll('.btn-open-inquiry');
        inquiryButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                // 각 버튼에 숨겨진 data-target(폼 ID) 값을 가져옵니다.
                const targetId = this.getAttribute('data-target');
                if(targetId) {
                    const formContainer = document.getElementById(targetId);
                    if (formContainer) {
                        // 해당 폼을 보이게 하고, 부드럽게 스크롤하여 이동합니다.
                        formContainer.style.display = 'block';
                        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
});