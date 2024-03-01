"use client";

import clsx from "clsx";

interface IItemsSidebar {
  sectionName: string;
  data?: any[];
}

export const ListOfItems = ({ data, sectionName }: IItemsSidebar) => {
  return (
    <li>
      <div className="text-xs font-semibold leading-6 text-gray-400 my-4">
        {sectionName}
      </div>
      <ul role="list" className="-mx-2 space-y-1">
        <ul role="list" className="-mx-2 space-y-1">
          {data?.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={clsx(
                  item.current
                    ? "bg-gray-200 text-neutral-900"
                    : "text-gray-400 hover:text-white hover:bg-indigo-700",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                {item.name}
                <item.icon
                  className={clsx(
                    item.current
                      ? "text-neutral-900"
                      : "text-indigo-200 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  )}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </li>
  );
};
