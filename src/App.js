import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import HomePage from './Componenets/HomePage'
import DisplayHoriscope from './Componenets/DisplayHoriscope'
import Enter from './Componenets/Enter'
import 'semantic-ui-css/semantic.min.css'
import PalmReading from './Componenets/PalmReading'
import Animal from './Componenets/Animal'

export class App extends Component{

  state = {
    pic: null,
    birthday: null,
    month: '',
    day: 0,
    year: '',
    sign: '',
    years: [],
    signs: [],
    furtune: '',
    displayReading: false,
    palmreading: ['What other people think of you is none of your buisness.','Make a list of what youre thankful for today.','Appricate the small things in life!','This is actually quite complicated. Sort through the details before you make a move.','There comes a point where you need to make a choice and stick with it.','You understand the situation better than you realize.','Pick your battles.','A good night sleep will help you see more clearly.','Always remember luck comes in streaks.','Some things are better left unsaid…','You may have sensed a shift in your present situation. Adapt accordingly.','You have a dark side.','You will live a long happy life.', 'Face the facts with dignity.', 'Love alludes you.', 'The planets are aligned against you today.', 'The stars will shine down on you today.'],
    chineseZodiac: '',
    animal: '',
    picture: '',
    bestMatch: [],
    avoid: [],
    description: ''
  }

  resetBday = () => this.setState({ birthday: null })

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  componentDidMount(){
    this.createYearArray()
  }

