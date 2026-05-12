//header.js
const headerHTML=`
    <header>
        <div class="logo-container">
            <a id="home-btn" href="index.html">
                <img src="logo.png" alt="이안블루 로고" class="logo-img">
            </a>
        </div>
        
        <button class="menu-toggle" aria-label="메뉴 열기/닫기">☰</button>
		
        <nav>
            <div class="menu-item">
                <a href="javascript:void(0);" class="menu-btn">회사소개</a>
                <div class="submenu">
                    <a href="greeting.html">인사말</a>
                    <a href="org_chart.html">조직도</a>
                    <a href="location.html">오시는길</a>
                </div>
            </div>
            
            <div class="menu-item">
                <a href="javascript:void(0);" class="menu-btn">스마트전기제품</a>
                <div class="submenu">
                    <a href="smart_wiring.html">IOT스마트배선기구</a>
                    <a href="arc_breaker.html">아크차단기</a>
                    <a href="#surge-protector-section">써지보호기</a>
                    <a href="fire_outlet.html">화재감지콘센트</a>
                    <a href="#standby-power-section">대기전력차단콘센트</a>
                    <a href="#apu-section">APU(비상전원자동공급장치)</a>
                </div>
            </div>

            <div class="menu-item">
                <a href="javascript:void(0);" class="menu-btn">에너지효율화사업</a>
                <div class="submenu">
                    <a href="iot_lighting.html">IOT스마트조명</a>
                    <a href="solar_paint.html">태양열 차단 페인트</a>
                    <a href="solar_power.html">태양광발전시스템</a>
                </div>
            </div>
            
            <div class="menu-item">
                <a href="#" class="menu-btn">포토갤러리</a>
            </div>
        </nav>
    </header>
`;
// 1. 빈 자리에 헤더 HTML 꽂아넣기
document.getElementById('header-placeholder').innerHTML = headerHTML;

// 2. 헤더가 들어간 직후에 햄버거 메뉴 작동 스크립트 실행하기
if (typeof initMenuScript === 'function') {
    initMenuScript();
}