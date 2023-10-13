import { TalentCategory } from "../../constants/talent-category";

export const TalentType = {
  /**
   * Talent가 전자책 클래스인지 검사
   * @param talent
   * @returns boolean
   */
  isEbook: (talent: any) => {
    return talent?.mCategory === TalentCategory.P2P_EBOOK;
  },
  /**
   * Talent가 p2p 인지 검사
   * @param talent
   * @returns boolean
   */
  isP2p: (talent: any) => {
    return (
      talent?.mCategory === TalentCategory.P2P_OFFLINE ||
      talent?.mCategory === TalentCategory.P2P_ONLINE ||
      talent?.mCategory === TalentCategory.P2P_VIDEO
    );
  },
  /**
   * Talent가 VOD인지 검사
   * @param talent
   * @returns boolean
   */
  isVod: (talent: any) => {
    return talent?.mCategory === TalentCategory.VOD || talent?.isVod === 1;
  },
};
