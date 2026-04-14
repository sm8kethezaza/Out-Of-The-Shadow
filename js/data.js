const quizData = [
    // --- 50 FALSE STATEMENTS (SHADOW / MYTHS) ---
    {
        "statement": "In 2003, the US and UK invaded Iraq because they had solid, undeniable proof that Saddam Hussein possessed Weapons of Mass Destruction.",
        "isTrue": false,
        "explanation": "This was a major intelligence failure. No WMDs were ever found. The intelligence was flawed, and political narratives were pushed through the media to justify the military intervention."
    },
    {
        "statement": "The 'Clean Wehrmacht' is a historically accurate concept proving the regular German army was not involved in Holocaust atrocities.",
        "isTrue": false,
        "explanation": "It is a post-WWII myth crafted to allow West Germany to rebuild its military. Historical evidence proves the regular army was deeply involved in war crimes."
    },
    {
        "statement": "The testimony of a 15-year-old girl named Nayirah, who claimed Iraqi soldiers were taking babies from incubators in Kuwait, was completely true.",
        "isTrue": false,
        "explanation": "It was a fabricated testimony organized by a PR firm hired by the Kuwaiti government to manipulate the American public and media into supporting the Gulf War in 1990."
    },
    {
        "statement": "The 'Missile Gap' during the 1960 election was a real crisis where the Soviet Union had significantly more nuclear missiles than the USA.",
        "isTrue": false,
        "explanation": "It was a false narrative used for political gain by JFK's campaign. In reality, the US had a massive superiority in nuclear weapons at the time."
    },
    {
        "statement": "The 'Protocols of the Elders of Zion' is a genuine historical document detailing a Jewish plot for global domination.",
        "isTrue": false,
        "explanation": "It is a notorious and dangerous antisemitic fabricated text, originally published in Russia in the early 1900s, used as propaganda to justify persecution and genocide."
    },
    {
        "statement": "The 'War of the Worlds' radio broadcast in 1938 caused widespread, nationwide panic across the United States.",
        "isTrue": false,
        "explanation": "This is a famous media myth. While some listeners were confused, the 'mass panic' was highly exaggerated by newspapers at the time to discredit radio as a reliable news source."
    },
    {
        "statement": "The sinking of the USS Maine in 1898 was definitively proven to be a Spanish attack, justifying the Spanish-American War.",
        "isTrue": false,
        "explanation": "'Yellow Journalism' heavily blamed Spain to sell newspapers and push for war. Modern investigations suggest the explosion was likely an accidental internal coal bunker fire."
    },
    {
        "statement": "The 'Domino Theory' proved entirely correct: when Vietnam fell to communism, all of Southeast Asia immediately followed.",
        "isTrue": false,
        "explanation": "The geopolitical theory was flawed. While Laos and Cambodia saw communist takeovers, the 'domino effect' stopped there. Thailand, Malaysia, and others did not fall."
    },
    {
        "statement": "A secret society known as the Illuminati controls the global financial system today.",
        "isTrue": false,
        "explanation": "The real Illuminati was a short-lived Bavarian group in the 1700s that lasted only a decade. Modern rumors are pure conspiracy theories."
    },
    {
        "statement": "The United States government orchestrated the 9/11 attacks as a pretext to invade the Middle East.",
        "isTrue": false,
        "explanation": "This is a widespread conspiracy theory ('Inside Job'). Comprehensive investigations have repeatedly confirmed it was a terrorist attack carried out by Al-Qaeda."
    },
    {
        "statement": "Vaccines contain microchips designed by Bill Gates to track citizens via 5G networks.",
        "isTrue": false,
        "explanation": "A modern disinformation myth born on social media. Vaccines contain medical ingredients to build immunity, and microchips are much too large to be injected through a syringe."
    },
    {
        "statement": "The 1969 moon landing was filmed in a Hollywood studio directed by Stanley Kubrick.",
        "isTrue": false,
        "explanation": "This is a persistent conspiracy theory. The Apollo missions left mirrors on the moon that scientists still use today to measure the distance to Earth with lasers."
    },
    {
        "statement": "Global warming is a hoax invented by China to make U.S. manufacturing non-competitive.",
        "isTrue": false,
        "explanation": "Climate change is a scientifically proven phenomenon backed by decades of global data from NASA, the UN, and thousands of independent scientific institutions."
    },
    {
        "statement": "Chemtrails are toxic chemicals sprayed by commercial airliners to control the population and alter the weather.",
        "isTrue": false,
        "explanation": "They are simply contrails—condensation trails made of water vapor and ice crystals that form when hot jet exhaust meets cold high-altitude air."
    },
    {
        "statement": "The Earth is flat, and Antarctica is actually an ice wall guarded by the military to keep people from falling off.",
        "isTrue": false,
        "explanation": "A conspiracy theory debunked by centuries of astronomy, physics, satellite imagery, and basic gravity. The Earth is an oblate spheroid."
    },
    {
        "statement": "Adolf Hitler escaped to Argentina in a submarine at the end of World War II and lived there until the 1960s.",
        "isTrue": false,
        "explanation": "Historical and forensic evidence (including dental remains analyzed by independent researchers) proves Hitler committed suicide in his Berlin bunker in 1945."
    },
    {
        "statement": "The Spanish Flu pandemic of 1918 originated in Spain.",
        "isTrue": false,
        "explanation": "It likely originated in the US or Europe. It was called 'Spanish Flu' only because Spain was neutral in WWI and its press freely reported on the illness, unlike nations at war who censored the news."
    },
    {
        "statement": "Paul Revere shouted 'The British are coming!' during his midnight ride.",
        "isTrue": false,
        "explanation": "His mission was top-secret, and since most colonists considered themselves British at the time, the phrase would have made no sense. He likely warned that 'the Regulars' were coming."
    },
    {
        "statement": "Marie Antoinette, upon hearing peasants had no bread, famously said 'Let them eat cake'.",
        "isTrue": false,
        "explanation": "This quote was attributed to her by political opponents to ruin her reputation. Jean-Jacques Rousseau wrote about a princess saying this before she even arrived in France."
    },
    {
        "statement": "Napoleon Bonaparte was unusually short for his time, leading to the term 'Napoleon Complex'.",
        "isTrue": false,
        "explanation": "He was around 5 feet 6 inches (1.68m), which was an average height for a French man at the time. The myth was the result of British propaganda."
    },
    {
        "statement": "Christopher Columbus set sail in 1492 to prove the Earth was round.",
        "isTrue": false,
        "explanation": "Educated people in 1492 already knew the Earth was a sphere. Columbus's mistake was drastically underestimating the Earth's size, thinking Asia was much closer."
    },
    {
        "statement": "The Salem Witch Trials ended with dozens of accused witches being burned at the stake.",
        "isTrue": false,
        "explanation": "Nobody was burned at the stake in Salem. The 20 people executed were either hanged or pressed to death with heavy stones."
    },
    {
        "statement": "Gladiators fought to the death in almost every single match in ancient Rome.",
        "isTrue": false,
        "explanation": "Gladiators were highly trained and expensive investments. Fights to the death were rare; most matches ended in submission or a draw."
    },
    {
        "statement": "NASA spent millions developing a pen that writes in space, while the Soviets simply used a pencil.",
        "isTrue": false,
        "explanation": "A private company developed the space pen. Both NASA and the Soviets stopped using pencils because floating graphite dust is incredibly dangerous to electronics in zero gravity."
    },
    {
        "statement": "The 'Twinkie Defense' was a successful legal strategy arguing that junk food causes people to commit murder.",
        "isTrue": false,
        "explanation": "The defense actually argued that the killer's diet change (eating Twinkies) was a *symptom* of his severe depression, not the *cause* of the murder."
    },
    {
        "statement": "The Iron Maiden was a popular medieval torture device used extensively during the Inquisition.",
        "isTrue": false,
        "explanation": "There is no record of iron maidens existing in the Middle Ages. They were fabricated in the 18th century as gruesome museum attractions."
    },
    {
        "statement": "Slaves built the Great Pyramids in Egypt.",
        "isTrue": false,
        "explanation": "Archaeological evidence, including tombs and worker villages, shows the pyramids were built by well-fed, respected, and paid laborers, not slaves."
    },
    {
        "statement": "George Washington had wooden teeth.",
        "isTrue": false,
        "explanation": "His dentures were made of ivory, gold, lead, and unfortunately, human teeth purchased from enslaved people, but never wood."
    },
    {
        "statement": "The Great Wall of China is the only man-made structure visible from space with the naked eye.",
        "isTrue": false,
        "explanation": "It is not visible from low Earth orbit without magnification because it is too narrow and matches the color of its surroundings. Cities at night, however, are visible."
    },
    {
        "statement": "Vikings wore horned helmets into battle to terrify their enemies.",
        "isTrue": false,
        "explanation": "There is no historical evidence for this. The image was created by 19th-century costume designers for Richard Wagner's operas."
    },
    {
        "statement": "Albert Einstein failed mathematics in school.",
        "isTrue": false,
        "explanation": "He was an exceptional math student from a young age. The rumor likely started because the grading system in his school was reversed later on, making a '1' the highest grade."
    },
    {
        "statement": "Carrots improve your night vision.",
        "isTrue": false,
        "explanation": "This was a myth created by the British Royal Air Force in WWII to hide their invention of radar from the Germans, claiming their pilots ate lots of carrots."
    },
    {
        "statement": "The 'Black Knight' satellite is a 13,000-year-old alien spacecraft orbiting Earth.",
        "isTrue": false,
        "explanation": "It is a mixture of unrelated stories. The famous photo claimed to be the satellite was confirmed by NASA to be a thermal blanket lost during an EVA mission."
    },
    {
        "statement": "5G cell phone towers caused or accelerated the COVID-19 pandemic.",
        "isTrue": false,
        "explanation": "A massive piece of 2020 disinformation. Viruses cannot travel on radio waves or mobile networks. COVID-19 spread in many countries that didn't even have 5G."
    },
    {
        "statement": "FEMA camps are secretly concentration camps built to imprison US citizens under martial law.",
        "isTrue": false,
        "explanation": "A long-running right-wing conspiracy theory. FEMA facilities are meant for disaster relief (hurricanes, floods) and do not function as prisons."
    },
    {
        "statement": "The Bermuda Triangle has a statistically much higher rate of ship and plane disappearances than any other ocean region.",
        "isTrue": false,
        "explanation": "Insurance companies and the US Coast Guard confirm that the disappearance rate in the Bermuda Triangle is no higher than in any other heavily traveled ocean region."
    },
    {
        "statement": "The CIA deliberately invented HIV/AIDS in a laboratory to target minority communities.",
        "isTrue": false,
        "explanation": "This was actually 'Operation INFEKTION', a massive KGB disinformation campaign in the 1980s designed to discredit the US and damage its international relations."
    },
    {
        "statement": "Saddam Hussein was directly involved in organizing the 9/11 attacks.",
        "isTrue": false,
        "explanation": "The 9/11 Commission found no evidence of a collaborative relationship between Iraq and Al-Qaeda regarding the attacks. This narrative was pushed to justify the Iraq War."
    },
    {
        "statement": "The Gulf of Tonkin second attack (Aug 4, 1964) was definitively proven to have happened by radar and sonar.",
        "isTrue": false,
        "explanation": "Declassified NSA documents later revealed that the 'second attack' was a misinterpretation of false radar images and nervous sailors. It never happened."
    },
    {
        "statement": "The Zimmerman Telegram was a British forgery to trick the US into entering WWI.",
        "isTrue": false,
        "explanation": "It was a real, intercepted secret diplomatic communication from Germany to Mexico proposing a military alliance against the US. Germany's Foreign Secretary even admitted it was real."
    },
    {
        "statement": "Operation Mockingbird completely controlled every major US news outlet during the Cold War.",
        "isTrue": false,
        "explanation": "While the CIA did try to influence media and journalists during the Cold War, the idea that they had absolute, mind-control over all US media is an exaggeration of the facts."
    },
    {
        "statement": "The 'Philadelphia Experiment' successfully teleported a US Navy destroyer in 1943.",
        "isTrue": false,
        "explanation": "An urban legend based on a hoax. The Navy was experimenting with 'degaussing' ships to make them invisible to magnetic mines, not to human eyes or space-time."
    },
    {
        "statement": "The British Royal Family are secretly reptilian shapeshifters controlling the world.",
        "isTrue": false,
        "explanation": "A bizarre conspiracy theory popularized by David Icke, drawing on anti-elitist and often antisemitic tropes masquerading as science fiction."
    },
    {
        "statement": "Secret underground bases beneath Denver International Airport house the New World Order.",
        "isTrue": false,
        "explanation": "The airport does have an automated baggage system and tunnels, but the conspiracy theories about Illuminati bunkers are just myths fueled by the airport's strange artwork."
    },
    {
        "statement": "The US military successfully used psychic spies to assassinate foreign leaders via 'remote viewing'.",
        "isTrue": false,
        "explanation": "The Stargate Project did investigate remote viewing for intelligence gathering, but they never proved anyone could reliably psychically assassinate someone, and the project was cancelled."
    },
    {
        "statement": "The HAARP facility in Alaska is a superweapon used by the government to control the weather and cause earthquakes.",
        "isTrue": false,
        "explanation": "HAARP is a research facility that studies the ionosphere. It uses radio waves that cannot affect the troposphere (where weather happens) or the tectonic plates."
    },
    {
        "statement": "Humans only use 10% of their brain.",
        "isTrue": false,
        "explanation": "Neurologists confirm that we use virtually every part of the brain, and most of it is active almost all the time. The 10% myth is a trope used in movies and self-help books."
    },
    {
        "statement": "During the Middle Ages, most people believed the Earth was flat.",
        "isTrue": false,
        "explanation": "Educated people have known the Earth is spherical since ancient Greek times. This 'flat earth myth' was largely invented by writers in the 19th century."
    },
    {
        "statement": "John F. Kennedy famously made a mistake and declared 'I am a jelly doughnut' in Berlin.",
        "isTrue": false,
        "explanation": "This is a widespread media myth. 'Ich bin ein Berliner' was grammatically correct, and the German crowd understood his political message perfectly."
    },
    {
        "statement": "Walt Disney drew the first sketches of Mickey Mouse.",
        "isTrue": false,
        "explanation": "While Disney provided the voice and the concept, the original visual design of Mickey Mouse was drawn by his partner and chief animator, Ub Iwerks."
    },

    // --- 50 TRUE STATEMENTS (TRUTH / FACTS) ---
    {
        "statement": "In 1953, the CIA and MI6 orchestrated a coup to overthrow the democratically elected Prime Minister of Iran, Mohammad Mosaddegh.",
        "isTrue": true,
        "explanation": "Operation Ajax was a real covert operation driven by British and American desires to maintain control over Iranian oil after Mosaddegh attempted to nationalize it."
    },
    {
        "statement": "During the Cold War, the CIA conducted illegal experiments on human subjects using LSD to develop mind-control drugs.",
        "isTrue": true,
        "explanation": "Project MKUltra was a real, highly unethical CIA program that used LSD, sensory deprivation, and other techniques on unsuspecting citizens."
    },
    {
        "statement": "The Watergate scandal was initially uncovered and investigated by journalists, not the FBI.",
        "isTrue": true,
        "explanation": "While the FBI eventually investigated, it was the persistent investigative journalism of Bob Woodward and Carl Bernstein from The Washington Post that exposed the massive cover-up."
    },
    {
        "statement": "Operation Condor was a real US-backed campaign of political repression and state terror in Latin America during the 1970s.",
        "isTrue": true,
        "explanation": "Declassified documents confirm that the US provided planning, coordination, and technical support to right-wing dictatorships in South America to eliminate political opponents."
    },
    {
        "statement": "The FBI actively tried to disrupt and discredit the American Civil Rights Movement and Martin Luther King Jr.",
        "isTrue": true,
        "explanation": "COINTELPRO was a real, secret FBI program aimed at surveilling, infiltrating, and discrediting domestic political organizations, heavily targeting MLK Jr."
    },
    {
        "statement": "The US military once proposed staging fake terrorist attacks in American cities to justify a war against Cuba.",
        "isTrue": true,
        "explanation": "Operation Northwoods (1962) was a real Department of Defense proposal to stage false flag attacks. President JFK rejected the plan."
    },
    {
        "statement": "The RMS Lusitania was carrying secretly hidden munitions for Britain when it was sunk by a German U-boat in 1915.",
        "isTrue": true,
        "explanation": "While the British government long denied it to maximize anti-German propaganda, the passenger ship was indeed carrying millions of rounds of ammunition."
    },
    {
        "statement": "During the 1980s, the US government secretly sold weapons to Iran and used the profits to fund rebels in Nicaragua.",
        "isTrue": true,
        "explanation": "The Iran-Contra affair was a major political scandal where the Reagan administration violated an embargo and an act of Congress to illegally fund the Contras."
    },
    {
        "statement": "After WWII, the US government secretly recruited over 1,600 German scientists, many of whom were former Nazis, to work for America.",
        "isTrue": true,
        "explanation": "Operation Paperclip was a real intelligence program to gain a military and technological advantage over the Soviet Union during the Cold War."
    },
    {
        "statement": "The US government deliberately withheld syphilis treatment from hundreds of Black men for 40 years just to study the disease.",
        "isTrue": true,
        "explanation": "The Tuskegee Syphilis Study (1932-1972) is one of the most infamous medical ethics violations in history, deeply damaging trust in public health."
    },
    {
        "statement": "Nelson Mandela's arrest in 1962 was facilitated by a tip-off from the American CIA to South African authorities.",
        "isTrue": true,
        "explanation": "A former CIA agent admitted that the agency provided the specific intelligence detailing Mandela's disguise and location, leading to his 27-year imprisonment."
    },
    {
        "statement": "The CIA once spent millions of dollars to train cats to spy on the Soviet Union.",
        "isTrue": true,
        "explanation": "Project Acoustic Kitty involved implanting microphones in cats to eavesdrop on Soviet officials in the 1960s. It was a complete failure as cats are easily distracted."
    },
    {
        "statement": "A brown bear fought in the Polish army during World War II.",
        "isTrue": true,
        "explanation": "Wojtek the bear was officially enlisted as a private and helped carry heavy artillery ammunition during the Battle of Monte Cassino."
    },
    {
        "statement": "The longest war in history lasted 335 years and resulted in zero casualties.",
        "isTrue": true,
        "explanation": "The bloodless war between the Netherlands and the Isles of Scilly lasted from 1651 to 1986 because they simply forgot to declare peace."
    },
    {
        "statement": "In 1932, the Australian military fought a literal war against a flock of emus—and lost.",
        "isTrue": true,
        "explanation": "Soldiers armed with machine guns tried to cull the emu population but the birds outmaneuvered them, leading the military to withdraw in humiliation."
    },
    {
        "statement": "The most successful pirate in history was a woman who commanded an 80,000-strong fleet.",
        "isTrue": true,
        "explanation": "Ching Shih terrorized the China Sea in the 19th century and was so powerful she eventually forced the government to offer her a peaceful retirement."
    },
    {
        "statement": "The US government deliberately poisoned industrial alcohol during Prohibition, killing thousands.",
        "isTrue": true,
        "explanation": "To deter people from drinking bootleg alcohol, the government ordered the addition of toxic chemicals, resulting in up to 10,000 deaths."
    },
    {
        "statement": "An entire fake Paris was built in France during WWI to confuse German bombers at night.",
        "isTrue": true,
        "explanation": "It featured fake streets, wooden trains, and lights to mimic the real city from the sky, though the war ended before it was finished."
    },
    {
        "statement": "A Pope once exhumed the rotting corpse of a former Pope and put it on trial.",
        "isTrue": true,
        "explanation": "In 897, Pope Stephen VI put the corpse of Pope Formosus on trial in what is known as the Cadaver Synod. He was found 'guilty'."
    },
    {
        "statement": "The United States purchased Alaska from Russia for approximately 2 cents an acre.",
        "isTrue": true,
        "explanation": "The 1867 purchase cost $7.2 million. At the time, critics mockingly called it 'Seward's Folly', not realizing its massive resources."
    },
    {
        "statement": "Julius Caesar was once kidnapped by pirates and demanded they increase his ransom because he felt insulted.",
        "isTrue": true,
        "explanation": "He befriended them during his captivity, but promised to return and crucify them once freed. He kept his promise."
    },
    {
        "statement": "The British Royal Family changed their real last name from Saxe-Coburg and Gotha to Windsor in 1917.",
        "isTrue": true,
        "explanation": "They changed it to the more English-sounding 'Windsor' due to intense anti-German public sentiment during World War I."
    },
    {
        "statement": "Rosa Parks was not the first Black woman to refuse to give up her seat on a Montgomery bus.",
        "isTrue": true,
        "explanation": "Claudette Colvin, a 15-year-old girl, did the same thing nine months earlier, but civil rights leaders felt Parks was a more strategic political symbol."
    },
    {
        "statement": "The shortest war in recorded history lasted only 38 minutes.",
        "isTrue": true,
        "explanation": "The Anglo-Zanzibar War of 1896 ended almost as soon as it began when British ships bombarded the Sultan's palace."
    },
    {
        "statement": "France was still using the guillotine for executions when the first Star Wars movie was released.",
        "isTrue": true,
        "explanation": "The last execution by guillotine in France took place in September 1977, several months after Star Wars premiered in cinemas."
    },
    {
        "statement": "Pineapples were once so expensive in Europe that people would rent them just to show them off at parties.",
        "isTrue": true,
        "explanation": "In the 18th century, a single pineapple could cost the equivalent of $8,000 today, becoming the ultimate status symbol for the elite."
    },
    {
        "statement": "Winston Churchill had a doctor's prescription for alcohol to bypass Prohibition laws when visiting the US.",
        "isTrue": true,
        "explanation": "His prescription legally stated he needed 'the use of alcoholic spirits especially at meal times' due to a recent accident."
    },
    {
        "statement": "Oxford University is older than the Aztec Empire.",
        "isTrue": true,
        "explanation": "Teaching existed at Oxford as early as 1096, whereas the Aztec city of Tenochtitlan was founded more than 200 years later in 1325."
    },
    {
        "statement": "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid of Giza.",
        "isTrue": true,
        "explanation": "The Great Pyramid was built around 2560 BC. Cleopatra was born in 69 BC. The Moon landing was in 1969 AD."
    },
    {
        "statement": "During the Cold War, the US considered detonating a nuclear bomb on the Moon as a show of force.",
        "isTrue": true,
        "explanation": "Project A119 was a top-secret plan developed in 1958 to boost domestic morale after the Soviet Union launched Sputnik. It was ultimately abandoned."
    },
    {
        "statement": "The Soviet Union covered up the worst nuclear disaster prior to Chernobyl for decades.",
        "isTrue": true,
        "explanation": "The Kyshtym disaster in 1957 was a massive radioactive explosion at a plutonium plant. The CIA knew about it but also kept it secret to protect the nuclear industry's reputation."
    },
    {
        "statement": "The 'Five Eyes' is a real, operational intelligence alliance between five Western democracies.",
        "isTrue": true,
        "explanation": "Comprising the US, UK, Canada, Australia, and New Zealand, it is one of the most comprehensive espionage and surveillance alliances in history."
    },
    {
        "statement": "South Africa secretly developed nuclear weapons in the 1970s and voluntarily dismantled them in 1989.",
        "isTrue": true,
        "explanation": "They are the only country in history to have fully developed indigenous nuclear weapons and then voluntarily and unilaterally dismantled their entire program."
    },
    {
        "statement": "The US National Security Agency (NSA) tapped the phones of allied world leaders, including Germany's Angela Merkel.",
        "isTrue": true,
        "explanation": "Edward Snowden's leaks in 2013 revealed mass global surveillance programs, deeply straining diplomatic relations between the US and Europe."
    },
    {
        "statement": "The CIA operated secret 'black site' prisons around the world for interrogations after 9/11.",
        "isTrue": true,
        "explanation": "These covert facilities were used outside of US territory to bypass American laws against torture and hold suspected terrorists indefinitely."
    },
    {
        "statement": "During WWII, a dead homeless man was dressed as a British officer with fake secret documents to deceive the Nazis.",
        "isTrue": true,
        "explanation": "Operation Mincemeat was a successful British deception plan that convinced German high command that the Allies would invade Greece instead of Sicily."
    },
    {
        "statement": "The Stuxnet computer worm was a cyberweapon developed by the US and Israel to physically destroy Iranian nuclear facilities.",
        "isTrue": true,
        "explanation": "Discovered in 2010, it was the first known cyberweapon designed to cause physical destruction to infrastructure by making centrifuges spin out of control."
    },
    {
        "statement": "The CIA secretly funded abstract expressionist art during the Cold War to promote American cultural dominance.",
        "isTrue": true,
        "explanation": "They used front organizations to promote artists like Jackson Pollock globally, aiming to show that the US was a beacon of free expression compared to Soviet realism."
    },
    {
        "statement": "In 1983, a Soviet early-warning system falsely reported a US nuclear launch, and an officer prevented a nuclear war by ignoring it.",
        "isTrue": true,
        "explanation": "Stanislav Petrov correctly guessed the alarm was a glitch. Had he reported it to his superiors, the Soviet Union would likely have launched a massive retaliatory strike."
    },
    {
        "statement": "The CIA organized a fake Hepatitis B vaccination drive in Pakistan to obtain DNA samples to locate Osama bin Laden.",
        "isTrue": true,
        "explanation": "This controversial covert operation helped confirm bin Laden's location but caused immense damage to public health efforts and vaccination trust in the region."
    },
    {
        "statement": "North Korea has a state-sponsored hacking group that has stolen billions of dollars from global banks and crypto exchanges.",
        "isTrue": true,
        "explanation": "The Lazarus Group is a cybercrime organization run by the North Korean government to generate illicit revenue for the heavily sanctioned state."
    },
    {
        "statement": "Cambridge Analytica harvested data from millions of Facebook profiles without consent for targeted political advertising.",
        "isTrue": true,
        "explanation": "This massive 2018 scandal revealed how personal social media data was weaponized to influence the 2016 US Elections and the Brexit vote."
    },
    {
        "statement": "Operation Gladio was a real NATO 'stay-behind' operation in Europe during the Cold War to resist a potential Soviet invasion.",
        "isTrue": true,
        "explanation": "Secret paramilitary groups were armed and funded across Europe. Later, some of these groups were implicated in domestic terrorism and political destabilization."
    },
    {
        "statement": "Before becoming Pope, Pius II wrote a best-selling erotic novel.",
        "isTrue": true,
        "explanation": "He wrote 'The Tale of Two Lovers' in 1444, which became one of the most popular books of the 15th century before he ascended to the papacy."
    },
    {
        "statement": "King Tutankhamun's parents were brother and sister.",
        "isTrue": true,
        "explanation": "DNA testing confirmed that his father, Akhenaten, had a child with one of his own sisters, which led to Tutankhamun's numerous genetic health issues."
    },
    {
        "statement": "High heels were originally invented for male Persian soldiers.",
        "isTrue": true,
        "explanation": "They were designed in the 10th century to help cavalrymen secure their feet in stirrups while shooting bows from horseback."
    },
    {
        "statement": "The inventor of the Pringles can had his ashes buried inside one.",
        "isTrue": true,
        "explanation": "Fredric Baur was so proud of his invention that his children honored his request to use an Original Pringles can as his urn."
    },
    {
        "statement": "Tomatoes were put on trial in 1820 in New Jersey because people genuinely believed they were poisonous.",
        "isTrue": true,
        "explanation": "Colonel Robert Gibbon Johnson ate a basket of them in front of a courthouse crowd to prove they were safe to eat."
    },
    {
        "statement": "The first computer bug was an actual, physical bug.",
        "isTrue": true,
        "explanation": "In 1947, engineers found a moth stuck in a relay of the Harvard Mark II computer, famously coining the term 'debugging'."
    },
    {
        "statement": "The Declaration of Independence wasn't actually signed on July 4th.",
        "isTrue": true,
        "explanation": "It was formally adopted on July 4th, but most delegates didn't actually sign the document until August 2, 1776."
    }
];