  findChineseZodiac = year => {
    let description = ''
    let avoid = []
    let bestMatch = []
    let picture = ''
    let animal = ''
    switch ((year - 4) % 12) {
      case  0:
        animal = 'Rat';
        description = 'Those born under the Chinese Zodiac sign of the Rat are quick-witted, clever, charming, sharp and funny. They have excellent taste, are a good friend and are generous and loyal to others considered part of its pack. Motivated by money, can be greedy, is ever curious, seeks knowledge and welcomes challenges.'
        picture = 'https://images-na.ssl-images-amazon.com/images/I/61rgr+X9-AL.jpg'
        avoid = ['Horse', 'Rooster']
        bestMatch  = ['Ox', 'Dragon', 'Monkey'];
      break;
      case  1:
        animal = 'Ox'
        description = 'Another of the powerful Chinese Zodiac signs, the Ox is steadfast, solid, a goal-oriented leader, detail-oriented, hard-working, stubborn, serious and introverted but can feel lonely and insecure. Takes comfort in friends and family and is a reliable, protective and strong companion.'
        bestMatch = ['Rat', 'Snake', 'Rooster']
        avoid = ['Tiger', 'Dragon', 'Horse', 'Sheep']
        picture = 'https://i.pinimg.com/564x/80/20/e7/8020e7ed10b702912c3d17176dc7baaf.jpg';
      break;
      case  2:
        animal = 'Tiger'
        description = 'Those born under the Chinese Zodiac sign of the Tiger are authoritative, self-possessed, have strong leadership qualities, are charming, ambitious, courageous, warm-hearted, highly seductive, moody, intense, and they’re ready to pounce at any time.'
        bestMatch = ['Dragon', 'Horse', 'Pig']
        avoid = ['Ox', 'Tiger', 'Snake', 'Monkey']
        picture = 'https://i.pinimg.com/564x/88/8b/b4/888bb4d24cda3a1b4a0827e7cfe487e0.jpg';
      break;
      case  3:
        animal = 'Rabbit'
        description = 'Those born under the Chinese Zodiac sign of the Rabbit enjoy being surrounded by family and friends. They’re popular, compassionate, sincere, and they like to avoid conflict and are sometimes seen as pushovers. Rabbits enjoy home and entertaining at home.'
        bestMatch = ['Sheep', 'Monkey', 'Dog', 'Pig']
        avoid = ['Snake', 'Rooster']
        picture = 'https://i.pinimg.com/564x/38/64/86/38648664766e7843b7684bf3e7ff4ef4.jpg';
      break;
      case  4:
        animal = 'Dragon'
        description = 'A powerful sign, those born under the Chinese Zodiac sign of the Dragon are energetic and warm-hearted, charismatic, lucky at love and egotistic. They’re natural born leaders, good at giving orders and doing what’s necessary to remain on top.'
        bestMatch = ['Rooster', 'Rat', 'Monkey']
        avoid = ['Ox', 'Sheep', 'Dog']
        picture = 'https://i.pinimg.com/564x/ce/b9/d6/ceb9d655361f573d0561f01f99ab11c3.jpg';
      break;
      case  5:
        animal = 'Snake'
        description = 'Those born under the Chinese Zodiac sign of the Snake are seductive, gregarious, introverted, generous, charming, good with money, analytical, insecure, jealous, slightly dangerous, smart, they rely on gut feelings, are hard-working and intelligent.'
        bestMatch = ['Dragon', 'Rooster']
        avoid = ['Tiger', 'Rabbit', 'Snake', 'Sheep', 'Pig']
        picture = 'https://i.pinimg.com/564x/0b/ee/15/0bee152359fb9db2b2b6b319cfc3e493.jpg';
      break;
      case  6:
        animal = 'Horse'
        description = 'Those born under the Chinese Zodiac sign of the Horse love to roam free. They’re energetic, self-reliant, money-wise, and they enjoy traveling, love and intimacy. They’re great at seducing, sharp-witted, impatient and sometimes seen as a drifter.'
        bestMatch = ['Tiger', 'Sheep', 'Rabbit']
        avoid = ['Rat', 'Ox', 'Rooster', 'Horse']
        picture = 'https://i.pinimg.com/originals/ba/7e/41/ba7e4171b72b6f88a17e59df0061553b.jpg';
      break;
      case  7:
        animal = 'Goat'
        description = 'Those born under the Chinese Zodiac sign of the Goat enjoy being alone in their thoughts. They’re creative, thinkers, wanderers, unorganized, high-strung and insecure, and can be anxiety-ridden. They need lots of love, support and reassurance. Appearance is important too.'
        bestMatch = ['Rabbit', 'Horse', 'Pig']
        avoid = ['Ox', 'Tiger', 'Dog']
        picture = 'https://i.pinimg.com/564x/7c/53/83/7c5383eb1feab0de2e2cf86663bba127.jpg';
      break;
      case  8:
        animal = 'Monkey'
        description = 'Those born under the Chinese Zodiac sign of the Monkey thrive on having fun. They’re energetic, upbeat, and good at listening but lack self-control. They like being active and stimulated and enjoy pleasing self before pleasing others. They’re heart-breakers, not good at long-term relationships, morals are weak.'
        bestMatch = ['Ox', 'Rabbit']
        avoid = ['Tiger', 'Pig']
        picture = 'https://imgc.artprintimages.com/img/print/chinese-zodiac-animal-astrological-sign-monkey_u-l-pt3z020.jpg?h=900&p=0&w=900';
      break;
      case  9:
        animal = 'Rooster'
        description = 'Those born under the Chinese Zodiac sign of the Rooster are practical, resourceful, observant, analytical, straightforward, trusting, honest, perfectionists, neat and conservative.'
        bestMatch = ['Ox', 'Snake']
        avoid = ['Rat', 'Rabbit', 'Horse', 'Rooster', 'Dog']
        picture = 'https://miro.medium.com/max/265/1*bcuE2jhrKdNBPEVdNKwvBw.jpeg';
      break;
      case 10:
        animal = 'Dog'
        description = 'Those born under the Chinese Zodiac sign of the Dog are loyal, faithful, honest, distrustful, often guilty of telling white lies, temperamental, prone to mood swings, dogmatic, and sensitive. Dogs excel in business but have trouble finding mates.'
        bestMatch = ['Rabbit', 'Tiger']
        avoid = ['Dragon', 'Sheep', 'Rooster']
        picture = 'https://i.pinimg.com/564x/08/b2/f2/08b2f28a4850fbc4d1770b1b40424870.jpg';
      break;
      case 11:
        animal = 'Pig'
        description = 'Those born under the Chinese Zodiac sign of the Pig are extremely nice, good-mannered and tasteful. They’re perfectionists who enjoy finer things but are not perceived as snobs. They enjoy helping others and are good companions until someone close crosses them, then look out! They’re intelligent, always seeking more knowledge, and exclusive.'
        bestMatch = ['Tiger', 'Rabbit', 'Sheep']
        avoid = ['Snake', 'Monkey']
        picture = 'https://i.pinimg.com/564x/5b/d9/11/5bd9117b719455d1257a01d1a8b8a5d7.jpg';
      break;
      default:
        animal = ''
  }
    this.setState({ animal: animal, picture: picture, bestMatch: bestMatch, avoid: avoid, description: description })
  }

