"use client";
import qs from "qs";
import useCrossDomainCookies from "../../hooks/cross-domain-cookies";

export type TalingPixelEventNameType = "onsite:pv" | "mkt:pv" | "mkt:cart";

interface ITalingPixelTrack {
  eventName: TalingPixelEventNameType;
  talentId: number;
  userId: number;
  pathname: string;
}

export default function useTalingPixel() {
  const talingPixelUrl = process.env.NEXT_PUBLIC_TALING_PIXEL_URL;
  const { getOrCreateTalingPixelSessionId } = useCrossDomainCookies();

  function track({ eventName, talentId, userId, pathname }: ITalingPixelTrack) {
    try {
      const sessionId = getOrCreateTalingPixelSessionId();

      const queryStr = qs.stringify(
        {
          ev: eventName,
          tId: talentId,
          uId: userId,
          sId: sessionId,
          p: pathname,
        },
        {
          skipNulls: true,
        },
      );

      const trackingUrl = `${talingPixelUrl}/pixel.gif?${queryStr}`;

      const img = new Image(1, 1);
      img.src = trackingUrl;
      img.alt = "Taling Pixel";
      img.style.display = "none";

      document.body.appendChild(img);
    } catch (error) {
      console.log("[TALING][PIXEL] error:", error);
      return;
    }
  }

  return {
    /**
     * 탈잉 픽셀 이벤트 트래킹
     */
    track,
  };
}
