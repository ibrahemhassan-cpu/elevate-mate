import { c as createComponent } from './astro-component_BQ-85irn.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CWUAK9bL.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { c as cn, $ as $$Layout } from './Layout_JFJic8Qs.mjs';

function PageHeader({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "w-full p-4 sm:px-16", children });
}

const createCrumbs = (pathname, title) => {
  const urlArray = pathname.split("/").filter((part) => part.trim() !== "").filter((part) => part !== "admin");
  const crumbs = [
    {
      label: "Home",
      value: "/"
    },
    ...urlArray.map((part, index) => {
      const url = "/" + urlArray.slice(0, index + 1).join("/");
      const isLast = title && index === urlArray.length - 1;
      return {
        label: isLast ? title : part.charAt(0).toUpperCase() + part.slice(1),
        value: url
      };
    })
  ];
  return crumbs;
};

const PageBreadCrumbs = ({ pathname, title }) => {
  const crumbs = createCrumbs(pathname, title);
  console.log(pathname, "pathname");
  console.log(crumbs, "crumbs");
  return /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-1 sm:flex", children: crumbs?.map((crumb, index) => {
    const isActive = pathname === crumb.value;
    const isHome = index === 0;
    return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1 capitalize", children: [
      !isHome && /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          height: "24px",
          viewBox: "0 -960 960 960",
          width: "24px",
          fill: "currentColor",
          children: /* @__PURE__ */ jsx("path", { d: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: crumb.value,
          className: isActive ? "font-bold  block" : "",
          children: /* @__PURE__ */ jsx("p", { children: isHome ? /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: "20px",
              viewBox: "0 -960 960 960",
              width: "20px",
              fill: "currentColor",
              children: /* @__PURE__ */ jsx("path", { d: "M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" })
            }
          ) : crumb.label })
        }
      )
    ] }, index);
  }) });
};

function PageTitle({ className, children, ...otherAttributes }) {
  return /* @__PURE__ */ jsx(
    "h1",
    {
      className: cn(
        "py-4 text-lg font-grotesk font-bold text-smoke-700 sm:text-5xl lg:text-center lg:text-6xl text-center",
        className
      ),
      ...otherAttributes,
      children
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const url = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Elevate Mate | Careers", "description": "Explore exciting career opportunities at Elevate Mate and join our passionate team of innovators and problem-solvers." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-1 flex-col items-center sm:my-8 lg:my-20"> ${renderComponent($$result2, "PageHeader", PageHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PageBreadCrumbs", PageBreadCrumbs, { "pathname": url.pathname })} ${renderComponent($$result3, "PageTitle", PageTitle, {}, { "default": ($$result4) => renderTemplate`
Join Our <span class="text-primary-100">Team</span> ` })} ` })} ${renderComponent($$result2, "ClientsDashboardIsland", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/shared/clients/Dashboard/ClientsDashboardIsland", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/DELL/Desktop/projects/elevate-mate/src/pages/careers/index.astro", void 0);

const $$file = "C:/Users/DELL/Desktop/projects/elevate-mate/src/pages/careers/index.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
