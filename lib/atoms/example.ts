import { atom } from "recoil";


const exampleAtom = atom<string>({
    key: 'example',
    default: ''
});