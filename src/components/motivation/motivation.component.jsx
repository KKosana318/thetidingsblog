import React from 'react';

import CustomTitle from '../custom-title/custom-title.component';
import Disclaimer from '../disclaimer/disclaimer.component';

import './motivation.styles.scss';

const Motivation = () => (
  <div className='motivation'>
    <CustomTitle margin='less'>The Motivation</CustomTitle>
    <h2 class="quote">The Tidings Blog is a platform for all students to learn and write about economics and history.</h2>
    <div className='part-one'>
      <img class='yash' src="https://static.wixstatic.com/media/140193_2993a2656383430fb4536fa7219f483d~mv2.jpg/v1/fill/w_273,h_271,al_c,q_80,usm_0.66_1.00_0.01/IMG_20180512_214951_308__01%20(1).webp" alt="" />
      <div class="desc">
        <span className='author'>Yashvardhan Sharma<br />Founder & Editor-In-Chief</span>
        <p>As an active participant in Model UNs, I deliberated upon many pertinent issues around the globe. I discussed issues ranging from the Syrian refugee conflict to the historical Cuban Missile Crisis. I found myself reading a lot of news and contemplated on such issues.<br /><br />  As a student, I, started becoming aware of the intricacies of the world. I had a voice, with which I wanted to talk about these issues.<br /><br />Back in 2018, there weren't many news media outlets that accepted students to write for them. There were plenty of students like me who wished to do learn and write about such issues.<br /><br />Thus, in November 2018, The Tidings Blog was founded. Originally, it started as a news and history website covering all types of news. Later, in 2020, it was redesigned to be an economics and history blog.<br /><br />The Tidings Blog is a platform for all students to learn and write about economics and history. So far we've worked with 30+ students from around the world reaching tens of thousands of people.</p>
      </div>
    </div>
    <div className='part-two'>
      <div className='desc'>
        <p>
          As the world transcends into a deep entangled web of political vendettas and sugar-coated lies filled with chaos, journalism, which was once considered to be the chief ideological weapon of the masses, continues to be used as a medium to fulfill one's own selfish interests. However, it is easy to find a plethora of things wrong with journalism today or the reasons it’s dying and very hard to do something about it.<br /><br />Thus, Tidings is a student-run blog, that publishes articles on economics and history. Everything from an analysis of the US $2 trillion economic stimulus package to the historical events such as Dagen H is covered on this blog. So, if you're someone who enjoys intellectually stimulating articles then subscribe to our mailing list to stay updated with our latest articles!
        </p>
      </div>
      <h1 className='side-quote'>Quality articles, wherever you want, whenever you want.</h1>
    </div>
    <Disclaimer />
  </div>
);

export default Motivation;