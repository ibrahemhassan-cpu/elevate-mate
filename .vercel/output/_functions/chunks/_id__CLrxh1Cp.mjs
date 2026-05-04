import { c as createComponent } from './astro-component_BQ-85irn.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_CWUAK9bL.mjs';
import { $ as $$Layout } from './Layout_JFJic8Qs.mjs';

const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const url = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Career Offer`, "description": "View career opportunity details and apply." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JobOfferDetailIsland", null, { "id": id, "pathname": url.pathname, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/careers/JobOfferDetailIsland", "client:component-export": "default" })} ` })}`;
}, "C:/Users/DELL/Desktop/projects/elevate-mate/src/pages/careers/[id].astro", void 0);

const $$file = "C:/Users/DELL/Desktop/projects/elevate-mate/src/pages/careers/[id].astro";
const $$url = "/careers/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
