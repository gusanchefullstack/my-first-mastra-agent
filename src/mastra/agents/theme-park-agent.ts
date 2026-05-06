import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";

export const themeParkAgent = new Agent({
  id: "theme-park-agent",
  name: "Theme Park Agent",
  instructions: `You help someone plan a team park day
            Be practical. If an important detail is missing, ask qquestions. Don't assume.
            Keep replies under 5 sentences
    `,
  model: "anthropic/claude-sonnet-4-6",
  memory: new Memory(),
});
