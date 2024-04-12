import { it, expect, describe, beforeEach, vi, afterEach } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Login from "~/pages/login.vue";
import { flushPromises } from "@vue/test-utils";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

let wrapper: any;

describe("Page login", () => {
  beforeEach(async () => {
    wrapper = await mountSuspended(Login);
    fetchMocker.resetMocks();
    vi.spyOn(global.Math, "random").mockReturnValue(0.1);
  });

  afterEach(() => {
    vi.spyOn(global.Math, "random").mockRestore();
  });

  describe("Watch", () => {
    it("should exists component nuxt", async () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it("should change and loading answer when changing question", async () => {
      fetchMocker.mockResponseOnce(JSON.stringify({ answer: "yes" }));
      wrapper.vm.question.value = "test?";

      await flushPromises();

      expect(wrapper.vm.answer.value).toEqual("yes");
      expect(wrapper.vm.loading.value).toBeFalsy();
    });

    it("should change answer and loading when changing question and request failure", async () => {
      const error_message = "API failed";
      fetchMocker.mockRejectOnce(new Error(error_message));
      wrapper.vm.question.value = "test?";

      await flushPromises();

      expect(wrapper.vm.answer.value).toEqual(
        "Error! Could not reach the API. " + "Error: " + error_message
      );
      expect(wrapper.vm.loading.value).toBeFalsy();
    });

    it("should change state.value when changing state.someObject", async () => {
      wrapper.vm.state.someObject.object1 = "test";

      await flushPromises();

      expect(wrapper.vm.state.value).toEqual(10);
    });
  });
  describe("Computed", () => {
    it("Testando computed", async () => {
      wrapper.vm.firstName.value = "John";
      wrapper.vm.lastName.value = "Eita";

      await flushPromises();

      expect(wrapper.vm.fullName).toEqual("John Eita");
    });
  });
});
