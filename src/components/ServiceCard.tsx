import Link from "next/link";
import { Icon, type IconName } from "./Icons";
import { PhotoSlot } from "./PhotoSlot";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group surface-card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-plum/40 hover:shadow-lift"
    >
      {service.image && (
        <PhotoSlot
          src={service.image}
          alt={service.imageAlt ?? service.title}
          className="-mx-7 -mt-7 mb-6 aspect-[4/3] w-[calc(100%+3.5rem)] max-w-none rounded-b-none rounded-t-4xl sm:mx-0 sm:mt-0 sm:aspect-[3/2] sm:w-full sm:rounded-2xl"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      )}
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-plum-soft text-plum-deep transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-plum group-hover:text-white motion-reduce:transition-none">
        <Icon name={service.icon as IconName} className="h-7 w-7" />
      </span>

      <h3 className="mt-6 font-display text-xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
        {service.summary}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-plum-deep">
        Learn more
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
