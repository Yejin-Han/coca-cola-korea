<h1>Coca-cola Korea</h1>
<p>
코카-콜라 코리아의 index 페이지를 리뉴얼하여 반응형으로 퍼블리싱하였습니다.
<br>
탄산음료를 매우 좋아하는 사람으로서 세계적으로 가장 유명한 탄산음료 브랜드인 코카-콜라의 한국 사이트가 그저 해외 사이트를 번역해놓은 정도에 그치는 상황이라 좀 더 그 회사의 색을 드러낼 수 있는 사이트로 바꿔보고 싶다는 생각이 들어 퍼블리싱 대상으로 선정했습니다.
</p>
<a href="http://hyj04.dothome.co.kr/">코카-콜라 코리아 리뉴얼 바로가기</a>
<br>
<br>
<br>
<h2>🗓️ 제작 기간</h2>
> 2022. 09. 20. ~ 2022. 11. 18.
<h2>📸 완성 화면</h2>
<img alt="PC 완성화면" src="/capture/sect1.jpg" align="center" />
<table>
  <tr>
    <td width="70%"><img alt="태블릿 완성화면" src="/capture/sect1_t.jpg" /></td>
    <td width="30%"><img alt="모바일 완성화면" src="/capture/sect1_m.jpg" /></td>
  </tr>
</table>
<h2>🛠 활용 tool 및 language</h2>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>jQuery</li>
  <li>VS Code</li>
  <li>Photoshop</li>
</ul>
<br>
<h2>📚 화면 구조</h2>
<ol>
  <li>header</li>
  <li>Section 1 : Slide banner</li>
  <li>Section 2 : Introduction of Coca-cola Korea</li>
  <li>Section 3 : Brands</li>
  <li>Section 4 : Sustainable Business</li>
  <li>footer</li>
</ol>
<h2>📋 구현 기능</h2>
<h3>header</h3>
  <table>
    <tr>
      <td width="75%"><img alt="PC 메뉴" src="/capture/header.jpg" /></td>
      <td width="25%"><img alt="태블릿 및 모바일 메뉴" src="/capture/header_t,m.jpg" /></td>
    </tr>
  </table>
  <ul>
    <li>정보구조를 재설계하여 새롭게 메뉴를 만들었습니다.</li>
    <li>PC에는 풀다운 메뉴, 태블릿과 모바일에는 아코디언 메뉴로 구현되어 있습니다.</li>
    <li>PC에 클릭하면 슬라이드하여 펼쳐지는 검색창(기능은 구현 X)이 있습니다.</li>
    <li>header에 마우스 오버되었을 때, 스크롤이 있을 때 헤더의 색이 반전됩니다.</li>
  </ul>
<h3>Section 1</h3>
  <img alt="sect1" src="/capture/sect1.jpg" />
  <ul>
    <li>Swiper 라이브러리를 활용하여 메인 슬라이드 배너를 제작하였습니다.</li>
    <li>배너에 사용된 이미지는 다섯장 모두 포토샵을 이용하여 제작 및 수정하였습니다.</li>
    <li>Swiper-pagination을 커스텀하여 autoplay 시간을 bar 형태로 보여주며 일시정지/재생 기능을 추가하였습니다.</li>
  </ul>
<h3>Section 2</h3>
  <img alt="sect2" src="/capture/sect2.jpg" />
  <ul>
    <li>CSS keyframes를 활용하여 화면에 섹션2가 어느정도 드러나면 4개의 단락이 순차적으로 슬라이드하여 등장하는 효과를 주었습니다.</li>
    <li>모바일 사이즈가 되면 배경 이미지가 90도 회전한 이미지로 바뀝니다.</li>
  </ul>
<h3>Section 3</h3>
  <table>
    <tr>
      <td width="60%"><img alt="sect3_pc" src="/capture/sect3.jpg" /></td>
      <td width="40%"><img alt="sect3_tablet,mobile" src="/capture/sect3_t,m.jpg" /></td>
    </tr>
  </table>
  <ul>
    <li>브랜드 이름을 클릭하면 선택한 브랜드를 나타내는 표지가 해당 브랜드 위를 따라다니며, 해당 브랜드의 내용이 순차적으로 자연스럽게 떠오릅니다. (html load 사용)</li>
    <li>태블릿 이하 사이즈가 되면 브랜드 목록에 수동 스크롤이 생기고, 표지 역시 스크롤을 따라옵니다.</li>
  </ul>
<h3>Section 4</h3>
  <table>
    <tr>
      <td width="75%"><img alt="sect4_pc,tablet" src="/capture/sect4_d,t.jpg" /></td>
      <td width="25%"><img alt="sect4_mobile" src="/capture/sect4_m.jpg" /></td>
    </tr>
  </table>
  <ul>
    <li>마우스가 오버되어있는 영역만 내용이 약간 위로 올라오면서 나머지 영역들의 색이 전체적으로 어둡게 처리되어 해당 영역에 집중효과를 주었습니다.</li>
    <li>slick 라이브러리를 활용하였으며 이를 모바일 사이즈 이하에서는 활성화시키고 그 이상에서는 unslick시켜 모바일사이즈에서는 슬라이더 형태로 보이게 하였습니다.</li>
    <li>+) footer 또한 모바일 사이즈에서 레이아웃이 변화합니다. </li>
  </ul>
