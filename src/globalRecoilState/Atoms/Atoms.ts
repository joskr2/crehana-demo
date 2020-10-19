import { atom, RecoilState } from "recoil";

export const searchState: RecoilState<string> = atom({
  key: "searchState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const languageState: RecoilState<string> = atom({
  key: "languageState",
  default: "Idioma",
});
export const currencyState: RecoilState<string> = atom({
  key: "currencyState",
  default: "Moneda",
});
export const regionState: RecoilState<string> = atom({
  key: "regionState",
  default: "Region",
});

export const regionListState: RecoilState<string[]> = atom({
    key: "regionListState",
    default: [""],
  });
  export const currencyListState: RecoilState<string[]> = atom({
    key: "currencyListState",
    default: [""],
  });
  export const laguageListState: RecoilState<string[]> = atom({
    key: "laguageListState",
    default: [""],
  });