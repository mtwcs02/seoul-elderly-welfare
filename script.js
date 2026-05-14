/* ── KPI 모달 데이터 ── */
const mData = {
    pop: {
        title: "서울시 총고령인구 (연령별)",
        table: `
        <p style="font-size:0.88rem;color:#64748b;margin-bottom:16px;">기준: 2026년 서울시 등록인구 통계 / 65세 이상 전체 1,942,365명</p>
        <table class="m-table">
            <thead><tr><th>연령대</th><th>인구수</th><th>비중</th><th>비고</th></tr></thead>
            <tbody>
                <tr><td>65–69세</td><td>612,840명</td><td>31.6%</td><td>전기 고령층</td></tr>
                <tr><td>70–74세</td><td>498,210명</td><td>25.6%</td><td>전기 고령층</td></tr>
                <tr><td>75–79세</td><td>389,540명</td><td>20.1%</td><td>후기 고령층</td></tr>
                <tr><td>80–84세</td><td>249,780명</td><td>12.9%</td><td>후기 고령층</td></tr>
                <tr><td>85–89세</td><td>127,650명</td><td>6.6%</td><td style="color:#e11d48;font-weight:700;">초고령층</td></tr>
                <tr><td>90세 이상</td><td>64,345명</td><td>3.3%</td><td style="color:#e11d48;font-weight:700;">초고령층</td></tr>
                <tr style="background:rgba(251,191,36,0.08);font-weight:700;">
                    <td>합계</td><td>1,942,365명</td><td>100%</td><td>–</td>
                </tr>
            </tbody>
        </table>`
    },
    total_fac: {
        title: "총 노인복지시설 (3,040개소) – 유형별 현황",
        table: `
        <p style="font-size:0.88rem;color:#64748b;margin-bottom:16px;">기준: 서울시 복지정책과 노인 사회복지시설 현황 (2026)</p>
        <table class="m-table">
            <thead><tr><th>시설 유형</th><th>개소 수</th><th>비중</th><th>주요 기능</th></tr></thead>
            <tbody>
                <tr><td>재가노인복지시설</td><td>2,198개소</td><td style="color:#38bdf8;font-weight:700;">72.3%</td><td>방문요양·목욕·간호</td></tr>
                <tr><td>노인의료복지시설</td><td>479개소</td><td style="color:#fbbf24;font-weight:700;">15.8%</td><td>요양원·요양병원</td></tr>
                <tr><td>노인여가복지시설</td><td>245개소</td><td style="color:#a78bfa;font-weight:700;">8.1%</td><td>경로당·노인복지관</td></tr>
                <tr><td>노인주거복지시설</td><td>82개소</td><td style="color:#34d399;font-weight:700;">2.7%</td><td>양로원·노인공동생활</td></tr>
                <tr><td>노인일자리지원기관</td><td>36개소</td><td style="color:#fb7185;font-weight:700;">1.2%</td><td>일자리 창출·연계</td></tr>
                <tr style="background:rgba(251,191,36,0.08);font-weight:700;">
                    <td>합계</td><td>3,040개소</td><td>100%</td><td>–</td>
                </tr>
            </tbody>
        </table>`
    },
    vulnerable: {
        title: "상대적 공급 취약 지역 (41개 행정동)",
        table: `
        <p style="font-size:0.88rem;color:#64748b;margin-bottom:16px;">공급지표 = (시설 수 ÷ 65세 이상 인구) × 1,000 / 서울시 평균 1.57 미만 지역</p>
        <div style="max-height:380px;overflow-y:auto;border-radius:10px;border:1px solid #e2e8f0;">
        <table class="m-table" style="margin-top:0;">
            <thead style="position:sticky;top:0;background:#f8fafc;z-index:5;">
                <tr><th>자치구</th><th>행정동</th><th>공급지표</th></tr>
            </thead>
            <tbody>
                <tr><td>강서구</td><td>화곡1동</td><td style="color:#e11d48;font-weight:700;">0.42</td></tr>
                <tr><td>강서구</td><td>화곡4동</td><td style="color:#e11d48;font-weight:700;">0.51</td></tr>
                <tr><td>성북구</td><td>길음1동</td><td style="color:#e11d48;font-weight:700;">0.58</td></tr>
                <tr><td>노원구</td><td>상계1동</td><td style="color:#e11d48;font-weight:700;">0.65</td></tr>
                <tr><td>송파구</td><td>잠실3동</td><td style="color:#e11d48;font-weight:700;">0.68</td></tr>
                <tr><td>강남구</td><td>대치2동</td><td style="color:#e11d48;font-weight:700;">0.71</td></tr>
                <tr><td>서초구</td><td>반포본동</td><td style="color:#e11d48;font-weight:700;">0.74</td></tr>
                <tr><td>양천구</td><td>신정6동</td><td style="color:#e11d48;font-weight:700;">0.77</td></tr>
                <tr><td>관악구</td><td>봉천동</td><td style="color:#e11d48;font-weight:700;">0.79</td></tr>
                <tr><td>강동구</td><td>암사1동</td><td style="color:#e11d48;font-weight:700;">0.82</td></tr>
                <tr><td>동작구</td><td>상도3동</td><td style="color:#e11d48;font-weight:700;">0.85</td></tr>
                <tr><td>은평구</td><td>녹번동</td><td style="color:#e11d48;font-weight:700;">0.88</td></tr>
                <tr><td>구로구</td><td>개봉1동</td><td style="color:#e11d48;font-weight:700;">0.91</td></tr>
                <tr><td>영등포구</td><td>신길5동</td><td style="color:#e11d48;font-weight:700;">0.93</td></tr>
                <tr><td>성동구</td><td>옥수동</td><td style="color:#e11d48;font-weight:700;">0.95</td></tr>
                <tr><td>마포구</td><td>상암동</td><td style="color:#e11d48;font-weight:700;">0.97</td></tr>
                <tr><td>광진구</td><td>중곡1동</td><td style="color:#e11d48;font-weight:700;">1.01</td></tr>
                <tr><td>도봉구</td><td>방학2동</td><td style="color:#e11d48;font-weight:700;">1.04</td></tr>
                <tr><td>강북구</td><td>번2동</td><td style="color:#e11d48;font-weight:700;">1.07</td></tr>
                <tr><td>동대문구</td><td>이문1동</td><td style="color:#e11d48;font-weight:700;">1.10</td></tr>
                <tr><td>중랑구</td><td>면목4동</td><td style="color:#e11d48;font-weight:700;">1.13</td></tr>
                <tr><td>서대문구</td><td>북가좌2동</td><td style="color:#e11d48;font-weight:700;">1.17</td></tr>
                <tr><td>노원구</td><td>월계1동</td><td style="color:#e11d48;font-weight:700;">1.19</td></tr>
                <tr><td>강서구</td><td>등촌1동</td><td style="color:#e11d48;font-weight:700;">1.22</td></tr>
                <tr><td>은평구</td><td>불광1동</td><td style="color:#e11d48;font-weight:700;">1.25</td></tr>
                <tr><td>성북구</td><td>장위1동</td><td style="color:#e11d48;font-weight:700;">1.28</td></tr>
                <tr><td>관악구</td><td>남현동</td><td style="color:#e11d48;font-weight:700;">1.30</td></tr>
                <tr><td>양천구</td><td>목5동</td><td style="color:#e11d48;font-weight:700;">1.33</td></tr>
                <tr><td>구로구</td><td>고척1동</td><td style="color:#e11d48;font-weight:700;">1.35</td></tr>
                <tr><td>동작구</td><td>노량진1동</td><td style="color:#e11d48;font-weight:700;">1.38</td></tr>
                <tr><td>강동구</td><td>천호1동</td><td style="color:#e11d48;font-weight:700;">1.40</td></tr>
                <tr><td>영등포구</td><td>대림2동</td><td style="color:#e11d48;font-weight:700;">1.43</td></tr>
                <tr><td>광진구</td><td>자양4동</td><td style="color:#e11d48;font-weight:700;">1.45</td></tr>
                <tr><td>마포구</td><td>망원1동</td><td style="color:#e11d48;font-weight:700;">1.47</td></tr>
                <tr><td>서대문구</td><td>홍은1동</td><td style="color:#e11d48;font-weight:700;">1.49</td></tr>
                <tr><td>성동구</td><td>행당2동</td><td style="color:#e11d48;font-weight:700;">1.51</td></tr>
                <tr><td>중랑구</td><td>묵2동</td><td style="color:#e11d48;font-weight:700;">1.52</td></tr>
                <tr><td>동대문구</td><td>전농1동</td><td style="color:#e11d48;font-weight:700;">1.53</td></tr>
                <tr><td>강북구</td><td>수유2동</td><td style="color:#e11d48;font-weight:700;">1.54</td></tr>
                <tr><td>은평구</td><td>갈현1동</td><td style="color:#e11d48;font-weight:700;">1.55</td></tr>
                <tr><td>도봉구</td><td>창5동</td><td style="color:#e11d48;font-weight:700;">1.56</td></tr>
            </tbody>
        </table>
        </div>`
    },
    blind: {
        title: "공적 인프라 미배치 지역 (24개 행정동 전체)",
        table: `
        <p style="font-size:0.88rem;color:#64748b;margin-bottom:16px;">노인복지시설이 단 한 곳도 없는 행정동 / 총고령인구 기준 내림차순</p>
        <div style="max-height:380px;overflow-y:auto;border-radius:10px;border:1px solid #e2e8f0;">
        <table class="m-table" style="margin-top:0;">
            <thead style="position:sticky;top:0;background:#f8fafc;z-index:5;">
                <tr><th>자치구</th><th>행정동</th><th>총고령인구</th><th>85세이상</th></tr>
            </thead>
            <tbody>
                <tr><td>송파구</td><td>잠실3동</td><td>6,827명</td><td>478명</td></tr>
                <tr><td>서초구</td><td>잠원동</td><td>5,201명</td><td>515명</td></tr>
                <tr><td>송파구</td><td>잠실4동</td><td>4,910명</td><td>383명</td></tr>
                <tr><td>강남구</td><td>청담동</td><td>4,850명</td><td>440명</td></tr>
                <tr><td>강남구</td><td>개포1동</td><td>4,569명</td><td>290명</td></tr>
                <tr><td>송파구</td><td>가락1동</td><td>4,546명</td><td>220명</td></tr>
                <tr><td>송파구</td><td>잠실2동</td><td>4,340명</td><td>345명</td></tr>
                <tr><td>강남구</td><td>일원본동</td><td>3,969명</td><td>294명</td></tr>
                <tr><td>서초구</td><td>반포3동</td><td>3,652명</td><td>382명</td></tr>
                <tr><td>송파구</td><td>송파2동</td><td>3,549명</td><td>254명</td></tr>
                <tr><td>강남구</td><td>압구정동</td><td>3,245명</td><td>210명</td></tr>
                <tr><td>서초구</td><td>서초4동</td><td>3,052명</td><td>185명</td></tr>
                <tr><td>영등포구</td><td>신길6동</td><td>2,845명</td><td>140명</td></tr>
                <tr><td>서초구</td><td>반포4동</td><td>2,764명</td><td>215명</td></tr>
                <tr><td>용산구</td><td>이촌1동</td><td>2,654명</td><td>198명</td></tr>
                <tr><td>송파구</td><td>오륜동</td><td>2,456명</td><td>154명</td></tr>
                <tr><td>양천구</td><td>목5동</td><td>2,345명</td><td>167명</td></tr>
                <tr><td>강남구</td><td>개포2동</td><td>2,154명</td><td>134명</td></tr>
                <tr><td>중구</td><td>명동</td><td>1,985명</td><td>98명</td></tr>
                <tr><td>종로구</td><td>가회동</td><td>1,845명</td><td>112명</td></tr>
                <tr><td>종로구</td><td>삼청동</td><td>1,654명</td><td>95명</td></tr>
                <tr><td>중구</td><td>을지로동</td><td>1,452명</td><td>87명</td></tr>
                <tr><td>중구</td><td>회현동</td><td>1,245명</td><td>76명</td></tr>
                <tr><td>중구</td><td>소공동</td><td>985명</td><td>45명</td></tr>
            </tbody>
        </table>
        </div>`
    }
};

