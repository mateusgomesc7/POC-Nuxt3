import { it, expect, describe, vi, beforeEach, afterEach } from "vitest";

import useFormatation from "~/composables/useFormatation";

const { daysToBirthday } = useFormatation();

describe("Composables useFormatation", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  it("should return the number of days to my birthday", () => {
    const date = new Date(2024, 1, 1);
    vi.setSystemTime(date);

    const birthday = "2024-03-25";
    const result = daysToBirthday(birthday);
    expect(result).toEqual(53);
  });
});
