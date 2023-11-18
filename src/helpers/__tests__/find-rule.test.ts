import findRule from "../find-rule";
import { Rule } from "../make-rules";

test("findRule()", () => {
  expect(findRule("https://www.youtube.com/", [])).toBe(undefined);
  expect(findRule("https://www.youtube.com/", ["something.com"])).toBe(
    undefined
  );
  expect(
    findRule("https://music.youtube.com/", [
      "youtube.com",
      "!music.youtube.com",
    ])
  ).toEqual<Rule>({
    path: "music.youtube.com",
    type: "allow",
  });

  expect(findRule("https://www.youtube.com/", ["youtube.com"])).toEqual<Rule>({
    path: "youtube.com",
    type: "block",
  });

  expect(findRule("https://www.nginx.com/", ["x.com"])).toBe(undefined);
  expect(findRule("https://x.com/", ["nginx.com"])).toBe(undefined);

  expect(findRule("https://www.youtube.com", ["youtube*"])).toEqual<Rule>({
    path: "youtube*",
    type: "block",
  });
  // block youtube homepage but not individual videos
  expect(findRule("https://www.youtube.com/watch", ["youtube.com$"])).toBe(
    undefined
  );
  expect(findRule("https://www.youtube.com", ["youtube.com/?$"])).toEqual({
    path: "youtube.com/?$",
    type: "block",
  });
});
