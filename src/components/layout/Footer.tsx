import footerPng from "../../assets/footer.png";

export default function Footer() {
  return (
    <footer className="bg-[#F6EFE6]">
      <img
        src={footerPng}
        alt="Footer"
        className="w-full select-none"
        draggable={false}
      />
    </footer>
  );
}