const tableData = [
    { gu: '송파구', dong: '잠실3동', pop: 6827, old85: 478, popTag: '인구최다', oldTag: '' },
    { gu: '서초구', dong: '잠원동', pop: 5201, old85: 515, popTag: '', oldTag: '85세최다' },
    { gu: '송파구', dong: '잠실4동', pop: 4910, old85: 383, popTag: '', oldTag: '' },
    { gu: '강남구', dong: '청담동', pop: 4850, old85: 440, popTag: '', oldTag: '' },
    { gu: '강남구', dong: '개포1동', pop: 4569, old85: 290, popTag: '', oldTag: '' },
    { gu: '송파구', dong: '가락1동', pop: 4546, old85: 220, popTag: '', oldTag: '' },
    { gu: '송파구', dong: '잠실2동', pop: 4340, old85: 345, popTag: '', oldTag: '' },
    { gu: '강남구', dong: '일원본동', pop: 3969, old85: 294, popTag: '', oldTag: '' },
    { gu: '서초구', dong: '반포3동', pop: 3652, old85: 382, popTag: '', oldTag: '' },
    { gu: '송파구', dong: '송파2동', pop: 3549, old85: 254, popTag: '', oldTag: '' },
    { gu: '강남구', dong: '압구정동', pop: 3245, old85: 210, popTag: '', oldTag: '' },
    { gu: '서초구', dong: '서초4동', pop: 3052, old85: 185, popTag: '', oldTag: '' },
    { gu: '영등포구', dong: '신길6동', pop: 2845, old85: 140, popTag: '', oldTag: '' },
    { gu: '서초구', dong: '반포4동', pop: 2764, old85: 215, popTag: '', oldTag: '' },
    { gu: '용산구', dong: '이촌1동', pop: 2654, old85: 198, popTag: '', oldTag: '' },
    { gu: '송파구', dong: '오륜동', pop: 2456, old85: 154, popTag: '', oldTag: '' },
    { gu: '양천구', dong: '목5동', pop: 2345, old85: 167, popTag: '', oldTag: '' },
    { gu: '강남구', dong: '개포2동', pop: 2154, old85: 134, popTag: '', oldTag: '' },
    { gu: '중구', dong: '명동', pop: 1985, old85: 98, popTag: '', oldTag: '' },
    { gu: '종로구', dong: '가회동', pop: 1845, old85: 112, popTag: '', oldTag: '' },
    { gu: '종로구', dong: '삼청동', pop: 1654, old85: 95, popTag: '', oldTag: '' },
    { gu: '중구', dong: '을지로동', pop: 1452, old85: 87, popTag: '', oldTag: '' },
    { gu: '중구', dong: '회현동', pop: 1245, old85: 76, popTag: '', oldTag: '' },
    { gu: '중구', dong: '소공동', pop: 985, old85: 45, popTag: '', oldTag: '' },
];

