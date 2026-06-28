export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="blob absolute top-[-5%] left-[-10%] w-[45%] h-[45%] bg-primary rounded-full"></div>
      <div className="blob absolute bottom-[-5%] right-[-10%] w-[45%] h-[45%] bg-primary-container rounded-full"></div>
    </div>
  );
}
