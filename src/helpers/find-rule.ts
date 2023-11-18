import normalizeUrl from "./normalize-url";
import makeRules, { Rule } from "./make-rules";

export default (url: string, blocked: string[]): Rule | undefined => {
  const normalizedUrl = normalizeUrl(url);
  const rules = makeRules(blocked);
  const foundRule = rules.find((rule) =>
    new RegExp("^" + rule.path).test(normalizedUrl)
  );
  return foundRule;
};