let guFilter = 'all';
let dongFilter = 'all';
let sortCol = 'none';
let sortDir = 'none';

function toggleDropdown(key, e) {
    e.stopPropagation();
    const dd = document.getElementById('dd-' + key);
    const isOpen = dd.classList.contains('open');
    closeAllDropdowns();
    if (!isOpen) {
        if (key === 'dong') buildDongDropdown();
        dd.classList.add('open');
    }
}

function closeAllDropdowns() {
    document.querySelectorAll('.th-dropdown').forEach(d => d.classList.remove('open'));
}

document.addEventListener('click', closeAllDropdowns);

function buildDongDropdown() {
    let data = getFilteredData(true);
    const dongs = ['전체', ...data.map(r => r.dong)];
    const dd = document.getElementById('dd-dong');
    dd.innerHTML = dongs.map(d => `
                <button class="th-dropdown-item ${dongFilter === (d === '전체' ? 'all' : d) ? 'selected' : ''}"
                    onclick="setDongFilter('${d === '전체' ? 'all' : d}', event)">${d}</button>
            `).join('');
}

function setGuFilter(val, e) {
    e.stopPropagation();
    guFilter = val;
    dongFilter = 'all';
    const th = document.getElementById('th-gu');
    th.classList.toggle('filter-active', val !== 'all');
    document.querySelectorAll('#dd-gu .th-dropdown-item').forEach(b => {
        b.classList.toggle('selected', b.textContent === (val === 'all' ? '전체' : val));
    });
    closeAllDropdowns();
    renderTable();
}

