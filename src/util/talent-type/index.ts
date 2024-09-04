import { TalentCategory } from "../../constants/talent-category";
import { TalentStatusEnum } from "../../constants/talent-status";
import { GROUP_CLASS } from "../../constants/talent-type";

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
   * Talent가 구독 클래스인지 검사
   * @param talent
   * @returns boolean
   */
  isSubscription: (talent: any) => {
    return talent?.mCategory === TalentCategory.SUBSCRIPTION;
  },

  /**
   * Talent가 원데이 클래스인지 검사
   * @param talent
   * @returns
   */
  isOneDayClass: (talent: any) => {
    return talent?.totalTimes === 1;
  },

  /**
   * Talent가 그룹 클래스인지 검사
   * @param talent
   * @returns
   */
  isGroupClass: (talent: any) => {
    const groupAvailable = talent?.groupAvailable;
    return GROUP_CLASS.includes(groupAvailable);
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

  getTalentTypeString: (talent: any) => {
    if (TalentType.isVod(talent)) {
      return "VOD";
    } else if (TalentType.isEbook(talent)) {
      return "전자책";
    } else {
      return "온/오프라인";
    }
  },
};

export const TalentStatus = {
  isDraft: (talent: any) => {
    return talent?.status === TalentStatusEnum.DRAFT;
  },
  isRejected: (talent: any) => {
    return talent?.status === TalentStatusEnum.REJECTED;
  },
  isSoldOut: (talent: any) => {
    return talent?.isSoldOut === 1;
  },
  isOpened: (talent: any) => {
    return talent?.status === TalentStatusEnum.OPENED;
  },
  isPublicClass: (talent: any) => {
    return talent.status == TalentStatusEnum.OPENED && talent.testYn == "N";
  },
  //심사 완료 된 클래스인지
  isReviewComplete: (talent: any) => {
    return (
      talent?.status === TalentStatusEnum.SUSPENDED ||
      talent?.status === TalentStatusEnum.OPENED ||
      talent?.status === TalentStatusEnum.WAITING_FOR_TERMS_AGREEMENT
    );
  },
};
