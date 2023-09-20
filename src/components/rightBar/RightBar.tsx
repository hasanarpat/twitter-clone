import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import Recommendation from '../premiumRecommendation/Recommendation'
import Topics from '../topTopics/Topics'
import Footer from '../footer/Footer'
import SuggestToFollow from '../suggestToFollow/SuggestToFollow'
import MessageBox from '../messageBox/MessageBox'

const RightBar = () => {
  return (
    <aside className=' hidden lg:flex lg:w-[30%] flex-col items-center grow w-full p-2 px-4'>
      <section className="flex flex-col gap-8 w-[85%]">
        <SearchBar/>
        <Recommendation/>
        <Topics/>
        <SuggestToFollow/>
        <Footer/>
        <MessageBox/>
      </section>
    </aside>
  )
}

export default RightBar