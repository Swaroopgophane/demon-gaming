const allGames = [{
    id: 1,
    gameimage: "images/project cars2.webp",
    gamehead: "Project CARS 2",
    gamecategory: "Racing",
    gamedesc: "This is the racing sim that attempts to do it all: ice racing on studded tires around Swedish snowdrifts. Karting in the Scottish highlands. Rallycross within Hockenheim’s infield section, mud splattering across everything and everyone."
},
{
    id: 2,
    gameimage: "images/assassins-creed-valhalla.jpg",
    gamehead: "Assassin's Creed Valhalla",
    gamecategory: "Action",
    gamedesc: "The Assassin's Creed series goes full adventure-mod with Assassin's Creed Valhalla, which not only represents an excellent open-world game, it's also a great Viking game as well."
},
{
    id: 3,
    gameimage: "images/iracing.webp",
    gamehead: "iRacing",
    gamecategory: "Racing",
    gamedesc: "With its regular online racing leagues and meticulous car and track modelling, iRacing is as close to real racing as you can get on the PC."
},
{
    id: 4,
    gameimage: "images/Marvels-Guardians-of-the-Galaxy.jpg",
    gamehead: "Marvel's Guardians of the Galaxy",
    gamecategory: "Action",
    gamedesc: "Many action games with ensemble casts would have you play as each character over the course of the game, but Marvel's Guardians of the Galaxy keeps a narrow focus."
},
{
    id: 5,
    gameimage: "images/asseto.webp",
    gamehead: "Assetto Corsa Competizione",
    gamecategory: "Racing",
    gamedesc: "To be brutally honest, the sim racing world probably wasn't on the edge of its seat for an officially licensed game of the Blancpain World Endurance series. As motorsport licenses go it's a bit on the niche side, but as it turns out it was just what the Assetto Corsa franchise needed."
},
{
    id: 6,
    gameimage: "images/shadow-of-mordor.jpg",
    gamehead: "Middle-Earth: Shadow of Mordor",
    gamecategory: "Action",
    gamedesc: "Monolith used to be known for first-person games such as F.E.A.R. and Condemned, but the studio really took it up a notch when attacking the action-adventure game genre, much like a Ranger stabbing an orc through the head."
},
{
    id: 7,
    gameimage: "images/motogp18.webp",
    gamehead: "MotoGP 18",
    gamecategory: "Racing",
    gamedesc: "Motorcycle racing is inherently exciting - the lean angles, suicidal overtakes and acceleration rates just make for a great spectator sport. And Italian superbike specialists Milestone really nail that feeling of terror and bravery of being on a factory MotoGP bike."
},
{
    id: 8,
    gameimage: "images/pes2018.png",
    gamehead: "PES 2018",
    gamecategory: "Sports",
    gamedesc: "While Fifa will draw in those interested in the single player story or online multiplayer, PES is my preference for local multiplayer, or when I want to sink into the signature Master League."
},
{
    id: 9,
    gameimage: "images/Motorsport Manager.jpg",
    gamehead: "Motorsport Manager",
    gamecategory: "Sports",
    gamedesc: "Another sensible sport to adapt into a management game, Motorsport Manager is half about the strategy, half about the cars. Between races you'll spend time improving and upgrading your vehicle, then make strategic calls like what tires to use and when to make a pit stop."
},
{
    id: 10,
    gameimage: "images/Control.jpg",
    gamehead: "Control",
    gamecategory: "Action",
    gamedesc: "The supernatural action-adventure game from Remedy pairs the studio's trademark free-flowing third-person combat with its strongest storytelling yet. You play through a secretive agency headquarters and investigate an otherworldly threat known as the Hiss."
},
{
    id: 11,
    gameimage: "images/Star-Wars-Fallen-Order.jpg",
    gamehead: "Star Wars Jedi: Fallen Order",
    gamecategory: "Action",
    gamedesc: "Star Wars Jedi: Fallen Order doesn't do anything particularly new or fresh in action-adventure games, but it does it with a Star Wars lick of paint, which is worth celebrating in itself. "
},
{
    id: 12,
    gameimage: "images/rfactor2.webp",
    gamehead: "rFactor 2",
    gamecategory: "Racing",
    gamedesc: "rFactor will probably always feel rough around the edges, but it's the heir to one one of the PC's great racing games and one of the most impressive modding communities in the world."
},
{
    id: 13,
    gameimage: "images/Bloodbowl 2.jpg",
    gamehead: "Bloodbowl 2",
    gamecategory: "Sports",
    gamedesc: "The Blood Bowl board game is as old as I am, which is testament to its enduring appeal. It is simultaneously one of the most frustrating and entertaining games I've ever played. Dice rolls are required for everything, meaning sometimes players fall over and die because they ran too fast."
},
{
    id: 14,
    gameimage: "images/forza.webp",
    gamehead: "Forza Horizon 5",
    gamecategory: "Racing",
    gamedesc: "With Phil's review of Forza Horizon 5, he zooms in on the level of refinement that's taken place in the Forza series. No sweeping changes have been made in the newest entry in the series, but a meticulous level of craftsmanship is on display."
},
{
    id: 15,
    gameimage: "images/dirtrally.webp",
    gamehead: "Dirt Rally 2.0",
    gamecategory: "Racing",
    gamedesc: "The first Dirt Rally was a revelation when it arrived in 2015, departing from the snapback caps and energy drink ads that erstwhile came to define the Dirt series and renewing its focus on the staggering challenge of - well, just keeping a car on the track of a rally course."
},
{
    id: 16,
    gameimage: "images/Max-Payne-2.jpg",
    gamehead: "Max Payne 2: The Fall of Max Payne",
    gamecategory: "Action",
    gamedesc: "You might think that Max Payne's superpower is being able to slip into slow-motion, but really it's his ability to repeatedly leap onto his sides without bruising his shoulders or jabbing the house keys in his pocket into his thigh. In any case, it's these moves combined that make Max Payne a great action game."
},
{
    id: 17,
    gameimage: "images/Binary-Domain.jpg",
    gamehead: "Binary Domain",
    gamecategory: "Action",
    gamedesc: "Binary Domain is what happened when the Yakuza team attempted to muscle in on the cover shooter craze of the early 2010s: leaving behind Kamurocho, albeit for a different, futuristic Tokyo, and flooding it with hostile robots. And giant robot animals. And a friendly French robot who wears a trendy scarf."
},
{
    id: 18,
    gameimage: "images/Frozen Cortex.jpg",
    gamehead: "Frozen Cortex",
    gamecategory: "Sports",
    gamedesc: "Frozen Synapse's trademark interpretation of turn-based combat, where both sides plan their moves and execute them simultaneously, turns out to translate really well into sports."
},
{
    id: 19,
    gameimage: "images/Rocket League.jpg",
    gamehead: "Rocket League",
    gamecategory: "Sports",
    gamedesc: "I've had Rocket League installed on my PC for nearly two years now, and I still find myself jumping in for a quick 15 minute game every couple of weeks. The premise is simple: it's football with rocket powered cars."
},
{
    id: 20,
    gameimage: "images/Red-Dead-Redemption-2.jpg",
    gamehead: "Red Dead Redemption 2",
    gamecategory: "Action",
    gamedesc: "For what it's worth, the game has a much more engrossing story than it needs to, as well. In fact, we rate the characters pretty highly - not least the main lad Arthur Morgan, who is a genuinely thoughtful take on the classic 'morally ambiguous outlaw' trope. He's a bruiser who's not afraid to talk about his feelings, even though he doesn't always know what his feelings are."
}
]

export default allGames;