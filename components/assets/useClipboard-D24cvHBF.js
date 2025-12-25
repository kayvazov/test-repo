import { r as ref } from './iframe-B-YMhJRM.js';

function copyToClipboard(text) {
    return new Promise((resolve, reject)=>{
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
            resolve();
        } catch (err) {
            reject(err);
        }
        document.body.removeChild(textArea);
    });
}
let isClipboardSupported = false;
if ("navigator" in window && window.navigator.clipboard) {
    isClipboardSupported = true;
}
function useClipboard(options = {}) {
    const source = options.source;
    const isCopied = ref(false);
    return {
        isCopied,
        copy: ()=>(isClipboardSupported ? navigator.clipboard.writeText(source) : copyToClipboard(source)).then(()=>{
                isCopied.value = true;
                setTimeout(()=>{
                    isCopied.value = false;
                }, options.duration || 2000);
            })
    };
}

export { useClipboard as u };
