const quizData = [
    {
        "statement": "In 2003, the US and UK invaded Iraq because they had solid, undeniable proof that Saddam Hussein possessed Weapons of Mass Destruction (WMDs).",
        "isTrue": false,
        "explanation": "This was a major intelligence and media failure. No WMDs were ever found. The intelligence was flawed, and political narratives were pushed through the media to justify the military intervention."
    },
    {
        "statement": "The 1964 Gulf of Tonkin incident, which led to full-scale US involvement in the Vietnam War, was largely fabricated or exaggerated.",
        "isTrue": true,
        "explanation": "Declassified documents revealed that the second 'attack' by North Vietnamese torpedo boats never happened. It was a distorted narrative used by the government to escalate the war."
    },
    {
        "statement": "The testimony of a 15-year-old girl named Nayirah, who claimed Iraqi soldiers were taking babies from incubators in Kuwait, was completely true.",
        "isTrue": false,
        "explanation": "It was a fabricated testimony organized by a PR firm (Hill & Knowlton) hired by the Kuwaiti government to manipulate the American public and media into supporting the Gulf War in 1990."
    },
    {
        "statement": "In 1953, the CIA and MI6 orchestrated a coup to overthrow the democratically elected Prime Minister of Iran, Mohammad Mosaddegh.",
        "isTrue": true,
        "explanation": "Operation Ajax was a real covert operation driven by British and American desires to maintain control over Iranian oil after Mosaddegh attempted to nationalize it."
    },
    {
        "statement": "The Watergate scandal was initially uncovered and investigated by the FBI, not journalists.",
        "isTrue": false,
        "explanation": "While the FBI investigated, it was the persistent investigative journalism of Bob Woodward and Carl Bernstein from The Washington Post that exposed the massive political cover-up."
    },
    {
        "statement": "During the Cold War, the CIA conducted illegal experiments on human subjects to develop mind-control drugs.",
        "isTrue": true,
        "explanation": "Project MKUltra was a real, highly unethical CIA program that used LSD and other techniques on unsuspecting citizens to study mind control and interrogation."
    },
    {
        "statement": "The sinking of the USS Maine in 1898 was definitively proven to be a Spanish attack, justifying the Spanish-American War.",
        "isTrue": false,
        "explanation": "'Yellow Journalism' heavily blamed Spain to sell newspapers and push for war. Modern investigations suggest the explosion was likely an accidental internal coal bunker fire."
    },
    {
        "statement": "Operation Condor was a real US-backed campaign of political repression and state terror in Latin America during the 1970s.",
        "isTrue": true,
        "explanation": "Declassified documents confirm that the US provided planning, coordination, and technical support to right-wing dictatorships in South America to eliminate political opponents."
    },
    {
        "statement": "The FBI actively tried to disrupt and discredit the American Civil Rights Movement and Martin Luther King Jr.",
        "isTrue": true,
        "explanation": "COINTELPRO was a real, secret FBI program aimed at surveilling, infiltrating, and discrediting domestic political organizations, heavily targeting MLK Jr. and other activists."
    },
    {
        "statement": "The 'Protocols of the Elders of Zion' is a genuine historical document detailing a Jewish plot for global domination.",
        "isTrue": false,
        "explanation": "It is a notorious and dangerous antisemitic fabricated text, originally published in Russia in the early 1900s, used as propaganda to justify persecution and genocide."
    },
    {
        "statement": "The 'Domino Theory' proved entirely correct: when Vietnam fell to communism, all of Southeast Asia immediately followed.",
        "isTrue": false,
        "explanation": "The geopolitical theory was flawed. While Laos and Cambodia saw communist takeovers, the 'domino effect' stopped there. Thailand, Malaysia, and others did not fall."
    },
    {
        "statement": "The US military once proposed staging fake terrorist attacks in American cities to justify a war against Cuba.",
        "isTrue": true,
        "explanation": "Operation Northwoods (1962) was a real Department of Defense proposal to stage false flag attacks. President JFK rejected the plan."
    },
    {
        "statement": "The RMS Lusitania was carrying secretly hidden munitions for Britain when it was sunk by a German U-boat in 1915.",
        "isTrue": true,
        "explanation": "While the British government long denied it to maximize anti-German propaganda, the passenger ship was indeed carrying millions of rounds of ammunition, making it a military target."
    },
    {
        "statement": "During the 1980s, the US government secretly sold weapons to Iran and used the profits to fund rebels in Nicaragua.",
        "isTrue": true,
        "explanation": "The Iran-Contra affair was a major political scandal where the Reagan administration violated an embargo and an act of Congress to illegally fund the Contras."
    },
    {
        "statement": "The 'Clean Wehrmacht' is a historically accurate concept proving the regular German army was not involved in Holocaust atrocities.",
        "isTrue": false,
        "explanation": "It is a post-WWII myth crafted to allow West Germany to rebuild its military. Historical evidence proves the regular army was deeply involved in war crimes."
    },
    {
        "statement": "After WWII, the US government secretly recruited over 1,600 German scientists, engineers, and technicians, many of whom were former members of the Nazi Party.",
        "isTrue": true,
        "explanation": "Operation Paperclip was a real intelligence program to gain a military and technological advantage over the Soviet Union during the Cold War."
    },
    {
        "statement": "The 'Missile Gap' during the 1960 election was a real crisis where the Soviet Union had significantly more nuclear missiles than the USA.",
        "isTrue": false,
        "explanation": "It was a false narrative used for political gain by JFK's campaign. In reality, the US had a massive superiority in nuclear weapons at the time."
    },
    {
        "statement": "The US government deliberately withheld syphilis treatment from hundreds of Black men for 40 years just to study the disease.",
        "isTrue": true,
        "explanation": "The Tuskegee Syphilis Study (1932-1972) is one of the most infamous medical ethics violations in history, deeply damaging trust in public health."
    },
    {
        "statement": "The 'Zimmermann Telegram', which helped bring the US into WWI, was a British forgery.",
        "isTrue": false,
        "explanation": "It was a real, intercepted secret diplomatic communication from Germany to Mexico proposing a military alliance against the US. It was not a forgery."
    },
    {
        "statement": "Nelson Mandela's arrest in 1962 was facilitated by a tip-off from the American CIA to South African authorities.",
        "isTrue": true,
        "explanation": "A former CIA agent admitted that the agency provided the specific intelligence detailing Mandela's disguise and location, leading to his 27-year imprisonment."
    }
];