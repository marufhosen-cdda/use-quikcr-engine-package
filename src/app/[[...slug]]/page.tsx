import { QuikEngine } from "@quikcr/quik-engine";


/**
 * Optional catch-all route that delegates to the package's QuikEngine.
 *
 * The package handles the pathname internally through `usePathname()`, so
 * the host does not need to forward any props here.
 */
export default function CatchAllPage() {
  return <QuikEngine />;
}
