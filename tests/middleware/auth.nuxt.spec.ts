import { it, expect, describe, beforeEach } from "vitest";
import type { RouteLocationNormalized } from "vue-router";
import auth, { setIsAuthenticated } from "~/middleware/auth";

describe("Middleware Auth", () => {
  beforeEach(() => {
    setIsAuthenticated(() => true);
    useNuxtApp().$router.currentRoute.value.path = "/";
  });

  it("Should redirect to login if not authenticated", async () => {
    setIsAuthenticated(() => false);

    const route: RouteLocationNormalized = {
      path: "/",
      fullPath: "/",
      name: "index",
      params: {},
      query: {},
      hash: "",
      matched: [],
      meta: {},
      redirectedFrom: undefined,
    };

    await auth(route, route);

    expect(useNuxtApp().$router.currentRoute.value.path).toBe("/login");
  });

  it("Should not redirect to login if authenticated", async () => {
    const route: RouteLocationNormalized = {
      path: "/",
      fullPath: "/",
      name: "index",
      params: {},
      query: {},
      hash: "",
      matched: [],
      meta: {},
      redirectedFrom: undefined,
    };

    await auth(route, route);

    expect(useNuxtApp().$router.currentRoute.value.path).toEqual("/");
  });
});
