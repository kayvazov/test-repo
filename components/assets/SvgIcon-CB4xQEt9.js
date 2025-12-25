const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ChevronDownIcon-CrpolITG.js","./iframe-B-YMhJRM.js","./iframe-D7Itcuc8.css","./GoogleTranslateIcon-BUbjuOl8.js"])))=>i.map(i=>d[i]);
import { c as computed, f as openBlock, i as createBlock, x as resolveDynamicComponent, J as defineAsyncComponent, K as __vitePreload } from './iframe-B-YMhJRM.js';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper-uMTE3ehW.js';

const _sfc_main = {
    __name: 'SvgIcon',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup (__props) {
        const props = __props;
        const Icon = computed(()=>{
            const iconName = props.name;
            return defineAsyncComponent(()=>__variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./icons/ChevronDownIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.t),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/ChevronUpIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.s),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/CloseMarketIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.i),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/FacebookIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.j),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/GPTChatIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.q),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/GoogleTranslateIcon.vue": () => __vitePreload(() => import('./GoogleTranslateIcon-BUbjuOl8.js'),true?__vite__mapDeps([3,1,2]):void 0,import.meta.url),"./icons/InstagramIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.k),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/PostMarketIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.h),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/PreMarketIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.g),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/TechMarketIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.r),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/TelegramIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.l),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/TikTokIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.m),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/TwitterIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.n),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/WebIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.o),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url),"./icons/YouTubeIcon.vue": () => __vitePreload(() => import('./ChevronDownIcon-CrpolITG.js').then(n => n.p),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url)})), `./icons/${iconName}Icon.vue`, 3));
        });
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(resolveDynamicComponent(Icon.value));
        };
    }
};
const SvgIcon = _sfc_main;
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"SvgIcon","description":"","tags":{},"props":[{"name":"name","type":{"name":"string"},"required":true}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/svg-icon/SvgIcon.vue"]};

export { SvgIcon as S };
