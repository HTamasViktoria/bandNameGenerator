

let nounArr = [
  "Abandon", "Ability", "Absence", "Abundance", "Abuse", "Academy", "Accent", "Access", "Accident", "Accommodation", "Accompaniment",
  "Account", "Achievement", "Acid", "Acquaintance", "Acronym", "Action", "Actor", "Addition", "Address", "Adjective", "Administration",
  "Adoration", "Adulthood", "Advance", "Advantage", "Adventure", "Advertisement", "Advice", "Affection", "Affiliation", "Afternoon",
  "Age", "Agency", "Agenda", "Agent", "Agreement", "Aid", "Air", "Airplane", "Airport", "Aisle", "Alarm", "Album", "Alcohol", "Alert", "Alias",
  "Alibi", "Allegation", "Allegiance", "Alliance", "Allowance", "Ally", "Alphabet", "Alternative", "Amateur", "Ambassador", "Ambiguity",
  "Ambition", "Ambulance", "Amendment", "Amenity", "Ammunition", "Amount", "Amusement", "Analyst", "Anatomy", "Ancestor", "Anchor", "Angel",
  "Anger", "Angle", "Animal", "Animation", "Anniversary", "Announcement", "Answer", "Ant", "Anticipation", "Anxiety", "Apartment", "Apathy",
  "Apocalypse", "Apology", "Apparatus", "Appeal", "Appearance", "Appetite", "Apple", "Applicant", "Application", "Appointment", "Appraisal",
  "Appreciation", "Approach", "Approval", "Aptitude", "Aqueduct", "Arbitration", "Baby", "Bachelor", "Back", "Background", "Bacon", "Bacteria",
  "Badger", "Bag", "Baggage", "Bail", "Bailiff", "Balance", "Balcony", "Ball", "Ballet", "Balloon", "Bamboo", "Banana", "Band", "Bandage", "Bank",
  "Bankruptcy", "Banner", "Bar", "Barbarian", "Barbecue", "Barber", "Bargain", "Bark", "Barn", "Barrel", "Barrier", "Base", "Basement", "Bash",
  "Basket", "Bat", "Batch", "Bath", "Bathroom", "Bathtub", "Battery", "Battle", "Bay", "Beach", "Bead", "Beam", "Bean", "Bear", "Beard", "Beast",
  "Beat", "Beauty", "Beaver", "Bed", "Bedroom", "Bee", "Beef", "Beer", "Beetle", "Beginner", "Beginning", "Behavior", "Behest", "Belief", "Bell",
  "Belly", "Belt", "Bench", "Bend", "Benefit", "Bequest", "Bestseller", "Bet", "Beverage", "Bible", "Bicycle", "Bid", "Bidding", "Bigfoot", "Bile",
  "Bill", "Billboard", "Billion", "Binder", "Binding", "Binoculars", "Biochemistry", "Biography", "Biology", "Bird", "Birth", "Birthday",
  "Biscuit", "Bishop", "Bite", "Bitumen", "Bitterness", "Black", "Blade", "Blame", "Blank", "Blanket", "Blast", "Blazer", "Bleach", "Blend",
  "Blessing", "Blink", "Blizzard", "Block", "Blood", "Blossom", "Blow", "Blue", "Blueprint", "Bluff", "Board", "Boat", "Body", "Bog", "Bolt", "Bomb",
  "Bond", "Bone", "Bonus", "Book", "Booking", "Booklet", "Boom", "Boost", "Boot", "Border", "Bore", "Bosom", "Boss", "Botany", "Bottle", "Bottom",
  "Bouquet", "Bow", "Bowl", "Box", "Boy", "Bracelet", "Bracket", "Brain", "Brake", "Branch", "Brand", "Brass", "Bravery", "Brawl", "Bread",
  "Breakfast", "Break", "Breakdown", "Breaker", "Breath", "Breeze", "Brick", "Bride", "Bridge", "Brief", "Brigade", "Brightness", "Brilliance",
  "Brink", "Brochure", "Broccoli", "Broke", "Broker", "Bronze", "Brotherhood", "Brown", "Brush", "Bubble", "Buck", "Bucket", "Buddhism", "Bud",
  "Budget", "Buffet", "Bug", "Builder", "Building", "Bulb", "Bulk", "Bull", "Bullet", "Bumper", "Bunch", "Bundle", "Burden", "Bureau", "Burglar",
  "Burial", "Burn", "Burst", "Bus", "Bush", "Business", "Bust", "Butcher", "Butt", "Butter", "Button", "Buyer", "Buying", "Buzz", "Byte", "Cabinet",
  "Cable", "Cactus", "Café", "Cage", "Cake", "Calculation", "Calendar", "Calf", "Call", "Calm", "Camel", "Camera", "Camp", "Campaign", "Campus",
  "Can", "Canal", "Cancel", "Cancer", "Candidate", "Candle", "Candy", "Canvas", "Canyon", "Capability", "Capacity", "Capital", "Captain", "Caption",
  "Car", "Caravan", "Carbon", "Card", "Care", "Career", "Cargo", "Carpet", "Carriage", "Carrier", "Carrot", "Cart", "Cartoon", "Carve", "Case",
  "Cash", "Casino", "Cast", "Castle", "Cat", "Catalog", "Catch", "Category", "Caterpillar", "Cathedral", "Cause", "Cave", "Ceiling", "Celebration",
  "Celebrity", "Cell", "Cellar", "Cellphone", "Cement", "Cemetery", "Census", "Center", "Century", "Ceremony", "Certificate", "Chain", "Chair",
  "Challenge", "Chamber", "Champion", "Chance", "Change", "Channel", "Chaos", "Chapel", "Character", "Charity", "Charm", "Chart", "Chassis",
  "Chat", "Check", "Cheer", "Cheese", "Chef", "Chemical", "Chemistry", "Chest", "Chick", "Chicken", "Chief", "Child", "Childhood", "Chimney",
  "China", "Chip", "Chocolate", "Choice", "Choir", "Chord", "Chore", "Church", "Cigarette,", "Cinema", "Circle", "Circuit", "Circus", "Citizen",
  "Citizenship", "City", "Civilization", "Claim", "Clamp", "Clarity", "Clash", "Class", "Classroom", "Clause", "Clay", "Clean", "Cleaning", "Clerk",
  "Client", "Cliff", "Climate", "Clinic", "Clip", "Clock", "Clothing", "Cloud", "Club", "Clue", "Cluster", "Coach", "Coal", "Coast", "Coat", "Cobweb",
  "Cockpit", "Code", "Coffee", "Coffin", "Coin", "Coke", "Cold", "Collaboration", "Collapse", "Collar", "Collection", "College", "Collision",
  "Colony", "Color", "Column", "Combination", "Comedy", "Comfort", "Comic", "Command", "Commemoration", "Comment", "Commerce", "Commission",
  "Commitment", "Committee", "Common", "Communication", "Community", "Companion", "Company", "Comparison", "Compass", "Compensation",
  "Competence", "Competition", "Complaint", "Completion", "Complex", "Complexity", "Compliance", "Complication", "Component", "Comprehension",
  "Compression", "Comprise", "Compromise", "Computer", "Concentration", "Concept", "Concern", "Concert", "Conclusion", "Concrete",
  "Condensation", "Condition", "Conduct", "Conductor", "Cone", "Conference", "Confession", "Confidence", "Configuration", "Confusion",
  "Congestion", "Congress", "Connection", "Consequence", "Conservation", "Consideration", "Consistency", "Console", "Conspiracy",
  "Constellation", "Constitution", "Construction", "Consultation", "Consumer", "Consumption", "Contact", "Container", "Contemplation",
  "Content", "Contest", "Context", "Continent", "Contract", "Contradiction", "Contribution", "Control", "Controller", "Convention",
  "Conversation", "Conversion", "Convert", "Conviction", "Cook", "Cookie", "Cooking", "Cool", "Cooperation", "Coordination", "Cop", "Copper",
  "Copy", "Cord", "Core", "Cork", "Corn", "Corner", "Corporation", "Correct", "Corridor", "Corruption", "Cosmetics", "Cost", "Costume", "Cottage",
  "Cotton", "Couch", "Council", "Counsel", "Count", "Counter", "Country", "Countryside", "County", "Couple", "Courage", "Course", "Court", "Cousin",
  "Cover", "Coverage", "Cow", "Cowboy", "Crack", "Craft", "Crane", "Crank", "Crash", "Crate", "Crater", "Crayon", "Cream", "Creation", "Creativity",
  "Creator", "Creature", "Credit", "Creek", "Crew", "Cricket", "Crime", "Criminal", "Crisis", "Criteria", "Criterion", "Critic", "Criticism",
  "Crocodile", "Crop", "Cross", "Crowd", "Crown", "Crucifix", "Crust", "Cry", "Crystal", "Cucumber", "Cue", "Cuisine", "Culture", "Cup",
  "Cupboard", "Cure", "Curiosity", "Curl", "Currency", "Current", "Curriculum", "Curtain", "Curve", "Custody", "Customer", "Customs", "Cut",
  "Cute", "Cycle", "Cyclone", "Cylinder", "Cynicism", "Dad", "Daddy", "Daily", "Damage", "Dance", "Dancer", "Dandelion", "Danger", "Dark",
  "Darkness", "Dash", "Database", "Date", "Daughter", "Dawn", "Day", "Daydream", "Deacon", "Dead", "Deadline", "Deaf", "Dealer", "Death",
  "Debate", "Debt", "Decay", "Deception", "Decision", "Declaration", "Decline", "Decor", "Decoration", "Decrease", "Dedication", "Deed",
  "Deer", "Defeat", "Defence", "Deficit", "Definition", "Degree", "Delay", "Delegate", "Delegation", "Delight", "Delivery", "Demand", "Democracy",
  "Democrat", "Demon", "Demonstration", "Denial", "Density", "Dentist", "Departure", "Department", "Dependence", "Deployment", "Deposit",
  "Depression", "Depth", "Deputy", "Derailment", "Descendant", "Description", "Desert", "Design", "Designer", "Desire", "Desk", "Desktop",
  "Destination", "Destiny", "Destroyer", "Destruction", "Detail", "Detective", "Detector", "Determination", "Developer", "Development",
  "Device", "Devil", "Diagram", "Dial", "Dialogue", "Diameter", "Diamond", "Diaper", "Dictator", "Dictionary", "Diet", "Difference",
  "Differentiation", "Difficulty", "Dignity", "Dilemma", "Dimension", "Dinner", "Dinosaur", "Diploma", "Direction", "Director", "Dirt",
  "Disability", "Disadvantage", "Disaster", "Disc", "Discipline", "Disclosure", "Disco", "Discount", "Discovery", "Discrimination",
  "Discussion", "Disease", "Dish", "Disk", "Dislike", "Dismissal", "Display", "Disposal", "Disposition", "Distance", "Distinction",
  "Distress", "Distribution", "District", "Diva", "Diver", "Divide", "Dividend", "Divider", "Division", "Divorce", "Docent", "Doctor",
  "Doctrine", "Document", "Dog", "Doll", "Dollar", "Domain", "Dome", "Donkey", "Door", "Doorman", "Dormitory", "Dot", "Double", "Doubt",
  "Dove", "Down", "Download", "Dozen", "Draft", "Drag", "Dragon", "Drain", "Drama", "Draw", "Drawer", "Drawing", "Dream", "Dress", "Dresser",
  "Driver", "Driving", "Drop", "Drought", "Drug", "Drum", "Dryer", "Duck", "Dude", "Due", "Duet", "Duke", "Dumb", "Dump", "Dungeon", "Duration",
  "Dust", "Duty", "Dwarf", "Dwell", "Dwelling", "Dye", "Dynamics", "Dynasty", "Eagle", "Ear", "Earth", "Earthquake", "Ease", "Easel", "East",
  "Easter", "Eating", "Eave", "Echo", "Eclipse", "Ecology", "Economy", "Edge", "Editor", "Education", "Effect", "Efficacy", "Efficiency",
  "Effort", "Egg", "Ego", "Elbow", "Elder", "Election", "Electric", "Electricity", "Electron", "Elegance", "Elephant", "Elevator", "Elf",
  "Elimination", "Elite", "Elongation", "Email", "Embarrassment", "Embassy", "Ember", "Embryo", "Emergence", "Emergency", "Emission",
  "Emotion", "Emperor", "Emphasis", "Employee", "Employer", "Employment", "Empowerment", "Empty", "Emptiness", "Enclosure", "Encounter",
  "End", "Ending", "Endorsement", "Endurance", "Enemy", "Energy", "Enforcement", "Engagement", "Engineer", "Engineering", "Enjoyment",
  "Enlightenment", "Enquiry", "Entertainment", "Enthusiasm", "Entity", "Entrance", "Entrepreneur", "Environment", "Episode", "Equal",
  "Equality", "Equation", "Equipment", "Equity", "Equivalent", "Era", "Erection", "Erosion", "Error", "Escalation", "Escape", "Escort",
  "Essay", "Essence", "Establishment", "Estate", "Estimation", "Estrangement", "Ethics", "Ethnicity", "Evacuation", "Evaluation",
  "Evangelist", "Event", "Evidence", "Evil", "Evolution", "Exaggeration", "Exam", "Examination", "Example", "Exasperation", "Excellence",
  "Exception", "Excerpt", "Excess", "Exchange", "Excitement", "Exclamation", "Exclusion", "Excursion", "Excuse", "Execution", "Executive",
  "Executor", "Exemption", "Exercise", "Exhaustion", "Exhibition", "Exile", "Existence", "Exit", "Exotic", "Expansion", "Expectation",
  "Expedition", "Expense", "Experience", "Experiment", "Expert", "Expertise", "Face", "Fact", "Factory", "Faculty", "Fade", "Failure", "Fair",
  "Fairytale", "Faith", "Falcon", "Fall", "Fame", "Family", "Fan", "Fang", "Farm", "Farmer", "Fascination", "Fashion", "Fast", "Fat", "Fate",
  "Father", "Fault", "Favor", "Fear", "Feather", "Feature", "Fee", "Feel", "Feeling", "Fellow", "Fence", "Festival", "Fever", "Fiber", "Fiction",
  "Field", "Fiend", "Fight", "Figure", "File", "Film", "Filter", "Finalist", "Finance", "Finding", "Fine", "Finger", "Finish", "Fire", "Fireplace",
  "Firm", "Fish", "Fist", "Fit", "Fitness", "Flag", "Flame", "Flare", "Flash", "Flavour", "Fleet", "Flight", "Flock", "Flood", "Floor", "Flour",
  "Flower", "Fluid", "Fluke", "Flute", "Fly", "Focus", "Fog", "Fold", "Folk", "Food", "Fool", "Foot", "Football", "Force", "Forecast", "Forehead",
  "Forest", "Fork", "Form", "Format", "Fortune", "Forum", "Fossil", "Foundation", "Founder", "Fountain", "Fox", "Fraction", "Fragrance", "Frame",
  "France", "Fraudtion", "Exploration", "Explorer", "Explosion", "Export", "Exposure", "Expression", "Extent", "Extension", "Extinction",
  "Extra", "Extravagance", "Extreme", "Eye", "Eyebrow", "Eyeglasses", "Eyelash", "Eyelid", "Dad", "Dagger", "Dairy", "Damage", "Dance", "Dancer",
  "Danger", "Dare", "Dark", "Darkness", "Dash", "Data", "Date", "Daughter", "Dawn", "Day", "Dead", "Deadline", "Deaf", "Deal", "Dealer", "Death",
  "Debate", "Debt", "Decade", "Decay", "Deception", "Decision", "Deck", "Declaration", "Decor", "Deer", "Defeat", "Defense", "Deficit", "Degree",
  "Delay", "Delegate", "Delight", "Delivery", "Demand", "Democracy", "Demon", "Den", "Density", "Dentist", "Department", "Departure", "Dependence",
  "Deposit", "Depression", "Depth", "Deputy", "Description", "Desert", "Design", "Designer", "Desire", "Desk", "Destiny", "Destroyer",
  "Destruction", "Detail", "Detection", "Detective", "Development", "Device", "Devil", "Diagram", "Dial", "Diamond", "Diary", "Dice", "Dictator",
  "Dictionary", "Diet", "Difference", "Difficulty", "Dig", "Dignity", "Dilemma", "Dimension", "Diner", "Dinner", "Dinosaur", "Diploma",
  "Director", "Dirt", "Disability", "Disadvantage", "Disaster", "Disc", "Disciple", "Discipline", "Disclosure", "Disco", "Discovery",
  "Discrimination", "Discussion", "Disease", "Galaxy", "Gallery", "Game", "Gap", "Garden", "Garment", "Gas", "Gate", "Gathering", "Gauge", "Gear",
  "Gem", "Gender,", "Gene", "General", "Generation", "Generator", "Genesis", "Genetics", "Genius", "Gentleness", "Geography", "Geology",
  "Geometry", "Germ", "Gesture", "Ghost", "Giant", "Gift", "Giggle", "Glacier", "Glamour", "Glass", "Glaze", "Glimpse", "Globe", "Glory", "Gloss",
  "Glove", "Glow", "Glue", "Goal", "Goat", "God", "Gold", "Golf", "Good", "Goodbye", "Goods", "Governance", "Government", "Governor", "Grace",
  "Gratitude", "Grave", "Gravity", "Green", "Greeting", "Grief", "Grill", "Grip", "Groove", "Ground", "Group", "Growth", "Grudge", "Guard",
  "Guidance", "Guide", "Guild", "Guilt", "Guitar", "Gulf", "Gum", "Gun", "Gym", "Gypsum", "Habit", "Habitat", "Hail", "Hair", "Half", "Hall",
  "Hammer", "Hand", "Handle", "Hang", "Happening", "Happiness", "Harbor", "Hardship", "Hardware", "Harm", "Harvest", "Hat", "Hate",
  "Haven", "Hawk", "Hazard", "Head", "Health", "Heap", "Hearing", "Heart", "Heat", "Heaven", "Heavy", "Hedge", "Height", "Heir", "Helicopter",
  "Hell", "Helmet", "Help", "Hemisphere", "Hen", "Herb", "Herd", "Heritage", "Hero", "Hesitation", "Hide", "Hierarchy", "High", "Highlight",
  "Highway", "Hike", "Hill", "Hint", "Hip", "Hire", "Historian", "History", "Hit", "Hobby", "Hold", "Hole", "Holiday", "Home", "Homework",
  "Homestead", "Honey", "Honor", "Hood", "Hope", "Horizon", "Horn", "Horror", "Horse", "Hospital", "Host", "Hostility", "Hotel", "Hour", "House",
  "Housing", "Humor", "Hunger", "Hunt", "Hurry", "Hurt", "Husband", "Hybrid", "Hydrogen", "Hypothesis", "Ice", "Idea", "Identity", "Ideology",
  "Ignition", "Illness", "Image", "Imagination", "Impact", "Imperative", "Implement", "Implication", "Importance", "Impression", "Improvement",
  "Incentive", "Incident", "Income", "Increase", "Independence", "Index", "India", "Indication", "Individual", "Industry", "Inequality", "Infant",
  "Infection", "Influence", "Information", "Ingredient", "Inhabitant", "Inheritance", "Initial", "Initiative", "Injection", "Injury",
  "Injustice", "Ink", "Inn", "Innovation", "Input", "Inquiry", "Insect", "Inside", "Insight", "Insistence", "Inspection", "Inspiration",
  "Instinct", "Institution", "Instruction", "Instrument", "Insurance", "Intellect", "Intelligence", "Intensity", "Intent", "Interaction",
  "Interest", "Interface", "Interpretation", "Interval", "Interview", "Intuition", "Invention", "Investigation", "Investment", "Invitation",
  "Invoice", "Iron", "Island", "Issue", "Item", "Ivory", "Jab", "Jack", "Jacket", "Jail", "Jam", "Jar", "Jazz", "Jealousy", "Jeans", "Jelly", "Jewel",
  "Jewelry", "Jigsaw", "Job", "Joker", "Journey", "Joy", "Judge", "Judgment", "Juice", "Jumble", "Jump", "Jungle", "Junior", "Junk", "Jurisdiction",
  "Jury", "Justice", "Kaleidoscope", "Kangaroo", "Karaoke", "Karma", "Kettle", "Key", "Keyboard", "Kid", "Kidney", "Killer", "Kilogram",
  "Kilometer", "Kind", "King", "Kingdom", "Kiosk", "Kiss", "Kitchen", "Kite", "Kitten", "Knee", "Knife", "Knight", "Knob", "Knot", "Knowledge",
  "Lab", "Label", "Labor", "Laboratory", "Lace", "Lack", "Lad", "Lady", "Lake", "Lamb", "Lamp", "Land", "Landscape", "Language", "Lantern",
  "Lap", "Laptop", "Lapse", "Large", "Laser", "Last", "Latency", "Later", "Latin", "Laugh", "Laughter", "Launch", "Law", "Lawsuit", "Lawyer",
  "Layer", "Leadership", "Leaf", "League", "Leak", "Learning", "Leather", "Lecture", "Left", "Leg", "Legacy", "Legal", "Legend", "Legislation",
  "Leisure", "Lemon", "Length", "Lens", "Lesson", "Letter", "Level", "Lever", "Liability", "Library", "License", "Lid", "Lie", "Life", "Lift",
  "Light", "Lighthouse", "Lightning", "Limit", "Line", "Linen", "Link", "Lion", "Lip", "Liquid", "List", "Listen", "Literacy", "Literature",
  "Livelihood", "Liver", "Living", "Load", "Loaf", "Loan", "Lobby", "Location", "Lock", "Log", "Logic", "Logo", "Loneliness", "Longing", "Look",
  "Loop", "Lord", "Loss", "Lot", "Lottery", "Lounge", "Love", "Lover", "Low", "Loyalty", "Luck", "Lunch", "Macaroni", "Machine", "Machinery",
  "Magazine", "Magic", "Magician", "Magnesium", "Magnet", "Magnitude", "Maid", "Mail", "Mainland", "Mainstream", "Maintenance", "Major",
  "Majority", "Make", "Maker", "Makeup", "Male", "Mall", "Mammal", "Man", "Management", "Manager", "Mandarin", "Mane", "Manifestation",
  "Manipulation", "Manner", "Manor", "Mantle", "Manual", "Manufacture", "Manuscript", "Map", "Maple", "Marathon", "Marble", "March",
  "Margin", "Marine", "Mark", "Marker", "Market", "Marketing", "Marketplace", "Marriage", "Mask", "Masonry", "Mass", "Massage", "Mast",
  "Master", "Mastery", "Mat", "Match", "Mate", "Material", "Mathematics", "Matrix", "Matter", "Maximum", "Mayhem", "Mayor", "Maze", "Meal",
  "Meaning", "Measurement", "Meat", "Mechanism", "Medal", "Media", "Medicine", "Medium", "Meeting", "Melody", "Memento", "Memory", "Menace",
  "Menagerie", "Mending", "Menopause", "Menu", "Mercury", "Mercy", "Merit", "Messenger", "Metal", "Metaphor", "Method", "Metropolis",
  "Microscope", "Midday", "Middle", "Midnight", "Midst", "Might", "Migrant", "Nail", "Name", "Naming", "Nap", "Nation", "Nationality", "Native",
  "Naturalist", "Nature", "Navy", "Necklace", "Needle", "Neglect", "Negotiation", "Neighbor", "Neighborhood", "Nephew", "Nerve", "Nest",
  "Net", "Network", "News", "Newsletter", "Newt", "Nexus", "Night", "Nightmare", "Nod", "Noise", "Nomad", "Noodle", "Normal", "North", "Nose",
  "Notch", "Note", "Notebook", "Nothing", "Notice", "Notion", "Novel", "Novelist", "Novice", "Number", "Numeracy", "Numerator", "Nurse",
  "Nursery", "Nut", "Nutrition", "Nylon", "Oak", "Oasis", "Oat", "Oath", "Obesity", "Object", "Objective", "Obligation", "Observer", "Obstacle",
  "Occasion", "Occupation", "Ocean", "Octave", "October", "Odor", "Offense", "Offering", "Office", "Officer", "Official", "Offset", "Oil",
  "Old", "Olive", "Omega", "Omen", "Onion", "Online", "Onset", "Ontology", "Operator", "Opinion", "Opportunity", "Opposition", "Optimism",
  "Option", "Oracle", "Orange", "Orbit", "Orchard", "Order", "Organization", "Origin", "Original", "Ornament", "Orphan", "Outcome", "Outfit",
  "Outing", "Outlet", "Outline", "Outset", "Outside", "Oven", "Overcoat", "Overhead", "Overseer", "Oversight", "Owner", "Ownership", "Ox",
  "Oxygen", "Oyster", "Paddle", "Paddock", "Page", "Pain", "Paint", "Painter", "Painting", "Pair", "Palace", "Palm", "Pan", "Pancake", "Panda",
  "Panel", "Panic", "Paper", "Parade", "Paradise", "Paragraph", "Parallel", "Parameter", "Parcel", "Pardon", "Parent", "Parrot", "Part",
  "Participant", "Participation", "Particle", "Particular", "Partner", "Partnership", "Party", "Passage", "Passion", "Passport", "Password",
  "Past", "Pasta", "Paste", "Pastry", "Patch", "Patent", "Path", "Patience", "Patient", "Patio", "Patrol", "Patron", "Pattern", "Pause", "Pavement",
  "Paw", "Payment", "Pea", "Peace", "Peach", "Peak", "Peanut", "Pear", "Pearl", "Pedal", "Peer", "Penalty", "Pencil", "Pendant", "Penguin",
  "Penny", "Pension", "People", "Pepper", "Percentage", "Perception", "Perch", "Performance", "Perfume", "Period", "Permission", "Permit",
  "Person", "Personality", "Perspective", "Pest", "Pet", "Pharmacy", "Phase", "Phenomenon", "Philosophy", "Phone", "Photo", "Photographer",
  "Phrase", "Physical", "Physician", "Piano", "Picnic", "Picture", "Piece", "Pig", "Pigeon", "Quack", "Quad", "Quadrant", "Quadrilateral",
  "Quadriplegic", "Quagmire", "Quail", "Quake", "Quality", "Quantity", "Quarantine", "Quarry", "Quart", "Quarter", "Quarrel", "Quarry",
  "Quart", "Quarter", "Quarterback", "Quay", "Queen", "Querist", "Query", "Question", "Questionnaire", "Queue", "Quibble", "Quick",
  "Quicksand", "Quiet", "Quill", "Quilt", "Quince", "Quintessence", "Quip", "Quirk", "Quit", "Quiz", "Quotation", "Quote", "Rabbit",
  "Race", "Rack", "Radar", "Radiator", "Radio", "Radius", "Rage", "Rail", "Rainbow", "Raise", "Rally", "Ram", "Ranch", "Range", "Ranking",
  "Rap", "Rapid", "Rat", "Rate", "Ratio", "Rational", "Rattle", "Raucous", "Raven", "Raw", "Ray", "Razor", "Reach", "Reaction", "Read", "Reader",
  "Reading", "Real", "Reality", "Realm", "Rear", "Reason", "Rebellion", "Recall", "Receipt", "Reception", "Recipe", "Recipient", "Reckoning",
  "Recognition", "Recoil", "Record", "Recorder", "Recovery", "Recreation", "Recruit", "Rectangle", "Red", "Redundancy", "Reference",
  "Referral", "Reflection", "Refrain", "Refreshment", "Refuge", "Refund", "Regard", "Region", "Register", "Regret", "Regular", "Regulation",
  "Reign", "Rejection", "Relation", "Relationship", "Relative", "Relaxation", "Release", "Relevance", "Reliability", "Religion", "Relocation",
  "Reminder", "Removal", "Rent", "Repair", "Repetition", "Replacement", "Reply", "Report", "Reporter", "Reproduction", "Reputation", "Request",
  "Requirement", "Rescue", "Research", "Reservoir", "Residence", "Resident", "Resignation", "Resistance", "Resource", "Sack", "Sacrifice",
  "Sadness", "Safari", "Safe", "Safety", "Saffron", "Saga", "Sage", "Sail", "Sailor", "Saint", "Salad", "Sale", "Saliva", "Salmon", "Salt",
  "Salutation", "Salvation", "Same", "Sample", "Sanctuary", "Sand", "Sandwich", "Satellite", "Satire", "Satisfaction", "Sausage", "Savings",
  "Scale", "Scandal", "Scanner", "Scar", "Scarcity", "Scenario", "Scene", "Scent", "Schedule", "Scheme", "Scholarship", "School", "Science",
  "Scientist", "Scoop", "Scope", "Score", "Scorn", "Scorpion", "Scoundrel", "Scrap", "Scratch", "Scream", "Screen", "Scripture", "Sculptor",
  "Sculpture", "Sea", "Seal", "Search", "Season", "Seat", "Secession", "Second", "Secret", "Secretary", "Section", "Sector", "Secure",
  "Security", "Sediment", "Seed", "Seeker", "Seer", "Segmentation", "Seizure", "Selection", "Self", "Seller", "Seminar", "Senate", "Senator",
  "Send-off", "Senility", "Sensation", "Sense", "Sensibility", "Sensitivity", "Sensor", "Sentence", "Sentiment", "Sentry", "Separate",
  "Separation", "Sequence", "Serenity", "Series", "Sermon", "Servant", "Service", "Session", "Umpire", "Uncle", "Understanding", "Undertaking",
  "Uniform", "Union", "Unit", "Universe", "University", "Update", "Uphill", "Uplift", "Upper", "Uproar", "Upset", "Urge", "Urinal", "Usage",
  "Use", "User", "Utility", "Utterance", "Utopia", "Utterance", "Table", "Tablet", "Tackle", "Tactic", "Tag", "Tail", "Tailor", "Take", "Tale",
  "Talent", "Talk", "Tall", "Tank", "Tap", "Tape", "Target", "Task", "Taste", "Tatoo", "Taxi", "Tea", "Teacher", "Teaching", "Team", "Tear",
  "Technique", "Technology", "Teenager", "Teeth", "Television", "Tell", "Temper", "Temperature", "Temple", "Tempo", "Tenant", "Tendency",
  "Tennis", "Tension", "Tent", "Term", "Territory", "Test", "Text", "Texture", "Thanks", "Theater", "Theme", "Theory", "Therapist", "Therapy",
  "Thesis", "Thief", "Thigh", "Thing", "Thought", "Thread", "Threat", "Threshold", "Throat", "Throne", "Thumb", "Thunder", "Ticket", "Tide",
  "Tie", "Tiger", "Tile", "Time", "Timing", "Tin", "Tip", "Title", "Toast", "Toe", "Tolerance", "Tomato", "Tomb", "Tone", "Tongue", "Tool",
  "Tooth", "Top", "Topography", "Torch", "Torso", "Torture", "Toss", "Total", "Touch", "Tour", "Tourism", "Tourist", "Tournament", "Towel",
  "Tower", "Town", "Toy", "Trace", "Track", "Vacation", "Vacuum", "Validity", "Valley", "Value", "Valve", "Vampire", "Van", "Vanguard", "Vanilla",
  "Vanity", "Variety", "Vase", "Vault", "Vegetable", "Vegetarian", "Vehicle", "Veil", "Vein", "Vengeance", "Venue", "Verb", "Verdict",
  "Verification", "Version", "Versus", "Vessel", "Veteran", "Veterinary", "Veto", "Vibration", "Vice", "Victim", "Victory", "Video", "View",
  "Viewer", "Vigil", "Villa", "Village", "Villain", "Vine", "Vintage", "Violation", "Violence", "Violin", "Virgin", "Virtual", "Virtue",
  "Virus", "Visa", "Vision", "Visit", "Visitor", "Vitamin", "Vocabulary", "Voice", "Void", "Volcano", "Volleyball", "Volume", "Volunteer", "Vote",
  "Voter", "Voting", "Voyage", "Vulnerability", "Wad", "Wage", "Wagon", "Waist", "Wait", "Waiter", "Wake", "Walk", "Walker", "Walking", "Wall",
  "Wallet", "Walnut", "Want", "War", "Ward", "Warehouse", "Warmth", "Warning", "Warrior", "Wash", "Washing", "Waste", "Watch", "Watcher", "Water",
  "Wave", "Way", "Weakness", "Wealth", "Weapon", "Wear", "Weather", "Web", "Wedding", "Weed", "Week", "Weekend", "Weight", "Weighing", "Welcome",
  "Welding", "Well", "West", "Whale", "Wheat", "Wheel", "Whim", "Whiskey", "Whisper", "White", "Whole", "Width", "Wife", "Wig", "Wild", "Wilderness",
  "Wildlife", "Will", "Willow", "Win", "Wind", "Window", "Wine", "Wing", "Winner", "Winter", "Wire", "Wisdom", "Wish", "Witness", "Wolf", "Woman",
  "Wonder", "Wood", "Woodland", "Wool", "Word", "Work", "Worker", "Working", "Workshop", "World", "Worm", "Worry", "Worth", "Wound", "Wrap",
  "Wrath", "Wreck", "Wrench", "Wrist", "Writer", "Writing", "Wrong", "Yacht", "Yahoo", "Yak", "Yarn", "Year", "Yearning", "Yell", "Yield",
  "Yoga", "Yogurt", "Yokel", "Yolk", "Yonder", "Yarn", "Youth", "Yoyo", "Zebra", "Zenith", "Zero", "Zeal", "Zest", "Zigzag", "Zinc", "Zipper",
  "Zone", "Zoo", "Zoology", "Zucchini",];