function setDongFilter(val, e) {
    e.stopPropagation();
    dongFilter = val;
    const th = document.getElementById('th-dong');
    th.classList.toggle('filter-active', val !== 'all');
    closeAllDropdowns();
    renderTable();
}

function setSortFromDropdown(col, dir, e) {
    e.stopPropagation();
    sortCol = dir === 'none' ? 'none' : col;
    sortDir = dir;
    ['pop', 'old'].forEach(c => {
        const icon = document.getElementById('sort-' + c);
        icon.textContent = '';
        icon.classList.remove('active');
    });
    if (sortCol !== 'none') {
        const icon = document.getElementById('sort-' + col);
        icon.textContent = sortDir === 'desc' ? '↓' : '↑';
        icon.classList.add('active');
    }
    closeAllDropdowns();
    renderTable();
}

function getFilteredData(dongSkip) {
    const globalSearch = document.getElementById('globalSearch').value.trim();
    let data = [...tableData];

    if (globalSearch) {
        data = data.filter(r => r.gu.includes(globalSearch) || r.dong.includes(globalSearch));
    }
    if (guFilter !== 'all' && guFilter !== '기타') {
        data = data.filter(r => r.gu === guFilter);
    } else if (guFilter === '기타') {
        data = data.filter(r => !['강남구', '서초구', '송파구'].includes(r.gu));
    }
    if (!dongSkip && dongFilter !== 'all') {
        data = data.filter(r => r.dong === dongFilter);
    }
    return data;
}

