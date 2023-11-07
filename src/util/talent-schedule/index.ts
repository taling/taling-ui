import { TalentSpecialRegion } from "@taling-ui/constants/talent-category";

const TalentSchedule = {
  /**
   * 클래스가 오프라인 지역인지 검사
   * @param talent
   * @returns
   */
  isOfflineRegion: (schedule: any) => {
    return !(schedule?.region === TalentSpecialRegion.ONLINE_LIVE);
  },
};

export default TalentSchedule;
