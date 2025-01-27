import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import ClientOnly from "@/app/components/ClientOnly";
import MenuItemFollow from "./MenuItemFollow";

export default function SideNavMain() {
  const pathname = usePathname();

  return (
    <>
      <div
        id="SideNavMain"
        className={`fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto ${
          pathname === "/" ? "lg:w-[310px]" : "lg:w-[220px]"
        }
      `}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href="/">
            <MenuItem
              iconString="For You"
              colorString={pathname == "/" ? "#F92C56" : ""}
              sizeString="25"
            />
          </Link>
          <MenuItem
            iconString="Following"
            colorString="#000000"
            sizeString="25"
          />
          <MenuItem iconString="LIVE" colorString="#000000" sizeString="25" />
          <div className="border-b lg:ml-2 mt-2" />
          <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
            Suggested account
          </h3>

          <div className="lg:hidden block pt-3" />
          <ClientOnly>
            <div className="cursor-pointer">
              <MenuItemFollow
                user={{
                  id: "1",
                  name: "Test user",
                  image: "https://placehold.co/50",
                }}
              />
            </div>
          </ClientOnly>
          <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
            See all
          </button>
          {true ? (
            <div>
              <div className="border-b lg:ml-2 mt-2" />
              <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Follow account
              </h3>

              <div className="lg:hidden block pt-3" />
              <ClientOnly>
                <div className="cursor-pointer">
                  <MenuItemFollow
                    user={{
                      id: "1",
                      name: "Test user",
                      image: "https://placehold.co/50",
                    }}
                  />
                </div>
              </ClientOnly>
              <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
                See more
              </button>
            </div>
          ) : null}
          <div className="lg:block hidden border-b lg:mt-2 mt-2" />

          <div className="lg:block hidden text-[11px] text-gray-500">
            <p className="pt-4 px-2">
              About Newsroom Tiktok Shop Contact Careers ByteDance
            </p>
            <p className="pt-4 px-2">
              Tiktok for Good Advertise Developer Transparency Tiktok Browse
              Tiktok Embeds
            </p>
            <p className="pt-4 px-2">
              Help Safety Terms Privacy Creator Portal Community Guidelines
            </p>
            <p className="pt-4 px-2">o 2023 Tiktok</p>
          </div>
        </div>
      </div>
    </>
  );
}
