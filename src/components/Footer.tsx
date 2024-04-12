import { footerLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop&#58;{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you&#46;
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 067-733-5918
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright © {new Date().getFullYear()} Apple Inc. All Rights
            Reserved&#46;
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}
                {""}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