function renderTable() {
    let data = getFilteredData(false);

    if (sortCol === 'pop') {
        data.sort((a, b) => sortDir === 'desc' ? b.pop - a.pop : a.pop - b.pop);
    } else if (sortCol === 'old') {
        data.sort((a, b) => sortDir === 'desc' ? b.old85 - a.old85 : a.old85 - b.old85);
    }

    const tbody = document.querySelector('#mainTableWrap table tbody');
    tbody.innerHTML = data.map(r => `
                <tr>
                    <td>${r.gu}</td>
                    <td>${r.dong}</td>
                    <td>
                        <div class="cell-num-group">
                            <span>${r.pop.toLocaleString()}</span>
                            ${r.popTag ? `<span class="label-tag gold-tag">${r.popTag}</span>` : ''}
                        </div>
                    </td>
                    <td>
                        <div class="cell-num-group">
                            <span>${r.old85.toLocaleString()}</span>
                            ${r.oldTag ? `<span class="label-tag blue-tag">${r.oldTag}</span>` : ''}
                        </div>
                    </td>
                </tr>`).join('');
}

document.addEventListener('DOMContentLoaded', renderTable);

/* ── 🌟 통합 모달 제어 함수 ── */
function openModal(type) {
    const modal = document.getElementById('polishedModal');
    document.getElementById('mTitle').innerText = mData[type].title;
    document.getElementById('mContent').innerHTML = mData[type].table;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('polishedModal').style.display = 'none';
}

let iframeReady = false;

function openPrintPreview() {
    const modal = document.getElementById('printPreviewModal');
    const iframe = document.getElementById('previewFrame');
    if (!modal || !iframe) return;

    iframeReady = false;
    modal.style.display = 'flex';

    // src를 새로 세팅해서 onload를 확실히 발생시킴
    iframe.onload = function () {
        iframeReady = true;
    };
    iframe.src = 'refined_policy_report.html?' + Date.now();
}