  loadSign = sign => {
    let pic = ''
    let furtune = ''
    switch(sign){
      case 'Aries':
        furtune = 'Aires is the first sign of the zodiac and is represented by the ram.  It is a cardinal sign, meaning it comes at the beginning of its season and exhibits leadership qualities.  As a fire sign, Ares tends to be active, combustable (combative) and of a highly ambitious in nature.  This sign is ruled by the planet mars, so there is a tendency to boldly charge into new territory and an eagerness to test their will against other competitors.'
        pic = 'https://www.mydomaine.com/thmb/mkood4PiUJz0WyEJXYznmIlvZ40=/700x366/filters:fill(auto,1)/cdn.cliqueinc.com__cache__posts__220851__what-you-need-to-know-when-dealing-with-an-aries-a-handy-guide-220851-1491426207-fb.700x0c-2eeb02aad70a483785cc1ea54c29754c.jpg'
        break;
      case 'Taurus':
        furtune = "Taurus is a fixed earth sign represented by the bull.  Signs situated in the middle of a season tend to be set in their ways.  Their behavior and thought patterns tend to remain more or less consistent over long periods of time.  There is a focus on material comforts and security.  They tend to identify quite strongly with their belongings and are down to earth in the way they process events and information.  Taurus is ruled by the planet Venus.  This makes them quite romantic, and generally interested in beauty and sensual gratification."
        pic = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F04%2F03%2F040220-taurus-astrology-lead.jpg&q=85'
        break;
      case 'Gemini':
        furtune = 'Gemini is a mutable air sign represented by the twins.  It comes at the end of the season, which makes its nature very changeable.  As an air sign (ruled by the planet mercury) they are very interested in communication and travel.  They need to socialize and bounce ideas off of different sorts of people.  They can make very pleasant company, especially in a group setting.  Being of the air element makes them somewhat unpredictable as lovers.  Changes of mind/heart are frequent.'
        pic = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F04%2F17%2F041620_gemini_explainer_lead-2000.jpg&q=85'
        break;
      case 'Cancer':
        furtune = 'Cancer is a cardinal water sign, as it rules the beginning of the summer and is of an emotional/feeling nature.  Their ruling planet as the moon.  And just as the moon changes faces frequently, Cancer tends to be heavily effected by shifts in moods (sometimes mood swings).  Their leadership tends to manifest within their family or friend/clan group.  They enjoy hosting events from home and form strong bonds to those they connect with.  Just as the crab has a hard shell and soft exterior, Cancer moves about the world with a deceptively hard exterior, but they are very sensitive internally.  As lovers they show great warmth towards those they trust enough to ‘let in’ and will make detailed notes regarding the emotional landscapes of whomever they are dating.'
        pic = 'https://static.onecms.io/wp-content/uploads/sites/14/2020/05/11/050820_cancer_astro_explainer_lead-2000.jpg'
        break;
      case 'Leo':
        furtune = 'Leo is a fixed fire sign and represented by the lion.  It’s ruling ‘planet’ is the Sun.  Leo is closely related to ideas of King/queenship.  They are proud, magnetic, and strong personalities which seem to be somewhat polarizing.  Leo needs to be the center of attention and are drawn to career paths which will put them in the lime-light or afford them higher social status.  As lovers they are playful and may enjoy roleplaying or power dynamic scenarios.  While Leos are notably self confident, they require the affirmations of admirers to maintain that self assurance.'
        pic = 'https://static.onecms.io/wp-content/uploads/sites/14/2020/05/28/052820_leo_explainer_lead-2000.jpg'
        break;
      case 'Virgo':
        furtune = 'Virgo is a mutable earth sign and represented by the virgin.  Virgos are ruled by mercury, but where as Gemini’s mercury is more outwardly focused on ideas and chit chat, Virgos mind is more geared towards minutia and and awareness of their physical being.  They can be hypochondriacs because they pay attention to subtle shifts in their body’s systems, particularly digestive.  They may have specific diets or regimens that structure their day to day life.  In work they are masters at managing logistics, as they pay attention to finer details.  As lovers they usually prefer partnerships to casual encounters and can display a sensual eagerness that may surprise their paramours.  They sometimes are mischaracterized as prudish.  They simply prefer to know and feel comfortable with the other person, and make sure the little things they find irritating don’t make up the bulk of the picture.'
        pic = 'https://static.onecms.io/wp-content/uploads/sites/14/2020/06/16/061620-virgo-explainer-astrology-lead-2000.jpg'
        break;
      case 'Libra':
        furtune = 'Libra is a cardinal earth sign represented by the scales.  Libra is ruled by the planet Venus, and so their attention tends to be drawn to the realm of aesthetics and/or personal relationships.  Libra possesses strong social graces.  There is an interest in fashion and they often possess a distinct sense of style that others find attractive.  They tend to be charming and pleasant company.  Like the scales (which have a weight and counterweight) the ‘Other’ is crucial to their orientation process.  It is important for them to be ‘bouncing ideas’ off of people who’s opinions they respect (typically friends, family or significant others).  Matters of Justice are important to them (as a natural extension of aesthetics). As lovers they will be devoted and attentive, but are subject to ‘turns’ and can do a 180 on someone after becoming entangled emotionally.'
        pic = 'https://static.onecms.io/wp-content/uploads/sites/14/2020/06/30/062020_libra_explainer_lead-2000.jpg'
        break;
      case 'Scorpio':
        furtune = 'Scorpio is a fixed water sign represented by the scorpion.  The ancients attributed its rulership to Mars.  They are extremely strong willed and can be contentious and vengeful.  Scorpio is very sensitive but built well for battle.  Their nervous systems seem more calibrated to a survival wavelength than many overly socialized people and will do what is necessary to protect their interests.  While they are (rightly) characterized as very sexually oriented, the Scorpio is often shy and sensitive and can be somewhat selective whom they bring back to their bedroom.  Once bonded to an individual they will remain as such unless something significant happens to sever the cord, in which case they may become a real enemy.   There is a penetrating quality to their insight which grants a window into other people’s psychology, as well as a natural curiosity that makes them well suited to all types of investigation.'
        pic = 'https://www.thesun.co.uk/wp-content/uploads/2020/11/scorpio.jpg'
        break;
      case 'Sagittarius':
        furtune = 'Sagittarius is a mutable fire sign represented by the centaur and ruled by the planet Jupiter.  The centaur is a mythical creature with the upper torso of a human and the body of a horse.  Here we see their nature articulated symbolically.  Jupiter is the planet of ‘expansiveness’.  The human side is drawn to lofty ideas: philosophy, spirituality, culture.  They like to travel to strange lands and are most likely of all the signs to commit to a partner from another background or country.  The animal half represents the tendency toward rivalry.  They enjoy partying and playing.  There is a cultured element as well as an ability to operate on a ‘street’ level.  As lovers they are likely to be adventurous and energetic, though they may possess a ‘roving eye.’'
        pic = 'https://static.onecms.io/wp-content/uploads/sites/14/2020/07/29/072920_saggitarius_lead.jpg'
        break;
      case 'Capricorn':
        furtune = 'Capricorn is a cardinal earth sign represented by the goat (sometimes a ‘goat-fish’) and ruled by the planet Saturn.  Capricorn is very grounded in their thinking.  They are pragmatic and value traditional ways that are ‘tried and true’.  They are hard workers and ambitious, typically serious and can tend towards melancholy (due to Saturns influence).  Interestingly they also have a reputation for having a strong sense of humor.  As lovers they can be quite amorous and enjoy the physicality of the act.  All of the earth signs are more connected to physical reality and hence the physical body.  Capricorn will often find success in their professional lives.  But this will come after years of hard work and may not occur until relatively late in life.  The concept of Legacy corresponds here, as they are likely to accomplish work that will survive them and be passed on to their children.'
        pic = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F08%2F19%2F081920_capricorn_explainer_lead-2000.jpg&q=85'
        break;
      case 'Aquarius':
        furtune = 'Aquarius is a fixed air sign represented but he water-bearer.  The ancients attributed its rulership to the planet Saturn.  Aquarius is one of only two signs depicted as human figures.  Strangely enough, it is as if ‘Mankind’ itself is the archetype at work here.  They will have a large social sphere and it is important for them to be exchanging ideas with as varied a group as possible.  Aquarians are the futurists of the zodiac.  They are humanitarians interested in ways of improving mankind lot in general.  Interestingly, their compassion seems to be more general and less specific to individuals. The idea of groups people suffering upsets them, however on an individual basis they can be remote and somewhat cold.  As lovers they make good companions, pleasant company and are intellectually stimulating. While the other air signs possess a capriciousness which could give one reason for caution, Aquarius is not typically fickle in the company they keep.'
        pic = 'https://static.onecms.io/wp-content/uploads/sites/14/2020/08/26/082620_aquarius_explainer_lead-2000.jpg'
        break;
      case 'Pisces':
        furtune = 'Pisces is a mutable water sign represented by two fish swimming in opposite directions.  It’s ruler is the planet Jupiter.  Some have said the two fish represent a ‘sink or swim’ quality they possess.  The expansiveness of Jupiter is connected to the spiritual instinct.  While the other two water signs possess armor (the crab shell or the scorpion’s exoskeleton) the fish lacks major defenses to protect its sensitivity.  This makes the walls between them an others very thin.  They are very intuitive and tend to pick up on feelings of those around them.  They can be pulled into beneficial or destructive company depending on the currents they move in.  There is a connection to the world of dream and a tendency to self medicate with drugs or alcohol.  As lovers they will give all of themselves.  The sex can take on a spiritual quality,  whereby they are transcending a more gross human state by total envelopment in the sensual ‘feels.'
        pic = 'https://static.onecms.io/wp-content/uploads/sites/14/2020/09/04/090420_pisces_explainer-2000.jpg'
        break;
      default:
        furtune = null 
        pic = null 
    }
    this.setState({ furtune: furtune, pic: pic })
  }


