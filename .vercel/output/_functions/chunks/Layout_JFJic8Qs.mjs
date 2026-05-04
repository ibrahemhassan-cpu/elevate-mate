import { c as createComponent } from './astro-component_BQ-85irn.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as renderHead, o as renderSlot } from './entrypoint_CWUAK9bL.mjs';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { DropdownMenu as DropdownMenu$1 } from 'radix-ui';
import { twMerge } from 'tailwind-merge';

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col items-center gap-16 bg-smoke-200/20 py-6 sm:py-16 lg:pt-20"> <div class="flex w-full max-w-308 flex-col items-start gap-3 px-4 sm:items-center sm:px-16 lg:gap-16 lg:px-22"> <main class="grid w-full grid-cols-1 gap-10 sm:grid-flow-col sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-none"> <!-- SVG stays SAME --> <svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden h-30 w-auto lg:inline-grid"> <path d="M5.56216 91.2451H20.4861L19.7684 95.5048H9.10227L7.71531 103.78H16.7548L16.0371 108.038H7.02857L5.33863 117.666H16.3562L15.6385 121.924H0.349609L5.56216 91.2451Z" fill="#231F20"></path> <path d="M22.2901 91.2451H26.595L22.0989 117.666H32.5266L31.8089 121.924H17.0762L22.2901 91.2451Z" fill="#231F20"></path> <path d="M38.5225 91.2451H56.553L55.8353 95.5048H42.0626L40.6743 103.78H49.7151L48.9974 108.038H39.9889L38.299 117.666H49.3165L48.5988 121.924H33.3086L38.5225 91.2451Z" fill="#231F20"></path> <path d="M76.9369 91.2451H82.925L85.7474 121.924H81.2513L80.2467 104.812C80.0703 101.679 79.8643 98.6204 79.7364 95.2608H79.5775C78.3184 98.5998 77.1537 101.603 75.8138 104.812L68.6393 121.924H63.8887L76.9369 91.2451ZM71.2854 109.428H82.9722L82.2073 113.293H70.4882L71.2854 109.428Z" fill="#231F20"></path> <path d="M92.0017 95.5429H84.7949L85.5126 91.2451H104.23L103.512 95.5429H96.3067L91.8577 121.924H87.554L92.0017 95.5429Z" fill="#231F20"></path> <path d="M114.401 122H99.0938L99.7428 117.736H110.772L112.17 108.097H103.152L103.8 103.833H112.85L114.119 95.5479H103.44L104.089 91.2295H119.03L114.401 122Z" fill="#231F20"></path> <path d="M88.2515 75.9844H90.5474L91.2759 81.5674L91.5425 83.74H91.6058L92.5632 81.5674L95.15 75.9844H97.4458L95.3897 88.0822H93.3563L94.2101 83.2757C94.4255 82.0586 94.8281 80.4058 95.1473 79.2267H95.0974L93.829 82.0158L91.4079 86.9776H90.5339L89.7879 82.0158L89.4621 79.2267H89.4123C89.3193 80.4121 89.2008 82.0903 89.0042 83.2757L88.1761 88.0822H86.1953L88.2515 75.9844Z" fill="#47B649"></path> <path d="M101.868 75.9844H104.447L105.485 88.0822H103.219L102.955 81.5277C102.907 80.3376 102.853 79.2014 102.831 77.932H102.768C102.318 79.1792 101.922 80.3249 101.441 81.5277L98.8143 88.0822H96.4336L101.868 75.9844ZM99.524 83.1204H104.226L103.846 85.0395H99.1388L99.5253 83.1204H99.524Z" fill="#47B649"></path> <path d="M109.027 78.1253H106.324L106.678 75.9844H114.247L113.893 78.1253H111.189L109.514 88.0822H107.352L109.027 78.1253Z" fill="#47B649"></path> <path d="M115.904 75.9844H122L121.644 78.119H117.685L117.25 80.7449H120.609L120.253 82.8779H116.902L116.359 85.9475H120.45L120.096 88.0806H113.848L115.904 75.9844Z" fill="#47B649"></path> <mask id="mask0_610_5639" class="[mask-type:luminance]" maskUnits="userSpaceOnUse" x="38" y="91" width="42" height="31"> <path d="M79.0811 91.2295H38.8027V122H79.0811V91.2295Z" fill="white"></path> </mask> <g mask="url(#mask0_610_5639)"> <path d="M81.0265 81.2425L79.2867 80.3233L62.3806 121.922H57.2004L54.918 91.2453H59.3818L60.245 107.311C60.42 110.576 60.5937 113.942 60.6907 117.271H60.8509C62.118 113.98 63.4269 110.565 64.7263 107.311L76.2933 78.7465L74.6074 77.8607L77.2292 76.0351L79.8509 74.2031L80.438 77.726L81.0265 81.2441V81.2425Z" fill="#010101"></path> </g> <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5926 0L30.4457 35.997C33.5455 38.634 35.9733 40.2171 39.1108 41.9302L52.5926 19.8233L72.1986 51.8205C52.4418 53.0502 31.7518 42.6338 16.3283 24.3493C26.5245 52.9187 54.0119 66.72 89.8641 60.8296L52.5926 0ZM33.769 50.6335C31.5283 49.4022 28.0919 45.9316 26.1501 43.2059L15.3574 60.8312C23.4247 72.7864 35.3 80.3455 48.223 81.7955C61.1446 83.2012 73.9922 78.3234 83.7763 68.346C65.626 78.6752 43.8898 73.9717 30.035 56.7426L33.7703 50.6335H33.769Z" fill="#231F20"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4077 21.481L12.3251 35.8529L0 7.19629L25.2454 18.9755L13.4077 21.481Z" fill="#47B649"></path> </svg> <!-- Links --> <ul class="hidden flex-col gap-4 font-grotesk text-base font-medium text-smoke-700 sm:flex"> <li> <a href="https://www.elevate-mate.com/#second-hero" class="font-grotesk text-lg font-medium text-smoke-800 hover:text-smoke-300">About Us</a> </li> <li> <a href="https://www.elevate-mate.com/#who_we_are" class="font-grotesk text-lg font-medium text-smoke-800 hover:text-smoke-300">Objectives</a> </li> <li> <a href="https://www.elevate-mate.com/#services_section" class="font-grotesk text-lg font-medium text-smoke-800 hover:text-smoke-300">Services</a> </li> <li> <a href="https://www.elevate-mate.com/#core_values" class="font-grotesk text-lg font-medium text-smoke-800 hover:text-smoke-300">Values</a> </li> <li> <a href="/" class="font-grotesk text-lg font-medium text-smoke-800 hover:text-smoke-300">Careers</a> </li> </ul> <!-- Contact --> <ul class="order-2 flex flex-col gap-4 font-grotesk text-base font-medium text-smoke-700 sm:order-none"> <li class="font-grotesk text-lg font-medium text-smoke-800">Contact</li> <li> <a href="#" class="font-grotesk text-lg font-normal text-smoke-800 hover:text-smoke-300">+97450088867</a> </li> <li> <a href="#" class="font-grotesk text-lg font-normal text-smoke-800 hover:text-smoke-300">info@elevate-mate.com</a> </li> </ul> <!-- Social --> <div class="order-1 flex flex-col gap-8 sm:order-none sm:row-span-2 lg:row-auto"> <div class="flex flex-col gap-3"> <p class="font-grotesk text-lg font-medium text-smoke-800">
Follow us
</p> <ul class="flex items-center gap-2"> <li> <a href="https://www.linkedin.com/company/elevatemate-consultations-services/"><img${addAttribute("/svgs/Linkedin.svg", "src")} alt="linkedin logo"></a> </li> <li> <a href="https://www.facebook.com/people/ElevateMate-Consultations-Services/61552609104937/"><img${addAttribute("/svgs/Facebook.svg", "src")} alt="facebook logo"></a> </li> <li> <a href="https://www.instagram.com/elevatemate.q/"><img${addAttribute("/svgs/Instagram.svg", "src")} alt="instagram logo"></a> </li> <li> <a href="https://twitter.com/ElevateMateCS"><img${addAttribute("/svgs/Twitter.svg", "src")} alt="twitter logo"></a> </li> <li> <a href="https://wa.me/message/WA26F4DG6U4OD1"><img${addAttribute("/svgs/Whatsapp.svg", "src")} alt="whatsapp logo"></a> </li> </ul> <a href="/admin/careers" class="w-full block rounded-lg bg-primary-100 p-2 text-center font-grotesk text-lg font-medium text-smoke-50 hover:bg-primary-200">
Admin Dashboard
</a> </div> </div> </main> <!-- Footer bottom --> <span class="font-smoke-800 text-s font-roboto font-light sm:self-end">
&copy; ${year} ElevateMate. All rights reserved
</span> </div> </div>`;
}, "C:/Users/DELL/Desktop/projects/elevate-mate/src/components/shared/Footer/index.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenu$1.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$1.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenu$1.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenu$1.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      align,
      className: cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenu$1.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$1.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$1.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}

const NavigationDropdown = ({ navigationLinks }) => {
  const keys = Object.keys(navigationLinks);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, className: "inline-flex lg:hidden", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24px",
        viewBox: "0 -960 960 960",
        width: "24px",
        fill: "currentColor",
        children: /* @__PURE__ */ jsx("path", { d: "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" })
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        side: "bottom",
        sideOffset: 20,
        align: "center",
        className: "w-screen border-none p-9",
        children: [
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuGroup, { children: keys.map((key) => /* @__PURE__ */ jsx(
            DropdownMenuItem,
            {
              className: "p-5 pl-0 font-poppins text-lg capitalize text-[#222222]",
              children: navigationLinks[key].value === "" ? /* @__PURE__ */ jsx("button", { onClick: navigationLinks[key].onClick, children: navigationLinks[key].label }) : /* @__PURE__ */ jsx("a", { href: navigationLinks[key].value, children: navigationLinks[key].label })
            },
            key
          )) })
        ]
      }
    )
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { pathname } = Astro2.url;
  const navigationLinks = {
    aboutUs: {
      label: "About Us",
      value: "https://www.elevate-mate.com/#second-hero"
    },
    visionMission: {
      label: "Objectives",
      value: "https://www.elevate-mate.com/#who_we_are"
    },
    services: {
      label: "Services",
      value: "https://www.elevate-mate.com/#services_section"
    },
    values: {
      label: "Values",
      value: "https://www.elevate-mate.com/#core_values"
    },
    contactUs: {
      label: "Contact Us",
      value: "https://www.elevate-mate.com/#contact_us"
    },
    careers: {
      label: "Careers",
      value: "/"
    }
  };
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    if (!path.startsWith("/")) {
      return false;
    }
    return pathname.startsWith(path);
  };
  return renderTemplate`${maybeRenderHead()}<nav class="relative h-14 w-full bg-linear-to-t from-[#e6e6e61a] to-[#49494933] p-4 shadow sm:h-22 sm:px-16 sm:py-6 lg:w-308 lg:rounded-lg lg:px-18 lg:shadow-none"> <div class="flex h-full items-center justify-between gap-10 font-poppins text-lg font-normal text-smoke-900"> <a href="https://www.elevate-mate.com/" class="lg:bg-linear-to-r lg:from-smoke-50 lg:from-45% lg:via-[#c7c7c7] lg:via-85% lg:to-[#f0f0f0] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-full lg:bg-[radial-gradient(circle_at_0_0,#FFFFFF_45%,#c7c7c7_85%,#f0f0f0_100%)] lg:p-10"> <svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto sm:h-14 lg:h-16"> <path d="M5.56216 91.2451H20.4861L19.7684 95.5048H9.10227L7.71531 103.78H16.7548L16.0371 108.038H7.02857L5.33863 117.666H16.3562L15.6385 121.924H0.349609L5.56216 91.2451Z" fill="#231F20"></path> <path d="M22.2901 91.2451H26.595L22.0989 117.666H32.5266L31.8089 121.924H17.0762L22.2901 91.2451Z" fill="#231F20"></path> <path d="M38.5225 91.2451H56.553L55.8353 95.5048H42.0626L40.6743 103.78H49.7151L48.9974 108.038H39.9889L38.299 117.666H49.3165L48.5988 121.924H33.3086L38.5225 91.2451Z" fill="#231F20"></path> <path d="M76.9369 91.2451H82.925L85.7474 121.924H81.2513L80.2467 104.812C80.0703 101.679 79.8643 98.6204 79.7364 95.2608H79.5775C78.3184 98.5998 77.1537 101.603 75.8138 104.812L68.6393 121.924H63.8887L76.9369 91.2451ZM71.2854 109.428H82.9722L82.2073 113.293H70.4882L71.2854 109.428Z" fill="#231F20"></path> <path d="M92.0017 95.5429H84.7949L85.5126 91.2451H104.23L103.512 95.5429H96.3067L91.8577 121.924H87.554L92.0017 95.5429Z" fill="#231F20"></path> <path d="M114.401 122H99.0938L99.7428 117.736H110.772L112.17 108.097H103.152L103.8 103.833H112.85L114.119 95.5479H103.44L104.089 91.2295H119.03L114.401 122Z" fill="#231F20"></path> <path d="M88.2515 75.9844H90.5474L91.2759 81.5674L91.5425 83.74H91.6058L92.5632 81.5674L95.15 75.9844H97.4458L95.3897 88.0822H93.3563L94.2101 83.2757C94.4255 82.0586 94.8281 80.4058 95.1473 79.2267H95.0974L93.829 82.0158L91.4079 86.9776H90.5339L89.7879 82.0158L89.4621 79.2267H89.4123C89.3193 80.4121 89.2008 82.0903 89.0042 83.2757L88.1761 88.0822H86.1953L88.2515 75.9844Z" fill="#47B649"></path> <path d="M101.868 75.9844H104.447L105.485 88.0822H103.219L102.955 81.5277C102.907 80.3376 102.853 79.2014 102.831 77.932H102.768C102.318 79.1792 101.922 80.3249 101.441 81.5277L98.8143 88.0822H96.4336L101.868 75.9844ZM99.524 83.1204H104.226L103.846 85.0395H99.1388L99.5253 83.1204H99.524Z" fill="#47B649"></path> <path d="M109.027 78.1253H106.324L106.678 75.9844H114.247L113.893 78.1253H111.189L109.514 88.0822H107.352L109.027 78.1253Z" fill="#47B649"></path> <path d="M115.904 75.9844H122L121.644 78.119H117.685L117.25 80.7449H120.609L120.253 82.8779H116.902L116.359 85.9475H120.45L120.096 88.0806H113.848L115.904 75.9844Z" fill="#47B649"></path> <mask id="mask0_610_5639" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="38" y="91" width="42" height="31"> <path d="M79.0811 91.2295H38.8027V122H79.0811V91.2295Z" fill="white"></path> </mask> <g mask="url(#mask0_610_5639)"> <path d="M81.0265 81.2425L79.2867 80.3233L62.3806 121.922H57.2004L54.918 91.2453H59.3818L60.245 107.311C60.42 110.576 60.5937 113.942 60.6907 117.271H60.8509C62.118 113.98 63.4269 110.565 64.7263 107.311L76.2933 78.7465L74.6074 77.8607L77.2292 76.0351L79.8509 74.2031L80.438 77.726L81.0265 81.2441V81.2425Z" fill="#010101"></path> </g> <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5926 0L30.4457 35.997C33.5455 38.634 35.9733 40.2171 39.1108 41.9302L52.5926 19.8233L72.1986 51.8205C52.4418 53.0502 31.7518 42.6338 16.3283 24.3493C26.5245 52.9187 54.0119 66.72 89.8641 60.8296L52.5926 0ZM33.769 50.6335C31.5283 49.4022 28.0919 45.9316 26.1501 43.2059L15.3574 60.8312C23.4247 72.7864 35.3 80.3455 48.223 81.7955C61.1446 83.2012 73.9922 78.3234 83.7763 68.346C65.626 78.6752 43.8898 73.9717 30.035 56.7426L33.7703 50.6335H33.769Z" fill="#231F20"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4077 21.481L12.3251 35.8529L0 7.19629L25.2454 18.9755L13.4077 21.481Z" fill="#47B649"></path> </svg> </a> <div class="inline-flex lg:hidden"> ${renderComponent($$result, "NavigationDropdown", NavigationDropdown, { "client:load": true, "navigationLinks": navigationLinks, "client:component-hydration": "load", "client:component-path": "@/components/shared/NavigationBar/components/NavigationDropdown", "client:component-export": "default" })} </div> <ul class="hidden items-center justify-start gap-10 lg:flex"> <li> <a href="https://www.elevate-mate.com/#second-hero"${addAttribute(isActive("https://www.elevate-mate.com/#second-hero") ? "text-primary-100" : "text-smoke-300 hover:text-primary-100", "class")}>
