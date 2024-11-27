import './App.scss';
import React, {useState} from 'react';
import colorArray from './colormix';
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter)


function App() {

  const [quote, setQuote] = useState("They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.")

  const [author, setAuthor] = useState("Tom Bodett")

  const quotes = [
    { quote: "Nothing in the world is as contagious as laughter and good humor.",
      author: "Charles Dickens"
    },
    { quote: "Happiness is a warm puppy.",
      author: "Charles M. Schulz"
    },
    { quote: "Happiness shared is happiness doubled.",
      author: "Swedish Proverb"
    },
    { quote: "No medicine cures what happiness cannot.",
      author: "Gabriel García Márquez"
    },
    { quote: "If you want to be happy, be.",
      author: " Leo Tolstoy"
    },
    { quote: "Success is getting what you want, happiness is wanting what you get",
      author: "W.P. Kinsella"
    },
    { quote: "Learn to value yourself, which means: fight for your happiness.",
      author: "Ayn Rand"
    },
    { quote: "Happiness quite unshared can scarcely be called happiness; it has no taste.",
      author: "Charlotte Bronte"
    },
    { quote: "Now and then it's good to pause in our pursuit of happiness and just be happy.",
      author: "Guillaume Apollinaire"
    },
    { quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: " Mahatma Gandhi"
    },
  ]

  const [colorMix, setColorMix] = useState("#282c34")

  const [randomNumber, setRandomNumber] = useState(0)

    const changeQuote = ()=> {
      let randNumber = Math.floor(quotes.length*Math.random())
      setRandomNumber(randNumber)
      setColorMix(colorArray[randNumber])
      setQuote(quotes[randNumber].quote)
      setAuthor(quotes[randNumber].author)
    }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: colorMix, color: colorMix}}>
       <div id="quote-box">
       <p id="text" style={{color: colorMix}}>
            "{quote}"
        </p>
        <p id="author" style={{color: colorMix}}>- {author}</p>
        <div className='button'>
        <button id="new-quote" onClick={()=> changeQuote() } style={{backgroundColor: colorMix}}>
          New Quote
        </button>
        <a id="tweet-quote" style={{backgroundColor: colorMix}} className='twitter-link' href={encodeURI(`https://twitter.com/intent/tweet?text=${quote} -${author}`)}>
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        </div>
       
       </div>
      </header>
    </div>
  );
}

export default App;
