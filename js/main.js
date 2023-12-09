function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quotes = [
    {'quote': 'We don\'t see things as they are, we see them as we are', 
     'author': 'Anais Nin'
    },
    {'quote': 'Learning to distance yourself from all the negativity is one of the greatest lessons to achieve inner peace.', 
    'author': 'Roy T.Bennett'
    },
    {'quote': 'It is during our darkest moments that we must focus to see the light', 
    'author': 'Aristotle'
    },
    {'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall', 
    'author': 'Nelson Mandela'
    },
    {'quote': 'All dreams are within reach. All you have to do is keep moving towards them.', 
    'author': 'Viola Davis'
    },
    {'quote': 'Go confidently in the direction of your dreams. Live the life you have imagined.', 
    'author': 'Henry David Thoreau'
    },
];
shuffle(Quotes);


function generates() {
    const random = Math.floor(Math.random() * Quotes.length);
    document.getElementById('quote').textContent = `"${Quotes[random].quote}"`;
    document.getElementById('quoteAuthor').textContent = `--${Quotes[random].author}`;
}
