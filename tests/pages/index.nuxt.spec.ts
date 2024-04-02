import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import Index from "~/pages/index.vue";

describe("Index", () => {
  it("can mount some component", async () => {
    const component = await renderSuspended(Index);
    // expect(component.text()).toContain("welcome");
  });
});
