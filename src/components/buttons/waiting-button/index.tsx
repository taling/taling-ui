import { useCallback, useEffect, useState } from "react";

export default function WaitingButton({
  render: { normal, waiting, failed },
  passData,
  className,
  onClick,
}: {
  render: {
    normal: React.ReactNode;
    waiting: React.ReactNode;
    failed?: React.ReactNode;
  };
  passData?: any;
  className?: string;
  onClick: (passData?: any) => Promise<boolean>;
}) {
  const [currentRender, setCurrentRender] = useState<React.ReactNode>(normal);
  const [isLoading, setIsLoading] = useState(false);

  const _internalOnClick = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentRender(waiting);
    const result = await onClick(passData);
    setIsLoading(false);
    setCurrentRender(result ? normal : failed || normal);
  }, [failed, isLoading, normal, onClick, passData, waiting]);

  const updateNormalButton = useCallback(() => {
    if (!isLoading) {
      setCurrentRender(normal);
    }
  }, [isLoading, normal]);

  useEffect(() => {
    updateNormalButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normal]);

  return (
    <div className={className} onClick={_internalOnClick}>
      {currentRender}
    </div>
  );
}
