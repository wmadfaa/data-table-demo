import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

interface FilterBoxProps {
  defaultOpen?: boolean;
  label: ReactNode;
  children: ReactNode;
}

function FilterBox({ defaultOpen = true, label, children }: FilterBoxProps) {
  return (
    <Disclosure as="div" className="p-6" defaultOpen={defaultOpen}>
      <DisclosureButton className="group flex w-full items-center justify-between">
        <span className="text-sm/6 font-medium text-gray-900 group-data-[hover]:text-gray-700">
          {label}
        </span>
        <ChevronDownIcon className="size-5 fill-gray-900 group-data-[hover]:fill-gray-700 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="mt-2">{children}</DisclosurePanel>
    </Disclosure>
  );
}

export default FilterBox;
