let pickupLines = [
    "Are you a parking ticket? ‘Cause you’ve got fine written all over you.",
    "There must be something wrong with my eyes, I can’t take them off you.",
    "Do you have a pencil? Cause I want to erase your past and write our future.",
    "Your shirt has to go, but you can stay.",
    "I was wondering if you had an extra heart. Mine was just stolen.",
    "I seem to have lost my phone number. Can I have yours?",
    "Did the sun come out or did you just smile at me?",
    "I’m lost. Can you give me directions to your heart?",
    "Hi, how was heaven when you left it?",
    "Was your dad a boxer? Because damn, you’re a knockout!",
    "Are you sure you’re not tired? You’ve been running through my mind all day.",
    "Hey, tie your shoes! I don’t want you falling for anyone else.",
    "I may not be a genie, but I can make your dreams come true.",
    "I’d say God Bless you, but it looks like he already did.",
    "Was you father an alien? Because there’s nothing else like you on Earth!",
    "Is there an airport nearby or is it my heart taking off?",
    "Do I know you? ‘Cause you look a lot like my next girlfriend",
    "I’m not a photographer, but I can picture me and you together.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "If nothing lasts forever, will you be my nothing?",
    "Hey, you’re pretty and I’m cute. Together we’d be Pretty Cute.",
    "Do you believe in love at first sight or should I pass by again?",
    "Are you religious? Because you’re the answer to all my prayers.",
    "Are you my phone charger? Because without you, I’d die.",
    "Is it hot in here or is it just you?",
    "They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.",
    "Are you a dictionary? Cause you’re adding meaning to my life.",
    "Can I follow you home? Cause my parents always told me to follow my dreams.",
    "For some reason, I was feeling a little off today. But when you came along, you definitely turned me on.",
    "You don’t need keys to drive me crazy.",
    "I must be in a museum, because you truly are a work of art.",
    "There’s only one thing I want to change about you, and that’s your last name.",
    "You remind me of a magnet, because you sure are attracting me over here!",
    "Is your dad a terrorist? Cause you’re the bomb.",
    "Somebody call the cops, because it’s got to be illegal to look that good!",
    "Are you a magician? Because whenever I look at you, everyone else disappears!",
    "Aside from being sexy, what do you do for a living?",
    "Can you take me to the doctor? Because I just broke my leg falling for you.",
    "Would you grab my arm, so I can tell my friends I’ve been touched by an angel?",
    "I’m no mathematician, but I’m pretty good with numbers. Tell you what, give me yours and watch what I can do with it.",
    "Was your father a thief? ‘Cause someone stole the stars from the sky and put them in your eyes.",
    "Did it hurt? When you fell from heaven?"
]

function getLine(){
    let p = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    return p;
}


let line = document.getElementById('line');
let btn = document.getElementById('btn');

function generate(){
    line.innerHTML = getLine();
    btn.innerHTML = 'Click for another one ;)'
}
