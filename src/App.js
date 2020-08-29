import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import HomePage from './Componenets/HomePage'
import Nav from './Componenets/Nav'
import DisplayHoriscope from './Componenets/DisplayHoriscope'
import 'semantic-ui-css/semantic.min.css'

export class App extends Component{

  state = {
    birthday: null,
    month: '',
    day: 0,
    year: '',
    sign: '',
    years: [],
    signs: [],
    furtune: ''
  }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  componentDidMount(){
    this.createYearArray()
  }

  loadSign = (sign) => {
    let furtune = ''
    switch(sign){
      case 'Aries':
        furtune = 'Aires is the first sign of the zodiac and is represented by the ram.  It is a cardinal sign, meaning it comes at the beginning of its season and exhibits leadership qualities.  As a fire sign, Ares tends to be active, combustable (combative) and of a highly ambitious in nature.  This sign is ruled by the planet mars, so there is a tendency to boldly charge into new territory and an eagerness to test their will against other competitors.'
        break;
      case 'Taurus':
        furtune = "Taurus is a fixed earth sign represented by the bull.  Signs situated in the middle of a season tend to be set in their ways.  Their behavior and thought patterns tend to remain more or less consistent over long periods of time.  There is a focus on material comforts and security.  They tend to identify quite strongly with their belongings and are down to earth in the way they process events and information.  Taurus is ruled by the planet Venus.  This makes them quite romantic, and generally interested in beauty and sensual gratification."
        break;
      case 'Gemini':
        furtune = 'Gemini is a mutable air sign represented by the twins.  It comes at the end of the season, which makes its nature very changeable.  As an air sign (ruled by the planet mercury) they are very interested in communication and travel.  They need to socialize and bounce ideas off of different sorts of people.  They can make very pleasant company, especially in a group setting.  Being of the air element makes them somewhat unpredictable as lovers.  Changes of mind/heart are frequent.'
      break;
      case 'Cancer':
         furtune = 'Cancer is a cardinal water sign, as it rules the beginning of the summer and is of an emotional/feeling nature.  Their ruling planet as the moon.  And just as the moon changes faces frequently, Cancer tends to be heavily effected by shifts in moods (sometimes mood swings).  Their leadership tends to manifest within their family or friend/clan group.  They enjoy hosting events from home and form strong bonds to those they connect with.  Just as the crab has a hard shell and soft exterior, Cancer moves about the world with a deceptively hard exterior, but they are very sensitive internally.  As lovers they show great warmth towards those they trust enough to ‘let in’ and will make detailed notes regarding the emotional landscapes of whomever they are dating.'
      break;
      case 'Leo':
        furtune = 'Leo is a fixed fire sign and represented by the lion.  It’s ruling ‘planet’ is the Sun.  Leo is closely related to ideas of King/queenship.  They are proud, magnetic, and strong personalities which seem to be somewhat polarizing.  Leo needs to be the center of attention and are drawn to career paths which will put them in the lime-light or afford them higher social status.  As lovers they are playful and may enjoy roleplaying or power dynamic scenarios.  While Leos are notably self confident, they require the affirmations of admirers to maintain that self assurance.'
        break;
      case 'Virgo':
        furtune = 'Virgo is a mutable earth sign and represented by the virgin.  Virgos are ruled by mercury, but where as Gemini’s mercury is more outwardly focused on ideas and chit chat, Virgos mind is more geared towards minutia and and awareness of their physical being.  They can be hypochondriacs because they pay attention to subtle shifts in their body’s systems, particularly digestive.  They may have specific diets or regimens that structure their day to day life.  In work they are masters at managing logistics, as they pay attention to finer details.  As lovers they usually prefer partnerships to casual encounters and can display a sensual eagerness that may surprise their paramours.  They sometimes are mischaracterized as prudish.  They simply prefer to know and feel comfortable with the other person, and make sure the little things they find irritating don’t make up the bulk of the picture.'
        break;
      case 'Libra':
        furtune = 'Libra is a cardinal earth sign represented by the scales.  Libra is ruled by the planet Venus, and so their attention tends to be drawn to the realm of aesthetics and/or personal relationships.  Libra possesses strong social graces.  There is an interest in fashion and they often possess a distinct sense of style that others find attractive.  They tend to be charming and pleasant company.  Like the scales (which have a weight and counterweight) the ‘Other’ is crucial to their orientation process.  It is important for them to be ‘bouncing ideas’ off of people who’s opinions they respect (typically friends, family or significant others).  Matters of Justice are important to them (as a natural extension of aesthetics). As lovers they will be devoted and attentive, but are subject to ‘turns’ and can do a 180 on someone after becoming entangled emotionally.'
        break;
      case 'Scorpio':
        furtune = 'Scorpio is a fixed water sign represented by the scorpion.  The ancients attributed its rulership to Mars.  They are extremely strong willed and can be contentious and vengeful.  Scorpio is very sensitive but built well for battle.  Their nervous systems seem more calibrated to a survival wavelength than many overly socialized people and will do what is necessary to protect their interests.  While they are (rightly) characterized as very sexually oriented, the Scorpio is often shy and sensitive and can be somewhat selective whom they bring back to their bedroom.  Once bonded to an individual they will remain as such unless something significant happens to sever the cord, in which case they may become a real enemy.   There is a penetrating quality to their insight which grants a window into other people’s psychology, as well as a natural curiosity that makes them well suited to all types of investigation.'
        break;
      case 'Sagittarius':
        furtune = 'Sagittarius is a mutable fire sign represented by the centaur and ruled by the planet Jupiter.  The centaur is a mythical creature with the upper torso of a human and the body of a horse.  Here we see their nature articulated symbolically.  Jupiter is the planet of ‘expansiveness’.  The human side is drawn to lofty ideas: philosophy, spirituality, culture.  They like to travel to strange lands and are most likely of all the signs to commit to a partner from another background or country.  The animal half represents the tendency toward rivalry.  They enjoy partying and playing.  There is a cultured element as well as an ability to operate on a ‘street’ level.  As lovers they are likely to be adventurous and energetic, though they may possess a ‘roving eye.’'
      break;
      case 'Capricorn':
        furtune = 'Capricorn is a cardinal earth sign represented by the goat (sometimes a ‘goat-fish’) and ruled by the planet Saturn.  Capricorn is very grounded in their thinking.  They are pragmatic and value traditional ways that are ‘tried and true’.  They are hard workers and ambitious, typically serious and can tend towards melancholy (due to Saturns influence).  Interestingly they also have a reputation for having a strong sense of humor.  As lovers they can be quite amorous and enjoy the physicality of the act.  All of the earth signs are more connected to physical reality and hence the physical body.  Capricorn will often find success in their professional lives.  But this will come after years of hard work and may not occur until relatively late in life.  The concept of Legacy corresponds here, as they are likely to accomplish work that will survive them and be passed on to their children (or successfully preserve and extrapolate what they themselves inherit.'
        break;
      case 'Aquarius':
        furtune = 'Aquarius is a fixed air sign represented but he water-bearer.  The ancients attributed its rulership to the planet Saturn.  Aquarius is one of only two signs depicted as human figures.  Strangely enough, it is as if ‘Mankind’ itself is the archetype at work here.  They will have a large social sphere and it is important for them to be exchanging ideas with as varied a group as possible.  Aquarians are the futurists of the zodiac.  They are humanitarians interested in ways of improving mankind lot in general.  Interestingly, their compassion seems to be more general and less specific to individuals. The idea of groups people suffering upsets them, however on an individual basis they can be remote and somewhat cold.  As lovers they make good companions, pleasant company and are intellectually stimulating.  However they do not tend to be particularly sexual.  This may have to do with their ‘human’ archetype being less willing to get ‘down and dirty’ than other signs of the zodiac.  While the other air signs possess a capriciousness which could give one reason for caution, Aquarius is not typically fickle in the company they keep.'
        break;
      case 'Pisces':
        furtune = 'Pisces is a mutable water sign represented by two fish swimming in opposite directions.  It’s ruler is the planet Jupiter.  Some have said the two fish represent a ‘sink or swim’ quality they possess.  The expansiveness of Jupiter is connected to the spiritual instinct.  While the other two water signs possess armor (the crab shell or the scorpion’s exoskeleton) the fish lacks major defenses to protect its sensitivity.  This makes the walls between them an others very thin.  They are very intuitive and tend to pick up on feelings of those around them.  They can be pulled into beneficial or destructive company depending on the currents they move in.  There is a connection to the world of dream and a tendency to self medicate with drugs or alcohol.  As lovers they will give all of themselves.  The sex can take on a spiritual quality,  whereby they are transcending a more gross human state by total envelopment in the sensual ‘feels.'
      break;
      default:
        furtune = null 
    }
    this.setState({ furtune: furtune })
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
    const year = this.state.year
    this.setState({ birthday: {
      month: month,
      day: day,
      year: year
    } })
    this.findSign(month, day)
  }

