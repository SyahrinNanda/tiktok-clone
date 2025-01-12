"use client";

import ClientOnly from "./components/ClientOnly";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            <PostMain />
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  );
}
