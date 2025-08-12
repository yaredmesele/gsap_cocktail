"use client";

// import { formatDate } from "@/i18n/dateFormatter";
// import { formatCurrency } from "@/i18n/formatCurrency";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  // const price = 1000;
  // const locale = useLocale();
  // const today = new Date();

  // const formattedPrice = formatCurrency(price, locale);
  // const formattedDate = formatDate(today, locale);
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>{t("title")}</h1>
      {/* <span>{formattedPrice}</span>
      <span>{formattedDate}</span> */}

      <div>
        <button id="blue-box" className="h-20 w-20 bg-blue-500 rounded-xl">
          Box
        </button>
      </div>
    </div>
  );
}
