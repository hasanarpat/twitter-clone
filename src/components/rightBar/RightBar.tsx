import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Recommendation from "../premiumRecommendation/Recommendation";
import Topics from "../topTopics/Topics";
import Footer from "../footer/Footer";
import SuggestToFollow from "../suggestToFollow/SuggestToFollow";
import MessageBox from "../messageBox/MessageBox";

const footerList = [
  "Hizmet Şartları",
  "Gizlilik Politikası",
  "Çerez Politikası",
  "Imprint",
  "Erişilebilirlik",
  "Reklam bilgisi",
  "Daha fazla",
  "© 2023 X Corp.",
];

const RightBar = () => {
  return (
    <aside className=" hidden lg:flex lg:w-[30%] xl:w-[32%] flex-col items-center grow w-full p-2 pl-6 h-max sticky top-0 right-0">
      <section className="flex flex-col gap-4">
        <SearchBar />
        <Recommendation />
        <Topics />
        <SuggestToFollow />
        <Footer list={[...footerList]} />
      </section>
    </aside>
  );
};

export default RightBar;
