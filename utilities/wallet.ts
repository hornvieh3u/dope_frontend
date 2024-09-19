import { toast } from "react-toastify";


declare global {
    interface Window {
        ic: any;
    }
}

export const connect = async () => {
    if (!window.ic || !window.ic.plug) {
        toast("Please install PluginWallet.", { type: "warning" });
        return;
    }

    try {
        let res = await window.ic.plug.requestConnect();
        console.log(res);
        toast("Connected Successfully.", { type: "success" });
    } catch (error) {
        toast("Connect Fail!", { type: "error" });
        console.log(error);
    }
}
