export enum TalentCategory {
  P2P_OFFLINE = 1,
  P2P_ONLINE = 2,
  P2P_VIDEO = 3, // 녹화영상
  P2P_EBOOK = 4,
  VOD = 5,
  SUBSCRIPTION = 6,
}

export enum TalentSpecialRegion {
  ONLINE = 64, // 온라인 라이브의 경우 region = 64의 특수값을 가짐
  OFFLINE = 65, // 무료체험 나오면서 생긴 값으로, 이 값일 경우 accountAddress의 주소 활용
}
