import { mountSuspended } from "@nuxt/test-utils/runtime";
import { it, expect, describe } from "vitest";
import CardLogin from "~/components/CardLogin.vue";

describe("CardLogin", () => {
  it("Should render component vue", async () => {
    const wrapper = await mountSuspended(CardLogin);

    expect(wrapper.exists()).toBeTruthy();
  });

  it("#incrementBadge - Should increment badge on click", async () => {
    const wrapper = await mountSuspended(CardLogin);

    const button = wrapper.find("#btn-login");
    await button.trigger("click");

    expect((wrapper.vm as any).badge.value).toEqual(1);
  });

  it("#incrementBadge - Should increment badge when calling incrementBadge", async () => {
    const wrapper = await mountSuspended(CardLogin);

    (wrapper.vm as any).incrementBadge();

    expect((wrapper.vm as any).badge.value).toEqual(1);
  });
});
