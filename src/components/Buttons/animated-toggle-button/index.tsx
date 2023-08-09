"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ToggleAnimateProps {
  initial: any;
  animate: any;
  exit: any;
}

const _DefaultToggleAnimateProps = {
  initial: { opacity: 0, scale: 0.0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.0 },
};

export default function AnimatedToggleButtonComponent({
  isOn,
  render,
  onToggle,
}: {
  isOn: boolean;
  render: {
    on: React.ReactNode;
    off: React.ReactNode;
    loading: React.ReactNode;
    error?: React.ReactNode;
  };
  onToggle: () => Promise<{
    toggleSuccess: boolean;
  }>;
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [showErrorRender, setShowErrorRender] = useState(false);

  return (
    <AnimatePresence>
      {isOn ? (
        <motion.div
          {..._DefaultToggleAnimateProps}
          key="button"
          onClick={(e: any) => {
            e.stopPropagation();
            setIsUpdating(true);
            onToggle().then((toggleSuccess) => {
              setIsUpdating(false);
              setShowErrorRender(!toggleSuccess);
            });
          }}
        >
          {isUpdating ? (
            <motion.div {..._DefaultToggleAnimateProps} key="button-on-spin">
              {render.loading}
            </motion.div>
          ) : (
            <motion.div {..._DefaultToggleAnimateProps} key="button-on-on">
              {showErrorRender ? render.error : render.on}
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div
          {..._DefaultToggleAnimateProps}
          className=""
          key="button"
          onClick={(e: any) => {
            e.stopPropagation();
            setIsUpdating(true);
            onToggle().then((toggleSuccess) => {
              setIsUpdating(false);
              setShowErrorRender(!toggleSuccess);
            });
          }}
        >
          {isUpdating ? (
            <motion.div {..._DefaultToggleAnimateProps} key="button-off-spin">
              {render.loading}
            </motion.div>
          ) : (
            <motion.div {..._DefaultToggleAnimateProps} key="button-off-off">
              {showErrorRender ? render.error : render.off}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