  findSign = (month, day) => {
    let sign = ''
    switch(month){
      case 'jan':
        if (day < 21){
          sign = 'Capricorn'
        } else {
          sign = 'Aquarius'
        }
        break;
      case 'feb':
        if (day < 20){
          sign = 'Aquarius'
        } else {
          sign = 'Pisces'
        }
        break;
      case 'march':
        if (day < 22){
          sign = 'Pisces'
        } else {
          sign = 'Aries'
        }
        break;
      case 'april':
        if (day < 21){
          sign = 'Aries'
        } else {
          sign = 'Taurus'
        }
        break;
      case 'may':
        if (day < 22){
          sign = 'Taurus'
        } else {
          sign = 'Gemini'
        }
        break;
      case 'june':
        if (day < 22){
          sign = 'Gemini'
        } else {
          sign = 'Cancer'
        }
        break;
      case 'july':
        if (day < 24){
          sign = 'Cancer'
        } else {
          sign = 'Leo'
        }
        break;
      case 'aug':
        if (day < 24){
          sign = 'Leo'
        } else {
          sign = 'Virgo'
        }
        break;
      case 'sept':
        if (day < 24){
          sign = 'Virgo'
        } else {
          sign = 'Libra'
        }
        break;
      case 'oct':
        if (day < 24){
          sign = 'Libra'
        } else {
          sign = 'Scorpio'
        }
        break;
      case 'nov':
        if (day < 23){
          sign = 'Scorpio'
        } else {
          sign = 'Sagittarius'
        }
        break;
      case 'dec':
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

  render(){
    return (
    <div className="App">
      <br></br>
      <br></br>
      <Nav sign={this.state.sign} birthday={this.state.birthday} />
      <Link to='/'><img className='ui centered large image' src='https://i.pinimg.com/564x/d8/89/4a/d8894afcc217255f7e08c59d9ef603f5.jpg' alt='fortune teller' /></Link>
      <div>
      <Switch>
        <Route path='/horiscope' render={()=> <DisplayHoriscope sign={this.state.sign} furtune={this.state.furtune}/>}></Route>
        <Route path='/' render={()=> <HomePage handleOnChange={this.handleOnChange} birthday={this.state.birthday} years={this.state.years} day={this.state.day} month={this.state.month} year={this.state.year} submitBirthday={this.submitBirthday}/> } />
      </Switch>
      </div>
      <br></br>
      <br></br>
    </div>
   )
  }
}

export default App;
