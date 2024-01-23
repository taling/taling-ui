"use client";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import qs from "qs";

const findOrCreateSessionId = () => {
  const domain = process.env.NEXT_PUBLIC_SELF;
  const domainWithoutSubdomain = domain?.split(".").slice(-2).join(".");
  const cookieDomain = domainWithoutSubdomain || domain;
  const expireDate = dayjs().add(30, "day").toDate().toUTCString();
  const isExistSessionId = document.cookie
    .split("; ")
    .find((row) => row.startsWith("taling-pixel:sessionId"));

  if (isExistSessionId) {
    return isExistSessionId.split("=")[1];
  } else {
    const sessionId = uuidv4();
    document.cookie = `taling-pixel:sessionId=${sessionId}; path=/; domain=${cookieDomain}; expires=${expireDate};`;
    return sessionId;
  }
};

export const TrackingPixel = () => {
  const talingPixelUrl = process.env.NEXT_PUBLIC_TALING_PIXEL_URL;
  return {
    track: ({ talentId, userId, pathname }: any) => {
      try {
        const sessionId = findOrCreateSessionId();

        const queryStr = qs.stringify(
          {
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
    },
  };
};