  createYearArray = () => {
    const array = [2020]
    let count = 0
    while (count < 100){
      let newYear = array[count] - 1
      array.push(newYear)
      count ++;
    }
    this.setState({years: array})
  }

  submitBirthday = () => {
    const month = this.state.month
    const day = parseInt(this.state.day)
    const year = parseInt(this.state.year)
    this.setState({ birthday: {
      month: month,
      day: day,
      year: year
    } })
    this.findSign(month, day)
    this.findChineseZodiac(year)
  }

  findSign = (month, day) => {
    let sign = ''
    switch(month){
      case 'January':
        if (day < 21){
          sign = 'Capricorn'
        } else {
          sign = 'Aquarius'
        }
        break;
      case 'February':
        if (day < 20){
          sign = 'Aquarius'
        } else {
          sign = 'Pisces'
        }
        break;
      case 'March':
        if (day < 22){
          sign = 'Pisces'
        } else {
          sign = 'Aries'
        }
        break;
      case 'April':
        if (day < 21){
          sign = 'Aries'
        } else {
          sign = 'Taurus'
        }
        break;
      case 'May':
        if (day < 22){
          sign = 'Taurus'
        } else {
          sign = 'Gemini'
        }
        break;
      case 'June':
        if (day < 22){
          sign = 'Gemini'
        } else {
          sign = 'Cancer'
        }
        break;
      case 'July':
        if (day < 24){
          sign = 'Cancer'
        } else {
          sign = 'Leo'
        }
        break;
      case 'August':
        if (day < 24){
          sign = 'Leo'
        } else {
          sign = 'Virgo'
        }
        break;
      case 'September':
        if (day < 24){
          sign = 'Virgo'
        } else {
          sign = 'Libra'
        }
        break;
      case 'October':
        if (day < 24){
          sign = 'Libra'
        } else {
          sign = 'Scorpio'
        }
        break;
      case 'November':
        if (day < 23){
          sign = 'Scorpio'
        } else {
          sign = 'Sagittarius'
        }
        break;
      case 'December':
        if (day < 23){
          sign = 'Sagittarius'
        } else {
          sign = 'Capricorn'
        }
        break;
      default:
        sign = null 
    }
    this.loadSign(sign)
    this.setState({ sign: sign })
  }

