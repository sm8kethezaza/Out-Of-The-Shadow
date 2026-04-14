const quizData = [
    // --- 50 FALSE STATEMENTS (SHADOW / MYTHS) ---
    {
        "statement": "The 'War of the Worlds' radio broadcast in 1938 caused widespread, nationwide panic across the United States.",
        "isTrue": false,
        "explanation": "This is a famous media myth. While some listeners were confused, the 'mass panic' was highly exaggerated by newspapers at the time to discredit radio as a reliable news source."
    },
    {
        "statement": "Marie Antoinette, upon hearing peasants had no bread, famously said 'Let them eat cake'.",
        "isTrue": false,
        "explanation": "This quote was attributed to her by political opponents to ruin her reputation during the French Revolution. Jean-Jacques Rousseau wrote about a princess saying this before she even arrived in France."
    },
    {
        "statement": "Napoleon Bonaparte was unusually short for his time, leading to the term 'Napoleon Complex'.",
        "isTrue": false,
        "explanation": "He was around 5 feet 6 inches (1.68m), which was an average height for a French man at the time. The myth of his short stature was largely the result of British propaganda."
    },
    {
        "statement": "Vikings wore horned helmets into battle to terrify their enemies.",
        "isTrue": false,
        "explanation": "There is no historical evidence for this. The image was created by 19th-century costume designers for Richard Wagner's operas."
    },
    {
        "statement": "You only use 10% of your brain.",
        "isTrue": false,
        "explanation": "Neurologists confirm that we use virtually every part of the brain, and most of it is active almost all the time."
    },
    {
        "statement": "The Great Wall of China is the only man-made structure visible from space with the naked eye.",
        "isTrue": false,
        "explanation": "It is not visible from low Earth orbit without magnification because it is too narrow and matches the color of its surroundings."
    },
    {
        "statement": "During the Middle Ages, most people believed the Earth was flat.",
        "isTrue": false,
        "explanation": "Educated people have known the Earth is spherical since ancient Greek times. This 'flat earth myth' was largely invented in the 19th century."
    },
    {
        "statement": "Albert Einstein failed mathematics in school.",
        "isTrue": false,
        "explanation": "He was an exceptional math student from a young age. The rumor likely started because the grading system in his school was reversed later on."
    },
    {
        "statement": "Sugar causes children to become hyperactive.",
        "isTrue": false,
        "explanation": "Numerous double-blind studies show no link between sugar and hyperactivity. The effect is entirely psychological on the part of the parents."
    },
    {
        "statement": "Bats are completely blind.",
        "isTrue": false,
        "explanation": "Bats can see perfectly well, sometimes better than humans. However, many species also use echolocation to hunt in the dark."
    },
    {
        "statement": "Goldfish have a three-second memory.",
        "isTrue": false,
        "explanation": "Goldfish can actually remember things for months and can even be trained to recognize different shapes and sounds."
    },
    {
        "statement": "Chameleons change their color mainly to match their surroundings.",
        "isTrue": false,
        "explanation": "They change color primarily to regulate their body temperature or to communicate their mood and intentions to other chameleons."
    },
    {
        "statement": "If you drop a penny from the top of the Empire State Building, it could kill someone on the ground.",
        "isTrue": false,
        "explanation": "The terminal velocity of a penny is too low. It would sting, but it wouldn't be fatal or even penetrate the skin."
    },
    {
        "statement": "John F. Kennedy famously made a mistake and declared 'I am a jelly doughnut' in Berlin.",
        "isTrue": false,
        "explanation": "This is a widespread media myth. 'Ich bin ein Berliner' was grammatically correct, and the German crowd understood his political message perfectly."
    },
    {
        "statement": "Slaves built the Great Pyramids in Egypt.",
        "isTrue": false,
        "explanation": "Archaeological evidence shows the pyramids were built by well-fed, respected, paid laborers, not slaves."
    },
    {
        "statement": "The Iron Maiden was a popular medieval torture device used extensively during the Inquisition.",
        "isTrue": false,
        "explanation": "There is no record of iron maidens existing in the Middle Ages. They were fabricated in the 18th century as gruesome museum attractions."
    },
    {
        "statement": "A secret society known as the Illuminati controls the global financial system today.",
        "isTrue": false,
        "explanation": "The real Illuminati was a short-lived Bavarian group in the 1700s that lasted only a decade. Modern rumors are pure conspiracy theories."
    },
    {
        "statement": "George Washington chopped down a cherry tree and could not tell a lie about it.",
        "isTrue": false,
        "explanation": "This story was completely fabricated by one of his first biographers, Parson Weems, to demonstrate Washington's virtue to children."
    },
    {
        "statement": "Thomas Crapper invented the flush toilet.",
        "isTrue": false,
        "explanation": "While he was a prominent plumber who improved it, the flush toilet was invented by Sir John Harington centuries earlier in 1592."
    },
    {
        "statement": "Christopher Columbus set sail in 1492 to prove the Earth was round.",
        "isTrue": false,
        "explanation": "Educated people in 1492 already knew the Earth was a sphere. Columbus's mistake was drastically underestimating the Earth's size."
    },
    {
        "statement": "The Salem Witch Trials ended with dozens of accused witches being burned at the stake.",
        "isTrue": false,
        "explanation": "Nobody was burned at the stake in Salem. The 20 people executed were either hanged or pressed to death with heavy stones."
    },
    {
        "statement": "Ninjas traditionally wore all-black outfits to sneak around in the dark.",
        "isTrue": false,
        "explanation": "Real ninjas wore everyday clothing to blend in with the civilian population. The 'black pajamas' image comes from Japanese theater stagehands."
    },
    {
        "statement": "Gladiators fought to the death in almost every single match in ancient Rome.",
        "isTrue": false,
        "explanation": "Gladiators were highly trained and expensive investments. Fights to the death were rare; most matches ended in submission or a draw."
    },
    {
        "statement": "Walt Disney had his body cryogenically frozen after his death.",
        "isTrue": false,
        "explanation": "This is a persistent urban legend. Walt Disney was cremated, and his ashes are interred in a cemetery in California."
    },
    {
        "statement": "The 'Twinkie Defense' was a successful legal strategy arguing that junk food causes people to commit murder.",
        "isTrue": false,
        "explanation": "The defense actually argued that the killer's diet change (eating Twinkies) was a *symptom* of his severe depression, not the *cause* of the murder."
    },
    {
        "statement": "Vomitoriums in ancient Rome were special rooms where people threw up so they could eat more at feasts.",
        "isTrue": false,
        "explanation": "A vomitorium was simply the architectural term for the wide entrance and exit passages in stadiums and amphitheaters."
    },
    {
        "statement": "NASA spent millions developing a pen that writes in space, while the Soviets simply used a pencil.",
        "isTrue": false,
        "explanation": "A private company developed the space pen with its own funds. Both sides stopped using pencils because floating graphite dust is incredibly dangerous in zero gravity."
    },
    {
        "statement": "Bulls become enraged when they see the color red, which is why matadors use red capes.",
        "isTrue": false,
        "explanation": "Bulls are mostly colorblind to red. They charge at the matador's cape because of the movement, not the color."
    },
    {
        "statement": "People swallow an average of 8 spiders a year while sleeping.",
        "isTrue": false,
        "explanation": "This was an intentional internet hoax created in 1993 to prove how easily false information spreads online."
    },
    {
        "statement": "Carrots improve your night vision.",
        "isTrue": false,
        "explanation": "This was a myth created by the British Royal Air Force in WWII to hide their invention of radar from the Germans."
    },
    {
        "statement": "Shaving makes your hair grow back thicker and darker.",
        "isTrue": false,
        "explanation": "Shaving only cuts the hair at the surface, giving it a blunt tip that feels coarser as it grows out, but it doesn't change its thickness or color."
    },
    {
        "statement": "Cracking your knuckles causes arthritis.",
        "isTrue": false,
        "explanation": "The popping sound is just gas bubbles bursting in the joint fluid. Medical studies have found no link to arthritis."
    },
    {
        "statement": "Different parts of your tongue taste different things (sweet, salty, sour, bitter).",
        "isTrue": false,
        "explanation": "The 'tongue map' is a misconception based on a mistranslated 1901 paper. All taste buds can detect all tastes."
    },
    {
        "statement": "Bulls become enraged when they see the color red.",
        "isTrue": false,
        "explanation": "Bulls are mostly colorblind to red. They charge at the matador's cape because of the movement, not the color."
    },
    {
        "statement": "Frankenstein was the name of the monster.",
        "isTrue": false,
        "explanation": "Frankenstein was the name of the scientist, Victor Frankenstein. The creature is only referred to as 'the monster' or 'the creature'."
    },
    {
        "statement": "Dogs only see in black and white.",
        "isTrue": false,
        "explanation": "Dogs can see colors, but their spectrum is limited mostly to shades of blue and yellow, similar to red-green colorblindness in humans."
    },
    {
        "statement": "Lightning never strikes the same place twice.",
        "isTrue": false,
        "explanation": "Lightning favors tall, conductive objects and strikes places like the Empire State Building dozens of times a year."
    },
    {
        "statement": "You need to wait 24 hours before reporting a missing person to the police.",
        "isTrue": false,
        "explanation": "This is a myth propagated by television and movies. You should report a missing person immediately, especially if they are vulnerable."
    },
    {
        "statement": "Ostriches bury their heads in the sand when they are scared.",
        "isTrue": false,
        "explanation": "They don't. They bury their eggs in holes in the sand and periodically turn them with their beaks, which looks from a distance like their head is buried."
    },
    {
        "statement": "Toilets flush in the opposite direction in the Southern Hemisphere due to the Coriolis effect.",
        "isTrue": false,
        "explanation": "The Coriolis effect is too weak to affect small bodies of water like toilets. The flush direction depends entirely on the design of the bowl."
    },
    {
        "statement": "Humans evolved from monkeys.",
        "isTrue": false,
        "explanation": "Humans and monkeys evolved from a common ancestor that lived millions of years ago; one did not evolve directly from the other."
    },
    {
        "statement": "Cinco de Mayo is Mexico's Independence Day.",
        "isTrue": false,
        "explanation": "It celebrates the Mexican army's victory over France at the Battle of Puebla in 1862. Mexico's Independence Day is September 16th."
    },
    {
        "statement": "Mac computers cannot get viruses.",
        "isTrue": false,
        "explanation": "Macs can absolutely get viruses and malware. They were historically targeted less often than PCs, leading to this dangerous myth."
    },
    {
        "statement": "Microwaves cook food from the inside out.",
        "isTrue": false,
        "explanation": "Microwaves cook food from the outside in, just like conventional ovens. The waves only penetrate the outer layers of the food."
    },
    {
        "statement": "Eating carrots gives you perfect vision.",
        "isTrue": false,
        "explanation": "While they contain Vitamin A which is good for eye health, they will not cure poor vision or give you 20/20 eyesight."
    },
    {
        "statement": "The forbidden fruit in the Garden of Eden was an apple.",
        "isTrue": false,
        "explanation": "The Bible never specifies the type of fruit. The apple association likely comes from a Latin pun (malus means both 'evil' and 'apple')."
    },
    {
        "statement": "Blood in your veins is blue until it is exposed to oxygen.",
        "isTrue": false,
        "explanation": "Human blood is always red. It looks blue through your skin due to the way light penetrates the skin and reflects back."
    },
    {
        "statement": "Hair and fingernails continue to grow after death.",
        "isTrue": false,
        "explanation": "They don't grow. The skin around them retracts as the body dehydrates, giving the illusion that they are longer."
    },
    {
        "statement": "Mount Everest is the tallest mountain in the world from base to peak.",
        "isTrue": false,
        "explanation": "Mauna Kea in Hawaii is the tallest from base to peak (over 10,000 meters), but most of it is underwater. Everest is highest above sea level."
    },
    {
        "statement": "Swallowed chewing gum takes 7 years to digest.",
        "isTrue": false,
        "explanation": "While your body can't break down the synthetic base of the gum, it simply passes through your digestive system in a few days."
    },

    // --- 50 TRUE STATEMENTS (TRUTH / FACTS) ---
    {
        "statement": "Oxford University is older than the Aztec Empire.",
        "isTrue": true,
        "explanation": "Teaching existed at Oxford as early as 1096, whereas the Aztec city of Tenochtitlan was founded in 1325."
    },
    {
        "statement": "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid of Giza.",
        "isTrue": true,
        "explanation": "The Great Pyramid was built around 2560 BC. Cleopatra was born in 69 BC. The Moon landing was in 1969 AD."
    },
    {
        "statement": "The CIA once spent millions of dollars to train cats to spy on the Soviet Union.",
        "isTrue": true,
        "explanation": "Project Acoustic Kitty involved implanting microphones in cats to eavesdrop on Soviet officials in the 1960s. It was a complete failure."
    },
    {
        "statement": "A brown bear fought in the Polish army during World War II.",
        "isTrue": true,
        "explanation": "Wojtek the bear was enlisted as a private and helped carry ammunition during the Battle of Monte Cassino."
    },
    {
        "statement": "The longest war in history lasted 335 years and resulted in zero casualties.",
        "isTrue": true,
        "explanation": "The bloodless war between the Netherlands and the Isles of Scilly lasted from 1651 to 1986 because they simply forgot to declare peace."
    },
    {
        "statement": "In 1932, the Australian military fought a literal war against a flock of emus—and lost.",
        "isTrue": true,
        "explanation": "Soldiers armed with machine guns tried to cull the emu population but the birds outmaneuvered them, leading the military to withdraw."
    },
    {
        "statement": "The most successful pirate in history was a woman who commanded an 80,000-strong fleet.",
        "isTrue": true,
        "explanation": "Ching Shih terrorized the China Sea in the 19th century and eventually retired peacefully with a government pardon."
    },
    {
        "statement": "Carrots were promoted as improving eyesight solely to hide the invention of radar from the Germans.",
        "isTrue": true,
        "explanation": "During WWII, the British government created this myth to explain how their pilots could see enemy bombers in the dark so well."
    },
    {
        "statement": "Before becoming Pope, Pius II wrote a best-selling erotic novel.",
        "isTrue": true,
        "explanation": "He wrote 'The Tale of Two Lovers' in 1444, which became one of the most popular books of the 15th century."
    },
    {
        "statement": "The US government deliberately poisoned industrial alcohol during Prohibition, killing thousands.",
        "isTrue": true,
        "explanation": "To deter people from drinking bootleg alcohol, the government ordered the addition of toxic chemicals, resulting in up to 10,000 deaths."
    },
    {
        "statement": "Abraham Lincoln is in the Wrestling Hall of Fame.",
        "isTrue": true,
        "explanation": "Before his presidency, Lincoln was a formidable wrestler, losing only one out of approximately 300 matches."
    },
    {
        "statement": "King Tutankhamun's parents were brother and sister.",
        "isTrue": true,
        "explanation": "DNA testing confirmed that his father, Akhenaten, had a child with one of his own sisters, which led to Tut's numerous health issues."
    },
    {
        "statement": "An entire fake Paris was built in France during WWI to confuse German bombers at night.",
        "isTrue": true,
        "explanation": "It featured fake streets, wooden trains, and lights to mimic the real city from the sky, though the war ended before it was finished."
    },
    {
        "statement": "A Pope once exhumed the corpse of a former Pope and put it on trial.",
        "isTrue": true,
        "explanation": "In 897, Pope Stephen VI put the rotting corpse of Pope Formosus on trial in what is known as the Cadaver Synod."
    },
    {
        "statement": "The United States purchased Alaska from Russia for approximately 2 cents an acre.",
        "isTrue": true,
        "explanation": "The 1867 purchase cost $7.2 million. At the time, critics mockingly called it 'Seward's Folly'."
    },
    {
        "statement": "Julius Caesar was once kidnapped by pirates and demanded they increase his ransom because he felt insulted.",
        "isTrue": true,
        "explanation": "He befriended them during his captivity, but promised to return and crucify them once freed. He kept his promise."
    },
    {
        "statement": "There is a town in Norway where it is essentially illegal to die.",
        "isTrue": true,
        "explanation": "In Longyearbyen, bodies do not decompose due to the permafrost, so terminally ill people are flown to the mainland."
    },
    {
        "statement": "High heels were originally invented for male Persian soldiers.",
        "isTrue": true,
        "explanation": "They were designed to help cavalrymen secure their feet in stirrups while shooting bows from horseback."
    },
    {
        "statement": "Cleopatra wasn't actually Egyptian; she was of Greek descent.",
        "isTrue": true,
        "explanation": "She was part of the Ptolemaic dynasty, a Macedonian Greek family that ruled Egypt after Alexander the Great."
    },
    {
        "statement": "The inventor of the Pringles can had his ashes buried inside one.",
        "isTrue": true,
        "explanation": "Fredric Baur was so proud of his invention that his children honored his request to use an Original Pringles can as his urn."
    },
    {
        "statement": "Mary Shelley, author of Frankenstein, kept her late husband's heart in her desk drawer.",
        "isTrue": true,
        "explanation": "After Percy Shelley drowned and was cremated, his heart calcified and survived. Mary kept it wrapped in one of his poems."
    },
    {
        "statement": "The shortest war in recorded history lasted only 38 minutes.",
        "isTrue": true,
        "explanation": "The Anglo-Zanzibar War of 1896 ended almost as soon as it began when British ships bombarded the palace."
    },
    {
        "statement": "France was still using the guillotine for executions when the first Star Wars movie was released.",
        "isTrue": true,
        "explanation": "The last execution by guillotine in France took place in September 1977, months after Star Wars premiered."
    },
    {
        "statement": "Pineapples were once so expensive in Europe that people would rent them just to show them off at parties.",
        "isTrue": true,
        "explanation": "In the 18th century, a single pineapple could cost the equivalent of $8,000 today, becoming the ultimate status symbol."
    },
    {
        "statement": "Tomatoes were put on trial in 1820 in New Jersey because people genuinely believed they were poisonous.",
        "isTrue": true,
        "explanation": "Colonel Robert Gibbon Johnson ate a basket of them in front of a courthouse crowd to prove they were safe to eat."
    },
    {
        "statement": "Winston Churchill had a doctor's prescription for alcohol to bypass Prohibition laws when visiting the US.",
        "isTrue": true,
        "explanation": "His prescription stated he needed 'the use of alcoholic spirits especially at meal times' due to a recent accident."
    },
    {
        "statement": "The founder of Match.com lost his girlfriend to a man she met on Match.com.",
        "isTrue": true,
        "explanation": "Gary Kremen, the founder, ironically proved his product's effectiveness when his girlfriend left him for another user."
    },
    {
        "statement": "Nintendo was founded in the 1880s.",
        "isTrue": true,
        "explanation": "Founded in 1889, Nintendo originally produced handmade hanafuda playing cards long before making video games."
    },
    {
        "statement": "The famous 'Keep Calm and Carry On' poster was practically unknown during WWII.",
        "isTrue": true,
        "explanation": "It was designed for a worst-case invasion scenario and was rarely displayed. It only became famous after being rediscovered in 2000."
    },
    {
        "statement": "The British Royal Family's real last name was Saxe-Coburg and Gotha.",
        "isTrue": true,
        "explanation": "They changed it to the more English-sounding 'Windsor' in 1917 due to intense anti-German sentiment during WWI."
    },
    {
        "statement": "Paul Revere never shouted 'The British are coming!' during his midnight ride.",
        "isTrue": true,
        "explanation": "His mission was top-secret, and since most colonists considered themselves British at the time, the phrase would have made no sense."
    },
    {
        "statement": "Rosa Parks was not the first Black woman to refuse to give up her seat on a Montgomery bus.",
        "isTrue": true,
        "explanation": "Claudette Colvin, a 15-year-old girl, did the same thing nine months earlier, but civil rights leaders felt Parks was a better symbol."
    },
    {
        "statement": "The Declaration of Independence wasn't actually signed on July 4th.",
        "isTrue": true,
        "explanation": "It was adopted on July 4th, but most delegates didn't sign it until August 2, 1776."
    },
    {
        "statement": "The original US Constitution contains a spelling error for the state of Pennsylvania.",
        "isTrue": true,
        "explanation": "Alexander Hamilton actually wrote it with one 'n' ('Pensylvania') above the signature line."
    },
    {
        "statement": "The first computer bug was an actual, physical bug.",
        "isTrue": true,
        "explanation": "In 1947, engineers found a moth stuck in a relay of the Harvard Mark II computer, coining the term 'debugging'."
    },
    {
        "statement": "Honey found in ancient Egyptian tombs over 3,000 years old is still perfectly edible.",
        "isTrue": true,
        "explanation": "Due to its low moisture and high acidity, honey never spoils if sealed properly."
    },
    {
        "statement": "The inventor of the Frisbee was turned into a Frisbee after he died.",
        "isTrue": true,
        "explanation": "Walter Morrison's ashes were molded into Frisbees and given to family and friends as a final tribute."
    },
    {
        "statement": "Wombat poop is cube-shaped.",
        "isTrue": true,
        "explanation": "Wombats are the only known animals that produce cubic feces, which prevents them from rolling away when used to mark territory."
    },
    {
        "statement": "Scotland has 421 words for 'snow'.",
        "isTrue": true,
        "explanation": "Researchers at the University of Glasgow found 421 words related to snow, including 'snaw' (snow) and 'flindrikin' (a light snow shower)."
    },
    {
        "statement": "Peanuts are not actually nuts.",
        "isTrue": true,
        "explanation": "Peanuts are legumes, related to beans, lentils, and peas, because they grow in pods underground."
    },
    {
        "statement": "Bananas grow upside down.",
        "isTrue": true,
        "explanation": "Bananas naturally grow upwards towards the sun, a process called negative geotropism, which gives them their curved shape."
    },
    {
        "statement": "There is a species of jellyfish that is biologically immortal.",
        "isTrue": true,
        "explanation": "Turritopsis dohrnii can revert back to its polyp stage when stressed or injured, theoretically allowing it to live forever."
    },
    {
        "statement": "Sharks existed before trees.",
        "isTrue": true,
        "explanation": "Sharks have been around for over 400 million years, while the earliest trees appeared around 350 million years ago."
    },
    {
        "statement": "A day on Venus is longer than a year on Venus.",
        "isTrue": true,
        "explanation": "It takes Venus 243 Earth days to rotate on its axis, but only 225 Earth days to orbit the Sun."
    },
    {
        "statement": "Water can boil and freeze at the same time.",
        "isTrue": true,
        "explanation": "This is called the 'triple point', which occurs when the temperature and pressure are just right for all three phases of water to coexist."
    },
    {
        "statement": "The Eiffel Tower can be 15 cm taller during the summer.",
        "isTrue": true,
        "explanation": "When a substance is heated, its particles move more and take up a larger volume, causing the iron structure to expand."
    },
    {
        "statement": "Humans share 50% of their DNA with bananas.",
        "isTrue": true,
        "explanation": "We share many core cellular functions with plants, which is why about half of our genetic makeup overlaps with bananas."
    },
    {
        "statement": "Sloths can hold their breath longer than dolphins.",
        "isTrue": true,
        "explanation": "By slowing their heart rate, sloths can hold their breath for up to 40 minutes under water. Dolphins usually surface every 8 to 10 minutes."
    },
    {
        "statement": "An octopus has three hearts.",
        "isTrue": true,
        "explanation": "Two pump blood to the gills, while the third pumps it to the rest of the body."
    },
    {
        "statement": "Apples float in water because they are 25% air.",
        "isTrue": true,
        "explanation": "The pockets of air between their cells make them less dense than water, which is why you can bob for apples."
    }
];