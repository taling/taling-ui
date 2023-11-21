import { TalentCategory } from "../../constants/talent-category";
import { TalentStatusEnum } from "../../constants/talent-status";

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

  /**
   * Talent가 원데이 클래스인지 검사
   * @param talent
   * @returns
   */
  isOneDayClass: (talent: any) => {
    return talent?.totalTimes === 1;
  },

  getTalentType: (talent: any) => {
    if (TalentType.isVod(talent)) {
      return "VOD";
    } else if (TalentType.isEbook(talent)) {
      return "EBOOK";
    } else {
      return "P2P";
    }
  },
};

export const TalentStatus = {
  isSoldOut: (talent: any) => {
    return talent?.isSoldOut === 1;
  },

  isPublicClass: (talent: any) => {
    return (
      talent.status == TalentStatusEnum.OPENED &&
      talent.testYn == "N" &&
      talent.isPrivateClass == false
    );
  },
};
