// Itinerary + pricing data for the China executive trip landing page
window.TRIP_DATA = {
  days: [
    {
      n: 1,
      title: "Arrival — Hong Kong to Shenzhen",
      where: "HKG · Shekou · Nanshan",
      summary: "Land in Hong Kong, ferry across the bay to Shekou, and settle into our five-star base in Qianhai. We gather over dinner at Jen restaurant for introductions and a quiet walk-through of the week ahead.",
      activities: [
        { time: "Anytime", name: "Arrive Hong Kong (HKG)", note: "Airport hotel if late" },
        { time: "Morning", name: "Ferry to Shekou", note: "If arriving early" },
        { time: "Afternoon", name: "Group meet-up at Shenzhen ferry terminal" },
        { time: "Afternoon", name: "Luxury van transfer to hotel", note: "Qianhai / Seaworld / Nanshan" },
        { time: "Evening", name: "Welcome dinner at Jen" },
        { time: "Evening", name: "Itinerary briefing" }
      ]
    },
    {
      n: 2,
      title: "Inside the world's hardware capital",
      where: "Huaqiangbei · Tencent · Nanshan",
      summary: "A day inside the engines of modern Shenzhen. Walk the world's largest electronics market, visit the campuses behind WeChat and DJI's neighbors, and end the day among the cranes of Qianhai.",
      activities: [
        { time: "Morning", name: "Huaqiangbei electronics market" },
        { time: "Midday", name: "Tencent Hi-Tech Park visit" },
        { time: "Afternoon", name: "Talent Park & Meituan rental bikes" },
        { time: "Late afternoon", name: "Qianhai — world's largest bookstore" },
        { time: "Evening", name: "Free time at Seaworld" }
      ]
    },
    {
      n: 3,
      title: "The future, on a test-drive",
      where: "BYD · XPeng · AI labs",
      summary: "Behind-the-scenes access to factories and labs reshaping mobility and automation. EV production, robotic kitchens, drone logistics — and an optional flying-car demo for the curious.",
      activities: [
        { time: "Morning", name: "BYD factory tour" },
        { time: "Late morning", name: "AI chef company & automation lab" },
        { time: "Afternoon", name: "Drone delivery showcase" },
        { time: "Afternoon", name: "Xiaomi flagship & smart home walkthrough" },
        { time: "Afternoon", name: "XPeng flying car demo", optional: true },
        { time: "Evening", name: "Group dinner — Cantonese tasting" }
      ]
    },
    {
      n: 4,
      title: "Bullet train south, into the karst",
      where: "Shenzhen → Guilin",
      summary: "Check out after a morning activity, then board the high-speed rail north into Guangxi province. Arrive in Guilin by late afternoon, check into our boutique hotel, and dive into the night market for street food and local craft.",
      activities: [
        { time: "Morning", name: "Final Shenzhen activity & checkout" },
        { time: "Afternoon", name: "High-speed rail to Guilin", note: "~3.5 hours, business class" },
        { time: "Evening", name: "Check in — boutique hotel, Guilin" },
        { time: "Evening", name: "Night market & street food walk" }
      ]
    },
    {
      n: 5,
      title: "Cruise down the Li River",
      where: "Guilin → Yangshuo",
      summary: "Board a private cruise down the Li River — past the karst peaks that inspired a thousand Chinese ink paintings. Arrive in Yangshuo in the afternoon; settle into the Sugar Factory hotel.",
      activities: [
        { time: "Morning", name: "Private Li River cruise" },
        { time: "Afternoon", name: "Arrive Yangshuo · Sugar Factory hotel" },
        { time: "Evening", name: "Sunset walk along West Street", optional: true },
        { time: "Evening", name: "Impression Liu Sanjie cultural show", optional: true }
      ]
    },
    {
      n: 6,
      title: "A day in Yulong Valley",
      where: "Yangshuo",
      summary: "A slow, full day in Yangshuo's quietest valley. Bamboo rafts down the Yulong, lunch in a village teahouse, and unstructured time to bike, hike, or simply do nothing among the peaks.",
      activities: [
        { time: "Morning", name: "Bamboo raft on Yulong River" },
        { time: "Midday", name: "Village teahouse lunch" },
        { time: "Afternoon", name: "Cycling or hiking in the valley" },
        { time: "Afternoon", name: "Open time — spa, reading, photography" }
      ]
    },
    {
      n: 7,
      title: "Onward",
      where: "Yangshuo → home",
      summary: "Two routes home: a short transfer to Guilin Airport for flights onward to Beijing or beyond, or back on the high-speed rail to Hong Kong. We'll help you sequence whichever works.",
      activities: [
        { time: "Morning", name: "Farewell breakfast" },
        { time: "Departure", name: "Transfer to Guilin Airport", note: "For Beijing / international" },
        { time: "Departure", name: "High-speed rail to Hong Kong", note: "Alternative route" }
      ]
    }
  ],

  included: [
    { glyph: "✦", title: "Six nights of five-star stays", body: "Boutique properties in Qianhai, Guilin, and the Sugar Factory in Yangshuo — handpicked for character." },
    { glyph: "✦", title: "Private transfers throughout", body: "Luxury vans, business-class rail, and a chartered Li River cruise. No queues, no schedules to chase." },
    { glyph: "✦", title: "Curated factory & lab access", body: "BYD, XPeng, Tencent, and AI labs — brokered visits you cannot book yourself." },
    { glyph: "✦", title: "All breakfasts & key dinners", body: "Welcome dinner at Jen, group tastings, and a Cantonese closing dinner are included." },
    { glyph: "✦", title: "Local host on the ground", body: "A bilingual fixer travels with the group from the Shenzhen ferry to your departure." },
    { glyph: "✦", title: "Visa & logistics support", body: "We coordinate visa letters, eSIMs, and a curated reading list before you fly." }
  ],

  tiers: [
    {
      id: "explorer",
      name: "Explorer",
      tag: "Standard comfort",
      price: "5,900",
      list: [
        "Standard room at all properties",
        "Group transfers & full itinerary",
        "All included meals & tastings",
        "Standard high-speed rail seating",
        "Group activities only"
      ]
    },
    {
      id: "founder",
      name: "Founder",
      tag: "Most chosen",
      featured: true,
      price: "11,400",
      list: [
        "Private king room at all properties",
        "All Explorer inclusions",
        "Business-class rail to Guilin",
        "Optional flying-car demo included",
        "1:1 introductions to local businesses"
      ]
    },
    {
      id: "private",
      name: "Private",
      tag: "Bespoke",
      price: "19,500",
      list: [
        "Suite upgrades at every property",
        "Exclusive access to our China network.",
        "Itinerary tailored to your interests",
        "Helicopter scenic tour Guilin → Yangshuo",
        "Full-time local personal assistant"
      ]
    }
  ]
};
