import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import Index from "~/pages/index.vue";

describe("Index", () => {
  it("can mount some component", async () => {
    const wrapper = await mountSuspended(Index, {
      global: {
        directives: {
          "date-formatted": () => {},
        },
      },
    });

    expect(wrapper.text()).toContain("Welcome");
  });
});
