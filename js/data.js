/* =========================================================================
   ROTARACT CLUB OF UP BAGUIO — EDITABLE CONTENT
   -------------------------------------------------------------------------
   THIS IS THE ONLY FILE MOST PEOPLE NEED TO EDIT.
   You do NOT need to know how to code. Just change the text between the
   quotation marks "like this", keep the commas, and don't delete the
   brackets [ ] or braces { }.

   After editing, save the file and refresh the website.
   ========================================================================= */


/* -------------------------------------------------------------------------
   1) FLAGSHIP EVENTS
   -------------------------------------------------------------------------
   Add, remove, or edit the signature projects of your club.
   Each event is a block { ... } separated by a comma.

   Fields:
     tag    : short label shown on the colored banner (e.g. "Community Service")
     glyph  : a single big letter/number shown faintly behind the banner
     date   : when it happens (e.g. "October 2026" or "Annual")
     title  : the name of the project
     desc   : 1–2 sentence description
     avenue : which avenue of service it belongs to
     accent : banner color — choose "azure", "cranberry", or "gold"
   ------------------------------------------------------------------------- */
const EVENTS = [
  {
    tag: "Signature Project",
    glyph: "★",
    date: "Each Rotary Year",
    title: "Replace with your flagship project",
    desc: "Describe your club's biggest annual project here — what it is, who it helps, and why it matters. Pull the details from your Facebook page.",
    avenue: "Community Service",
    accent: "azure"
  },
  {
    tag: "End Polio",
    glyph: "P",
    date: "October (World Polio Day)",
    title: "World Polio Day Campaign",
    desc: "Awareness drives, fundraising, and advocacy in line with Rotary's global End Polio Now movement. (See the End Polio section below.)",
    avenue: "International Service",
    accent: "gold"
  },
  {
    tag: "Membership",
    glyph: "+",
    date: "Start of Term",
    title: "Recruitment & Induction",
    desc: "Welcoming new Rotaractors into the club through orientation, fellowship, and the formal induction of officers and members.",
    avenue: "Club Service",
    accent: "cranberry"
  },
  {
    tag: "Leadership",
    glyph: "L",
    date: "Year-round",
    title: "Leadership & Skills Workshops",
    desc: "Seminars, trainings, and mentorship sessions that grow members into capable, confident leaders and professionals.",
    avenue: "Professional Development",
    accent: "azure"
  },
  {
    tag: "Community Service",
    glyph: "H",
    date: "Replace with date",
    title: "Add another flagship event",
    desc: "Copy any block above (everything from the { to the }, plus the comma) to add more events. Delete blocks you don't need.",
    avenue: "Community Service",
    accent: "cranberry"
  }
];


/* -------------------------------------------------------------------------
   2) OFFICERS & DIRECTORY (by term / batch)
   -------------------------------------------------------------------------
   Each term is a block. The newest term should be FIRST in the list — it is
   shown by default.

   For each term:
     term    : the label shown in the dropdown (e.g. "2026–2027")
     theme   : the Rotary Year theme or your club tagline (optional, can be "")
     board   : the list of officers. Mark "lead: true" on the President (or
               anyone you want highlighted with the blue card).

   For each officer:
     name : full name
     role : their position
     lead : true / false  (true = highlighted card; usually just the President)

   ⚠ The names below are PLACEHOLDERS. Replace them with your real officers
     from your Facebook page or club records.
   ------------------------------------------------------------------------- */
const TERMS = [
  {
    term: "2025–2026",
    theme: "“The Magic of Rotary” — Rotary International theme",
    board: [
      { name: "Full Name", role: "President", lead: true },
      { name: "Full Name", role: "Vice President" },
      { name: "Full Name", role: "Secretary" },
      { name: "Full Name", role: "Treasurer" },
      { name: "Full Name", role: "Auditor" },
      { name: "Full Name", role: "Public Relations Officer" },
      { name: "Full Name", role: "Club Service Director" },
      { name: "Full Name", role: "Community Service Director" },
      { name: "Full Name", role: "International Service Director" },
      { name: "Full Name", role: "Professional Dev't Director" },
      { name: "Full Name", role: "Sergeant-at-Arms" },
      { name: "Full Name", role: "Project Manager" }
    ]
  },
  {
    term: "2024–2025",
    theme: "“The Magic of Rotary”",
    board: [
      { name: "Full Name", role: "President", lead: true },
      { name: "Full Name", role: "Vice President" },
      { name: "Full Name", role: "Secretary" },
      { name: "Full Name", role: "Treasurer" },
      { name: "Full Name", role: "Public Relations Officer" },
      { name: "Full Name", role: "Community Service Director" }
    ]
  }
  /* To add an older term, copy a whole block above (from { to } ) and place
     it here, separated by a comma. */
];