nounArr = [...new Set(nounArr)];

const adjectiveArr = ["Amazing", "Brilliant", "Calm", "Dazzling", "Energetic", "Fascinating", "Gorgeous", "Humble", "Incredible", "Joyful",
  "Kind", "Lively", "Marvelous", "Noble", "Outstanding", "Peaceful", "Quirky", "Radiant", "Sincere", "Terrific", "Unique", "Vibrant",
  "Wonderful", "Xenial", "Youthful", "Zesty"];

function generateBandName(idea) {

  let substringOfIdea = idea.slice(-3);
  let substringOfNoun = "";
  let substringOfIdeaShorter = "";
  let nounsFound = [];
  let firstCharOfNoun = "";
  let firstCharofAdj = "";
  let nounFound = "";
  let adjFounds = [];
  let adjFound = "";

  for (let noun of nounArr) {
    if (noun.endsWith(substringOfIdea)) {
      nounsFound.push(noun);
    }

    else if (!noun.endsWith(substringOfIdea)) {
      substringOfIdeaShorter = substringOfIdea.slice(1);
      if (noun.endsWith(substringOfIdeaShorter)) {
        nounsFound.push(noun);
      }
    } else if (!noun.endsWith(substringOfIdeaShorter)) {
      console.log(`Sorry, the band name generator hasn't found a noun matching to ${idea}`)
    }
  }
console.log(nounsFound)
  for(let word of nounsFound){
    if(word !== idea){ nounFound = word}
  }
  console.log(nounFound)

  //diva, saliva


// Here comes the finding the alliterating adjective part

firstCharOfNoun = nounFound.slice(0, 1);

for (let adj of adjectiveArr) {
  if (adj.startsWith(firstCharOfNoun)) {
    adjFounds.push(adj);
    adjFound = adjFounds[0]
  }
}

return (`${adjFound} ${nounFound}`);

}


console.log(generateBandName("Diva"))