  displayReading = () => setTimeout( () => this.setState({ displayReading: true }) , 6000)

  clearReading = () => this.setState({ displayReading: false })

  render(){
    const fortune = this.state.palmreading[Math.floor(Math.random() * this.state.palmreading.length)]
    return (
    <div className="App">
      <Switch>
        <Route path='/animal' render={()=> <Animal description={this.state.description} avoid={this.state.avoid} bestMatch={this.state.bestMatch} picture={this.state.picture} animal={this.state.animal} />}></Route>
        <Route path='/palmreading' render={()=> <PalmReading clearReading={this.clearReading} displayReading={this.state.displayReading} fortune={fortune}/> }></Route>
        <Route path='/horiscope' render={()=> <DisplayHoriscope pic={this.state.pic} birthday={this.state.birthday} sign={this.state.sign} furtune={this.state.furtune}/>}></Route>
        <Route path='/birthday' render={()=> <HomePage resetBday={this.resetBday} handleOnChange={this.handleOnChange} birthday={this.state.birthday} years={this.state.years} day={this.state.day} month={this.state.month} year={this.state.year} submitBirthday={this.submitBirthday}/> } />
        <Route path='/' render={()=> <Enter displayReading={this.displayReading}/> }></Route>
      </Switch>
    </div>
   )
  }
}

export default App;
