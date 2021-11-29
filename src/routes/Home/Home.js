import React from "react";

import { MainCarousel } from "../../components/carousels/MainCarousel/MainCarousel";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { UsersCarousel } from "../../components/carousels/UserCarousel/UsersCarousel";
import { NewsCarousel } from "../../components/carousels/NewsCarousel/NewsCarousel";
import { ReviewsCarousel } from "../../components/carousels/ReviewsCarousel/ReviewsCarousel";
import { Contacts } from "../../components/Contacts/Contacts";

export function Home({content, setTabValue, setUser}) {
  React.useEffect(() => {
    setTabValue(0)
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <>
    {content.slides && <MainCarousel />}
    {content.siteMainContent && <MainContainer />}
    <UsersCarousel setUser={setUser}/>
    {content.news && <NewsCarousel />}
    {content.reviews?.length && <ReviewsCarousel />}
    {content.appContacts && <Contacts />}
    </>
  )
}