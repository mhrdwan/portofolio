"use client";
import IsiAbout from "../components/IsiAbout";
import PageLayout from "../components/PageLayout";
import { useTranslation } from "../hooks/useTranslation";

export default function Home({ params }) {
  const { t, mounted } = useTranslation();

  if (!mounted) {
    return (
      <PageLayout>
        <IsiAbout />
        <p className="text-white mt-36 flex justify-center">
          Build With ❤️ By Mohamad Hasyim Ridwan
        </p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <IsiAbout />
      {/* <p className="text-white mt-36 flex justify-center">
        {t("home.buildWith")}
      </p> */}
    </PageLayout>
  );
}
