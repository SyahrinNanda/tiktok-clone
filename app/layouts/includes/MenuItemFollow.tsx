import { MenuItemFollowCompTypes } from "@/app/types";
import Link from "next/link";

export default function MenuItemFollow({ user }: MenuItemFollowCompTypes) {
  return (
    <>
      <Link
        href={`profile/$(user?.id)`}
        className="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5px px-2"
      >
        <img
          className="rounded-full lg:mx-0 mx-auto"
          width="35"
          src={user?.image}
          alt=""
        />

        <div className="lg:pl-2.5 lg:block hidden">
          <div className="flex items-center">
            <p className="font-bold text-[14px] truncate">{user?.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
