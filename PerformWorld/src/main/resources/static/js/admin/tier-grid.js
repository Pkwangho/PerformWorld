const initTierGrid = () => {
    const Grid = tui.Grid;

    // 테마
    Grid.applyTheme('clean',  {
        cell: {
            normal: {
                border: 'gray',
                showVerticalBorder: true,
                showHorizontalBorder: true
            },
            header: {
                background: 'gray',
                text: 'white',
                border: 'white'
            }
        }
    });

    // 그리드 설정
    const tgrid = new Grid({
        el: document.getElementById('tierGrid'),
        scrollX: false,
        scrollY: false,
        minBodyHeight: 30,
        pageOptions: {
            useClient: true,  // 프론트에서 페이징
            perPage: 10
        },
        draggable: false, // 드래그 비활성화
        columns: [
            {
                header: '등급 ID',
                name: 'tierId',
                align: 'center',
                hidden: true
            },
            {
                header: '등급 이름',
                name: 'tierName',
                align: 'center',
                minWidth: 150,
                flex: 1
            },
            {
                header: '최소 사용 금액',
                name: 'minSpent',
                align: 'center',
                minWidth: 150,
                flex: 1,
                formatter: ({ value }) => value?.toLocaleString() || '' // 값이 없을 경우 빈 문자열
            },
            {
                header: '최대 사용 금액',
                name: 'maxSpent',
                align: 'center',
                minWidth: 150,
                flex: 1,
                formatter: ({ value }) => value?.toLocaleString() || '' // 값이 없을 경우 빈 문자열
            },
            {
                header: '할인율',
                name: 'discountRate',
                type: 'number',
                align: 'center',
                minWidth: 100,
                flex: 1,
                formatter: ({ value }) => (value !== undefined ? `${value}%` : '') // 값이 없을 경우 빈 문자열
            }
        ]
    });

    // resize
    window.addEventListener('resize', function(e) {
        tgrid.refreshLayout();
    });

    return tgrid;
}

const tinit = () => {
    // grid 초기화
    const tierGrid = initTierGrid();

    // 티어 목록 조회
    async function getTierList() {
        try {
            const res = await axios({
                method: 'get',
                url: '/admin/getAllTiers',  // 티어 목록 API 엔드포인트
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // 그리드에 데이터 설정
            tierGrid.resetData(res.data);
        } catch (error) {
            console.error('Error fetching tier list:', error);
        }
    }

    // 티어 목록 조회 실행
    getTierList();
}

document.addEventListener("DOMContentLoaded", function () {
    tinit();  // 페이지 DOM이 로드된 후에 그리드 초기화
});