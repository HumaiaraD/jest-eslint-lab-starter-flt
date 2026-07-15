
const {
  capitalizeWords,
  filterActiveUsers,
  logAction,
} = require("../index");

describe("capitalizeWords", () => {
  it("capitalizes the first letters", () => {
    const input = "hello world";

    const result = capitalizeWords(input);

    expect(result).toBe("Hello World");
  });

  it("returns an empty string for an empty input", () => {
    expect(capitalizeWords("")).toBe("");
  });

  it("handles special characters", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
  });

  it("capitalizes a single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });
});

describe("filterActiveUsers", () => {
  it("returns only active users from a mixed array", () => {
    const users = [
      { name: "Barbie", isActive: true },
      { name: "Kendoll", isActive: false },
      { name: "Haaland", isActive: true },
      { name: "Paris", isActive: false },
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([
      { name: "Barbie", isActive: true },
      { name: "Haaland", isActive: true },
    ]);
  });

  it("returns an empty array when all users are inactive", () => {
    const users = [
      { name: "Barbie", isActive: false },
      { name: "Kendoll", isActive: false },
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([]);
  });

  it("returns an empty array for an empty input array", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe("logAction", () => {
  it("returns the correct log message for valid inputs", () => {
    expect(logAction("login", "Barbie")).toContain("User Barbie performed login at ");
  });

  it("returns an error when the action is missing", () => {
    expect(logAction(null, "Barbie")).toBe("Invalid input");
  });

  it("returns an error when the username is missing", () => {
    expect(logAction("login", null)).toBe("Invalid input");
  });

});

