import { BoardListItem } from "@/types/interface";

const latestBoardListMock: BoardListItem[] = [
    {
        boardNumber: 1,
        title: "오늘 점심뭐먹지",
        content: "어제 술을먹어서그런지 숙취해소가 필요하네요",
        boardTitleImage:  'https://via.placeholder.com/150/92c952',
        favoriteCount: 0,
        commentCount: 0,
        viewCount: 0,
        writeDatetime: "2025.01.17. 00:54:27",
        writerNickname: "젠인 토우지",
        writerProfileImage:  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&h=300&fit=crop',
    },
    {
        boardNumber: 1,
        title: "오늘 점심뭐먹지",
        content: "어제 술을먹어서그런지 숙취해소가 필요하네요",
        boardTitleImage:  null,
        favoriteCount: 0,
        commentCount: 0,
        viewCount: 0,
        writeDatetime: "2025.01.17. 00:54:27",
        writerNickname: "젠인 토우지",
        writerProfileImage:  null,
    }
];

export default latestBoardListMock;