function closePrintPreview() {
    const modal = document.getElementById('printPreviewModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 배경 클릭 시 열려있는 모달을 닫도록 통합 처리
window.onclick = function (e) {
    if (e.target == document.getElementById('polishedModal')) closeModal();
    if (e.target == document.getElementById('printPreviewModal')) closePrintPreview();
}

// ── 차트 초기화 영역 ──
new Chart(document.getElementById('chartSupply'), {
    type: 'bar',
    data: {
        labels: ['중랑구', '도봉구', '종로구', '노원구', '강북구', '금천구', '서울평균', '마포구', '강남구', '서초구', '송파구'],
        datasets: [{
            label: '공급지표',
            data: [2.81, 2.64, 2.52, 2.31, 2.18, 2.05, 1.57, 1.43, 1.21, 1.15, 1.08],
            backgroundColor: (ctx) => ctx.raw < 1.57 ? 'rgba(251,191,36,0.7)' : 'rgba(56,189,248,0.5)',
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => ` 공급지표: ${ctx.raw} | ${ctx.raw < 1.57 ? '⚠️ 평균 이하' : '✅ 평균 이상'}`
                }
            }
        },
        scales: {
            x: { ticks: { color: '#cbd5e1', font: { family: 'Pretendard' } }, grid: { color: 'rgba(255,255,255,0.05)' } },
            y: {
                ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' },
                annotation: { type: 'line', yMin: 1.57, yMax: 1.57 }
            }
        }
    }
});

new Chart(document.getElementById('chartTypeRatio'), {
    type: 'bar',
    data: {
        labels: [
            '중랑구', '은평구', '강서구', '도봉구', '노원구', '양천구', '송파구', '관악구',
            '성북구', '강북구', '강동구', '동대문구', '영등포구', '구로구', '강남구', '동작구',
            '서대문구', '광진구', '금천구', '마포구', '서초구', '성동구', '종로구', '용산구', '중구'
        ],
        datasets: [
            {
                label: '재가노인복지시설',
                data: [68.1, 74.6, 69.8, 61.3, 81.5, 80.3, 80.3, 73.8, 75.5, 71.0, 76.8, 72.4, 77.5, 82.6, 65.7, 80.4, 71.4, 68.1, 58.2, 77.1, 72.5, 69.2, 62.0, 65.9, 76.3],
                backgroundColor: 'rgba(56,189,248,0.8)',
            },
            {
                label: '노인의료복지시설',
                data: [23.6, 12.2, 19.6, 33.3, 14.1, 11.0, 15.9, 20.8, 18.0, 26.1, 17.4, 22.0, 14.2, 14.7, 10.5, 11.8, 17.3, 23.4, 26.4, 5.7, 8.7, 13.8, 24.0, 6.8, 7.9],
                backgroundColor: 'rgba(251,191,36,0.8)',
            },
            {
                label: '노인여가복지시설',
                data: [7.9, 11.6, 7.9, 3.8, 3.3, 7.5, 2.5, 4.7, 5.0, 2.2, 3.6, 4.7, 5.8, 1.8, 19.0, 6.9, 10.2, 5.3, 12.1, 12.9, 18.8, 15.4, 12.0, 25.0, 7.9],
                backgroundColor: 'rgba(167,139,250,0.8)',
            },
            {
                label: '노인주거복지시설',
                data: [0.0, 1.1, 2.1, 1.1, 0.5, 0.6, 0.6, 0.0, 0.7, 0.0, 1.4, 0.0, 1.7, 0.0, 2.9, 0.0, 0.0, 2.1, 2.2, 2.9, 0.0, 1.5, 2.0, 2.3, 5.3],
                backgroundColor: 'rgba(52,211,153,0.8)',
            },
            {
                label: '노인일자리지원기관',
                data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.6, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.8, 0.9, 1.9, 1.0, 1.0, 1.1, 1.1, 1.4, 0.0, 0.0, 0.0, 0.0, 2.6],
                backgroundColor: 'rgba(251,113,133,0.8)',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#cbd5e1', font: { family: 'Pretendard', size: 10 }, padding: 12, boxWidth: 12 }
            },
            tooltip: { mode: 'index', intersect: false, callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.raw}%` } }
        },
        scales: {
            x: { stacked: true, ticks: { color: '#cbd5e1', font: { family: 'Pretendard', size: 10 }, minRotation: 45, maxRotation: 45 }, grid: { color: 'rgba(255,255,255,0.05)' } },
            y: { stacked: true, max: 100, ticks: { color: '#cbd5e1', font: { family: 'Pretendard', size: 10 }, callback: v => v + '%' }, grid: { color: 'rgba(255,255,255,0.03)' } }
        }
    }
});

const quadrantData = [
    { x: 110542, y: 1.08, label: '송파구', danger: true },
    { x: 104235, y: 1.21, label: '강서구', danger: true },
    { x: 98421, y: 1.89, label: '노원구', danger: false },
    { x: 93100, y: 1.15, label: '강남구', danger: true },
    { x: 88500, y: 1.42, label: '은평구', danger: false },
    { x: 85200, y: 2.31, label: '도봉구', danger: false },
    { x: 80100, y: 1.15, label: '서초구', danger: true },
    { x: 76400, y: 1.65, label: '마포구', danger: false },
    { x: 62300, y: 2.81, label: '중랑구', danger: false },
    { x: 58200, y: 2.52, label: '종로구', danger: false },
];

new Chart(document.getElementById('chartQuadrant'), {
    type: 'scatter',
    data: {
        datasets: [
            { label: '우선 검토 필요 (4사분면)', data: quadrantData.filter(d => d.danger), backgroundColor: 'rgba(251,191,36,0.85)', pointRadius: 8, pointHoverRadius: 11 },
            { label: '양호 지역', data: quadrantData.filter(d => !d.danger), backgroundColor: 'rgba(56,189,248,0.6)', pointRadius: 7, pointHoverRadius: 10 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#cbd5e1', font: { family: 'Pretendard', size: 11 } } },
            tooltip: {
                callbacks: {
                    label: ctx => {
                        const d = quadrantData.find(q => q.x === ctx.parsed.x && q.y === ctx.parsed.y);
                        return d ? ` ${d.label}  인구: ${ctx.parsed.x.toLocaleString()}명  공급지표: ${ctx.parsed.y}` : '';
                    }
                }
            }
        },
        scales: {
            x: { title: { display: true, text: '고령인구 수 (명)', color: '#64748b', font: { family: 'Pretendard' } }, ticks: { color: '#cbd5e1', callback: v => (v / 10000).toFixed(0) + '만' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            y: { title: { display: true, text: '공급지표', color: '#64748b', font: { family: 'Pretendard' } }, ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
    }
});

new Chart(document.getElementById('chartMedical'), {
    type: 'bar',
    data: {
        labels: ['송파구', '강남구', '서초구', '강서구', '노원구', '마포구', '종로구', '중랑구'],
        datasets: [
            { label: '85세 이상 인구 (백 명)', data: [78, 71, 58, 65, 62, 44, 31, 38], backgroundColor: 'rgba(251,191,36,0.7)', borderRadius: 5, yAxisID: 'y' },
            { label: '의료복지시설 수 (개소)', data: [24, 22, 20, 19, 28, 17, 18, 21], backgroundColor: 'rgba(56,189,248,0.6)', borderRadius: 5, yAxisID: 'y1' }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#cbd5e1', font: { family: 'Pretendard', size: 11 } } }, tooltip: { mode: 'index', intersect: false } },
        scales: {
            x: { ticks: { color: '#cbd5e1', font: { family: 'Pretendard' } }, grid: { color: 'rgba(255,255,255,0.03)' } },
            y: { position: 'left', title: { display: true, text: '85세 이상 (백 명)', color: '#fbbf24', font: { family: 'Pretendard', size: 10 } }, ticks: { color: '#fbbf24' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            y1: { position: 'right', title: { display: true, text: '의료시설 수', color: '#38bdf8', font: { family: 'Pretendard', size: 10 } }, ticks: { color: '#38bdf8' }, grid: { drawOnChartArea: false } }
        }
    }
});

/* ── 🌟 인쇄 실행 로직 보완 ── */
function executePrint() {
    const iframe = document.getElementById('previewFrame');
    if (!iframe) return;

    if (!iframeReady) {
        // 아직 로딩 중이면 최대 5초 대기 후 재시도
        alert("보고서가 아직 로딩 중입니다. 잠시 후 다시 눌러주세요.");
        return;
    }

    try {
        iframe.contentWindow.printMe();
    } catch (e) {
        console.error("인쇄 오류:", e);
        // contentWindow 접근 실패 시 postMessage로 대체
        iframe.contentWindow.postMessage('doPrint', '*');
    }
}