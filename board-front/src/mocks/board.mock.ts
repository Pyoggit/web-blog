import { Board } from "@/types/interface";
import defaultProfileImage from '@/assets/image/eren-profile-image.png'
import defaultMainImage from '@/assets/image/attack-main-image.png'

const boardMock: Board = {
  boardNumber: 1,
  title: '고레가 지-유다!',
  content: '난 자유를 손에 넣기 위해서 세계로부터 자유를 빼앗는다.',
  boardImageList: [defaultMainImage],
  writeDatetime: '2023. 11. 19.',
  writerEmail: 'eren@email.com',
  writerNickname: '에렌 예거',
  writerProfileImage: defaultProfileImage
};

export default boardMock;
