import { toast } from "react-toastify";

export function devLog(message: string) {
    toast(message);
    console.log(message);
}