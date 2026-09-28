import { PORTFOLIO_DATA } from "./portfolio";

export interface CommandOutput {
  type: "text" | "link" | "list" | "table" | "custom" | "error";
  content: string | string[] | { text: string; url: string };
}

export const TERMINAL_COMMANDS: Record<string, (args: string[]) => CommandOutput> = {
  help: () => ({
    type: "list",
    content: [
      "Available Commands:",
      "  bio          - Displays Tejas Kumar's professional overview",
      "  skills       - Lists technical skills & proficiency overview",
      "  projects     - Shows featured software projects",
      "  experience   - Displays SDE internship & work experience",
      "  education    - Displays academic details (IIT Patna)",
      "  achievements - Shows DSA, Codeforces & Competitive stats",
      "  contact      - Get contact details and direct email link",
      "  resume       - Trigger resume download",
      "  github       - Displays GitHub stats & repository links",
      "  codeforces   - Displays Codeforces Specialist profile stats",
      "  clear        - Clears the terminal screen",
      "  sudo         - Execute command as administrator",
      "  echo <msg>   - Prints text back to terminal",
      "  date         - Prints current date and time",
    ],
  }),

  bio: () => ({
    type: "text",
    content: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}\n${PORTFOLIO_DATA.personal.bio}\n\nLocation: ${PORTFOLIO_DATA.personal.location}\nStatus: ${PORTFOLIO_DATA.personal.status}`,
  }),

  skills: () => ({
    type: "list",
    content: PORTFOLIO_DATA.skillCategories.flatMap((cat) => [
      `\n--- ${cat.title} ---`,
      ...cat.skills.map((s) => `  * ${s.name.padEnd(20)} [${"█".repeat(Math.round(s.level / 10))}${"░".repeat(10 - Math.round(s.level / 10))}] ${s.level}%`),
    ]),
  }),

  projects: () => ({
    type: "list",
    content: PORTFOLIO_DATA.projects.map(
      (p, i) => `${i + 1}. [${p.title}] - ${p.subtitle}\n   Category: ${p.category} | Tech: ${p.tags.slice(0, 4).join(", ")}\n   GitHub: ${p.githubUrl}`
    ),
  }),

  experience: () => ({
    type: "list",
    content: PORTFOLIO_DATA.experience.map(
      (e) => `${e.company} — ${e.role} (${e.period})\nLocation: ${e.location}\nKey Achievements:\n${e.achievements.map((a) => ` - ${a}`).join("\n")}`
    ),
  }),

  education: () => ({
    type: "list",
    content: PORTFOLIO_DATA.education.map(
      (ed) => `${ed.institution}\n${ed.degree} (${ed.period})\nGrade: ${ed.grade}\nHighlights:\n${ed.highlights.map((h) => ` - ${h}`).join("\n")}`
    ),
  }),

  achievements: () => ({
    type: "list",
    content: PORTFOLIO_DATA.achievements.map((a) => `• ${a.title}: ${a.stat} (${a.subtext})`),
  }),

  contact: () => ({
    type: "text",
    content: `Email: ${PORTFOLIO_DATA.personal.email}\nPhone: ${PORTFOLIO_DATA.personal.phone}\nGitHub: ${PORTFOLIO_DATA.personal.github}\nLinkedIn: ${PORTFOLIO_DATA.personal.linkedin}\nStatus: ${PORTFOLIO_DATA.personal.availability}`,
  }),

  resume: () => ({
    type: "link",
    content: {
      text: "Downloading Tejas Kumar's Resume...",
      url: PORTFOLIO_DATA.personal.resumeUrl,
    },
  }),

  github: () => ({
    type: "text",
    content: `GitHub Stats for @${PORTFOLIO_DATA.githubStats.username}:\nTotal Commits: ${PORTFOLIO_DATA.githubStats.totalCommits}+\nPublic Repositories: ${PORTFOLIO_DATA.githubStats.publicRepos}\nTop Languages: ${PORTFOLIO_DATA.githubStats.topLanguages.map((l) => `${l.name} (${l.percentage}%)`).join(", ")}`,
  }),

  codeforces: () => ({
    type: "text",
    content: `Codeforces Specialist\nMax Rating: 1638\n400+ Algorithmic Problems Solved across platforms (LeetCode, GFG, CodingNinjas).\nGlobal Round 30 Rank: 1151st | Round 934 Rank: 1216th\nJEE Mains 2022: 94.59 %ile (AIR 48,505)`,
  }),

  sudo: () => ({
    type: "error",
    content: "Permission denied: Tejas is already the root administrator of this universe.",
  }),

  date: () => ({
    type: "text",
    content: new Date().toUTCString(),
  }),
};
