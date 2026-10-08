import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Instagram,
  FolderOpen,
  ExternalLink,
  Calendar,
  User,
  Clock,
  ArrowRight,
  BookOpen,
  Share2,
  Heart,
  X,
  Tag,
  Facebook,
  ArrowLeft
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent: any;
  category: "Wedding Trends" | "Decor & Styling" | "Behind The Scenes";
  date: string;
  readTime: string;
  author: string;
  image: string;
  likes: number;
  instagramTag?: string;
  imageAlt?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "destination-outdoor-weddings-setting",
    title: "Destination and Outdoor Weddings: How to Create a Beautiful Celebration in the Right Setting",
    excerpt: "There is something special about celebrating a wedding in a setting that becomes part of the occasion itself. Discover how to plan and style outdoor and destination celebrations.",
    fullContent: (
      <article className="space-y-4">
        <p>There is something special about celebrating a wedding in a setting that becomes part of the occasion itself.</p>
        <p>An open garden, a resort surrounded by greenery, a private villa or a destination away from the usual surroundings can give the wedding a completely different atmosphere.</p>
        <p>But outdoor and destination celebrations also require thoughtful planning. The location, weather, lighting, guest movement and décor all need to work together.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Let the Location Set the Mood</h2>
        <p>The first step is understanding what makes your chosen location special.</p>
        <p>Is it the greenery around the venue? The architecture? An open lawn? A water feature? A beautiful view?</p>
        <p>Instead of treating the surroundings as something separate, use them as part of the wedding experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Explore Different Settings</h2>
        <p>There are many possibilities for creating a distinctive celebration.</p>
        <p>Some popular choices include:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Destination Weddings</li>
          <li>Resort Weddings</li>
          <li>Garden Weddings</li>
          <li>Water Pond Weddings</li>
          <li>Villa Weddings</li>
          <li>Bungalow Weddings</li>
          <li>Palace Grounds</li>
          <li>5-Star Hotels</li>
          <li>3-Star Hotels</li>
        </ul>
        <p>Each setting offers a different atmosphere. If you are evaluating venue capacities and amenities, explore our detailed guide on <a href="#blog-choose-perfect-wedding-venue" className="text-[#D4AF37] no-underline hover:text-white transition-colors">how to choose the perfect wedding venue</a> to match your vision.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Build the Décor Around the Surroundings</h2>
        <p>A natural outdoor venue may already have plenty of visual character.</p>
        <p>Instead of covering it completely, complement it with flowers, fabrics, seating arrangements, lighting and carefully selected decorative pieces. You can <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">explore our event gallery</a> to see how we blend natural outdoor backdrops with custom decor.</p>
        <p>For example, a garden can work beautifully with floral details, while a villa may suit a more elegant and sophisticated setup.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make the Entrance Part of the Experience</h2>
        <p>The entrance is the first visual moment your guests experience.</p>
        <p>A floral walkway, statement backdrop, coordinated lighting or a creative welcome arrangement can immediately establish the mood of the celebration.</p>
        <p>The design does not need to be excessive. It simply needs to connect with the setting.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create Photography Moments Naturally</h2>
        <p>Outdoor venues offer many opportunities for memorable photographs.</p>
        <p>Use existing features such as:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Gardens</li>
          <li>Trees</li>
          <li>Pathways</li>
          <li>Architectural corners</li>
          <li>Water areas</li>
          <li>Open spaces</li>
        </ul>
        <p>A combination of natural surroundings and carefully placed décor can create attractive photography spots without making them feel artificial.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Think About Guest Movement</h2>
        <p>An outdoor wedding can involve larger spaces than an indoor function, so guest movement becomes important.</p>
        <p>Make sure people can easily understand where to go for:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Seating</li>
          <li>Dining</li>
          <li>Main ceremony</li>
          <li>Photography</li>
          <li>Rest areas</li>
          <li>Other functions</li>
        </ul>
        <p>A well-organized layout allows guests to enjoy the venue instead of spending time figuring out where everything is. To map out every phase smoothly without last-minute stress, follow our <a href="#blog-wedding-planning-timeline" className="text-[#D4AF37] no-underline hover:text-white transition-colors">complete wedding planning timeline</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan for Both Day and Night</h2>
        <p>An outdoor celebration can look completely different during the day and after sunset.</p>
        <p>During daylight, natural surroundings, flowers and colours may become the main visual elements.</p>
        <p>At night, lighting takes over.</p>
        <p>String lights, focused stage lighting, warm decorative illumination and pathway lights can give the same venue an entirely new character.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create a Stage That Belongs to the Setting</h2>
        <p>The main stage does not always need to overpower the venue.</p>
        <p>A stage can be designed to complement its surroundings through coordinated flowers, colours, textures and lighting.</p>
        <p>Whether the setting is traditional, natural or contemporary, the stage should feel like part of the overall environment.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Give Different Functions Different Atmospheres</h2>
        <p>One location can host several functions while still offering a different experience each time.</p>
        <p><strong>Haldi:</strong> An open and colourful environment works well for the relaxed energy of a Haldi celebration.</p>
        <p><strong>Mehendi:</strong> Comfortable seating, creative décor and intimate corners can create a more informal atmosphere.</p>
        <p><strong>Wedding Ceremony:</strong> A graceful arrangement can place greater focus on the ceremony, with a thoughtfully designed stage and surrounding décor.</p>
        <p><strong>Reception:</strong> As the evening progresses, lighting, stage design and elegant details can transform the same space into a more sophisticated setting.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Prepare for the Practical Side</h2>
        <p>Outdoor celebrations are beautiful, but they also require practical preparation.</p>
        <p>Consider:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Weather conditions</li>
          <li>Guest seating</li>
          <li>Shade requirements</li>
          <li>Lighting</li>
          <li>Power arrangements</li>
          <li>Pathways</li>
          <li>Dining setup</li>
          <li>Comfortable movement between areas</li>
        </ul>
        <p>These details may not always be visible in photographs, but they have a major effect on the actual guest experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Keep Nature as Part of the Design</h2>
        <p>One of the biggest advantages of an outdoor venue is its natural character.</p>
        <p>Let greenery, open space, water features and architecture contribute to the visual story instead of trying to hide them behind decoration.</p>
        <p>The result can feel more spacious, relaxed and connected to the location.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Turn a Destination Into an Experience</h2>
        <p>A destination wedding is more than moving the ceremony to a different place.</p>
        <p>The surroundings, arrival experience, décor, functions and guest interactions can all become part of the celebration.</p>
        <p>When these elements are planned together, the location itself becomes one of the most memorable parts of the wedding.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Décor Options Starting From ₹1.25 Lakhs</h2>
        <p>Wedding styling can be planned around different celebration sizes and requirements, with décor options beginning at ₹1.25 lakhs. To discover all our tailored packages and offerings, visit our <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services section</a>.</p>
        <p>The final arrangement can be shaped according to the venue, number of functions, preferred style and overall event requirements.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make the Location Part of Your Story</h2>
        <p>The best outdoor celebrations don't simply decorate a beautiful place. They make the place feel like it belongs to the wedding.</p>
        <p>Whether you choose a garden, resort, villa, palace ground or destination venue, thoughtful planning can turn the setting into an important part of your celebration.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan Your Outdoor Wedding With Surya Event</h2>
        <p>From selecting the right setting to developing a décor concept that works with it, every decision contributes to the final atmosphere.</p>
        <p>Explore your wedding possibilities with Surya Event and create a celebration that feels connected to its location. <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Learn more about Surya Event</a> and our approach to crafting memorable moments.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Location. Your Atmosphere. Your Celebration.</h2>
        <p>Choose a setting that means something to you, then let the celebration grow around it.</p>
        <p>For wedding planning and event arrangements, reach out through the <a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact section</a>.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Let Surya Event help bring your destination or outdoor wedding vision to life seamlessly.</p>
      </article>
    ),
    category: "Decor & Styling",
    date: "October 7, 2026",
    readTime: "6 min read",
    author: "Surya Team",
    image: "https://plus.unsplash.com/premium_photo-1673569490592-fdbffc9b8f67?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 118,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Destination and outdoor wedding celebration decor"
  },
  {
    id: "beautiful-wedding-within-budget",
    title: "How to Plan a Beautiful Wedding Within Your Budget",
    excerpt: "A memorable wedding does not have to depend on an unlimited budget. Discover how to plan thoughtfully and create the biggest visual impact.",
    fullContent: (
      <article className="space-y-4">
        <p>A memorable wedding does not have to depend on an unlimited budget. What matters more is knowing where to spend, what deserves attention and which details can create the biggest visual impact.</p>
        <p>With a little planning, even a carefully controlled budget can be turned into a celebration that feels personal, polished and thoughtfully designed.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Know Your Spending Limit First</h2>
        <p>Before exploring décor ideas or venues, decide how much you are comfortable spending on the complete celebration.</p>
        <p>Once you have a clear figure, divide it according to your priorities. This prevents one part of the wedding from taking up too much of the available budget.</p>
        <p>A simple approach is to separate essential arrangements from optional additions.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Decide What Deserves More Attention</h2>
        <p>Not every wedding needs the same things.</p>
        <p>For some couples, the venue may be the biggest priority. Others may want to focus more on décor, photography, food or guest comfort.</p>
        <p>Make a list of the elements that are most important to you and allocate your budget accordingly.</p>
        <p>This gives your celebration a more intentional feel instead of adding different elements simply because they are available.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Choose the Venue According to the Celebration</h2>
        <p>Your venue should match both your guest requirements and your overall spending plan.</p>
        <p>Depending on the type of wedding you have in mind, options can include:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Destination Wedding</li>
          <li>5-Star Hotel</li>
          <li>3-Star Hotel</li>
          <li>Convention Hall</li>
          <li>Palace Grounds</li>
          <li>Bungalow Wedding</li>
          <li>Resort Wedding</li>
          <li>Garden and Water Pond Wedding</li>
          <li>Villa Wedding</li>
        </ul>
        <p>The right venue can also reduce the need for excessive decoration because the existing surroundings may already provide a strong visual backdrop. Explore our review of the <a href="#blog-best-wedding-venues-dream-wedding" className="text-[#D4AF37] no-underline hover:text-white transition-colors">best wedding venues and ideas</a> for practical comparisons.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make the Venue Work for You</h2>
        <p>Instead of decorating every possible area, identify the places where guests will spend the most time.</p>
        <p>These may include:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Entrance</li>
          <li>Main stage</li>
          <li>Guest seating</li>
          <li>Dining area</li>
          <li>Photography spot</li>
          <li>Main pathways</li>
          <li>Important lighting points</li>
        </ul>
        <p>Concentrating your décor in these areas can create a stronger overall impression without unnecessarily spreading the budget across the entire venue.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Think in Terms of Visual Impact</h2>
        <p>A few carefully planned elements can sometimes create more impact than a large number of unrelated decorations.</p>
        <p>For example, a well-designed entrance can immediately establish the mood. You can <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">view our gallery</a> to see how specific setups completely transform a space. A thoughtfully decorated stage can become the main visual focus. Proper lighting can completely change how the venue appears after sunset.</p>
        <p>This is where planning becomes more valuable than simply adding more décor.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Find a Décor Style That Fits Your Budget</h2>
        <p>Start by deciding the mood you want to create.</p>
        <p>It could be:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Elegant and sophisticated</li>
          <li>Colourful and festive</li>
          <li>Traditional and graceful</li>
          <li>Modern and minimal</li>
          <li>Natural and floral</li>
        </ul>
        <p>From there, select flowers, fabrics, furniture, lighting and decorative elements that support the same direction. For thematic inspiration, check out our guide on <a href="#blog-wedding-decor-ideas" className="text-[#D4AF37] no-underline hover:text-white transition-colors">creative wedding décor ideas</a>.</p>
        <p>Wedding décor options are available starting from ₹1.25 lakhs, with the final setup depending on the scale and requirements. To understand what packages we offer, check our <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services section</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Give Each Function Its Own Character</h2>
        <p>You don't need an entirely new setup for every function. Small changes can create a completely different atmosphere.</p>
        <p><strong>Haldi:</strong> Bright colours, flowers and playful decorative elements can create an energetic setting.</p>
        <p><strong>Mehendi:</strong> Comfortable seating, colourful accents and artistic backgrounds can give the celebration a relaxed feel.</p>
        <p><strong>Wedding Ceremony:</strong> A more elegant arrangement with coordinated flowers, stage décor and lighting can suit the traditional importance of the occasion.</p>
        <p><strong>Reception:</strong> A refined stage, balanced lighting and coordinated decorative details can create a polished evening atmosphere.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Use What Your Venue Already Offers</h2>
        <p>A garden, architectural feature, water area, open lawn or attractive entrance can become part of the wedding design.</p>
        <p>Rather than covering every natural or architectural element, work around it.</p>
        <p>This can make the setup feel more natural while also reducing unnecessary decoration.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Lighting Is More Than Decoration</h2>
        <p>Lighting affects the entire mood of an event.</p>
        <p>Warm lighting can create an intimate atmosphere, while focused lighting can highlight the stage, entrance or important architectural details.</p>
        <p>For outdoor celebrations especially, lighting also helps define different spaces after sunset.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Keep the Design Connected</h2>
        <p>A wedding can have different functions without looking completely disconnected.</p>
        <p>Choose a few recurring elements such as a colour family, floral style, fabric texture or lighting approach. Then adapt those elements according to each function.</p>
        <p>This creates a sense of continuity without making every setup identical.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Avoid Last-Minute Spending</h2>
        <p>Last-minute decisions often happen when important requirements have not been discussed early.</p>
        <p>Finalize major requirements beforehand and leave some room in the budget for unexpected expenses. Aligning your milestones with a structured <a href="#blog-wedding-planning-timeline" className="text-[#D4AF37] no-underline hover:text-white transition-colors">wedding planning timeline</a> prevents costly rush arrangements.</p>
        <p>A little flexibility can help you handle changes without disturbing the complete wedding plan.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">A Thoughtful Wedding Doesn't Need Excess</h2>
        <p>A beautiful celebration is not about filling every corner with decoration.</p>
        <p>It is about knowing which details matter and placing them where they can be appreciated.</p>
        <p>With the right planning, your budget can support a wedding that feels complete without becoming unnecessarily complicated.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan a Celebration That Feels Like Yours</h2>
        <p>Your wedding should reflect your priorities, your style and the kind of experience you want your guests to remember.</p>
        <p>Surya Event can help bring those ideas together through venue planning, décor concepts and event arrangements. To see how we work closely with couples, read <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">more about us</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Budget. Your Priorities. Your Wedding.</h2>
        <p>Start with what matters most, build around it and let every detail have a purpose.</p>
        <p>For wedding planning and event arrangements, connect with Surya Event through the <a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact section</a>.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Let Surya Event help you create a stunning celebration without compromising on the experience.</p>
      </article>
    ),
    category: "Decor & Styling",
    date: "October 6, 2026",
    readTime: "6 min read",
    author: "Surya Team",
    image: "https://plus.unsplash.com/premium_photo-1673626579377-8dfda319246b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 105,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Beautiful wedding planned within budget"
  },
  {
    id: "wedding-planning-timeline",
    title: "Complete Wedding Planning Timeline: What to Plan Before Your Big Day",
    excerpt: "A simple timeline can make the entire process much easier. Instead of handling everything at the last moment, couples can work through each part of the celebration in a planned sequence.",
    fullContent: (
      <article className="space-y-4">
        <p>A wedding is made up of hundreds of small decisions, and when all of them come together at the same time, preparation can quickly become confusing. From deciding the functions to selecting a venue, arranging décor and making sure guests have a comfortable experience, every stage needs the right amount of attention.</p>
        <p>A simple timeline can make the entire process much easier. Instead of handling everything at the last moment, couples can work through each part of the celebration in a planned sequence.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Begin With the Bigger Picture</h2>
        <p>Before booking anything, take some time to understand what you want your wedding to feel like.</p>
        <p>Do you imagine a traditional celebration, a modern gathering, a destination-style event, or an intimate family occasion?</p>
        <p>Your answer will influence almost every decision that follows. For contemporary ideas and guest experiences, take a look at the <a href="#blog-2026-wedding-trends-memorable" className="text-[#D4AF37] no-underline hover:text-white transition-colors">2026 wedding trends making celebrations memorable</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Build Your Guest List Early</h2>
        <p>The number of guests has a direct impact on your venue and event arrangements.</p>
        <p>Create an initial guest list and divide it into categories such as:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Close family</li>
          <li>Relatives</li>
          <li>Friends</li>
          <li>Colleagues</li>
          <li>Special guests</li>
        </ul>
        <p>You don't need a final number immediately, but having an estimated count will make later decisions much easier.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Map Out Your Wedding Functions</h2>
        <p>A wedding may include several celebrations, and each one can have its own character.</p>
        <p>Depending on your plans, the schedule may include:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Haldi</li>
          <li>Mehendi</li>
          <li>Wedding Ceremony</li>
          <li>Reception</li>
        </ul>
        <p>Thinking about each function separately helps you plan its timing, setting and visual style without making the entire celebration look the same.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Select a Setting That Fits Your Celebration</h2>
        <p>The venue is one of the earliest major decisions because it determines the space available for guests, décor, photography and other arrangements.</p>
        <p>Possible choices include:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Destination Wedding</li>
          <li>5-Star Hotel</li>
          <li>3-Star Hotel</li>
          <li>Convention Hall</li>
          <li>Palace Grounds</li>
          <li>Bungalow Wedding</li>
          <li>Resort Wedding</li>
          <li>Garden and Water Pond Wedding</li>
          <li>Villa Wedding</li>
        </ul>
        <p>Consider the guest count, accessibility, atmosphere and type of celebration. If you're drawn to scenic outdoor lawns or resort properties, read our dedicated guide on <a href="#blog-destination-outdoor-weddings-setting" className="text-[#D4AF37] no-underline hover:text-white transition-colors">destination and outdoor wedding styling</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Divide the Budget Into Clear Categories</h2>
        <p>Rather than looking at the wedding budget as one large amount, divide it into practical sections.</p>
        <p>For example:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Venue</li>
          <li>Décor</li>
          <li>Food</li>
          <li>Guest arrangements</li>
          <li>Photography</li>
          <li>Entertainment</li>
          <li>Transportation</li>
          <li>Accommodation</li>
        </ul>
        <p>For actionable tips on optimizing spend across each category, explore our advice on <a href="#blog-beautiful-wedding-within-budget" className="text-[#D4AF37] no-underline hover:text-white transition-colors">how to plan a beautiful wedding within your budget</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Give Your Décor a Clear Direction</h2>
        <p>Décor becomes much easier to plan when you have a defined visual direction.</p>
        <p>You could choose a floral setting, a traditional arrangement, a contemporary look, a minimal setup or something inspired by the surroundings. To see examples of stunning setups, <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">check out our previous event gallery</a>.</p>
        <p>Wedding décor packages can be planned from ₹1.25 lakhs, depending on the scale and requirements of the celebration. You can explore all our offerings in our <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services section</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make Every Function Feel Different</h2>
        <p>One of the easiest ways to add personality to a wedding is to give every function its own visual identity.</p>
        <p><strong>Haldi:</strong> Think bright colours, playful elements, fresh flowers and an informal environment where everyone can enjoy themselves.</p>
        <p><strong>Mehendi:</strong> A relaxed setup with colourful details, comfortable seating and creative backgrounds can make the occasion feel warm and inviting.</p>
        <p><strong>Wedding Ceremony:</strong> This is where elegant floral arrangements, a thoughtfully designed stage and suitable lighting can create a more traditional and graceful atmosphere.</p>
        <p><strong>Reception:</strong> The reception can take on a more polished appearance with a statement stage, coordinated décor and carefully placed lighting.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Don't Forget the Guest Experience</h2>
        <p>A beautiful setup is only one part of a successful celebration.</p>
        <p>Guests should also be able to move around comfortably, find their seating easily and enjoy the dining and event areas without unnecessary confusion.</p>
        <p>Small details such as seating arrangements, pathways and designated areas can make a noticeable difference.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Leave Space for Memorable Moments</h2>
        <p>Think beyond the main stage.</p>
        <p>A wedding can include smaller areas for photographs, family interactions and candid moments. A well-planned corner can become one of the most memorable parts of the celebration.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Finalize the Event Flow</h2>
        <p>Once the major arrangements are confirmed, create a clear sequence for the day.</p>
        <p>Note down:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Function timings</li>
          <li>Guest arrival</li>
          <li>Décor setup</li>
          <li>Photography schedule</li>
          <li>Food and dining timings</li>
          <li>Stage activities</li>
          <li>Special ceremonies</li>
          <li>Closing arrangements</li>
        </ul>
        <p>Having this information organized beforehand reduces last-minute confusion.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Complete a Final Preparation Check</h2>
        <p>Before the wedding week begins, review all important arrangements.</p>
        <p>Check:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Venue readiness</li>
          <li>Décor requirements</li>
          <li>Seating plan</li>
          <li>Guest arrangements</li>
          <li>Dining setup</li>
          <li>Lighting</li>
          <li>Photography areas</li>
          <li>Accommodation</li>
          <li>Function schedule</li>
        </ul>
        <p>This final review gives you an opportunity to identify missing details while there is still time to fix them.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Why a Timeline Makes a Difference</h2>
        <p>Wedding planning becomes less stressful when decisions are made in the right order.</p>
        <p>Instead of trying to solve everything together, you can first decide the vision, then the guest list, venue, budget, décor and event flow. Each decision naturally supports the next one.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Bring Your Wedding Plans Together</h2>
        <p>Every couple has a different idea of what their celebration should look and feel like. The goal is not simply to arrange a venue, but to create an experience that feels connected from beginning to end.</p>
        <p>Explore the possibilities with Surya Event and start shaping your celebration around your own ideas. You can <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">learn more about our story</a> and how we handle every single detail.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Wedding. Your Timeline. Your Celebration.</h2>
        <p>A well-planned wedding gives you more time to enjoy the moments that actually matter.</p>
        <p>For wedding planning and event arrangements, get in touch with Surya Event through the <a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact section</a>.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Let Surya Event guide you through a stress-free planning timeline and turn your vision into reality.</p>
      </article>
    ),
    category: "Behind The Scenes",
    date: "October 5, 2026",
    readTime: "7 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 118,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Wedding planning timeline and checklist"
  },
  {
    id: "2026-wedding-trends-memorable",
    title: "2026 Wedding Trends That Can Make Your Celebration More Memorable",
    excerpt: "Couples today are focusing more on creating an experience that feels personal, comfortable, and memorable for everyone.",
    fullContent: (
      <article className="space-y-4">
        <p>Weddings are changing. Couples today are looking beyond traditional decorations and large celebrations and are focusing more on creating an experience that feels personal, comfortable, and memorable for everyone.</p>
        <p>From personalized welcome experiences and creative food presentations to interactive entertainment and beautiful photo moments, small details can make a big difference in how guests remember your wedding.</p>
        <p>At <strong>Surya Event</strong>, we believe that a memorable wedding is not only about how the venue looks. It is also about how the celebration feels from the moment guests arrive until the final function ends. <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Know more about Surya Event</a> and discover our approach to creating memorable event experiences.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make Your Wedding About the Guest Experience</h2>
        <p>Your guests are an important part of your wedding celebration. While beautiful décor creates the visual atmosphere, thoughtful planning can make guests feel more comfortable and involved throughout the event.</p>
        <p>Think about what your guests experience when they arrive, where they sit, how they move around the venue, what they eat, how they enjoy the entertainment, and what they remember after the celebration.</p>
        <p>A wedding becomes more memorable when these small experiences are planned along with the main décor and arrangements. To see how dedicated management elevates the entire celebration, explore <a href="#blog-why-choose-surya-event" className="text-[#D4AF37] no-underline hover:text-white transition-colors">why couples choose Surya Event</a> for their big day.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create a Warm Welcome for Your Guests</h2>
        <p>The wedding experience begins as soon as your guests arrive.</p>
        <p>A beautifully designed entrance, welcome signage, floral arrangements, traditional welcome elements, or a simple personalized greeting can immediately create a positive atmosphere.</p>
        <p>You can also create a dedicated welcome area where guests can receive information about the event schedule, seating arrangements, accommodation, or other important details.</p>
        <p>The goal is simple — make your guests feel welcomed from the very beginning.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Personalization Is Becoming More Important</h2>
        <p>Instead of following exactly the same wedding design seen everywhere, couples are increasingly looking for ways to add their own personality to the celebration.</p>
        <p>Personalization can be added through colours, signage, photographs, seating areas, wedding stationery, stage details, table settings, and other decorative elements.</p>
        <p>You can also include meaningful details from your relationship or family traditions. These small touches can make the celebration feel more connected to your story.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create Interactive Guest Experiences</h2>
        <p>A wedding does not have to be limited to guests sitting and watching the functions.</p>
        <p>Interactive experiences can encourage guests to participate and create memorable moments together.</p>
        <p>Some ideas include:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/80">
          <li>Interactive photo corners</li>
          <li>Guest message boards</li>
          <li>Personalized memory walls</li>
          <li>Fun family activities</li>
          <li>Interactive games</li>
          <li>Creative Mehendi and Haldi setups</li>
          <li>Personalized guest books</li>
        </ul>
        <p>These activities can be planned according to the age group, size of the gathering, and overall style of the wedding.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Give Your Food Presentation a Creative Touch</h2>
        <p>Food is already an important part of every wedding, but presentation can make the dining experience even more interesting.</p>
        <p>Instead of focusing only on the menu, think about how the food area looks and how guests experience it.</p>
        <p>Beautiful counters, organized food sections, attractive table settings, live food stations, dessert displays, and coordinated décor can make the dining area feel like an important part of the celebration.</p>
        <p>The dining setup should also be practical, allowing guests to move comfortably and access different food sections easily.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Use Lighting to Create Different Moods</h2>
        <p>Lighting can completely change the atmosphere of a wedding function.</p>
        <p>A daytime celebration may work well with natural light and soft decorative elements, while an evening function can use warm lighting, hanging lights, candles, or focused illumination to create a different mood.</p>
        <p>Lighting can also be used to highlight important areas such as the stage, entrance, dining section, pathways, photo zones, and architectural features.</p>
        <p>Instead of treating lighting as just decoration, it can become part of the overall wedding experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create Special Moments for Photography</h2>
        <p>Wedding photographs are more than just pictures of the ceremony. They capture the small moments that people remember long after the celebration is over.</p>
        <p>A beautifully planned photo corner can encourage guests to take pictures together. You can create a simple floral backdrop, personalized wall, decorative seating area, or a setup that matches your wedding theme.</p>
        <p>Natural surroundings can also become part of the photography experience. Gardens, water features, elegant architecture, decorated pathways, and beautifully lit areas can provide different backgrounds throughout the celebration. You can <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">browse our gallery</a> for visual inspiration from recent setups.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make Every Function Feel Different</h2>
        <p>If your wedding includes multiple functions, each event does not have to look exactly the same.</p>
        <p>You can create a different atmosphere for each function while keeping a common visual connection throughout the wedding.</p>
        <p><strong>Haldi</strong> can have a bright and cheerful atmosphere with colourful flowers and playful elements.</p>
        <p><strong>Mehendi</strong> can focus on relaxed seating, vibrant details, comfortable spaces, and creative décor.</p>
        <p><strong>The Wedding Ceremony</strong> can have a more traditional and elegant atmosphere with carefully planned stage décor and lighting.</p>
        <p><strong>The Reception</strong> can move towards a sophisticated look with elegant lighting, stylish décor, and a polished overall setup.</p>
        <p>This gives every function its own identity while keeping the complete wedding experience connected.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Entertainment Beyond Music and Dance</h2>
        <p>Music and dance are an important part of wedding celebrations, but entertainment can go beyond the traditional setup.</p>
        <p>Depending on your guests and wedding style, you can include interactive performances, family activities, games, photo experiences, or other forms of participation.</p>
        <p>The entertainment should complement the celebration rather than interrupt it. A well-planned schedule can give guests enough time to enjoy the food, conversations, functions, photography, and entertainment without making the event feel rushed.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create Comfortable Spaces for Guests</h2>
        <p>Not every guest wants to stand near the main stage throughout the celebration.</p>
        <p>Creating comfortable seating and lounge areas can give guests a place to relax, talk, and enjoy the event at their own pace.</p>
        <p>For larger celebrations, different seating zones can be planned around the venue. For smaller and intimate functions, comfortable furniture and thoughtfully arranged seating can make the environment feel more welcoming.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Small Details Can Make a Big Difference</h2>
        <p>Sometimes the smallest details become the things guests remember most.</p>
        <p>A personalized welcome sign, beautifully arranged table, family photographs, thoughtful guest information, creative lighting, customized seating, or a unique photo corner can add character to the celebration.</p>
        <p>Good event design is not always about adding more decoration. It is about choosing the right details and placing them where they create the most impact.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Consider More Sustainable Wedding Ideas</h2>
        <p>Couples can also think about how to make their celebrations more thoughtful when planning décor and other event elements.</p>
        <p>Natural flowers and greenery can be incorporated into the design, reusable decorative elements can be considered where practical, and unnecessary decoration can be avoided.</p>
        <p>The idea is not to remove the beauty from the celebration but to plan the décor thoughtfully and use the venue and its natural surroundings effectively.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Décor That Matches Your Experience</h2>
        <p>The décor should support the kind of experience you want your guests to have.</p>
        <p>A grand celebration may require larger stage elements and impressive entrance décor, while an intimate event may benefit more from comfortable seating, warm lighting, personalized details, and smaller decorative installations.</p>
        <p>For creative themes and styling inspirations that transform venues, read our guide on <a href="#blog-wedding-decor-ideas" className="text-[#D4AF37] no-underline hover:text-white transition-colors">wedding décor ideas</a>.</p>
        <p>At <strong>Surya Event, décor starts from ₹1.25 lakhs</strong>, allowing couples to plan their wedding setup according to their requirements, venue, functions, and preferred style. You can view our customized packages in the <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services section</a>.</p>
        <p>From stage and entrance décor to lighting, flowers, seating, and decorative details, the setup can be planned around the overall wedding experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan Your Wedding Around Your Story</h2>
        <p>Wedding trends can give you ideas, but your celebration does not have to follow every trend.</p>
        <p>The most meaningful weddings are often the ones that include details connected to the couple and their families.</p>
        <p>Your favourite colours, important family traditions, memorable photographs, personal preferences, and the atmosphere you want to create can all become part of the wedding design.</p>
        <p>Whether you prefer something grand, elegant, traditional, modern, colourful, or intimate, the celebration can be planned around your own story.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Think About What Guests Will Remember</h2>
        <p>After the wedding is over, guests may not remember every individual decoration or every small arrangement.</p>
        <p>They are more likely to remember how the celebration felt — the welcome, the food, the atmosphere, the entertainment, the people they spent time with, and the special moments they experienced.</p>
        <p>That is why wedding planning should focus not only on creating beautiful visuals but also on creating a comfortable and enjoyable experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan the Experience, Not Just the Event</h2>
        <p>A successful wedding brings many different elements together.</p>
        <p>The décor creates the visual identity. Lighting creates the atmosphere. Food creates part of the guest experience. Entertainment brings people together. Photography captures the memories. And thoughtful planning connects everything.</p>
        <p>When these elements work together, the wedding feels more natural, organized, and personal. Follow our <a href="#blog-wedding-planning-timeline" className="text-[#D4AF37] no-underline hover:text-white transition-colors">wedding planning timeline</a> to structure every preparation milestone effortlessly.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Know More About Surya Event</h2>
        <p>Every wedding starts with an idea, but turning that idea into a complete celebration requires planning and coordination.</p>
        <p>At <strong>Surya Event</strong>, we focus on understanding the celebration you want to create and planning the décor and event experience around your requirements.</p>
        <p><a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Learn More About Surya Event</a> and discover more about our approach to wedding planning and event décor.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create a Celebration Your Guests Will Remember</h2>
        <p>Your wedding does not have to follow a fixed formula.</p>
        <p>Focus on the moments you want your guests to experience, the atmosphere you want to create, and the personal details that make the celebration meaningful to you and your family.</p>
        <p>From the first welcome to the final goodbye, every part of the celebration can become an opportunity to create a beautiful memory.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Wedding. Your Experience. Your Story.</h2>
        <p>A memorable wedding is not only about how beautiful it looks. It is about how special it feels.</p>
        <p>Ready to discuss your wedding ideas, décor, guest experience, or event requirements?</p>
        <p><strong><a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact Surya Event</a></strong> and start planning a celebration designed around your vision.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Let Surya Event help you create a wedding experience that you and your guests will remember for years to come.</p>
      </article>
    ),
    category: "Wedding Trends",
    date: "September 28, 2026",
    readTime: "6 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1744891471118-f74c0453cd21?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 109,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Memorable 2026 Wedding Trends"
  },
  {
    id: "why-choose-surya-event",
    title: "Why Choose Surya Event for Your Dream Wedding?",
    excerpt: "Discover why Surya Event is the perfect partner for planning your special celebration.",
    fullContent: (
      <article className="space-y-4">
        <p>Planning a wedding is one of the most exciting experiences in life, but it also comes with many decisions. From selecting the right venue and décor to managing guests, functions, and arrangements, every detail needs proper planning.</p>
        <p>Your wedding should be more than just a beautifully decorated venue. It should be a celebration that reflects your personality, your family, and your story.</p>
        <p>At Surya Event, we focus on creating wedding experiences that bring together the right venue, creative décor, thoughtful planning, and beautiful execution. <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Learn more about our background and philosophy</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Why Choose Surya Event?</h2>
        <p>Every wedding is different, and that is why we believe wedding planning should not follow a one-size-fits-all approach.</p>
        <p>Here are some reasons why couples can consider Surya Event for their special celebration.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">1. Wedding Planning Around Your Vision</h2>
        <p>Your wedding should be designed around what you want.</p>
        <p>Whether you are planning a traditional ceremony, a modern celebration, an intimate family gathering, or a grand event, we focus on understanding your requirements before planning the setup.</p>
        <p>Your preferred colours, décor style, venue, guest list, and functions can all be considered while creating the overall wedding experience.</p>
        <p>Your wedding should reflect your vision — not someone else's.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">2. Multiple Wedding Venue Options</h2>
        <p>Finding the right venue is one of the biggest parts of wedding planning.</p>
        <p>Depending on your requirements, you can explore options such as:</p>
        <p>Destination Wedding<br />5-Star Hotels<br />3-Star Hotels<br />Convention Halls<br />Palace Grounds<br />Bungalow Wedding<br />Resort Wedding<br />Garden and Water Pond Weddings<br />Villa Wedding</p>
        <p>Each venue type offers a different experience.</p>
        <p>A luxury hotel can provide a sophisticated environment, while a resort can combine accommodation and celebrations. Palace grounds can offer a royal atmosphere, whereas a villa or bungalow can be ideal for a more private gathering.</p>
        <p>The goal is to find a venue that suits your guest list, wedding style, and overall requirements. If you're exploring options, read our comprehensive advice on <a href="#blog-choose-perfect-wedding-venue" className="text-[#D4AF37] no-underline hover:text-white transition-colors">how to choose the perfect wedding venue</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">3. Creative Wedding Décor</h2>
        <p>The right décor can completely transform a venue.</p>
        <p>From the entrance and stage to flowers, lighting, seating, backdrops, and decorative elements, every detail contributes to the overall appearance of your wedding.</p>
        <p>At Surya Event, décor can be planned according to the theme and atmosphere you want.</p>
        <p>Whether you prefer elegant, traditional, modern, colourful, romantic, or royal décor, the setup can be customized around your celebration. Take a look at our <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">event gallery</a> to see these concepts brought to life.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">4. Décor Starting From ₹1.25 Lakhs</h2>
        <p>Wedding décor is an important part of your celebration, but it should also be planned according to your budget.</p>
        <p>At Surya Event, <strong>décor starts from ₹1.25 lakhs</strong>.</p>
        <p>The décor requirements can be planned based on your venue, number of functions, preferred theme, guest requirements, and design preferences.</p>
        <p>From a beautifully designed stage to attractive entrance décor and lighting, the focus is on creating a setup that complements your celebration. For smart budgeting tips, check out our guide on <a href="#blog-beautiful-wedding-within-budget" className="text-[#D4AF37] no-underline hover:text-white transition-colors">planning a beautiful wedding within your budget</a>, or explore our full package options in our <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services section</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">5. Décor for Every Wedding Function</h2>
        <p>A wedding usually includes more than one function, and each event can have its own atmosphere.</p>
        <p>For example:</p>
        <p><strong>Haldi:</strong> Bright colours, flowers, playful elements, and comfortable seating can create a cheerful Haldi setup.</p>
        <p><strong>Mehendi:</strong> A colourful and relaxed environment with beautiful seating, floral décor, and creative backdrops can make the Mehendi function more enjoyable.</p>
        <p><strong>Wedding Ceremony:</strong> Traditional elements, elegant flowers, beautiful lighting, and a customized stage can create a memorable ceremony setup.</p>
        <p><strong>Reception:</strong> For the reception, you can choose a more sophisticated look with elegant lighting, a stylish stage, and coordinated décor.</p>
        <p>Planning different décor concepts for different functions can make your complete wedding experience more exciting.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">6. Venue Styling That Matches Your Celebration</h2>
        <p>Every venue has its own character.</p>
        <p>A Palace Grounds may require a different décor approach compared with a garden, hotel, resort, or villa.</p>
        <p>Instead of simply adding decorations, venue styling should work with the existing architecture and surroundings.</p>
        <p>For outdoor celebrations, natural greenery and water features can become part of the décor. For hotel weddings, the existing interiors can be enhanced with flowers, lighting, stage décor, and personalized elements.</p>
        <p>The result should feel balanced and visually connected.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">7. Options for Intimate and Grand Weddings</h2>
        <p>Not every couple wants the same kind of wedding.</p>
        <p>Some families prefer a large celebration with hundreds of guests, while others want a private event with only close family and friends.</p>
        <p>A Bungalow Wedding or Villa Wedding can work well for intimate celebrations.</p>
        <p>For larger events, Convention Halls, 5-star hotels, resorts, or Palace Grounds can provide the space required for a bigger guest list.</p>
        <p>The important thing is to choose an option that matches your celebration.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">8. Focus on Guest Experience</h2>
        <p>A wedding is also about your guests.</p>
        <p>From the venue layout and seating arrangement to dining areas, accommodation, accessibility, and overall flow, these details can influence how comfortable your guests feel.</p>
        <p>A well-planned venue allows guests to move easily between different areas while enjoying the celebrations. Discover more about creating engaging celebrations in our feature on <a href="#blog-2026-wedding-trends-memorable" className="text-[#D4AF37] no-underline hover:text-white transition-colors">2026 wedding trends</a>.</p>
        <p>This becomes particularly important for destination and multi-day weddings where guests may spend more time at the venue.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">9. Attention to the Details</h2>
        <p>Sometimes the smallest details can make the biggest difference.</p>
        <p>A beautifully designed entrance, personalized signage, coordinated seating, carefully selected flowers, attractive lighting, and a well-planned photo area can make your wedding feel more complete.</p>
        <p>Good wedding décor is not simply about adding more decorations. It is about choosing the right elements and placing them thoughtfully.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">10. A Celebration That Feels Personal</h2>
        <p>Your wedding should have elements that represent you.</p>
        <p>Maybe you prefer traditional décor. Maybe you love modern designs. Maybe you want a royal celebration or a simple outdoor ceremony.</p>
        <p>Whatever your preference, the décor and venue can be planned around your personality and the kind of atmosphere you want to create.</p>
        <p>At Surya Event, the focus is on turning your ideas into a celebration that feels personal and memorable.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Why Planning Matters</h2>
        <p>Even a beautiful venue can lose its charm without proper planning.</p>
        <p>Before finalizing your wedding setup, consider:</p>
        <p>Number of guests<br />Wedding functions<br />Venue size<br />Décor requirements<br />Seating arrangements<br />Lighting<br />Dining areas<br />Photography spaces<br />Guest accommodation<br />Overall budget</p>
        <p>Planning these details in advance can help create a smoother wedding experience. Refer to our <a href="#blog-wedding-planning-timeline" className="text-[#D4AF37] no-underline hover:text-white transition-colors">complete wedding planning timeline</a> to stay organized from day one.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">From Venue Selection to Décor</h2>
        <p>Choosing a wedding venue is only the beginning.</p>
        <p>Once the venue is selected, décor, seating, lighting, stage design, entrance styling, and other arrangements need to work together.</p>
        <p>This is where having an organized approach can make the planning process easier.</p>
        <p>Whether you are planning a Destination Wedding, a 5-star hotel celebration, a 3-star hotel wedding, a Convention Hall event, a royal Palace Grounds celebration, a Bungalow Wedding, a Resort Wedding, a Garden or Water Pond Wedding, or a private Villa Wedding, every element can be planned around your wedding vision.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Know More About Surya Event</h2>
        <p>Every wedding begins with an idea.</p>
        <p>At Surya Event, we work towards turning that idea into a complete celebration through venue planning, décor, styling, and thoughtful execution.</p>
        <p><a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Learn more about Surya Event</a> and understand more about our approach and services.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Start Planning Your Dream Wedding</h2>
        <p>Your wedding day deserves careful planning, creative ideas, and attention to every important detail.</p>
        <p>The right venue gives you the space. The right décor creates the atmosphere. And the right planning brings everything together.</p>
        <p>With décor starting from ₹1.25 lakhs and multiple venue possibilities, Surya Event can help you explore options that match your wedding requirements.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Wedding. Your Vision. Your Celebration.</h2>
        <p>Whether you are dreaming of a grand destination celebration, a royal palace wedding, a luxury hotel event, a beautiful resort wedding, or an intimate villa celebration, your wedding should feel uniquely yours.</p>
        <p>Ready to discuss your wedding plans?</p>
        <p><a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact Surya Event</a> to discuss your venue, décor, wedding functions, and celebration requirements.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Let Surya Event help you turn your wedding vision into a memorable celebration.</p>
      </article>
    ),
    category: "Behind The Scenes",
    date: "September 27, 2026",
    readTime: "7 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1707374661682-d804856cee22?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 145,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Beautiful wedding celebration venue"
  },
  {
    id: "wedding-decor-ideas",
    title: "Wedding Décor Ideas to Transform Your Venue Into a Dream Celebration",
    excerpt: "Discover creative styling ideas and themes to transform any wedding venue into a memorable celebration.",
    fullContent: (
      <article className="space-y-4">
        <p>A beautiful wedding is not only about choosing the right venue. It is also about transforming that venue into a space that reflects your personality, your celebration, and your story.</p>
        <p>The same venue can look completely different with the right combination of flowers, lighting, furniture, stage design, entrance décor, and decorative details.</p>
        <p>Whether you are planning a grand Destination Wedding, an elegant hotel celebration, a royal wedding at Palace Grounds, or an intimate Villa Wedding, thoughtful venue styling can make your special day truly unforgettable.</p>
        <p>At Surya Event, we believe that décor should not simply fill a space. It should create an atmosphere where every celebration feels special. <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Learn more about Surya Event</a> and discover our approach to creating memorable wedding experiences.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Start With a Wedding Décor Theme</h2>
        <p>Before choosing flowers or designing your stage, decide what kind of atmosphere you want for your wedding.</p>
        <p>Your décor theme could be:</p>
        <p>Elegant and luxurious<br />Traditional and royal<br />Modern and minimal<br />Floral and romantic<br />Classic and sophisticated<br />Colourful and festive<br />Natural and outdoor-inspired</p>
        <p>Once the theme is decided, other elements such as colours, flowers, lighting, furniture, stage design, and entrance décor can be planned around it.</p>
        <p>A consistent theme helps every part of the venue feel connected.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make Your Destination Wedding More Memorable</h2>
        <p>A Destination Wedding gives you the opportunity to create a complete visual experience for your guests.</p>
        <p>You can give every function its own décor concept while maintaining a common wedding style.</p>
        <p>For example, a Mehendi function can feature colourful floral arrangements and comfortable seating, while the wedding ceremony can have elegant traditional décor. An evening reception can then use sophisticated lighting and a grand stage.</p>
        <p>When the venue, décor, and functions are planned together, the entire destination wedding can feel more organized and visually beautiful. Discover how to harmonize location and styling in our complete guide to <a href="#blog-destination-outdoor-weddings-setting" className="text-[#D4AF37] no-underline hover:text-white transition-colors">destination and outdoor weddings</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Elegant Styling for 5-Star Hotels</h2>
        <p>A 5-star hotel already provides a luxurious environment, but customized décor can make the celebration feel even more personal.</p>
        <p>Large floral installations, premium stage backdrops, chandeliers, elegant table settings, coordinated seating, and warm lighting can enhance the overall appearance.</p>
        <p>For a luxury wedding, it is important not to overcrowd the venue. The décor should complement the architecture and existing features of the hotel.</p>
        <p>The goal is to create an elegant environment where every decorative element has a purpose.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Creative Décor for 3-Star Hotels</h2>
        <p>A beautiful wedding setup does not depend only on the venue category.</p>
        <p>With creative planning, 3-star hotels can also be transformed into attractive wedding venues.</p>
        <p>You can focus on the areas that guests notice most — the entrance, stage, dining area, photo zone, and seating arrangement.</p>
        <p>Using the right combination of flowers, fabric, lighting, and backdrop design can create a polished look without making the venue feel overcrowded.</p>
        <p>Smart venue styling allows you to create an attractive celebration while keeping your requirements practical.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Transform Convention Halls With Smart Styling</h2>
        <p>Convention Halls offer plenty of space, which gives you more opportunities for creative décor.</p>
        <p>However, a large space can sometimes feel empty if it is not styled properly.</p>
        <p>You can divide the venue into different sections such as:</p>
        <p>Grand entrance<br />Welcome area<br />Main stage<br />Dining section<br />Guest seating<br />Photo booth<br />Entertainment area</p>
        <p>Lighting and ceiling décor can also help bring the entire space together.</p>
        <p>The key is to create a balanced layout where the venue feels grand without looking unnecessarily crowded.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create a Royal Look at Palace Grounds</h2>
        <p>If your dream is a royal celebration, Palace Grounds can provide the perfect foundation.</p>
        <p>You can enhance the setting with traditional floral arrangements, elegant furniture, decorative pillars, warm lighting, chandeliers, and a grand stage.</p>
        <p>Rich textures and classic design elements can add to the royal atmosphere while keeping the décor sophisticated.</p>
        <p>A palace-style venue also provides excellent opportunities for wedding photography, especially when the décor complements the architecture instead of covering it.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make a Bungalow Wedding Feel Personal</h2>
        <p>A Bungalow Wedding gives you the freedom to create a more intimate and personalized environment.</p>
        <p>Instead of decorating every corner, focus on the areas where your guests will spend the most time.</p>
        <p>A beautifully styled entrance, floral seating area, Mehendi setup, Haldi corner, and intimate dinner arrangement can completely transform the space.</p>
        <p>You can also use personalized signs, family photographs, customized backdrops, and small decorative details to make the celebration feel more personal.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Bring Resort Weddings to Life</h2>
        <p>A Resort Wedding gives you access to both indoor and outdoor spaces.</p>
        <p>This makes it possible to create different décor styles for different functions.</p>
        <p>For example, a daytime Mehendi can be styled with bright flowers and colourful seating, while an evening wedding can use warm lights, elegant floral décor, and a beautifully designed stage.</p>
        <p>Gardens, poolside areas, lawns, and banquet spaces can each become part of the wedding experience.</p>
        <p>The natural surroundings of a resort can also be used as a décor element instead of covering the entire venue with artificial decorations.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Use Nature for Garden and Water Pond Weddings</h2>
        <p>Outdoor venues can create some of the most beautiful wedding environments.</p>
        <p>For Garden and Water Pond Weddings, natural greenery and water features can become part of the overall décor.</p>
        <p>Soft fairy lights, floral pathways, wooden seating, elegant mandaps, floating floral elements, and subtle lighting can create a peaceful and romantic atmosphere. Visit our <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">gallery</a> to see real outdoor setups where nature and decor blend seamlessly.</p>
        <p>The key to outdoor décor is balance. Instead of hiding the natural surroundings, use décor to enhance them.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create an Intimate Villa Wedding Setup</h2>
        <p>A Villa Wedding is perfect for couples who want privacy and a more personal celebration.</p>
        <p>Since villas generally provide a smaller environment, you can focus on details that create warmth and character.</p>
        <p>A floral entrance, intimate stage, comfortable lounge seating, decorative lights, personalized signage, and small photo corners can make the venue feel welcoming.</p>
        <p>Villa décor works particularly well when the design matches the existing architecture and surroundings.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">The Importance of Wedding Entrance Décor</h2>
        <p>The entrance is often the first thing your guests see.</p>
        <p>That makes it one of the most important areas to style.</p>
        <p>Depending on your wedding theme, you can create an entrance using:</p>
        <p>Fresh flowers<br />Floral arches<br />Decorative panels<br />Traditional elements<br />Elegant lighting<br />Personalized signage<br />Drapes and fabric<br />Greenery</p>
        <p>A well-designed entrance immediately establishes the mood for the rest of the celebration. Explore how personalized entry zones fit into <a href="#blog-2026-wedding-trends-memorable" className="text-[#D4AF37] no-underline hover:text-white transition-colors">2026 wedding trends</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Design a Stage That Becomes the Centre of Attention</h2>
        <p>The wedding stage is one of the most photographed areas of the venue.</p>
        <p>Instead of simply placing a backdrop behind the couple, think about the entire stage composition.</p>
        <p>Flowers, lighting, seating, backdrop structures, fabrics, props, and decorative elements should work together.</p>
        <p>The stage should be visually attractive but also provide enough space for the couple, family members, ceremonies, and photography.</p>
        <p>A well-planned stage can become the visual centre of your entire wedding venue.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Lighting Can Completely Change the Venue</h2>
        <p>Never underestimate the importance of lighting in wedding décor.</p>
        <p>The same venue can look completely different during the day and at night.</p>
        <p>Warm lights can create a romantic atmosphere, while decorative hanging lights can add elegance. Focus lighting can highlight the stage, entrance, dining area, or important architectural elements.</p>
        <p>For outdoor weddings, carefully placed lighting can also make gardens, pathways, trees, and water features look beautiful after sunset.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Décor Starting From ₹1.25 Lakhs</h2>
        <p>Your wedding décor should match both your vision and your budget.</p>
        <p>At Surya Event, <strong>décor starts from ₹1.25 lakhs</strong>, allowing you to plan a beautiful setup according to your requirements.</p>
        <p>The décor package can be planned around the venue, wedding theme, number of functions, guest requirements, and preferred design style. Learn practical strategies for stunning setups within reach in our guide on <a href="#blog-beautiful-wedding-within-budget" className="text-[#D4AF37] no-underline hover:text-white transition-colors">planning your wedding within budget</a>, or check out our full range in the <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services section</a>.</p>
        <p>From entrance décor and stage design to flowers, lighting, seating, and decorative elements, every part of the setup can be considered as part of the overall wedding experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make Every Function Look Different</h2>
        <p>If your wedding includes multiple functions, you do not have to use exactly the same décor for every event.</p>
        <p>You can create a different atmosphere for each function while maintaining a common colour palette or design language.</p>
        <p>For example:</p>
        <p><strong>Haldi:</strong> Bright, colourful, floral, and playful.<br /><strong>Mehendi:</strong> Comfortable seating, colourful décor, and vibrant details.<br /><strong>Wedding Ceremony:</strong> Traditional, elegant, and sophisticated.<br /><strong>Reception:</strong> Modern, luxurious, and elegant.</p>
        <p>This approach makes every function feel unique while keeping the overall wedding visually connected.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Choose Décor That Matches Your Venue</h2>
        <p>One of the biggest mistakes in wedding décor is selecting a design without considering the venue.</p>
        <p>A grand palace may require a different styling approach compared with a villa or garden.</p>
        <p>Before finalizing the décor, consider the venue's architecture, size, natural surroundings, ceiling height, lighting conditions, and available spaces. Explore how venue architecture shapes design possibilities in our <a href="#blog-choose-perfect-wedding-venue" className="text-[#D4AF37] no-underline hover:text-white transition-colors">venue selection guide</a>.</p>
        <p>The best décor design is one that works with the venue rather than trying to completely hide it.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Wedding Décor Should Tell Your Story</h2>
        <p>Your wedding décor is an opportunity to express who you are.</p>
        <p>Your favourite colours, flowers, cultural traditions, family memories, and personal style can all become part of the design.</p>
        <p>Whether you prefer a grand Destination Wedding, a luxury 5-star hotel, a comfortable 3-star hotel, a spacious Convention Hall, a royal Palace Grounds celebration, a private Bungalow Wedding, a beautiful Resort Wedding, a natural Garden or Water Pond Wedding, or an intimate Villa Wedding, the décor can be customized around your story.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Turn Your Venue Into Your Dream Wedding</h2>
        <p>Choosing a venue gives you the space. Décor gives that space its personality.</p>
        <p>With the right combination of colours, flowers, lighting, furniture, stage design, and creative details, your wedding venue can become more than just a location. It can become the backdrop for memories that you and your family will cherish for years.</p>
        <p>At Surya Event, we focus on bringing your ideas together and creating a wedding environment that feels beautiful, organized, and personal.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Venue. Your Décor. Your Story.</h2>
        <p>Your wedding does not have to look like anyone else's.</p>
        <p>Choose a venue that fits your celebration, create décor that reflects your personality, and plan every detail around the moments that matter most.</p>
        <p>Ready to discuss your wedding décor and venue requirements?</p>
        <p><a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact Surya Event</a> and start planning a wedding setup designed around your vision.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Let Surya Event turn your wedding venue into a celebration worth remembering.</p>
      </article>
    ),
    category: "Decor & Styling",
    date: "September 26, 2026",
    readTime: "6 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1657816925116-9bbb2a45fb6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 158,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Elegant wedding stage and decor setup"
  },
  {
    id: "choose-perfect-wedding-venue",
    title: "How to Choose the Perfect Wedding Venue for Your Big Day",
    excerpt: "Learn how to select the ideal wedding venue based on your guest list, theme, and budget.",
    fullContent: (
      <article className="space-y-4">
        <p>Planning a wedding is an exciting journey filled with beautiful ideas, family celebrations, and unforgettable moments. But before you decide on flowers, outfits, food, or entertainment, one of the most important decisions is choosing the right wedding venue.</p>
        <p>The venue sets the foundation for your entire celebration. It influences the décor, guest experience, photography, functions, and even the overall mood of your wedding.</p>
        <p>At Surya Event, we understand that every couple has a different vision for their special day. Whether you are planning a grand celebration or an intimate family function, the right venue can make your wedding experience even more memorable. <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Learn more about our team and coordination process</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">What Makes a Wedding Venue Perfect?</h2>
        <p>There is no universal answer to what makes a venue perfect. Your ideal venue depends on your guest list, wedding functions, location, theme, and budget.</p>
        <p>Before finalizing a venue, consider:</p>
        <p>Number of guests<br />Type of wedding functions<br />Indoor or outdoor requirements<br />Accommodation facilities<br />Parking and accessibility<br />Décor possibilities<br />Food and catering arrangements<br />Overall wedding budget</p>
        <p>Once these basics are clear, it becomes easier to choose a venue that matches your requirements.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan a Beautiful Destination Wedding</h2>
        <p>A Destination Wedding can turn your wedding celebration into a complete experience for you and your guests.</p>
        <p>From beautiful resorts to luxury hotels and private properties, destination weddings offer plenty of opportunities for multiple functions in one location.</p>
        <p>You can plan your Mehendi, Haldi, wedding ceremony, and reception around different areas of the property. With customized décor and thoughtful planning, the entire celebration can have one connected theme. Read our feature on creating memorable celebrations with <a href="#blog-destination-outdoor-weddings-setting" className="text-[#D4AF37] no-underline hover:text-white transition-colors">destination and outdoor wedding settings</a>.</p>
        <p>A destination wedding is especially suitable for couples who want their wedding to feel like a memorable getaway for their families and friends.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Experience Luxury at 5-Star Hotels</h2>
        <p>For couples looking for elegance and premium hospitality, 5-star hotels can provide a sophisticated wedding environment.</p>
        <p>Spacious banquet halls, luxurious rooms, dining facilities, professional hospitality, and multiple event spaces can make these venues suitable for large celebrations.</p>
        <p>You can also customize the décor according to your wedding theme with floral installations, elegant lighting, stage designs, and personalized elements.</p>
        <p>A luxury hotel can be an excellent setting when you want your wedding to combine comfort, style, and grand celebrations.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Keep It Comfortable With 3-Star Hotels</h2>
        <p>A memorable wedding does not always need an extravagant venue.</p>
        <p>3-star hotels can be suitable for couples who want comfortable facilities while keeping their requirements practical. These venues can work well for smaller guest lists and intimate wedding functions.</p>
        <p>With the right combination of lighting, flowers, stage décor, seating, and theme elements, a simple hotel venue can be transformed into a beautiful celebration space.</p>
        <p>The key is to focus on how the space can be customized according to your wedding vision.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Go Big With Convention Halls</h2>
        <p>If you are expecting a large number of guests, Convention Halls can provide the space required for a grand celebration.</p>
        <p>They can accommodate large seating arrangements, dining areas, stages, entertainment setups, photo zones, and other wedding requirements.</p>
        <p>The large area also gives you more flexibility when designing different sections of the venue. From a grand entrance to an impressive stage, every area can be planned according to your theme.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Add a Royal Touch With Palace Grounds</h2>
        <p>If you have always dreamed of a royal wedding, Palace Grounds can create a grand and traditional atmosphere.</p>
        <p>The architecture and open surroundings provide an impressive foundation for wedding décor. Add elegant flowers, traditional elements, chandeliers, beautiful seating, and carefully planned lighting to create a royal celebration.</p>
        <p>Palace grounds can be especially suitable for couples who want their wedding photographs and overall celebration to have a timeless feel.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Create Intimate Moments With a Bungalow Wedding</h2>
        <p>For a more private celebration, consider a Bungalow Wedding.</p>
        <p>Bungalows can provide a comfortable environment for close family and friends. They can also be decorated according to your personal preferences without making the celebration feel overly formal.</p>
        <p>A bungalow can be ideal for Haldi, Mehendi, family dinners, engagement celebrations, and other intimate functions.</p>
        <p>The smaller environment also allows you to focus on personal details that make the celebration feel truly yours.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make Memories With a Resort Wedding</h2>
        <p>A Resort Wedding brings together accommodation, celebrations, and relaxation in one place.</p>
        <p>Imagine spending time with your family before the wedding, enjoying different functions during the day, and celebrating together in the evening.</p>
        <p>Resorts often provide gardens, banquet areas, open spaces, and accommodation options, giving you multiple possibilities for planning your wedding functions.</p>
        <p>You can create different themes for different events while maintaining a consistent overall wedding style.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Celebrate Outdoors With Garden and Water Pond Weddings</h2>
        <p>Outdoor weddings have their own charm.</p>
        <p>Garden and Water Pond Weddings can provide a naturally beautiful backdrop for your special day. Green surroundings, flowers, soft lighting, elegant seating, and a beautifully designed stage can create a peaceful wedding atmosphere.</p>
        <p>Outdoor spaces also provide interesting options for photography and can make daytime and evening celebrations look completely different. Browse our <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">gallery</a> for inspiration on open-air garden and waterfront ceremonies.</p>
        <p>With proper planning and décor, nature itself can become part of your wedding design.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Choose Privacy With a Villa Wedding</h2>
        <p>If you want a more exclusive celebration, a Villa Wedding can be an attractive option.</p>
        <p>Villas provide a private environment where you can celebrate with your closest family and friends. The space can be customized according to your wedding theme and requirements.</p>
        <p>From intimate ceremonies to pre-wedding functions, a villa can provide flexibility while keeping the celebration comfortable and personal.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Décor That Brings Your Venue to Life</h2>
        <p>Selecting the venue is only one part of wedding planning. The next step is transforming that venue into a space that represents your style.</p>
        <p>At Surya Event, <strong>décor starts from ₹1.25 lakhs</strong>.</p>
        <p>Décor can include the entrance, stage, floral arrangements, lighting, seating, backdrops, table settings, and other decorative elements. Check out our <a href="#blog-wedding-decor-ideas" className="text-[#D4AF37] no-underline hover:text-white transition-colors">creative wedding décor ideas</a> to visualize themes that suit your space, and see our full range in the <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services section</a>.</p>
        <p>The same venue can look completely different depending on the décor concept. A simple space can become elegant, traditional, modern, royal, or romantic with the right design approach.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Think About Your Guests</h2>
        <p>Your wedding is not only about how the venue looks. It is also about how comfortable your guests feel.</p>
        <p>Consider whether the venue has enough seating, convenient parking, accommodation options, dining facilities, and easy accessibility.</p>
        <p>For destination or multi-day celebrations, accommodation becomes even more important. A venue that keeps important wedding activities close together can make the overall experience easier for everyone.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Let Your Wedding Reflect Your Story</h2>
        <p>Your wedding should not simply follow a trend. It should reflect your personality, your family, and the kind of celebration you have always imagined.</p>
        <p>Whether you prefer a luxury 5-star hotel, a practical 3-star hotel, a grand Convention Hall, traditional Palace Grounds, a private Bungalow Wedding, a relaxing Resort Wedding, a natural Garden or Water Pond Wedding, an exclusive Villa Wedding, or a beautiful Destination Wedding, the most important thing is that the venue feels right for your celebration.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Start Planning Your Dream Wedding</h2>
        <p>Choosing a wedding venue can seem complicated because there are so many possibilities. But once you understand your requirements, the process becomes much easier.</p>
        <p>Start by deciding your guest list and wedding style. Then consider the type of venue that fits your celebration. Once the venue is finalized, you can plan décor, seating, lighting, food, entertainment, and other arrangements around it. Structure your preparation milestones with our <a href="#blog-wedding-planning-timeline" className="text-[#D4AF37] no-underline hover:text-white transition-colors">wedding planning timeline</a>.</p>
        <p>At Surya Event, the goal is to help you turn your wedding vision into a celebration that feels personal and memorable.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Venue Sets the Stage. Your Story Makes It Special.</h2>
        <p>The perfect wedding is not simply about choosing the biggest or most expensive venue. It is about choosing a place where your family can celebrate, your guests can feel comfortable, and your special moments can become lasting memories.</p>
        <p>From intimate gatherings to grand celebrations, every wedding deserves thoughtful planning and beautiful execution.</p>
        <p>Your wedding. Your vision. Your story.</p>
        <p>Let Surya Event help you create a celebration that feels uniquely yours.</p>
        <p><a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Know More About Surya Event</a></p>
        <p>Ready to discuss your wedding plans?</p>
        <p><a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact Surya Event</a> and start planning your special day.</p>
      </article>
    ),
    category: "Wedding Trends",
    date: "September 25, 2026",
    readTime: "5 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 173,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Stunning outdoor wedding venue setup"
  },
  {
    id: "dream-wedding-starts-with-right-venue",
    title: "Your Dream Wedding Starts with the Right Venue",
    excerpt: "Every celebration becomes more special when the venue, décor, and arrangements are planned carefully.",
    fullContent: (
      <article className="space-y-4">
        <p>A wedding is more than just a function. It is a collection of beautiful moments, family memories, celebrations, and emotions that stay with you for years to come.</p>
        <p>From the first family gathering to the final wedding ceremony, every celebration becomes more special when the venue, décor, and arrangements are planned carefully. Today, couples have countless options when choosing a wedding venue — from luxury hotels and beautiful resorts to royal palace grounds, private villas, gardens, and elegant convention halls.</p>
        <p>At Surya Event, we believe that every wedding should have its own unique style and personality. Our approach focuses on helping couples create celebrations that reflect their vision, preferences, and special story. <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Know more about Surya Event</a> and discover how we approach wedding planning and event décor.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Start With the Right Venue</h2>
        <p>The venue is one of the first and most important decisions when planning a wedding.</p>
        <p>Some couples dream of a beautiful Destination Wedding, while others prefer a convenient city venue. Some want a grand celebration with hundreds of guests, while others prefer an intimate wedding surrounded by their closest family and friends.</p>
        <p>There is no single perfect venue for every wedding. The right choice depends on your wedding style, guest list, functions, location, and budget. For step-by-step tips on narrowing down locations, explore <a href="#blog-choose-perfect-wedding-venue" className="text-[#D4AF37] no-underline hover:text-white transition-colors">how to choose the perfect wedding venue</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Luxury Wedding at 5-Star Hotels</h2>
        <p>If you are looking for a grand and luxurious celebration, 5-star hotels can provide an elegant setting for your special day.</p>
        <p>These venues often offer premium hospitality, comfortable accommodation, spacious event areas, dining facilities, and professional event support. Multiple wedding functions can also be planned at the same location, making the experience convenient for both the family and guests.</p>
        <p>With thoughtful décor, lighting, floral arrangements, and stage design, a luxury hotel can be transformed according to your wedding theme.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Comfortable Celebrations at 3-Star Hotels</h2>
        <p>A beautiful wedding does not always require the most expensive venue.</p>
        <p>3-star hotels can be a practical option for couples looking for comfortable facilities while keeping their wedding requirements simple and organized. With creative décor and proper planning, even a modest hotel space can be transformed into an attractive celebration venue.</p>
        <p>The focus should always be on creating a comfortable experience for your guests while maintaining the look and feel you want for your wedding.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Make It Grand at Convention Halls and Palace Grounds</h2>
        <p>For weddings with a large guest list, Convention Halls can provide the space required for seating, dining, stage setups, entertainment, and other wedding arrangements.</p>
        <p>If you want your celebration to have a traditional and royal atmosphere, Palace Grounds can create an impressive setting. Elegant lighting, floral decorations, traditional elements, furniture, and customized stage décor can bring the entire venue together. View our <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">photo gallery</a> to see grand hall and heritage transformations.</p>
        <p>The right décor can help turn a large space into a wedding environment that feels personal and memorable.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">A More Personal Bungalow Wedding</h2>
        <p>Not every wedding needs a huge venue.</p>
        <p>A Bungalow Wedding can be an excellent option for couples who want a private and comfortable celebration. The space can be decorated according to your personal taste and wedding theme.</p>
        <p>Bungalows can work particularly well for intimate functions such as Haldi, Mehendi, family gatherings, and pre-wedding celebrations. The private environment can also create a relaxed atmosphere where families can enjoy the occasion together.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Enjoy a Beautiful Resort Wedding</h2>
        <p>Imagine waking up with your family, getting ready together, enjoying your wedding functions, and ending the day surrounded by music, food, and celebrations.</p>
        <p>That is what makes a Resort Wedding special.</p>
        <p>Resorts often combine accommodation, open spaces, gardens, and event areas, making them suitable for couples who want their wedding celebration and stay to be part of the same experience.</p>
        <p>From daytime ceremonies to evening receptions, a resort can offer different spaces for different functions while keeping the overall celebration connected.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Bring Nature Into Your Wedding</h2>
        <p>If you love outdoor celebrations, Garden and Water Pond Weddings can create a beautiful natural setting.</p>
        <p>Flowers, soft lighting, elegant seating, a customized stage, and natural surroundings can create a peaceful and romantic atmosphere. Outdoor venues can also provide a fresh backdrop for wedding photography.</p>
        <p>With the right planning, even a naturally beautiful location can be enhanced without losing its original charm.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Celebrate Your Wedding at a Private Villa</h2>
        <p>For couples planning a smaller and more private celebration, a Villa Wedding can offer both privacy and comfort.</p>
        <p>A villa can be designed around your wedding theme, whether you prefer a traditional setup, modern décor, or a simple family celebration. Villas can also work well for pre-wedding functions and intimate gatherings.</p>
        <p>The smaller setting gives you more flexibility to personalize the décor, seating, lighting, and overall experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Beautiful Décor Starting From ₹1.25 Lakhs</h2>
        <p>Once your venue has been selected, décor becomes one of the most exciting parts of wedding planning.</p>
        <p>The right décor can completely transform the appearance and atmosphere of a venue. From the entrance and stage to flowers, lighting, seating, backdrops, and decorative elements, every detail contributes to the overall wedding experience.</p>
        <p>At Surya Event, <strong>décor starts from ₹1.25 lakhs</strong>, giving couples an opportunity to plan a beautiful wedding setup according to their requirements and preferences. Find out how to allocate funds effectively in our advice on <a href="#blog-beautiful-wedding-within-budget" className="text-[#D4AF37] no-underline hover:text-white transition-colors">planning a wedding within budget</a>, or check our <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services page</a> for full offerings.</p>
        <p>Whether you are planning a grand celebration or an intimate function, décor can be customized around your wedding theme, venue, and overall vision.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan Your Wedding Around Your Style</h2>
        <p>Choosing a venue is only the beginning. You also need to think about the number of guests, wedding functions, accommodation, food, décor, photography areas, entertainment, and the overall flow of the celebration.</p>
        <p>A well-planned wedding brings all these elements together.</p>
        <p>Instead of choosing a venue simply because it looks attractive, consider whether it suits your guest list, functions, budget, and wedding style. Learn how our team shapes every event around your personal taste in <a href="#blog-why-choose-surya-event" className="text-[#D4AF37] no-underline hover:text-white transition-colors">why choose Surya Event</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your First Step Towards a Memorable Wedding</h2>
        <p>Planning a wedding can feel overwhelming, especially when there are so many choices available.</p>
        <p>You do not have to plan everything at once. Start with the basics — decide your wedding style, understand your guest requirements, shortlist the venue, and then plan décor and other arrangements around it.</p>
        <p>Whether your dream is a Destination Wedding, a luxury celebration at a 5-star hotel, a comfortable 3-star hotel wedding, a grand Convention Hall, a royal Palace Grounds celebration, a private Bungalow Wedding, a relaxing Resort Wedding, a beautiful Garden or Water Pond Wedding, or an intimate Villa Wedding, thoughtful planning can help bring your vision to life.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Your Wedding. Your Style. Your Story.</h2>
        <p>Your wedding day should feel personal. It should reflect you, your family, your preferences, and your story.</p>
        <p>With the right venue, creative décor, and proper planning, even an ordinary space can become the perfect place to celebrate an extraordinary day.</p>
        <p>At Surya Event, the journey starts with understanding what you want for your special day and creating an event experience around that vision.</p>
        <p>Ready to start planning your wedding?</p>
        <p><a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">Contact Surya Event</a> to discuss your wedding requirements, venue ideas, décor preferences, and celebration plans.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Let your wedding journey begin with Surya Event.</p>
      </article>
    ),
    category: "Wedding Trends",
    date: "September 24, 2026",
    readTime: "5 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1736155983506-c6e9da195f43?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 196,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Luxury wedding venue with premium decorations"
  },
  {
    id: "best-wedding-venues-dream-wedding",
    title: "Best Wedding Venues and Ideas for Your Dream Wedding",
    excerpt: "From luxury hotels and royal palaces to intimate garden settings, discover the perfect venue and décor ideas for your special day.",
    fullContent: (
      <article className="space-y-4">
        <p>Your wedding day is one of the most special days of your life. From choosing the right venue to planning the décor, every little detail matters. The venue sets the mood for the entire celebration, so choosing the right place is an important decision.</p>
        <p>Today, couples have many options when it comes to wedding venues. You can choose a luxury hotel, a beautiful resort, a palace, a garden, a villa, or even a private bungalow. With the right planning and décor, any place can be turned into a beautiful wedding venue.</p>
        <p>If you are looking for an experienced team to help plan and manage your wedding, you can learn more about <strong>Surya Event and its event planning services</strong> through our <a href="#about" className="text-[#D4AF37] no-underline hover:text-white transition-colors">About Us</a> page.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Destination Wedding – Celebrate Your Special Day in Style</h2>
        <p>A <strong>Destination Wedding</strong> is a great choice for couples who want something different from a traditional wedding. You can invite your family and close friends to a beautiful location and enjoy the wedding celebrations together.</p>
        <p>Destination weddings can be planned at resorts, hotels, villas, palaces, or other beautiful locations. The location, décor, food, entertainment, and guest experience can all be planned according to your wedding theme. For detailed styling tips for open settings and villas, read our guide on <a href="#blog-destination-outdoor-weddings-setting" className="text-[#D4AF37] no-underline hover:text-white transition-colors">destination and outdoor weddings</a>.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Wedding at 5-Star Hotels</h2>
        <p>For couples looking for a luxury wedding experience, <strong>5-star hotels</strong> are a popular choice. These venues offer comfortable rooms, beautiful banquet spaces, professional services, and excellent hospitality.</p>
        <p>A 5-star hotel can be a good option when you want your guests to stay at the same place where the wedding functions are happening. From engagement and mehendi to sangeet and the main wedding ceremony, multiple functions can be planned under one roof.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Wedding at 3-Star Hotels</h2>
        <p>If you are looking for a comfortable venue with a more practical budget, <strong>3-star hotels</strong> can also be considered.</p>
        <p>These hotels can offer banquet halls, accommodation, food services, and basic event facilities. With creative décor and proper planning, a simple hotel space can be transformed into an attractive wedding venue.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Convention Halls for Large Weddings</h2>
        <p>For weddings with a large number of guests, <strong>Convention Halls</strong> can be a convenient option. They provide spacious areas where you can arrange seating, dining, stage setup, entertainment, and other wedding activities.</p>
        <p>Convention halls are especially useful when you want everything to be organised at one location and need enough space for your guests.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Palace Grounds for a Royal Wedding</h2>
        <p>Want your wedding to feel grand and royal?</p>
        <p><strong>Palace Grounds</strong> can create a beautiful setting for a traditional or royal-themed wedding. Large open spaces, elegant décor, traditional elements, and beautiful lighting can give the entire celebration a royal feel.</p>
        <p>A palace-style wedding is perfect for couples who want their wedding photographs and celebrations to have a timeless look.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Bungalow Wedding – Simple and Personal</h2>
        <p>A <strong>Bungalow Wedding</strong> can be a wonderful choice for a small and private celebration. It gives you more freedom to design the space according to your personal style.</p>
        <p>You can create different areas for mehendi, haldi, dining, music, and the wedding ceremony. It can also give your guests a more comfortable and personal experience.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Resort Wedding for a Relaxed Celebration</h2>
        <p>A <strong>Resort Wedding</strong> combines the wedding celebration with a relaxing stay. It can be a great option for couples who want their guests to enjoy the wedding as well as some quality time together.</p>
        <p>Resorts usually provide open spaces, rooms, gardens, pools, and other facilities. This gives you more flexibility when planning different wedding functions.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Garden and Water Pond Weddings</h2>
        <p>Outdoor weddings are becoming a popular choice for couples who love natural surroundings.</p>
        <p><strong>Garden and water pond weddings</strong> can create a fresh and beautiful atmosphere. Floral decorations, fairy lights, candles, seating arrangements, and a beautiful stage can make the outdoor space look magical. Take a look at our <a href="#gallery" className="text-[#D4AF37] no-underline hover:text-white transition-colors">event gallery</a> to see how open lawns and waterfronts are transformed.</p>
        <p>The natural background can also add a special touch to wedding photography.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Villa Wedding – A Private Celebration</h2>
        <p>A <strong>Villa Wedding</strong> is another option for couples who want an intimate and private celebration.</p>
        <p>Villas can work well for small weddings, pre-wedding functions, family gatherings, and destination celebrations. The space can be decorated according to your theme, giving the wedding a more personal feel.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Beautiful Décor Does Not Always Mean a Huge Budget</h2>
        <p>Many people think that beautiful wedding décor requires a very high budget. However, the right planning can make a big difference.</p>
        <p>At Surya Event, <strong>decor starts from ₹1.25 lakhs</strong>, giving couples an option to plan attractive wedding décor while keeping their requirements and budget in mind. Discover creative cost-saving approaches in our guide to <a href="#blog-beautiful-wedding-within-budget" className="text-[#D4AF37] no-underline hover:text-white transition-colors">planning within budget</a>, or explore our full range of <a href="#services" className="text-[#D4AF37] no-underline hover:text-white transition-colors">services</a>.</p>
        <p>The décor can be planned according to the venue, number of guests, wedding theme, and type of function. From floral arrangements and lighting to stage décor and entry setups, every element can be planned to match the overall wedding style.</p>

        <h2 className="text-2xl font-serif text-[#D4AF37] mt-8 mb-4">Plan Your Wedding with the Right Team</h2>
        <p>Choosing the right venue is only the first step. A successful wedding also needs proper planning, creative décor, guest management, and attention to small details.</p>
        <p>Whether you are planning a <strong>Destination Wedding, 5-star hotel wedding, 3-star hotel wedding, convention hall wedding, palace wedding, bungalow wedding, resort wedding, garden wedding, water pond wedding, or villa wedding</strong>, the right event planning team can help bring your idea to life. Stay organized from start to finish with our comprehensive <a href="#blog-wedding-planning-timeline" className="text-[#D4AF37] no-underline hover:text-white transition-colors">wedding planning timeline</a>.</p>
        <p>Your wedding should feel personal, beautiful, and memorable. With the right venue, décor, and planning, you can create a celebration that you and your guests will remember for years.</p>
        <p>If you are ready to discuss your wedding requirements, venue, décor, or event planning needs, <strong><a href="#contact" className="text-[#D4AF37] no-underline hover:text-white transition-colors">contact Surya Event</a></strong> and start planning your celebration.</p>
        <p className="font-bold text-lg text-[#D4AF37] mt-6">Start planning your dream wedding with Surya Event and turn your wedding vision into a beautiful celebration.</p>
      </article>
    ),
    category: "Wedding Trends",
    date: "September 23, 2026",
    readTime: "4 min read",
    author: "Surya Team",
    image: "https://images.unsplash.com/photo-1774025108494-3e596e9b9683?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 154,
    instagramTag: "@_surya_event_management._",
    imageAlt: "Romantic wedding setting with elegant decor"
  },
  {
    id: "royal-heritage-weddings-2026",
    title: "Top South Indian Wedding Trends: Muhurtha & Stage Structures",
    excerpt: "Discover how traditional weddings in Bengaluru and across South India are blending authentic ritual spaces with modern lighting and floral arches.",
    fullContent: `South Indian wedding celebrations are evolving into beautifully detailed experiences. Couples and families seeking elegance in Bengaluru and Karnataka are creating unforgettable memories rooted in deep heritage.

Key highlights shaping current South Indian celebrations:
1. Traditional Muhurtha: Creating sacred spaces adorned with fresh marigolds, fragrant jasmine (mogra), banana trees, and handcrafted brass oil lamps.
2. Grand Reception Structures: Building illuminated 50-foot backdrops featuring crystal canopies, glass walkways, and lush orchid overlays.
3. Live Nadaswaram & Carnatic Music: Pairing classical live musical ensembles with balanced acoustics for a divine ceremony ambience.
4. Authentic Dining Experiences: Serving traditional grand feasts on fresh banana leaves with complete warm hospitality.

At Surya Event Management, our decades of hands-on experience enable us to plan, design, and manage every ceremony seamlessly.`,
    category: "Wedding Trends",
    date: "July 28, 2026",
    readTime: "5 min read",
    author: "Surya Editorial Team",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    likes: 342,
    instagramTag: "@_surya_event_management._"
  },
  {
    id: "pan-india-destination-logistics",
    title: "End-to-End Wedding Management in Bengaluru: Stress-Free Family Celebrations",
    excerpt: "How Surya Event Management manages priest scheduling, hall decor, guest hospitality, and dining logistics with complete care.",
    fullContent: `Managing a South Indian wedding requires thorough organization and warm hospitality. From the morning Muhurtha to the evening Reception, every timing must be handled carefully.

Our End-to-End Management Includes:
• Dedicated Host Coordinators for family elders and arriving guests.
• Complete venue styling including stage backdrops, entrance arches, and dining arrangements.
• Generator power backups and professional audio-visual setups for Sangeet and Reception.
• Full support for family milestone ceremonies including Engagement (Nischayathartha), Seemantha, and Namakarana.

Surya Event Management takes full responsibility so that families can stay relaxed and cherish every ritual together.`,
    category: "Behind The Scenes",
    date: "July 20, 2026",
    readTime: "4 min read",
    author: "Operations Desk",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    likes: 289,
    instagramTag: "@_surya_event_management._"
  },
  {
    id: "bespoke-floral-decor-mastery",
    title: "Fresh Floral Styling for Muhurtha & Sangeet Stages",
    excerpt: "An inside look into our floral design process—combining traditional marigolds, mogra, and lotus urlis with contemporary elegance.",
    fullContent: `Floral decoration is central to traditional South Indian celebrations. It provides a fragrant, welcoming atmosphere for every guest.

In our recent Bengaluru celebrations, thousands of fresh marigolds and jasmine garlands were crafted on custom wooden and brass structures overnight.

Key Floral Touchpoints:
• Welcoming Entrances: Banana sapling arches paired with lotus brass urlis and floating petals.
• Sacred Muhurtha Framing: Elegant draping in gold and temple red with dense marigold borders.
• Fresh Scent Experience: Sourcing fresh blooms directly from regional Karnataka growers to ensure pristine beauty.`,
    category: "Decor & Styling",
    date: "July 12, 2026",
    readTime: "3 min read",
    author: "Design Studio",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    likes: 415,
    instagramTag: "@_surya_event_management._"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>(
    BLOG_POSTS.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {})
  );
  const [userLikedMap, setUserLikedMap] = useState<Record<string, boolean>>({});

  const categories = ["All", "Wedding Trends", "Decor & Styling", "Behind The Scenes"];

  // Close on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    };

    if (selectedPost) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost]);

  const filteredPosts = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const toggleLike = (postId: string) => {
    setUserLikedMap((prev) => {
      const isLiked = prev[postId];
      setLikesMap((likes) => ({
        ...likes,
        [postId]: isLiked ? likes[postId] - 1 : likes[postId] + 1
      }));
      return { ...prev, [postId]: !isLiked };
    });
  };

  return (
    <section
      id="blog"
      className="relative z-20 bg-[#050505] py-24 md:py-32 px-6 md:px-12 border-b border-[#D4AF37]/10 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#745414]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-sans font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            INSIGHTS &amp; SOCIAL JOURNAL
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Surya Event Management <br />
            <span className="text-gold-gradient italic font-normal">Blogs &amp; Live Updates</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 max-w-xl mx-auto leading-relaxed font-light">
            Explore South Indian wedding ideas, stage design insights, and official social channels from Surya Event Management.
          </p>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Featured Reference Links Banner (Instagram, Facebook & Google Media Drive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Instagram Official Handle Box */}
          <motion.a
            href="https://www.instagram.com/_surya_event_management._?igsh=aDV5M2c2Mzd4eXNs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-gradient-to-br from-purple-950/30 via-black to-pink-950/20 border border-pink-500/30 hover:border-pink-500/60 rounded-xl flex items-center justify-between gap-4 shadow-[0_10px_30px_rgba(236,72,153,0.1)] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-pink-400 font-bold block">
                  Instagram
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-pink-200 transition-colors">
                  @_surya_event_management._
                </h3>
                <p className="text-[11px] text-[#F5F5F0]/60 font-light mt-0.5">
                  Live reels &amp; stage videos
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-full bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Facebook Official Handle Box */}
          <motion.a
            href="https://www.facebook.com/share/198yMm2gpF/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-gradient-to-br from-blue-950/30 via-black to-indigo-950/20 border border-blue-500/30 hover:border-blue-500/60 rounded-xl flex items-center justify-between gap-4 shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 p-[2px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Facebook className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-blue-400 font-bold block">
                  Facebook Page
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                  Surya Event Management
                </h3>
                <p className="text-[11px] text-[#F5F5F0]/60 font-light mt-0.5">
                  Photo albums &amp; updates
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Google Share Assets Drive Box */}
          <motion.a
            href="https://share.google/XzoqUIxxXwynxX8Fn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-gradient-to-br from-[#D4AF37]/10 via-black to-[#745414]/20 border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 rounded-xl flex items-center justify-between gap-4 shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-[#745414] p-[2px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <FolderOpen className="w-6 h-6" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-bold block">
                  Media Drive
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  Google Drive Gallery
                </h3>
                <p className="text-[11px] text-[#F5F5F0]/60 font-light mt-0.5">
                  High-res photo portfolio
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeCategory === cat
                ? "bg-[#D4AF37] text-black font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                : "bg-white/5 border border-white/10 text-[#F5F5F0]/70 hover:text-white hover:border-[#D4AF37]/40"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Blog Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 border border-[#D4AF37]/40 rounded-full text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] backdrop-blur-md font-bold">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>

                  {/* Read Time & Likes */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-white/80 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-[#F5F5F0]/50 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-[#F5F5F0]/70 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-8 pb-8 pt-2 flex items-center justify-between border-t border-[#D4AF37]/10 mt-4">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-xs font-sans px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${userLikedMap[post.id]
                      ? "bg-rose-500/20 border-rose-500/60 text-rose-400"
                      : "bg-white/5 border-white/10 text-white/70 hover:text-rose-400 hover:border-rose-500/30"
                      }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${userLikedMap[post.id] ? "fill-rose-400" : ""}`} />
                    <span>{likesMap[post.id]}</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.6 }}
              onDragEnd={(_e, info) => {
                if (info.offset.y > 75 || info.velocity.y > 400) {
                  setSelectedPost(null);
                }
              }}
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-t-3xl sm:rounded-2xl max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header with Swipe Bar and Exit Options */}
              <div className="sticky top-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#D4AF37]/30 px-4 py-3 flex items-center justify-between shadow-lg">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-sans uppercase font-bold tracking-wider cursor-pointer transition-all active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                {/* Mobile Drag / Swipe Pill */}
                <div className="flex flex-col items-center cursor-grab active:cursor-grabbing">
                  <div className="w-12 h-1.5 bg-[#D4AF37]/60 hover:bg-[#D4AF37] rounded-full mb-0.5" />
                  <span className="text-[9px] uppercase tracking-widest text-[#F5F5F0]/50 font-sans hidden xs:inline">
                    Swipe down to close
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37] hover:brightness-110 text-black text-xs font-sans uppercase font-bold tracking-wider cursor-pointer transition-all shadow-md active:scale-95"
                  title="Close (Esc or swipe down)"
                >
                  <span>Exit</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Modal Cover Image */}
              <div className="relative h-60 sm:h-72 md:h-96 w-full overflow-hidden flex-shrink-0">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.imageAlt || selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 border border-[#D4AF37]/50 rounded-full text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-bold">
                    {selectedPost.category}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Modal Details & Content */}
              <div className="p-5 sm:p-6 md:p-10 space-y-8 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#D4AF37]/20 text-xs font-sans text-[#F5F5F0]/60">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      {selectedPost.author}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#D4AF37]">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime}
                  </span>
                </div>

                {/* Main Article Text */}
                <div
                  className="prose prose-invert max-w-none text-sm md:text-base leading-relaxed text-[#F5F5F0]/85 font-light whitespace-pre-line"
                  onClick={(e) => {
                    const link = (e.target as HTMLElement).closest('a');
                    if (link) {
                      const href = link.getAttribute('href');
                      if (href) {
                        if (href.startsWith('#blog-')) {
                          e.preventDefault();
                          const targetBlogId = href.replace('#blog-', '');
                          const found = BLOG_POSTS.find((p) => p.id === targetBlogId);
                          if (found) {
                            setSelectedPost(found);
                            const modalScroll = link.closest('.overflow-y-auto');
                            if (modalScroll) {
                              modalScroll.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                            return;
                          }
                        } else if (href.startsWith('#')) {
                          e.preventDefault();
                          setSelectedPost(null);
                          setTimeout(() => {
                            const element = document.querySelector(href);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 300);
                        }
                      }
                    }
                  }}
                >
                  {selectedPost.fullContent}
                </div>

                {/* Social Share & Instagram / Facebook Action Card */}
                <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-950/40 via-black to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-base font-bold text-white flex items-center gap-2">
                      <Instagram className="w-5 h-5 text-pink-400" />
                      Follow Official Event Stories
                    </h4>
                    <p className="text-xs text-[#F5F5F0]/60 font-light mt-1">
                      See daily grand decor setups &amp; live video highlights on Instagram and Facebook.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <a
                      href="https://www.instagram.com/_surya_event_management._?igsh=aDV5M2c2Mzd4eXNs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none justify-center px-4 py-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-md text-xs font-sans uppercase tracking-widest font-bold hover:brightness-110 transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg"
                    >
                      Instagram
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/198yMm2gpF/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-xs font-sans uppercase tracking-widest font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg"
                    >
                      Facebook
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Bottom Exit Bar */}
                <div className="pt-4 border-t border-[#D4AF37]/20 flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/40 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back / Exit Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

