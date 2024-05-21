import LoadingSpinner from "../spinner";

export default function LoadingBannerComponent({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-sm py-12 text-center min-h-screen mt-44">
      {title}
      <div className="mx-auto w-6 text-taling-pink p-4">
        <LoadingSpinner className="w-5 h-5" />
      </div>
    </div>
  );
}
