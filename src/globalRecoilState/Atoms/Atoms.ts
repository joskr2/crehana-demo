import { atom, RecoilState } from "recoil";

export const searchState: RecoilState<string> = atom({
  key: "searchState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const languageState: RecoilState<string> = atom({
  key: "languageState",
  default: "",
});
export const currencyState: RecoilState<string> = atom({
  key: "currencyState",
  default: "",
});
export const regionState: RecoilState<string> = atom({
  key: "regionState",
  default: "",
});
