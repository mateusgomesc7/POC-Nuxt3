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
    it("should compose the FullName value", async () => {
      wrapper.vm.firstName.value = "John";
      wrapper.vm.lastName.value = "Eita";

      await flushPromises();

      expect(wrapper.vm.fullName).toEqual("John Eita");
    });
    it("should set the publishedBooksMessage value when the book quantity is lower equals than 3", async () => {
      wrapper.vm.author.books = [{ title: "New Book" }];

      await flushPromises();

      expect(wrapper.vm.publishedBooksMessage).toEqual(
        "Autor precisa se esforçar mais"
      );
    });
    it("should set the publishedBooksMessage value when the book quantity is greater than 3", async () => {
      wrapper.vm.author.books = [
        { title: "New Book1" },
        { title: "New Book2" },
        { title: "New Book3" },
        { title: "New Book4" },
      ];

      await flushPromises();

      expect(wrapper.vm.publishedBooksMessage).toEqual("Autor Desenrolado");
    });
  });
  describe("Methods", () => {
    it("should add a new book to the list", async () => {
      wrapper.vm.livro.value = "New Book";
      wrapper.vm.adicionarNovoLivro();
      expect(wrapper.vm.books.value).toContainEqual({ title: "New Book" });
      expect(wrapper.vm.books.value).toHaveLength(1);
    });
    it("should select a book to author", async () => {
      wrapper.vm.livro.value = "New Book";
      wrapper.vm.adicionarNovoLivro();
      wrapper.vm.selecionarLivroParaAutor(0);
      expect(wrapper.vm.author.books).toContainEqual({ title: "New Book" });
      expect(wrapper.vm.author.books).toHaveLength(1);
    });
    it("should remove a book from the list", async () => {
      wrapper.vm.livro.value = "New Book";
      wrapper.vm.adicionarNovoLivro();
      wrapper.vm.removerLivro(0);
      expect(wrapper.vm.books.value).toHaveLength(0);
      expect(wrapper.vm.author.books).toHaveLength(0);
    });
  });
});
