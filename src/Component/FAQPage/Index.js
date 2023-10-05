import React from 'react'
import './Index.css'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import SearchBar from '../SearchBar/Index'
import GuideCard from '../Cards/GuideCard/Index'
import GettingStarted from '../../Assets/gettingStarted.png'
import Investment from '../../Assets/Investment.png'
import Legal from '../../Assets/legal.png'
import UserGuide from '../../Assets/userGuide.png'
import QuestionCard from '../Cards/QuestionCard/Index'
import FAQPageForm from '../Forms/FaqPageForm/Index'



function FAQPage() {
  return (
 


    <div className='parent'>
    <Navbar/>
    <div className='leading-loose text-4xl font-bold  text-white pt-12'>Hello, How can we {<span className='text-pink font-bold'>help? </span>}</div>
    <div className='pt-10'><SearchBar/></div>
    <div className='pt-10 text-white text-lg font-medium'>or choose a category to quickly find the help you need</div>

    <div className='pt-20 pl-48 pr-48'>
      <div className='faqCardBox flex flex-row justify-center gap-8'>
        <div> <GuideCard imageUrl={GettingStarted} description="Getting Started" /></div>
        <div> <GuideCard imageUrl={Investment} description="Investment"/></div>
        <div> <GuideCard imageUrl={Legal} description="Legal"/></div>
        <div> <GuideCard imageUrl={UserGuide} description="User Guide"/></div>
      </div>
    </div>

    <div className='text-white pt-12 text-4xl font-semibold'>Getting Started</div>

    <div className='flex flex-col gap-6 pt-10 pl-24 pr-24 rounded-lg'>
      <div className='rounded-lg'><QuestionCard number="1" question="Why PropFTX" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="2" question="What is blockchain technology?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="3" question="What is property tokenization on a blockchain?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="4" question="How can AI help in simplifying the process of buying a property?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="5" question="Who can invest with PropFTX?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="6" question="What is tokenisation?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="7" question="What are the different phases of token sales?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="8" question="What is resale and how does it work in the context of token sales?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="9" question="What is a presale ?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
      <div className='rounded-lg'><QuestionCard number="10" question="Why we call PropFTX’s dashboard an ‘AI powered dashboard’?" answer="Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsum etiam proin egestas. Maecenas pretium mattis risus lectus semper praesent nunc.Lorem ipsum dolor sit amet consectetur. Orci placerat condimentum ipsbhbu"/></div>
    </div>

    <div className='leading-loose text-4xl font-bold  text-white pt-12'>You still have a {<span className='text-pink font-bold'>question?  </span>}</div>
    <div className='pt-4 text-white text-lg font-medium'>If you cannot find answer to your question in our FAQ, you can always contact us. We will answer you shortly</div>


    <div className='flex flex-row justify-center'>
    <div className='pt-12'><FAQPageForm/></div>
    </div>


    <Footer/>
    </div>
    

  )
}

export default FAQPage