About Us
</a> </li> <li> <a href="https://www.elevate-mate.com/#who_we_are"${addAttribute(isActive("https://www.elevate-mate.com/#who_we_are") ? "text-primary-100" : "text-smoke-300 hover:text-primary-100", "class")}>
Objectives
</a> </li> <li> <a href="https://www.elevate-mate.com/#services_section"${addAttribute(isActive("https://www.elevate-mate.com/#services_section") ? "text-primary-100" : "text-smoke-300 hover:text-primary-100", "class")}>
Services
</a> </li> </ul> <ul class="hidden items-center justify-end gap-10 lg:flex"> <li> <a href="https://www.elevate-mate.com/#core_values" class="text-smoke-300 hover:text-primary-100">
Values
</a> </li> <li> <a href="https://www.elevate-mate.com/#contact_us" class="text-smoke-300 hover:text-primary-100">
Contact Us
</a> </li> <li> <a href="/"${addAttribute(isActive("/") ? "text-primary-100" : "text-smoke-300 hover:text-primary-100", "class")}>
Careers
</a> </li> </ul> </div> </nav>`;
}, "C:/Users/DELL/Desktop/projects/elevate-mate/src/components/shared/clients/NavigationBar/index.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Elevate Mate", description = "Elevate Mate" } = Astro2.props;
  return renderTemplate`<html lang="en" class="font-grotesk"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/images/ElevateMate-Logo.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="m-0 flex min-h-screen w-full flex-col items-center bg-smoke-100"> <main class="flex min-h-screen w-full flex-col items-center lg:mt-10"> <div class="flex w-full max-w-308 flex-1 flex-col items-center lg:mx-22"> ${renderComponent($$result, "NavigationBar", $$Index, {})} ${renderComponent($$result, "ReactRoot", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/provider/QueryClient", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> ${renderComponent($$result, "Footer", $$Index$1, {})} </main> </body></html>`;
}, "C:/Users/DELL/Desktop/projects/elevate-mate/src/layouts/Layout.astro", void 0);

export { $$Layout as $, cn as c };
